// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/SOHEE990302.github.io/",  // GitHub 레포 이름
  plugins: [react()],
})
