import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages: change base to match your repo name (e.g. '/ELVIS-KATO/' or '/Deepseak/')
const GITHUB_PAGES_BASE = '/KATO-ELVIS/'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: GITHUB_PAGES_BASE,
  optimizeDeps: {
    include: ['three', '@react-three/fiber', '@react-three/drei'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/three')) return 'three'
          if (id.includes('@react-three')) return 'react-three'
          if (id.includes('framer-motion')) return 'motion'
          if (id.includes('react-markdown') || id.includes('remark-gfm')) return 'blog'
        },
      },
    },
  },
})
