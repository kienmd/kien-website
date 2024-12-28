import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { plugin as markdown } from 'vite-plugin-markdown';

export default defineConfig({
  plugins: [
    react(),
    markdown({ 
      mode: ['raw'],
      markdown: {
        breaks: true,
      }
    })
  ]
});