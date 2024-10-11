import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
// import { name} from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: name,
  resolve: {
    alias: {
      "@": path.resolve(__dirname, './src')
    }
  },
  publicDir: './public'
})
