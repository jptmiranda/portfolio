<script lang="ts">
	import Sun from 'virtual:icons/octicon/sun-16';
	import Moon from 'virtual:icons/octicon/moon-16';

	const toggleDarkMode = () => {
		const darkMode =
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);

		if (darkMode) {
			document.documentElement.classList.remove('dark');
			localStorage.setItem('theme', 'light');
			return;
		}

		document.documentElement.classList.add('dark');
		localStorage.setItem('theme', 'dark');
	};
</script>

<header>
	<nav class="py-3 flex justify-between items-center">
		<a class="font-pacifico text-2xl" href="/">João Miranda</a>

		<ul class="flex items-center gap-4">
			<li>
				<a href="/works">Works</a>
			</li>

			<li>
				<a href="/posts">Posts</a>
			</li>

			<button class="outline-none" type="button" on:click={toggleDarkMode}>
				<Sun class="text-2xl hidden dark:block hover:rotate-[30deg] duration-200" />
				<Moon class="text-2xl dark:hidden hover:rotate-[30deg] duration-200" />
			</button>
		</ul>
	</nav>
</header>
