<script>
	/**
	 * @typedef {object} AvatarProps
	 * @property {string} name
	 * @property {string} [src]
	 * @property {number} [size]
	 * @property {string} [class]
	 */

	/** @type {AvatarProps & Record<string, any>} */
	let { name, src = undefined, size = 44, class: className = '', ...rest } = $props();

	const initials = $derived(
		name
			.trim()
			.split(/\s+/)
			.slice(0, 2)
			.map((word) => word[0] ?? '')
			.join('')
			.toUpperCase()
	);
</script>

<span class="avatar {className}" role="img" aria-label={name} style="--size: {size}px" {...rest}>
	{#if src}
		<img {src} alt="" width={size} height={size} loading="lazy" />
	{:else}
		<span class="initials" aria-hidden="true">{initials}</span>
	{/if}
</span>

<style>
	.avatar {
		display: grid;
		flex: none;
		place-items: center;
		width: var(--size);
		height: var(--size);
		overflow: hidden;
		border-radius: var(--radius-circle);
		background: var(--color-field);
		color: var(--color-field-ink);
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.initials {
		font-size: calc(var(--size) * 0.36);
		font-weight: 600;
		letter-spacing: 0.01em;
	}
</style>
