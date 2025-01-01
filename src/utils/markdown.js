import matter from 'gray-matter';

export function getAllPosts() {
  try {
    const posts = import.meta.glob('../posts/*.md', { 
      eager: true,
      as: 'raw'
    });
    
    return Object.entries(posts).map(([filepath, content]) => {
      try {
        const slug = filepath.split('/').pop().replace('.md', '');
        
        // Parse frontmatter without using Buffer
        const frontmatterRegex = /---\n([\s\S]*?)\n---/;
        const match = content.match(frontmatterRegex);
        let metadata = {};
        
        if (match) {
          const frontmatter = match[1];
          // Parse the YAML-like frontmatter
          const pairs = frontmatter.split('\n');
          metadata = pairs.reduce((acc, pair) => {
            const [key, ...values] = pair.split(':');
            if (key && values.length) {
              let value = values.join(':').trim();
              // Handle arrays in tags
              if (key.trim() === 'tags') {
                value = value.replace(/[\[\]]/g, '').split(',').map(tag => tag.trim());
              }
              acc[key.trim()] = value;
            }
            return acc;
          }, {});
        }

        // Get content without frontmatter
        const markdown = content.replace(frontmatterRegex, '').trim();
        
        return {
          id: slug,
          slug,
          title: metadata.title || 'Untitled',
          date: metadata.date || '',
          description: metadata.description || '',
          tags: metadata.tags || [],
          excerpt: metadata.description || markdown.split('\n\n')[1]?.slice(0, 150) + '...',
          content: markdown
        };
      } catch (err) {
        console.error(`Error processing post ${filepath}:`, err);
        return null;
      }
    })
    .filter(post => post !== null)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
  } catch (err) {
    console.error('Error loading posts:', err);
    console.error('Error details:', err);
    return [];
  }
}

export function getPostBySlug(slug) {
  try {
    const posts = getAllPosts();
    return posts.find(post => post.slug === slug);
  } catch (err) {
    console.error(`Error finding post with slug ${slug}:`, err);
    return null;
  }
}