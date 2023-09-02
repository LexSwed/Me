import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import prefetch from "@astrojs/prefetch";
import preact from "@astrojs/preact";
import { remarkShiki } from "./plugins/shiki";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://alvechy.vercel.app",
  markdown: {
    syntaxHighlight: false,
    gfm: true,
    remarkPlugins: [
      [
        remarkShiki,
        {
          theme: "material-theme-palenight",
        },
      ],
    ],
  },
  image: {
    service: {
      entrypoint: "astro/assets/services/noop",
    },
  },
  integrations: [mdx(), sitemap(), tailwind(), prefetch(), preact()],
  output: "hybrid",
  adapter: cloudflare({
    mode: "advanced",
    functionPerRoute: true,
  }),
});
