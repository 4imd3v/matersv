<script>
	/**
	 * @typedef {object} SidenoteProps
	 * @property {string} [class]
	 * @property {import('svelte').Snippet} children
	 */

	/** @type {SidenoteProps & Record<string, any>} */
	let { class: className = '', children, ...rest } = $props();
</script>

<aside class="sidenote {className}" {...rest}>
	{@render children()}
</aside>

<style>
	/* Hangs in the margin on wide screens and falls back into the flow below 760px. */
	.sidenote {
		float: inline-end;
		width: min(220px, 38%);
		margin: 4px 0 16px 24px;
		color: var(--color-muted);
		font-size: 14px;
		line-height: 1.45;
		text-wrap: pretty;
	}

	@media (max-width: 760px) {
		.sidenote {
			float: none;
			width: auto;
			margin: 16px 0;
		}
	}
</style>
