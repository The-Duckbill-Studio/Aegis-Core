import { defineConfig } from 'vite'
import { resolve } from 'path'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // 1. Keep the Tailwind plugin
  plugins: [
    tailwindcss(),
  ],
  // 2. Keep the Multi-Page setup (CRITICAL)
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'pages/about.html'), 
        // Add other pages if you have them, e.g.:
        pricing: resolve(__dirname, 'pages/pricing.html'),
        services: resolve(__dirname, 'pages/services.html'),
      },
    },
  },
})