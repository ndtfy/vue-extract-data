import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import UnoCSS from 'unocss/vite'
import packageJson from './package.json'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [
      vue(),
      vueDevTools(),
      UnoCSS()
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      },
    },
    define: {
      'import.meta.env.PACKAGE_NAME': JSON.stringify(packageJson.name),
      'import.meta.env.PACKAGE_VERSION': JSON.stringify(packageJson.version),
      'import.meta.env.LICENSE': JSON.stringify(packageJson.license),
      'import.meta.env.HOMEPAGE': JSON.stringify(packageJson.homepage),
      'import.meta.env.AUTHOR': JSON.stringify(packageJson.author),
    },
    server: {
      host: env.VITE_HOST === 'true',
      port: Number(env.VITE_PORT)
    },
    base: env.VITE_BASE
  }
})
