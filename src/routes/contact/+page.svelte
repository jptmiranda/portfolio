<script lang="ts">
	import Email from 'virtual:icons/carbon/email';
	import Copy from 'virtual:icons/carbon/copy';
	import LinkedIn from 'virtual:icons/carbon/logo-linkedin';
	import Github from 'virtual:icons/carbon/logo-github';

	const copy = (text: string) => navigator.clipboard.writeText(text);
</script>

<h1 class="font-pacifico text-4xl underline decoration-accent dark:decoration-accent-dark">
	Contact
</h1>

<div class="mt-8 flex items-center gap-x-4">
	<a class="flex items-center gap-x-2" href="mailto:joao.t.m@proton.me">
		<Email aria-label="Email Icon" /> joao.t.m@proton.me
	</a>

	<button type="button" on:click={() => copy('joao.t.m@proton.me')} aria-label="Copy Email">
		<Copy />
	</button>
</div>

<ul class="mt-2 flex gap-x-2 text-2xl">
	<li class="flex items-center gap-x-4">
		<a
			class="flex items-center gap-x-2"
			href="https://www.linkedin.com/in/mirandagonebald"
			target="_blank"
		>
			<LinkedIn class="-ml-0.5" aria-label="LinkedIn Icon" />
		</a>
	</li>

	<li class="flex items-center gap-x-4">
		<a class="flex items-center gap-x-2" href="https://github.com/mirandagonebald" target="_blank">
			<Github aria-label="Github Icon" />
		</a>
	</li>
</ul>
