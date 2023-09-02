<script>
	import { Navbar } from '$lib';
	import '@fontsource-variable/josefin-sans';
	import '@fontsource/pacifico/400.css';
	import '../app.css';
</script>

<Navbar />
<slot />

<style lang="postcss">
	:global(html) {
		color: theme(colors.foreground);
		background-color: theme(colors.background);
	}

	:global(body) {
		@apply max-w-xl mx-auto font-josefin-sans hyphens-auto text-lg font-medium;
	}
</style>
