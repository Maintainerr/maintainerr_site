import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import sitemap from '@astrojs/sitemap'

import icon from 'astro-icon'

export default defineConfig({
  integrations: [icon(), sitemap()],
  site: 'https://maintainerr.info',
  // Astro 7 defaults to 'jsx', which drops the spaces between inline links
  // written across multiple lines. true keeps the Astro 5 output.
  compressHTML: true,
  vite: {
    plugins: [tailwindcss()],
  },
})
