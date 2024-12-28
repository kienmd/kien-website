import { Link, useLocation } from 'react-router-dom'

export default function Navigation() {
  const location = useLocation()
  const path = location.pathname

  return (
    <nav className="flex gap-8 py-6 px-1">
      <Link 
        to="/" 
        className={`transition-colors ${
          path === '/' 
            ? 'text-primary dark:text-primary-dark border-b border-primary dark:border-primary-dark' 
            : 'text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-dark'
        }`}
      >
        About
      </Link>
      <Link 
        to="/thoughts" 
        className={`transition-colors ${
          path === '/thoughts' 
            ? 'text-primary dark:text-primary-dark border-b border-primary dark:border-primary-dark' 
            : 'text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-dark'
        }`}
      >
        Thoughts
      </Link>
      <Link 
        to="/projects" 
        className={`transition-colors ${
          path === '/projects' 
            ? 'text-primary dark:text-primary-dark border-b border-primary dark:border-primary-dark' 
            : 'text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-dark'
        }`}
      >
        Projects
      </Link>
    </nav>
  )
} 