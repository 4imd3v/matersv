<script>
	import '#lib/matersv.css';
	import { onMount } from 'svelte';
	import { initTheme } from '#lib/theme.svelte.js';

	let { children } = $props();

	onMount(initTheme);
</script>

<svelte:head>
	<link rel="icon" href="/favicon.svg" />
</svelte:head>

{@render children()}
