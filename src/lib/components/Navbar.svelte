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

			<li>
				<button
					class="align-middle outline-none text-2xl hover:rotate-[30deg] duration-200"
					type="button"
					aria-label="Theme Toggle"
					on:click={toggleDarkMode}
				>
					<Sun class=" hidden dark:block " />
					<Moon class="dark:hidden" />
				</button>
			</li>
		</ul>
	</nav>
</header>
