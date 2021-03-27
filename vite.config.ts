import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import { createAlias } from './build/alias'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: createAlias([
      // /@/xxxx => src/xxxx
      ['/@/', 'src'],
    ]),
  },
  plugins: [vue(), WindiCSS()],
})
