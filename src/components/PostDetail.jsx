import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { marked } from 'marked';
import { getPostBySlug } from '../utils/markdown';

export default function PostDetail() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    setPost(getPostBySlug(slug));
  }, [slug]);


  if (!post) return (
    <div className="animate-pulse space-y-4">
      <div className="h-8 bg-gray-200 rounded w-3/4"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
      <div className="space-y-2">
        <div className="h-4 bg-gray-200 rounded"></div>
        <div className="h-4 bg-gray-200 rounded"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
      </div>
    </div>
  )

  return (
    <article className="py-12">
      <Link to="/posts" className="text-sm text-gray-500 hover:text-gray-700">
        ← Back to thoughts
      </Link>
      <div className="mt-8 space-y-6">
        <header className="space-y-4">
          <h1 className="text-4xl font-serif">{post.title}</h1>
          {post.date && (
            <time className="text-sm text-gray-500 block">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          )}
          {post.tags && (
            <div className="flex gap-2">
              {post.tags.map(tag => (
                <span key={tag} className="text-sm bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>
        
        <div 
          className="prose prose-slate dark:prose-invert max-w-none
                     prose-p:font-sans prose-p:text-gray-600
                     prose-headings:font-serif 
                     prose-h2:text-2xl prose-h2:font-serif
                     prose-h3:text-xl prose-h3:font-serif
                     prose-a:text-blue-600 prose-a:no-underline hover:prose-a:text-blue-700
                     prose-li:text-gray-600"
          dangerouslySetInnerHTML={{ 
            __html: marked(post.content.replace(/^#\s.*$/m, ''))
          }} 
        />
      </div>
    </article>
  )
} 