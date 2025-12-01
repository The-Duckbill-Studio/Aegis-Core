// vite.config.ts
// 1. MUST import 'resolve' from 'path'
import { defineConfig } from 'vite';
import { resolve } from 'path'; 

export default defineConfig({
  // Setting base to './' is often necessary for relative asset paths on Netlify
  base: './', 
  
  build: {
    outDir: 'dist',
    
    // 2. The Multi-Page Application (MPA) configuration
    rollupOptions: {
      input: {
        // Use resolve(__dirname, 'filename') for all paths
        main: resolve(__dirname, 'index.html'), 
        about: resolve(__dirname, 'src/pages/about.html'),
        contact: resolve(__dirname, 'src/pages/contact.html'),
        pricing: resolve(__dirname, 'src/pages/pricing.html'),
        services: resolve(__dirname, 'src/pages/services.html'),
        // Add any other HTML files here
      },
    },
  },
  
  plugins: [
    // Your existing plugins
  ]
});