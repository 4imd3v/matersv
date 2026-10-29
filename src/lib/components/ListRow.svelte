<script>
	/**
	 * @typedef {object} ListRowProps
	 * @property {string} title
	 * @property {string} [meta]
	 * @property {string} [href]
	 * @property {boolean} [current]
	 * @property {string} [class]
	 * @property {import('svelte').Snippet} [lead]
	 * @property {import('svelte').Snippet} [trailing]
	 */

	/** @type {ListRowProps & Record<string, any>} */
	let {
		title,
		meta = undefined,
		href = undefined,
		current = false,
		class: className = '',
		lead = undefined,
		trailing = undefined,
		...rest
	} = $props();
</script>

<svelte:element
	this={href ? 'a' : 'div'}
	{href}
	aria-current={current ? 'true' : undefined}
	class="row {className}"
	{...rest}
>
	{#if lead}<span class="lead">{@render lead()}</span>{/if}
	<span class="body">
		<span class="title">{title}</span>
		{#if meta}<span class="meta">{meta}</span>{/if}
	</span>
	{#if trailing}<span class="trailing">{@render trailing()}</span>{/if}
</svelte:element>

<style>
	.row {
		display: flex;
		align-items: center;
		gap: 14px;
		padding: 6px 10px 6px 6px;
		border-radius: 18px;
		color: inherit;
		text-decoration: none;
		transition: background-color var(--dur-control) ease;
	}

	.row:hover {
		background: color-mix(in oklab, var(--color-field) 45%, transparent);
	}

	.row[aria-current='true'] {
		background: var(--color-field);
	}

	.lead {
		display: block;
		flex: none;
		width: 56px;
		height: 56px;
		overflow: hidden;
		border-radius: 12px;
		background: var(--color-field);
	}

	.lead :global(img),
	.lead :global(svg) {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.body {
		display: grid;
		gap: 2px;
		flex: 1;
		min-width: 0;
	}

	.title,
	.meta {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.title {
		font-weight: 600;
	}

	.meta {
		font-size: 14px;
		color: var(--color-muted);
	}

	.trailing {
		display: grid;
		flex: none;
		place-items: center;
		width: 28px;
		color: var(--color-muted);
	}
</style>
