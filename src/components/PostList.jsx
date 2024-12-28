import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllPosts } from '../utils/markdown';
import Hero from './Hero';

export default function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(getAllPosts());
  }, []);

  return (
    <>
      <Hero />
      <div className="py-24">
        <section className="space-y-12">
          <h2 className="text-4xl font-serif relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-24 after:h-1 after:bg-blue-500">
            Thoughts
          </h2>
          <div className="space-y-12">
            {posts.map(post => (
              <article key={post.id} className="group space-y-2">
                <Link to={`/posts/${post.slug}`}>
                  <time className="text-sm text-gray-500">{post.date}</time>
                  <h3 className="text-2xl font-serif group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{post.excerpt}</p>
                </Link>
              </article>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}