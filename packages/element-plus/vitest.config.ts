/*
 * @Description:
 * @Author: 司马老贼
 * @Date: 2023-02-27 09:53:52
 * @LastEditTime: 2023-02-27 09:58:17
 * @LastEditors: 司马老贼
 */
import { defineConfig } from 'vitest/config'
import Vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'
export default defineConfig({
  plugins: [
    Vue(),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
})
