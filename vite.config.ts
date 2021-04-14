import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { loadEnv } from './build/utils'
import { resolve } from 'path'

const viteEnv = loadEnv()
const { VITE_PORT, VITE_PUBLIC_PATH } = viteEnv

// https://vitejs.dev/config/
export default defineConfig({
  base: VITE_PUBLIC_PATH,
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@c': resolve(__dirname, 'src/components'),
    },
  },
  // 压缩
  build: {
    minify: 'esbuild',
    outDir: 'dist',
    // 服务端渲染
    ssr: false,
  },
  // 引入第三方的配置
  optimizeDeps: {
    // include: ['axios'],
  },
  server: {
    open: false,
    cors: true,
    port: VITE_PORT,
    proxy: {
      '/api': {
        target: 'http://192.168.0.8:8080/',
        changeOrigin: true,
        rewrite: (path) => path.replace('^/api', '/v1'),
      },
      '/upload': {
        target: 'http://192.168.0.8:8080/',
        changeOrigin: true,
        rewrite: (path) => path.replace('^/upload', '/upload/'),
      },
    },
  },
})
