/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        theme: {
          light: '#f9fafb', // bg-gray-50
          dark: '#111827', // bg-gray-900
        },
        primary: {
          DEFAULT: '#1a1a1a',
          dark: '#ffffff'
        }
      },
      fontFamily: {
        serif: ['Merriweather', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#374151',
            h1: {
              color: '#1a1a1a',
            },
            h2: {
              color: '#1a1a1a',
            },
            h3: {
              color: '#1a1a1a',
            },
            blockquote: {
              color: '#374151',
              borderLeftColor: '#3b82f6',
            },
            a: {
              color: '#3b82f6',
              '&:hover': {
                color: '#2563eb',
              },
            },
            li: {
              color: '#1a1a1a',
            },
          }
        },
        invert: {
          css: {
            color: '#d1d5db',
            h1: {
              color: '#ffffff',
            },
            h2: {
              color: '#ffffff',
            },
            h3: {
              color: '#ffffff',
            },
            blockquote: {
              color: '#d1d5db',
              borderLeftColor: '#3b82f6',
            },
            a: {
              color: '#60a5fa',
              '&:hover': {
                color: '#93c5fd',
              },
            },
            li: {
              color: '#ffffff',
            },
          }
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 