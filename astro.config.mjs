import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import robotsTxt from "astro-robots-txt";
import { defineConfig, fontProviders } from "astro/config";

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
  vite: {
    plugins: [tailwindcss()],
  },
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
