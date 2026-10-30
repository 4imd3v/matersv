<script>
	/**
	 * @typedef {object} ToolbarProps
	 * @property {string} label
	 * @property {string} [class]
	 * @property {import('svelte').Snippet} children
	 */

	/** @type {ToolbarProps & Record<string, any>} */
	let { label, class: className = '', children, ...rest } = $props();
</script>

<div class="toolbar {className}" role="toolbar" aria-label={label} {...rest}>
	{@render children()}
</div>

<style>
	/* Slightly lifted off field, so a child button's field hover still reads. */
	.toolbar {
		display: inline-flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 6px;
		padding: 6px;
		border-radius: var(--radius-pill);
		background: color-mix(in oklab, var(--color-field) 70%, var(--color-bg));
	}
</style>
