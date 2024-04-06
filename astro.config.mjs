import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import compress from "astro-compress";
import icon from "astro-icon";
import robotsTxt from "astro-robots-txt";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://jptmiranda.com/",
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    icon({
      include: {
        octicon: ["sun-16", "moon-16"],
        carbon: ["email", "copy", "logo-linkedin", "logo-github"],
      },
    }),
    compress(),
    robotsTxt(),
    sitemap(),
    vue(),
  ],
});
