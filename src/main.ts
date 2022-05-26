/*
 * @Author: MacLoki
 * @Date: 2022-05-24 20:14:16
 * @LastEditors: MacLoki
 * @LastEditTime: 2022-05-24 22:08:57
 * @FilePath: /vite-scaffolding-template/vite-vue3-ts-pinia/src/main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from '@/router'
const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.mount('#app')
