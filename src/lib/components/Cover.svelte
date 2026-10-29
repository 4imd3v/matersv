<script>
	/**
	 * @typedef {object} CoverProps
	 * @property {string} [src]
	 * @property {string} [alt]
	 * @property {number} [width]
	 * @property {number} [height]
	 * @property {string} [class]
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {CoverProps & Record<string, any>} */
	let {
		src = undefined,
		alt = '',
		width = 760,
		height = 760,
		class: className = '',
		children = undefined,
		...rest
	} = $props();
</script>

<div class="cover {className}">
	{#if src}
		<img {src} {alt} {width} {height} loading="lazy" {...rest} />
	{:else}
		{@render children?.()}
	{/if}
</div>

<style>
	.cover {
		aspect-ratio: 1;
		overflow: hidden;
		border-radius: 26px;
		background: var(--color-field);
		box-shadow: var(--shadow-cover);
	}

	.cover :global(img),
	.cover :global(svg) {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
</style>
