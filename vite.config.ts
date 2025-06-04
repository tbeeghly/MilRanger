import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/MilRanger/', // This should match your GitHub repo name
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  server: {
    hmr: true,
    watch: {
      usePolling: true,
    },
  },
})
