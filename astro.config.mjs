import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import sitemap from '@astrojs/sitemap'

import icon from 'astro-icon'

export default defineConfig({
  integrations: [icon(), sitemap()],
  site: 'https://maintainerr.info',
  vite: {
    plugins: [tailwindcss()],
  },
})
