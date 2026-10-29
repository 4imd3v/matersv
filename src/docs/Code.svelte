<script>
	let { code } = $props();
</script>

<pre><code>{code}</code></pre>

<style>
	pre {
		margin: 0;
		padding: 22px 24px;
		border-radius: 20px;
		background: var(--color-bg-soft);
		overflow-x: auto;
		font: 400 14px/1.65 ui-monospace, 'SFMono-Regular', Menlo, Consolas, monospace;
		color: var(--color-ink);
		tab-size: 2;
	}
</style>
