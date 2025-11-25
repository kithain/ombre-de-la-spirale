import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// remplace "ombre-de-la-spirale" par TON nom de repo exact
export default defineConfig({
  plugins: [react()],
  base: '/ombre-de-la-spirale/',
})
