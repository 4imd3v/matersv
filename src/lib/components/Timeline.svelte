<script>
	/**
	 * @typedef {object} TimelineEntry
	 * @property {string} date
	 * @property {string} title
	 * @property {string} [body]
	 *
	 * @typedef {object} TimelineProps
	 * @property {TimelineEntry[]} items
	 * @property {string} [label]
	 * @property {string} [class]
	 */

	/** @type {TimelineProps & Record<string, any>} */
	let { items, label = undefined, class: className = '', ...rest } = $props();
</script>

<ol class="timeline {className}" aria-label={label} {...rest}>
	{#each items as item (item.date + item.title)}
		<li>
			<p class="date">{item.date}</p>
			<p class="title">{item.title}</p>
			{#if item.body}
				<p class="body">{item.body}</p>
			{/if}
		</li>
	{/each}
</ol>

<style>
	.timeline {
		display: grid;
		gap: 28px;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	li {
		position: relative;
		display: grid;
		gap: 4px;
		padding-left: 26px;
	}

	/* Rail and dot: surface, never a border. */
	li::before {
		content: '';
		position: absolute;
		top: 8px;
		bottom: -28px;
		left: 3px;
		width: 2px;
		border-radius: var(--radius-pill);
		background: var(--color-field);
	}

	li:last-child::before {
		display: none;
	}

	li::after {
		content: '';
		position: absolute;
		top: 6px;
		left: 0;
		width: 8px;
		height: 8px;
		border-radius: var(--radius-circle);
		background: var(--color-accent);
	}

	.date {
		color: var(--color-muted);
		font-size: 14px;
		font-weight: 600;
		line-height: 1.3;
		font-variant-numeric: tabular-nums;
	}

	.title {
		font-size: 18px;
		font-weight: 600;
		line-height: 1.25;
		letter-spacing: -0.01em;
		text-wrap: balance;
	}

	.body {
		color: var(--color-muted);
		font-size: 15px;
		line-height: 1.5;
		text-wrap: pretty;
	}
</style>
