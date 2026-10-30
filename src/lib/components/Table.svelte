<script>
	/**
	 * @typedef {object} TableProps
	 * @property {string} [caption]
	 * @property {string} [class]
	 * @property {import('svelte').Snippet} children
	 */

	/** @type {TableProps & Record<string, any>} */
	let { caption = undefined, class: className = '', children, ...rest } = $props();
</script>

<div class="table-wrap {className}" {...rest}>
	<table>
		{#if caption}
			<caption>{caption}</caption>
		{/if}
		{@render children()}
	</table>
</div>

<style>
	.table-wrap {
		width: 100%;
		overflow-x: auto;
		overscroll-behavior-x: contain;
	}

	table {
		width: 100%;
		border-collapse: collapse;
		text-align: left;
		font-variant-numeric: tabular-nums;
	}

	:global(caption) {
		padding-bottom: 12px;
		color: var(--color-muted);
		font-size: 14px;
		font-weight: 600;
		text-align: left;
	}

	:global(th),
	:global(td) {
		padding: 14px 16px;
	}

	:global(thead th) {
		color: var(--color-muted);
		font-size: 14px;
		font-weight: 600;
		white-space: nowrap;
	}

	:global(tbody th) {
		font-weight: 600;
	}

	:global(tbody tr) {
		transition: background-color var(--dur-control) ease;
	}

	:global(tbody tr:hover) {
		background: color-mix(in oklab, var(--color-field) 45%, transparent);
	}
</style>
