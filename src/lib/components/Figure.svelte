<script>
	/**
	 * @typedef {object} FigureProps
	 * @property {string} [src]
	 * @property {string} [alt]
	 * @property {number} [width]
	 * @property {number} [height]
	 * @property {'lazy' | 'eager'} [loading]
	 * @property {string} [ratio]
	 * @property {string} [caption]
	 * @property {string} [credit]
	 * @property {string} [class]
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {FigureProps & Record<string, any>} */
	let {
		src = undefined,
		alt = '',
		width = undefined,
		height = undefined,
		loading = 'lazy',
		ratio = '16 / 9',
		caption = undefined,
		credit = undefined,
		class: className = '',
		children = undefined,
		...rest
	} = $props();
</script>

<figure class="figure {className}" style:--ratio={ratio} {...rest}>
	<div class="frame">
		{#if src}
			<img {src} {alt} {width} {height} {loading} decoding="async" />
		{:else if children}
			{@render children()}
		{/if}
	</div>
	{#if caption || credit}
		<figcaption>
			{#if caption}
				<span>{caption}</span>
			{/if}
			{#if credit}
				<span class="credit">{credit}</span>
			{/if}
		</figcaption>
	{/if}
</figure>

<style>
	.figure {
		display: grid;
		gap: 12px;
		margin: 0;
	}

	.frame {
		aspect-ratio: var(--ratio);
		overflow: hidden;
		border-radius: 22px;
		background: var(--color-field);
	}

	img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.frame :global(svg) {
		display: block;
		width: 100%;
		height: 100%;
	}

	figcaption {
		display: flex;
		flex-wrap: wrap;
		gap: 4px 12px;
		padding-inline: 4px;
		color: var(--color-muted);
		font-size: 14px;
		line-height: 1.4;
		text-wrap: pretty;
	}

	.credit {
		font-variant-numeric: tabular-nums;
	}
</style>
