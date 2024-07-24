/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import svgLoader from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [react(), svgLoader()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "src/assets/styles/mixins";
          @use "src/assets/styles/variables";
        `,
      },
    },
  },
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
})
