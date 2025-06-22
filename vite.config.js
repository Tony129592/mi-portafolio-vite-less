import { defineConfig } from 'vite'
import purgecss from 'vite-plugin-purgecss'

export default defineConfig({
  plugins: [purgecss()],
  build: {
    minify: true
  }
})
