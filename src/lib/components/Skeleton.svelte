<script>
	/**
	 * @typedef {object} SkeletonProps
	 * @property {string} [width]
	 * @property {string} [height]
	 * @property {'pill' | 'card' | 'circle'} [shape]
	 * @property {string} [class]
	 */

	/** @type {SkeletonProps & Record<string, any>} */
	let {
		width = '100%',
		height = '1em',
		shape = /** @type {'pill' | 'card' | 'circle'} */ ('pill'),
		class: className = '',
		...rest
	} = $props();
</script>

<span
	class="skeleton skeleton--{shape} {className}"
	style="width: {width}; height: {height}"
	aria-hidden="true"
	{...rest}
></span>

<style>
	.skeleton {
		position: relative;
		display: block;
		overflow: hidden;
		background: var(--color-field);
	}

	.skeleton--pill {
		border-radius: var(--radius-pill);
	}

	.skeleton--card {
		border-radius: var(--radius-card);
	}

	.skeleton--circle {
		border-radius: var(--radius-circle);
	}

	@media (prefers-reduced-motion: no-preference) {
		.skeleton::after {
			content: '';
			position: absolute;
			inset: 0;
			background: linear-gradient(
				90deg,
				transparent,
				color-mix(in oklab, var(--color-bg) 55%, transparent),
				transparent
			);
			translate: -100% 0;
			animation: shimmer 1.6s var(--ease-glide) infinite;
		}
	}

	@keyframes shimmer {
		to {
			translate: 100% 0;
		}
	}
</style>
