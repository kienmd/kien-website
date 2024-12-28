import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getAllPosts } from '../utils/markdown'

export default function Thoughts() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    setPosts(getAllPosts())
  }, [])

  return (
    <div className="mt-32 space-y-8">
      {posts.map(post => (
        <article key={post.id} className="group space-y-2">
          <Link to={`/posts/${post.slug}`}>
            <time className="text-sm text-gray-500">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
            <h3 className="text-2xl font-serif group-hover:text-blue-600 transition-colors">
              {post.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">{post.excerpt}</p>
          </Link>
        </article>
      ))}
    </div>
  )
}