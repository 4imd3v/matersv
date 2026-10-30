<script>
	/**
	 * @typedef {object} CarouselProps
	 * @property {string} label
	 * @property {string} [class]
	 * @property {import('svelte').Snippet} children
	 */

	/** @type {CarouselProps & Record<string, any>} */
	let { label, class: className = '', children, ...rest } = $props();

	/** @type {HTMLDivElement | null} */
	let track = $state(null);

	/** @param {number} direction */
	function nudge(direction) {
		if (!track) return;

		const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
		track.scrollBy?.({
			left: direction * track.clientWidth * 0.9,
			behavior: reduce ? 'auto' : 'smooth'
		});
	}
</script>

<div class="carousel {className}" role="region" aria-label={label} {...rest}>
	<!-- svelte-ignore a11y_no_noninteractive_tabindex (axe requires a focusable scroll region) -->
	<div class="track" bind:this={track} tabindex="0">
		{@render children()}
	</div>
	<div class="controls">
		<button type="button" aria-label="Previous" onclick={() => nudge(-1)}>
			<svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
				<path d="m14 6-6 6 6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
			</svg>
		</button>
		<button type="button" aria-label="Next" onclick={() => nudge(1)}>
			<svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
				<path d="m10 6 6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
			</svg>
		</button>
	</div>
</div>

<style>
	.carousel {
		display: grid;
		gap: 16px;
	}

	.track {
		display: grid;
		grid-auto-flow: column;
		grid-auto-columns: min(78%, 300px);
		gap: 16px;
		overflow-x: auto;
		overscroll-behavior-x: contain;
		scroll-snap-type: x mandatory;
		scrollbar-width: none;
	}

	.track::-webkit-scrollbar {
		display: none;
	}

	.track > :global(*) {
		scroll-snap-align: start;
	}

	.controls {
		display: flex;
		justify-content: flex-end;
		gap: 8px;
	}

	button {
		display: grid;
		place-items: center;
		width: 44px;
		height: 44px;
		border: 0;
		border-radius: var(--radius-circle);
		background: var(--color-field);
		color: var(--color-field-ink);
		cursor: pointer;
		transition:
			background-color var(--dur-control) ease,
			scale var(--dur-tap) ease;
	}

	button:hover {
		background: color-mix(in oklab, var(--color-field) 82%, var(--color-bg));
	}

	button:active {
		scale: 0.92;
	}

	svg {
		width: 22px;
		height: 22px;
	}
</style>
