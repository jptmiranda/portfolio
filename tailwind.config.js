const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		colors: {
			foreground: 'hsl(var(--color-foreground) / <alpha-value>)',
			background: 'hsl(var(--color-background) / <alpha-value>)',
			primary: 'hsl(var(--color-primary) / <alpha-value>)',
			secondary: 'hsl(var(--color-secondary) / <alpha-value>)',
			accent: 'hsl(var(--color-accent) / <alpha-value>)'
		},
		fontFamily: {
			nunito: ['Nunito', defaultTheme.fontFamily.serif],
			pacifico: ['Pacifico', 'cursive']
		},
		extend: {}
	},
	plugins: []
};
