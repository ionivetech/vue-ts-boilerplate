import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

export default defineConfig({
  plugins: [
    vue(),

    // Config auto import components
    Components({
      dirs: ['./src/components/**', './src/layouts/**', './src/views/**'],
      extensions: ['vue'],
      dts: 'components.d.ts'
    }),

    // Config auto imports
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/ // .vue
      ],
      imports: [
        'vue',
        'vue-router',
        {
          pinia: ['defineStore', 'storeToRefs']
        }
      ],
      defaultExportByFilename: false,
      dirs: ['./src/composables/**', './src/stores/**'],
      dts: 'auto-imports.d.ts',
      eslintrc: {
        enabled: true
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
