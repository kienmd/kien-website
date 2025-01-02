import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext'

export default function Hero() {
  const { isDarkMode, setIsDarkMode } = useTheme()
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentContent, setCurrentContent] = useState(location.pathname);

  useEffect(() => {
    if (location.pathname !== currentContent) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentContent(location.pathname);
        setIsTransitioning(false);
      }, 600);
    }
  }, [location.pathname, currentContent]);

  const renderContent = () => {
    switch(currentContent) {
      case '/':
        return (
          <>
            <h1 className="text-6xl font-serif">Kien Hang</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm a Doctor and Engineer based in LDN/NYC. Currently building LLMs for healthcare at <a href="https://www.anterior.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 transition-colors duration-300">Anterior</a> and prev. <a href="https://www.lindushealth.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 transition-colors duration-300">Lindus Health</a>.
              I write about medicine, programming, and my personal journey 
              combining both fields.
            </p>
          </>
        );
      
      case '/posts':
        return (
          <>
            <h1 className="text-6xl font-serif">Thoughts</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              A collection of my writings on medicine, technology, and the intersection of both.
              Here, I share insights from my journey as both a doctor and then engineer,
              exploring how these fields complement and challenge each other.
            </p>
          </>
        );
      
      case '/projects':
        return (
          <>
            <h1 className="text-6xl font-serif">Projects</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Some of my work and project tinkering on the side. 
              Feel free to reach out if you'd like to collaborate.
            </p>
          </>
        );
      
      default:
        return null;
    }
  };

  return (
    <>
      <section className="h-[60vh] flex items-center justify-center mb-4 relative transition-colors duration-300 dark:bg-background-dark">
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="absolute top-4 right-4 p-2 rounded-full transition-colors duration-300
                     hover:bg-gray-100 dark:hover:bg-gray-800"
          aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {isDarkMode ? (
            <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          )}
        </button>
        <div className="space-y-8 max-w-3xl">
          <div className={`
            space-y-8 
            transition-all duration-1000 ease-in-out 
            ${isTransitioning 
              ? 'opacity-0 transform translate-y-4' 
              : 'opacity-100 transform translate-y-0'
            }
          `}>
            {renderContent()}
          </div>

          <nav className="flex gap-8">
            <Link 
              to="/" 
              className={`transition-colors duration-500 ${
                location.pathname === '/' 
                  ? 'text-gray-900 dark:text-white border-b border-gray-900 dark:border-white' 
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              About
            </Link>
            <Link 
              to="/posts" 
              className={`transition-colors duration-500 ${
                location.pathname === '/posts' 
                  ? 'text-gray-900 dark:text-white border-b border-gray-900 dark:border-white' 
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Thoughts
            </Link>
            <Link 
              to="/projects" 
              className={`transition-colors duration-500 ${
                location.pathname === '/projects' 
                  ? 'text-gray-900 dark:text-white border-b border-gray-900 dark:border-white' 
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Projects
            </Link>
          </nav>
        </div>
      </section>
      <hr className="w-1/2 mx-auto border-gray-200 dark:border-gray-700 mb-8" />
    </>
  );
} 