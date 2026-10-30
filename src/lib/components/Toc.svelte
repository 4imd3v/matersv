<script>
	/**
	 * @typedef {object} TocEntry
	 * @property {string} href
	 * @property {string} label
	 *
	 * @typedef {object} TocProps
	 * @property {TocEntry[]} items
	 * @property {string} [current]
	 * @property {string} [label]
	 * @property {string} [class]
	 */

	/** @type {TocProps & Record<string, any>} */
	let { items, current = undefined, label = 'On this page', class: className = '', ...rest } = $props();
</script>

<nav class="toc {className}" aria-label={label} {...rest}>
	<ol>
		{#each items as item (item.href)}
			<li>
				<a href={item.href} aria-current={item.href === current ? 'true' : undefined}>
					{item.label}
				</a>
			</li>
		{/each}
	</ol>
</nav>

<style>
	.toc ol {
		display: grid;
		gap: 2px;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	a {
		position: relative;
		display: block;
		padding: 7px 14px 7px 16px;
		border-radius: 12px;
		color: var(--color-muted);
		font-size: 14px;
		font-weight: 500;
		line-height: 1.4;
		text-decoration: none;
		transition:
			background-color var(--dur-control) ease,
			color var(--dur-control) ease;
	}

	a:hover {
		background: color-mix(in oklab, var(--color-field) 45%, transparent);
		color: var(--color-ink);
	}

	a[aria-current='true'] {
		color: var(--color-ink);
		font-weight: 600;
	}

	a[aria-current='true']::before {
		content: '';
		position: absolute;
		top: 9px;
		bottom: 9px;
		left: 0;
		width: 3px;
		border-radius: var(--radius-pill);
		background: var(--color-accent);
	}
</style>
