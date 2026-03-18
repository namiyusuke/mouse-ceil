import { defineConfig } from 'vite'
import glsl from 'vite-plugin-glsl'
import path from 'path'

export default defineConfig({
  base: './',
  plugins: [glsl()],
  resolve: {
    alias: {
      Root: path.resolve(__dirname, 'src/js/'),
      Util: path.resolve(__dirname, 'src/js/_utils/'),
    },
  },
})
