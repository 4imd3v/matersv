<script>
	/**
	 * @typedef {object} Page
	 * @property {string} href
	 * @property {string} label
	 *
	 * @typedef {object} PaginationProps
	 * @property {Page[]} items
	 * @property {number} [current]
	 * @property {string} [label]
	 * @property {string} [class]
	 */

	/** @type {PaginationProps & Record<string, any>} */
	let { items, current = 0, label = 'Pagination', class: className = '', ...rest } = $props();
</script>

<nav class="pages {className}" aria-label={label} {...rest}>
	<ol>
		{#each items as item, i (i)}
			<li>
				{#if i === current}
					<span class="page page--current" aria-current="page">{item.label}</span>
				{:else}
					<a class="page" href={item.href}>{item.label}</a>
				{/if}
			</li>
		{/each}
	</ol>
</nav>

<style>
	ol {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 6px;
	}

	.page {
		display: grid;
		place-items: center;
		min-width: 42px;
		height: 42px;
		padding-inline: 12px;
		border-radius: var(--radius-pill);
		color: inherit;
		font-size: 15px;
		font-weight: 600;
		text-decoration: none;
		font-variant-numeric: tabular-nums;
		transition:
			background-color var(--dur-control) ease,
			color var(--dur-control) ease;
	}

	a.page:hover {
		background: var(--color-field);
	}

	.page--current {
		background: var(--color-accent);
		color: var(--color-accent-ink);
	}
</style>
