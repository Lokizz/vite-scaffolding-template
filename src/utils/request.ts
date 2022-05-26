/*
 * @Author: MacLoki
 * @Date: 2022-05-26 17:36:40
 * @LastEditors: MacLoki
 * @LastEditTime: 2022-05-26 17:51:30
 * @FilePath: /vite-scaffolding-template/vite-vue3-ts-pinia/src/utils/request.ts
 */
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios'

const service = axios.create()

// Request interceptors
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // do something
    return config
  },
  (error: any) => {
    Promise.reject(error)
  },
)

// Response interceptors
service.interceptors.response.use(
  async (response: AxiosResponse) => {
    // do something
  },
  (error: any) => {
    // do something
    return Promise.reject(error)
  },
)

export default service
