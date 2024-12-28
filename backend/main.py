from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
from pathlib import Path
import yaml
import json
app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

POSTS_DIR = Path("posts")
PROJECTS_DIR = Path("projects")
app.mount("/images", StaticFiles(directory="static/images"), name="images")

def parse_markdown_with_frontmatter(content: str):
    # Check if the content has frontmatter
    if content.startswith('---'):
        # Split the frontmatter and content
        _, frontmatter, content = content.split('---', 2)
        # Parse the YAML frontmatter
        metadata = yaml.safe_load(frontmatter)
        return metadata, content.strip()
    else:
        # If no frontmatter, use first line as title
        lines = content.split('\n')
        title = lines[0].replace('#', '').strip()
        return {"title": title}, content
    
@app.get("/posts")
async def get_posts():
    posts = []
    for POST_PATH in POSTS_DIR.glob("*.md"):
        content = POST_PATH.read_text()
        metadata, content = parse_markdown_with_frontmatter(content)
        
        posts.append({
            "id": len(posts) + 1,
            "slug": POST_PATH.stem,
            "title": metadata.get("title", "Untitled"),
            "date": metadata.get("date", ""),
            "description": metadata.get("description", ""),
            "tags": metadata.get("tags", []),
            "excerpt": metadata.get("description", content.split('\n\n')[1][:150] + "...")
        })

    posts.sort(key=lambda x: x["date"], reverse=True)
    return {"posts": posts}

@app.get("/posts/{slug}")
async def get_post(slug: str):
    try:
        post_path = POSTS_DIR / f"{slug}.md"
        content = post_path.read_text()
        metadata, content = parse_markdown_with_frontmatter(content)
        
        return {
            "slug": slug,
            "title": metadata.get("title", "Untitled"),
            "content": content  # Full markdown content
        }
        
    except FileNotFoundError as e:
        return {"error": "Post not found"}, 404
    
@app.get("/projects")
async def get_projects():
    projects_file = Path("data/projects.json")
    if projects_file.exists():
        with open(projects_file, "r") as f:
            return json.load(f)
    return {"projects": []}
