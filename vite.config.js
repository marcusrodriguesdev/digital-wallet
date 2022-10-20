import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  mode: 'development',
  build: {
    outDir: 'public/js',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: 'src/main/index.tsx'
      }
    }
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  server: {
    port: 3000,
    fs: {
      strict: false
    }
  }
})
