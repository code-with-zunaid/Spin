import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/Spin/', // 👈 This is required for GitHub Pages deployment
  plugins: [react(), tailwindcss()],
})
