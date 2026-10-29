<script>
	/**
	 * @typedef {object} Crumb
	 * @property {string} href
	 * @property {string} label
	 *
	 * @typedef {object} BreadcrumbsProps
	 * @property {Crumb[]} items
	 * @property {string} [label]
	 * @property {string} [class]
	 */

	/** @type {BreadcrumbsProps & Record<string, any>} */
	let { items, label = 'Breadcrumb', class: className = '', ...rest } = $props();
</script>

<nav class="crumbs {className}" aria-label={label} {...rest}>
	<ol>
		{#each items as item, i (i)}
			<li>
				{#if i === items.length - 1}
					<span aria-current="page">{item.label}</span>
				{:else}
					<a href={item.href}>{item.label}</a>
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
		font-size: 15px;
	}

	li {
		display: flex;
		align-items: center;
	}

	li + li::before {
		content: '/';
		margin-inline: 10px;
		color: var(--color-muted);
	}

	a {
		color: var(--color-muted);
		text-decoration: none;
		transition: color var(--dur-control) ease;
	}

	a:hover {
		color: var(--color-ink);
	}

	[aria-current='page'] {
		font-weight: 600;
	}
</style>
