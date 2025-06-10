import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import robotsTxt from "astro-robots-txt";
import { defineConfig } from "astro/config";

// https://astro.build/config
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
  experimental: {
    fonts: [
      {
        provider: "local",
        name: "CascadiaCode",
        cssVariable: "--font-cascadia-code",
        variants: [
          {
            weight: 400,
            style: "normal",
            src: ["./src/assets/fonts/cascadia-code.woff2"],
            display: "swap",
          },
        ],
      },
    ],
  },
});
