<script>
	/**
	 * @typedef {object} ButtonProps
	 * @property {string} [href]
	 * @property {'primary' | 'text'} [variant]
	 * @property {'md' | 'lg'} [size]
	 * @property {'button' | 'submit' | 'reset'} [type]
	 * @property {boolean} [disabled]
	 * @property {string} [class]
	 * @property {import('svelte').Snippet} children
	 */

	/** @type {ButtonProps & Record<string, any>} */
	let {
		href = undefined,
		variant = /** @type {'primary' | 'text'} */ ('primary'),
		size = /** @type {'md' | 'lg'} */ ('md'),
		type = /** @type {'button' | 'submit' | 'reset'} */ ('button'),
		disabled = false,
		class: className = '',
		children,
		...rest
	} = $props();
</script>

{#if href && !disabled}
	<a {href} class="btn btn--{variant} btn--{size} {className}" {...rest}>
		{@render children()}
	</a>
{:else}
	<button {type} class="btn btn--{variant} btn--{size} {className}" {disabled} {...rest}>
		{@render children()}
	</button>
{/if}

<style>
	.btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 10px;
		height: 42px;
		padding-inline: 22px;
		border: 0;
		border-radius: var(--radius-pill);
		background: var(--color-accent);
		color: var(--color-accent-ink);
		font: 600 16px/1 var(--font-sans);
		cursor: pointer;
		text-decoration: none;
		transition:
			translate var(--dur-control) var(--ease-glide),
			scale var(--dur-tap) ease,
			background-color var(--dur-surface) ease,
			color var(--dur-surface) ease;
	}

	.btn:hover {
		translate: 0 -2px;
	}

	.btn:active {
		translate: 0 0;
		scale: 0.97;
	}

	.btn:disabled {
		opacity: 0.38;
		cursor: default;
		translate: 0 0;
		scale: 1;
	}

	.btn--lg {
		height: 58px;
		padding-inline: 30px;
		font-size: 18px;
	}

	.btn--text {
		height: auto;
		padding: 0;
		background: none;
		color: inherit;
		text-decoration: underline;
		text-decoration-thickness: 2px;
		text-underline-offset: 6px;
		text-decoration-color: color-mix(in oklab, currentColor 30%, transparent);
	}

	.btn--text:hover {
		translate: 0 0;
		text-decoration-color: currentColor;
	}
</style>
