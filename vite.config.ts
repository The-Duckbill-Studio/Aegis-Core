// vite.config.ts
import { defineConfig } from 'vite'

export default defineConfig({
  // ADD THIS LINE to tell Vite to look for source files in the current directory
  root: './', 
  plugins: [/* Your existing plugins */],
  build: {
    // You may need to add this line to ensure the output directory is 'dist'
    outDir: 'dist',
  }
})