import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'

import icon from 'astro-icon'

export default defineConfig({
  integrations: [tailwind(), icon(), sitemap()],
  site: 'https://maintainerr.info',
})
