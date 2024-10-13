import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
// import { name} from './package.json'

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd(), '');
   return {
     plugins: [react()],
     // base: name,
     resolve: {
       alias: {
         "@": path.resolve(__dirname, './src')
       }
     },
     publicDir: './public',
     define: {
       'process.env.SERVICE_ID': JSON.stringify(env.SERVICE_ID),
       'process.env.DEFAULT_EMAIL_TEMPLATE': JSON.stringify(env.DEFAULT_EMAIL_TEMPLATE),
       'process.env.PUBLIC_KEY': JSON.stringify(env.PUBLIC_KEY),
     }
   }
})
