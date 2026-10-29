<script>
	/**
	 * @typedef {object} DotsProps
	 * @property {number} [count]
	 * @property {number} [value]
	 * @property {string} [class]
	 */

	/** @type {DotsProps & Record<string, any>} */
	let { count = 20, value = count, class: className = '', ...rest } = $props();

	const indexes = $derived(Array.from({ length: count }, (_, i) => i));
</script>

<!-- Decorative by design: show the number next to it, never only the dots. -->
<div
	class="dots {className}"
	style="--count: {count}"
	aria-hidden="true"
	{...rest}
>
	{#each indexes as i (i)}
		<i class:on={i < value} style="--i: {i}"></i>
	{/each}
</div>

<style>
	.dots {
		display: grid;
		grid-template-columns: repeat(var(--count), minmax(0, 1fr));
		gap: clamp(5px, 0.8vw, 12px);
	}

	.dots i {
		aspect-ratio: 1;
		border-radius: 50%;
		background: var(--color-muted);
		opacity: 0.32;
	}

	.dots i.on {
		background: var(--color-accent);
		opacity: 1;
	}

	/* The wave is pure CSS: each dot enters a little later than the last. */
	@media (prefers-reduced-motion: no-preference) {
		@supports (animation-timeline: view()) {
			.dots i {
				animation: dot-in linear both;
				animation-timeline: view();
				animation-range: entry calc(10% + var(--i) * 1.5%) entry calc(45% + var(--i) * 1.5%);
			}
		}
	}

	@keyframes dot-in {
		from {
			opacity: 0;
			transform: scale(0.6);
		}
	}
</style>
