<script>
	import Avatar from './Avatar.svelte';

	/**
	 * @typedef {object} BylineProps
	 * @property {string} name
	 * @property {string} [src]
	 * @property {string} [href]
	 * @property {string} [meta]
	 * @property {number} [size]
	 * @property {string} [class]
	 */

	/** @type {BylineProps & Record<string, any>} */
	let {
		name,
		src = undefined,
		href = undefined,
		meta = undefined,
		size = 40,
		class: className = '',
		...rest
	} = $props();
</script>

<div class="byline {className}" {...rest}>
	<Avatar {name} {src} {size} />
	<div class="text">
		{#if href}
			<a {href}>{name}</a>
		{:else}
			<span class="name">{name}</span>
		{/if}
		{#if meta}
			<span class="meta">{meta}</span>
		{/if}
	</div>
</div>

<style>
	.byline {
		display: flex;
		align-items: center;
		gap: 12px;
	}

	.text {
		display: grid;
		gap: 2px;
		min-width: 0;
	}

	.name,
	a {
		color: inherit;
		font-size: 16px;
		font-weight: 600;
		line-height: 1.2;
		text-decoration: none;
	}

	a {
		text-decoration: underline;
		text-decoration-thickness: 2px;
		text-underline-offset: 4px;
		text-decoration-color: color-mix(in oklab, currentColor 30%, transparent);
		transition: text-decoration-color var(--dur-control) ease;
	}

	a:hover {
		text-decoration-color: currentColor;
	}

	.meta {
		color: var(--color-muted);
		font-size: 14px;
		line-height: 1.3;
	}
</style>
