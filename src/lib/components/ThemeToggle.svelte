<script>
	import IconButton from './IconButton.svelte';
	import { applyTheme, theme } from '../theme.svelte.js';

	const dark = $derived(theme.current === 'dark');
</script>

<IconButton
	label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
	pressed={dark}
	onclick={() => applyTheme(dark ? 'light' : 'dark')}
>
	{#if dark}
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true">
			<circle cx="12" cy="12" r="4" />
			<path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
		</svg>
	{:else}
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
			<path d="M21 12.8A8.5 8.5 0 1 1 11.2 3a6.5 6.5 0 0 0 9.8 9.8Z" />
		</svg>
	{/if}
</IconButton>
