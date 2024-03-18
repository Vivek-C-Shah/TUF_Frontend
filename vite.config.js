// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


export default {
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: './',
    rollupOptions: {
      input: 'index.html'
    }
  }
}