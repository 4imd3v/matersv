<script>
	/**
	 * @typedef {object} IconButtonProps
	 * @property {string} label
	 * @property {boolean} [pressed]
	 * @property {'button' | 'submit' | 'reset'} [type]
	 * @property {string} [class]
	 * @property {import('svelte').Snippet} children
	 */

	/** @type {IconButtonProps & Record<string, any>} */
	let {
		label,
		pressed = undefined,
		type = 'button',
		class: className = '',
		children,
		...rest
	} = $props();
</script>

<button {type} class="icon-btn {className}" aria-label={label} aria-pressed={pressed} {...rest}>
	{@render children()}
</button>

<style>
	.icon-btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 44px;
		height: 44px;
		border: 0;
		border-radius: var(--radius-circle);
		background: transparent;
		color: inherit;
		cursor: pointer;
		transition:
			background-color var(--dur-control) ease,
			color var(--dur-control) ease,
			scale var(--dur-tap) ease;
	}

	.icon-btn :global(svg) {
		width: 24px;
		height: 24px;
	}

	.icon-btn:hover {
		background: var(--color-field);
	}

	.icon-btn[aria-pressed='true'] {
		background: var(--color-field);
		color: var(--color-field-ink);
	}

	.icon-btn:active {
		scale: 0.92;
	}
</style>
