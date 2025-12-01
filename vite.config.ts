// vite.config.ts
// Use "import path from 'path';" if using ES Modules, or follow the code below.

import { defineConfig } from 'vite';
import path from 'path'; // <--- Ensure you have the 'path' types installed, see below

export default defineConfig({
  base: './', 
  
  build: {
    outDir: 'dist',
    
    rollupOptions: {
      input: {
        // Use path.resolve()
        main: path.resolve(__dirname, 'index.html'), 
        about: path.resolve(__dirname, 'src/pages/about.html'),
        contact: path.resolve(__dirname, 'src/pages/contact.html'),
        pricing: path.resolve(__dirname, 'src/pages/pricing.html'),
        services: path.resolve(__dirname, 'src/pages/services.html'),
      },
    },
  },
  plugins: [
    // Your existing plugins
  ]
});