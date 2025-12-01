// vite.config.ts

// 1. Import 'resolve' from 'path' for correct file path handling
import { resolve } from 'path'; 
import { defineConfig } from 'vite';

export default defineConfig({
  // This sets the base directory for the build output.
  base: './', 
  
  build: {
    // 2. Specify the output directory (dist is correct)
    outDir: 'dist',
    
    // 3. This is the crucial part for multi-page applications (MPA)
    rollupOptions: {
      input: {
        // Main page in the project root
        main: resolve(__dirname, 'index.html'), 

        // Additional pages in the src/pages folder (adjust names/paths as needed)
        about: resolve(__dirname, 'src/pages/about.html'),
        contact: resolve(__dirname, 'src/pages/contact.html'),
        pricing: resolve(__dirname, 'src/pages/pricing.html'),
        services: resolve(__dirname, 'src/pages/services.html'),
        
        // Add any other HTML files in your project here:
        // example: resolve(__dirname, 'src/pages/another-page.html'),
      },
    },
  },
  
  plugins: [
    // Your existing plugins (if any) go here
  ]
});