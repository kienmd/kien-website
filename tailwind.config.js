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
            li: {
              marginTop: '0.25em',
              marginBottom: '0.25em',
            },
          }
        },
        dark: {
          css: {
            color: '#9ca3af',
            h1: {
              color: '#ffffff',
            },
            h2: {
              color: '#ffffff',
            },
            h3: {
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