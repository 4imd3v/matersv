<script>
	/**
	 * @typedef {object} AnnotationProps
	 * @property {boolean} [arrow]
	 * @property {string} [class]
	 * @property {import('svelte').Snippet} children
	 */

	/** @type {AnnotationProps & Record<string, any>} */
	let { arrow = false, class: className = '', children, ...rest } = $props();
</script>

<p class="annotation {arrow ? 'annotation--arrow' : ''} {className}" {...rest}>
	<span>{@render children()}</span>
	{#if arrow}
		<svg viewBox="0 0 70 54" aria-hidden="true">
			<path d="M6 46C22 40 36 26 54 12" />
			<path d="M43 12h11l-3 11" />
		</svg>
	{/if}
</p>

<style>
	.annotation {
		position: relative;
		max-width: 24ch;
		rotate: -4deg;
		font-family: var(--font-hand);
		font-size: clamp(24px, 2.4vw, 34px);
		font-weight: 600;
		line-height: 1;
		text-wrap: balance;
	}

	/* The arrow sits outside the text box, so reserve room below it. */
	.annotation--arrow {
		padding-bottom: 56px;
	}

	/* Points up at the left edge of the note, so it needs room on the left. */
	.annotation svg {
		position: absolute;
		top: 26px;
		left: -60px;
		width: 70px;
		height: 54px;
		rotate: 8deg;
		fill: none;
		stroke: currentColor;
		stroke-width: 3.2;
		stroke-linecap: round;
		stroke-linejoin: round;
	}
</style>
