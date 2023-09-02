import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import prefetch from "@astrojs/prefetch";
import preact from "@astrojs/preact";
import { remarkShiki } from "./plugins/shiki";

// https://astro.build/config
export default defineConfig({
  site: "https://alvechy.pages.dev",
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
  integrations: [mdx(), sitemap(), tailwind(), prefetch(), preact()],
  output: "static",
});
