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
            li: {
              marginTop: '0.25em',
              marginBottom: '0.25em',
            },
          }
        },
        dark: {
          css: {
            color: '#9ca3af',
            strong: {
              color: '#fff',
            },
            'ol > li::before': {
              color: '#9ca3af',
            },
            'ul > li::before': {
              backgroundColor: '#9ca3af',
            },
            hr: {
              borderColor: '#374151',
            },
            blockquote: {
              color: '#9ca3af',
              borderLeftColor: '#374151',
            },
            h1: {
              color: '#fff',
            },
            h2: {
              color: '#fff',
            },
            h3: {
              color: '#fff',
            },
            h4: {
              color: '#fff',
            },
            'figure figcaption': {
              color: '#9ca3af',
            },
            code: {
              color: '#fff',
            },
            'a code': {
              color: '#fff',
            },
            pre: {
              color: '#9ca3af',
              backgroundColor: '#1f2937',
            },
            thead: {
              color: '#fff',
              borderBottomColor: '#374151',
            },
            'tbody tr': {
              borderBottomColor: '#374151',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 