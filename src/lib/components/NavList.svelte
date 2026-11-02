<script>
	/**
	 * @typedef {object} NavListItem
	 * @property {string} href
	 * @property {string} label
	 * @property {string} [meta]
	 * @property {boolean} [current]
	 *
	 * @typedef {object} NavListProps
	 * @property {NavListItem[]} items
	 * @property {string} [label]
	 * @property {string} [class]
	 */

	const uid = $props.id();

	/** @type {NavListProps & Record<string, any>} */
	let { items, label = undefined, class: className = '', ...rest } = $props();
</script>

<nav class="nav {className}" aria-labelledby={label ? uid + '-label' : undefined} {...rest}>
	{#if label}<p class="label" id="{uid}-label">{label}</p>{/if}
	<ul>
		{#each items as item (item.label)}
			<li>
				<a href={item.href} aria-current={item.current ? 'page' : undefined}>
					{item.label}
					{#if item.meta}<span class="meta">{item.meta}</span>{/if}
				</a>
			</li>
		{/each}
	</ul>
</nav>

<style>
	.nav {
		display: grid;
		gap: 12px;
	}

	.label {
		padding-inline: 14px;
		color: var(--color-muted);
		font-size: 14px;
		font-weight: 600;
	}

	ul {
		display: grid;
		gap: 2px;
	}

	a {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		gap: 12px;
		padding: 9px 14px;
		border-radius: var(--radius-pill);
		color: inherit;
		font-size: 15px;
		text-decoration: none;
		transition:
			background-color var(--dur-control) var(--ease-effects),
			color var(--dur-control) var(--ease-effects);
	}

	a:hover {
		background: color-mix(in oklab, var(--color-field) 55%, transparent);
	}

	a[aria-current='page'] {
		background: var(--color-field);
		color: var(--color-field-ink);
		font-weight: 600;
	}

	.meta {
		flex: none;
		color: var(--color-muted);
		font-size: 13px;
		font-weight: 500;
	}
</style>
