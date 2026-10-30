<script>
	/**
	 * @typedef {object} TooltipProps
	 * @property {string} text
	 * @property {string} [class]
	 * @property {import('svelte').Snippet} children
	 */

	/** @type {TooltipProps & Record<string, any>} */
	let { text, class: className = '', children, ...rest } = $props();
</script>

<span class="tip {className}" {...rest}>
	{@render children()}
	<span class="bubble" aria-hidden="true">{text}</span>
</span>

<style>
	.tip {
		position: relative;
		display: inline-flex;
	}

	/* shortcut: the bubble is decorative and never announced; the trigger keeps
	   its own accessible name. Upgrade to aria-describedby wiring if a tooltip
	   ever carries information the trigger does not already have. */
	.bubble {
		position: absolute;
		bottom: calc(100% + 10px);
		left: 50%;
		z-index: 2;
		padding: 8px 14px;
		border-radius: var(--radius-pill);
		background: var(--color-field);
		color: var(--color-field-ink);
		font: 600 13px/1.2 var(--font-sans);
		white-space: nowrap;
		box-shadow: var(--shadow-capsule);
		pointer-events: none;
		opacity: 0;
		visibility: hidden;
		translate: -50% 4px;
		transition:
			opacity var(--dur-control) ease,
			translate var(--dur-control) ease,
			visibility var(--dur-control) ease;
	}

	.tip:hover .bubble,
	.tip:focus-within .bubble {
		opacity: 1;
		visibility: visible;
		translate: -50% 0;
		transition-delay: 0.25s;
	}
</style>
