import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: { proxy: { '/api': 'http://127.0.0.1:8000', '/users': 'http://127.0.0.1:8000', '/recommendations': 'http://127.0.0.1:8000', '/analytics': 'http://127.0.0.1:8000', '/spotify': 'http://127.0.0.1:8000' } },
})
