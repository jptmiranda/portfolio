<script>
	import '@fontsource-variable/josefin-sans';
	import '@fontsource/audiowide';
	import '../app.css';
	import { Navbar } from '$lib';
	import { onNavigate } from '$app/navigation';

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<svelte:head>
	<title>João Miranda</title>
	<meta name="description" content="Digital craftsman from Portugal" />
</svelte:head>
<Navbar />
<main class="py-8">
	<slot />
</main>

<style lang="postcss">
	:global(html) {
		color: theme(colors.foreground);
		background-color: theme(colors.background);
	}

	:global(body) {
		@apply max-w-xl mx-auto px-4 font-josefin-sans hyphens-auto text-lg font-medium;
	}
</style>
