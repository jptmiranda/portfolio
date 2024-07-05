import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import icon from "astro-icon";
import robotsTxt from "astro-robots-txt";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://jptmiranda.com/",
  i18n: {
    locales: ["en", "pt"],
    defaultLocale: "en",
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    icon({
      include: {
        carbon: ["launch", "copy"],
        twemoji: ["flag-united-states", "flag-portugal"],
      },
    }),
    compress(),
    robotsTxt(),
    sitemap(),
    mdx({
      syntaxHighlight: "shiki",
      shikiConfig: {
        theme: "min-dark",
        transformers: [
          {
            pre(node) {
              delete node.properties.tabindex;
            },
          },
        ],
      },
    }),
  ],
});
