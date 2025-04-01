// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    base: "/",   // ✅ 무조건 이렇게!
    plugins: [react()]
  })
  
