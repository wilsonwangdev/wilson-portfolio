import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import tailwind from "@astrojs/tailwind"
import solidJs from "@astrojs/solid-js"

// https://astro.build/config
export default defineConfig({
  site: "https://www.wilsonhandbook.online",
  integrations: [mdx(), solidJs(), tailwind({ applyBaseStyles: false })],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh"],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  vite: {
    server: {
      allowedHosts: [".tailc65cd9.ts.net"],
    },
  },
})
