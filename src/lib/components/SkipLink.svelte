<script>
	/**
	 * @typedef {object} SkipLinkProps
	 * @property {string} [href]
	 * @property {string} [label]
	 * @property {string} [class]
	 */

	/** @type {SkipLinkProps & Record<string, any>} */
	let {
		href = '#main',
		label = 'Skip to content',
		class: className = '',
		...rest
	} = $props();
</script>

<a class="skip {className}" {href} {...rest}>{label}</a>

<style>
	/* Visible only while focused, so it never adds chrome to the page. */
	.skip {
		position: fixed;
		top: 12px;
		left: 12px;
		z-index: 50;
		padding: 10px 18px;
		border-radius: var(--radius-pill);
		background: var(--color-accent);
		color: var(--color-accent-ink);
		font: 600 14px/1 var(--font-sans);
		text-decoration: none;
		translate: 0 calc(-100% - 24px);
		transition: translate var(--dur-control) var(--ease-glide);
	}

	.skip:focus-visible {
		translate: 0 0;
	}
</style>
