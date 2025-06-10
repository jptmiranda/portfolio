import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import robotsTxt from "astro-robots-txt";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://jptmiranda.com/",
  output: "server",
  adapter: cloudflare(),
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
