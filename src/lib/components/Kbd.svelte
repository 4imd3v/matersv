<script>
	/**
	 * @typedef {object} KbdProps
	 * @property {string} [class]
	 * @property {import('svelte').Snippet} children
	 */

	/** @type {KbdProps & Record<string, any>} */
	let { class: className = '', children } = $props();
</script>

<kbd class={className}>{@render children()}</kbd>

<style>
	kbd {
		display: inline-grid;
		place-items: center;
		min-width: 32px;
		height: 32px;
		padding-inline: 10px;
		border-radius: 10px;
		background: var(--color-field);
		color: var(--color-field-ink);
		font: 600 14px/1 var(--font-sans);
		font-variant-numeric: tabular-nums;
	}
</style>
