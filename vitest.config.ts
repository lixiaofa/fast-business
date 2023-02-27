/*
 * @Description:
 * @Author: 司马老贼
 * @Date: 2023-02-22 19:03:04
 * @LastEditTime: 2023-02-24 18:35:09
 * @LastEditors: 司马老贼
 */
import { defineConfig } from 'vitest/config'
import Vue from '@vitejs/plugin-vue'

import VueJsx from '@vitejs/plugin-vue-jsx'
import VueMacros from 'unplugin-vue-macros/vite'

export default defineConfig({
  plugins: [
    VueMacros({
      setupComponent: false,
      setupSFC: false,
      plugins: {
        vue: Vue(),
        vueJsx: VueJsx(),
      },
    }),
  ],
  optimizeDeps: {
    disabled: true,
  },
  test: {
    clearMocks: true,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    transformMode: {
      web: [/\.[jt]sx$/],
    },
  },
})
