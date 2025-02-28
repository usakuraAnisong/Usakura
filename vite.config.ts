import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base:'/Usakura/',
  plugins: [
    react({
      babel: {
        plugins:['@emotion/babel-plugin'],
      },
    }),
  ],
})
