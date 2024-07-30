import db from '@astrojs/db';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import webVitals from '@astrojs/web-vitals';
import compress from 'astro-compress';
import icon from 'astro-icon';
import robotsTxt from 'astro-robots-txt';
import { defineConfig } from 'astro/config';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
    site: 'https://jptmiranda.com/',
    adapter: netlify(),
    output: 'hybrid',
    i18n: {
        locales: ['en', 'pt'],
        defaultLocale: 'en',
    },
    integrations: [
        tailwind({
            applyBaseStyles: false,
        }),
        icon({
            include: {
                carbon: ['launch', 'copy'],
                twemoji: ['flag-united-states', 'flag-portugal'],
            },
        }),
        compress(),
        robotsTxt(),
        sitemap(),
        mdx({
            syntaxHighlight: 'shiki',
            shikiConfig: {
                theme: 'min-dark',
                transformers: [
                    {
                        pre(node) {
                            delete node.properties.tabindex;
                        },
                    },
                ],
            },
        }),
        webVitals(),
        db(),
    ],
});
