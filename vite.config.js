import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Piano-cartesiano-1/',
  plugins: [react({ include: /\.(jsx|js|htlm)$/ })],
  esbuild: {
    include: /\.(jsx|js|htlm)$/,
    loader: 'jsx',
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: { '.htlm': 'jsx' },
    },
  },
})
