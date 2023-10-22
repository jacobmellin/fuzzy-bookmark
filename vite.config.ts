import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import { crx } from '@crxjs/vite-plugin'
import manifest from './manifest.json'
import solidStyled from 'vite-plugin-solid-styled'

export default defineConfig({
  plugins: [
      solid(),
      solidStyled({
        filter: {
            include: 'src/**/*.{ts,js,tsx,jsx}',
            exclude: 'node_modules/**/*.{ts,js,tsx,jsx}',
        }
      }),
      crx({ manifest })
  ],
  build: {
      rollupOptions: {
          input: {
              popup: '/src/popup/index.html',
              overlay: 'src/overlay/index.html'
          }
      }
  }
})
