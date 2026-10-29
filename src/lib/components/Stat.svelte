<script>
	/**
	 * @typedef {object} StatProps
	 * @property {string} label
	 * @property {number} value
	 * @property {string} [suffix]
	 * @property {number} [duration]
	 * @property {string} [class]
	 */

	/** @type {StatProps & Record<string, any>} */
	let {
		label,
		value,
		suffix = '',
		duration = 1000,
		class: className = '',
		...rest
	} = $props();

	let figure = $state(/** @type {HTMLElement | null} */ (null));

	// SSR renders the final value; the count-up only runs once the figure is seen.
	$effect(() => {
		if (!figure || typeof IntersectionObserver === 'undefined') return;
		if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;

		let frame = 0;
		const easeOutCubic = (/** @type {number} */ t) => 1 - (1 - t) ** 3;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (!entry.isIntersecting) return;
				observer.disconnect();

				const start = performance.now();
				const tick = (/** @type {number} */ now) => {
					const t = Math.min(1, (now - start) / duration);
					if (figure) figure.textContent = String(Math.round(value * easeOutCubic(t))) + suffix;
					if (t < 1) frame = requestAnimationFrame(tick);
				};
				frame = requestAnimationFrame(tick);
			},
			{ threshold: 0.4 }
		);

		observer.observe(figure);
		return () => {
			observer.disconnect();
			cancelAnimationFrame(frame);
		};
	});
</script>

<div class="stat {className}" {...rest}>
	<div class="figure" bind:this={figure}>{value}{suffix}</div>
	<div class="label">{label}</div>
</div>

<style>
	.stat {
		display: grid;
		gap: 8px;
	}

	.figure {
		font-size: clamp(40px, 5.4vw, 72px);
		font-weight: 600;
		line-height: 0.95;
		letter-spacing: -0.045em;
		font-variant-numeric: tabular-nums;
	}

	.label {
		font-size: 16px;
		/* Works on bg, field and night without a tone prop. */
		color: color-mix(in oklab, currentColor 62%, transparent);
	}
</style>
