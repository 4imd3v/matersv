<script>
	import '#lib/matersv.css';
	import favicon from '#lib/assets/favicon.svg';
	import { onMount } from 'svelte';
	import { initTheme } from '#lib/theme.svelte.js';

	let { children } = $props();

	onMount(initTheme);
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
