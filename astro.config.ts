import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import compress from "astro-compress";
import robotsTxt from "astro-robots-txt";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://jptmiranda.com/",
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    icon(),
    compress(),
    robotsTxt(),
    sitemap(),
  ],
});
