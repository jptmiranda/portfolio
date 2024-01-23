import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        foreground: 'hsl(var(--color-foreground) / <alpha-value>)',
        background: 'hsl(var(--color-background) / <alpha-value>)',
        primary: 'hsl(var(--color-primary) / <alpha-value>)',
        secondary: 'hsl(var(--color-secondary) / <alpha-value>)',
        accent: 'hsl(var(--color-accent) / <alpha-value>)',
      },
      fontFamily: {
        'josefin-sans': ['Josefin Sans', defaultTheme.fontFamily.sans],
        'audiowide': ['Audiowide', defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
