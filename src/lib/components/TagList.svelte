<script>
	/**
	 * @typedef {object} Tag
	 * @property {string} href
	 * @property {string} label
	 *
	 * @typedef {object} TagListProps
	 * @property {Tag[]} items
	 * @property {string} [label]
	 * @property {string} [class]
	 */

	/** @type {TagListProps & Record<string, any>} */
	let { items, label = undefined, class: className = '', ...rest } = $props();
</script>

<ul class="tags {className}" aria-label={label} {...rest}>
	{#each items as item (item.href + item.label)}
		<li><a href={item.href}>{item.label}</a></li>
	{/each}
</ul>

<style>
	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	a {
		display: inline-flex;
		align-items: center;
		padding: 8px 14px;
		border-radius: var(--radius-pill);
		background: var(--color-field);
		color: var(--color-field-ink);
		font: 600 13px/1 var(--font-sans);
		text-decoration: none;
		transition:
			background-color var(--dur-control) ease,
			color var(--dur-control) ease;
	}

	a:hover {
		background: var(--color-accent);
		color: var(--color-accent-ink);
	}
</style>
