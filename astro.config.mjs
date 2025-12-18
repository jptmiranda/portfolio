import node from "@astrojs/node";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import robotsTxt from "astro-robots-txt";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://jptmiranda.com/",
  output: "static",
  adapter: node({ mode: "standalone" }),
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  integrations: [
    icon({
      include: {
        carbon: ["launch", "copy"],
        twemoji: ["flag-united-states", "flag-portugal"],
      },
    }),
    robotsTxt(),
    sitemap(),
    (await import("@playform/compress")).default(),
  ],
});
