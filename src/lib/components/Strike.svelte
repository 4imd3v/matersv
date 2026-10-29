<script>
	/**
	 * @typedef {object} StrikeProps
	 * @property {string[]} items
	 * @property {string} [class]
	 */

	/** @type {StrikeProps & Record<string, any>} */
	let { items, class: className = '', ...rest } = $props();
</script>

<ul class="strike {className}" {...rest}>
	{#each items as item, i (i)}
		<li><span>{item}</span></li>
	{/each}
</ul>

<style>
	.strike {
		display: grid;
		gap: 10px;
	}

	.strike li {
		font-size: var(--text-h3);
		font-weight: 600;
		letter-spacing: -0.03em;
	}

	.strike span {
		position: relative;
		display: inline-block;
		/* Final state, so reduced motion and no-support both show the point. */
		opacity: 0.4;
	}

	.strike span::after {
		content: '';
		position: absolute;
		inset-inline: -0.04em;
		top: 54%;
		height: 0.085em;
		border-radius: 99px;
		background: currentColor;
		transform: scaleX(1);
	}

	/* The line draws as the item enters, on the compositor, with no JS. */
	@media (prefers-reduced-motion: no-preference) {
		@supports (animation-timeline: view()) {
			.strike span {
				animation: strike-fade linear both;
				animation-timeline: view();
				animation-range: entry 20% entry 80%;
			}

			.strike span::after {
				transform-origin: left;
				animation: strike-draw linear both;
				animation-timeline: view();
				animation-range: entry 20% entry 80%;
			}
		}
	}

	@keyframes strike-fade {
		from {
			opacity: 1;
		}
	}

	@keyframes strike-draw {
		from {
			transform: scaleX(0);
		}
	}
</style>
