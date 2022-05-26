/*
 * @Author: MacLoki
 * @Date: 2022-05-24 20:14:16
 * @LastEditors: MacLoki
 * @LastEditTime: 2022-05-26 21:49:32
 * @FilePath: /vite-scaffolding-template/vite.config.ts
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// ? path
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  // ? 设置别名
  alias: {
    '@': path.resolve(__dirname, 'src'),
  },
  // ? server
  server: {
    port: 8080,
    hmr: {
      host: '127.0.0.1',
      port: 8080,
    },
    // ? 设置 https 代理
    // proxy: {
    //   '/api': {
    //     target: '',
    //     changeOrigin: true,
    //     rewrite: (path: string) => path.replace(/^\/api/, ''),
    //   },
    // },
  },
  plugins: [vue()],
})
