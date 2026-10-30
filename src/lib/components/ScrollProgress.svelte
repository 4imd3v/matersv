<script>
	/**
	 * @typedef {object} ScrollProgressProps
	 * @property {string} [class]
	 */

	/** @type {ScrollProgressProps & Record<string, any>} */
	let { class: className = '', ...rest } = $props();
</script>

<div class="progress {className}" aria-hidden="true" {...rest}></div>

<style>
	/* Decorative: it shows nothing where scroll timelines are unsupported or
	   motion is reduced, which is the point. */
	.progress {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 20;
		width: 100%;
		height: 3px;
		background: var(--color-accent);
		transform-origin: 0 50%;
		scale: 0 1;
		pointer-events: none;
	}

	@media (prefers-reduced-motion: no-preference) {
		@supports (animation-timeline: scroll()) {
			.progress {
				animation: progress-fill linear both;
				animation-timeline: scroll(root block);
				animation-range: 0 100%;
			}
		}
	}

	@keyframes progress-fill {
		from {
			scale: 0 1;
		}
		to {
			scale: 1 1;
		}
	}
</style>
