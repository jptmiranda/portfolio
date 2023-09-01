<script>
	import { Navbar } from '$lib';
	import '../app.postcss';
</script>

<Navbar />
<slot />

<style lang="postcss">
	:global(html) {
		color: theme(colors.foreground);
		background-color: theme(colors.background);
	}

	:global(body) {
		@apply max-w-xl mx-auto font-nunito;
	}
</style>
