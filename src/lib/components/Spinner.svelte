<script>
	/**
	 * @typedef {object} SpinnerProps
	 * @property {number} [size]
	 * @property {string} [label]
	 * @property {string} [class]
	 */

	/** @type {SpinnerProps & Record<string, any>} */
	let { size = 24, label = 'Loading', class: className = '', ...rest } = $props();
</script>

<span
	class="spinner {className}"
	role="status"
	aria-label={label}
	style="--size: {size}px"
	{...rest}
>
	<svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
		<circle cx="12" cy="12" r="9" stroke="currentColor" stroke-opacity=".2" stroke-width="2.5" />
		<path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" />
	</svg>
</span>

<style>
	.spinner {
		display: inline-grid;
		place-items: center;
		width: var(--size);
		height: var(--size);
		color: var(--color-accent);
	}

	svg {
		width: 100%;
		height: 100%;
	}

	/* With reduced motion the arc simply holds still; the status still reads. */
	@media (prefers-reduced-motion: no-preference) {
		svg {
			animation: spin 800ms linear infinite;
		}
	}

	@keyframes spin {
		to {
			rotate: 1turn;
		}
	}
</style>
