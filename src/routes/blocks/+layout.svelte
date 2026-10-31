<script>
	import DocsNav from '../../docs/DocsNav.svelte';

	let { children } = $props();
</script>

<DocsNav />
{@render children()}
