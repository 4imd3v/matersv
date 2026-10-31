<script>
	/**
	 * @typedef {object} FeatureListProps
	 * @property {string[]} items
	 * @property {string} [label]
	 * @property {string} [class]
	 */

	/** @type {FeatureListProps & Record<string, any>} */
	let { items, label = undefined, class: className = '', ...rest } = $props();
</script>

<ul class="list {className}" aria-label={label} {...rest}>
	{#each items as item (item)}
		<li>
			<svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
				<path
					d="m5 12.5 4.5 4.5L19 7.5"
					stroke="currentColor"
					stroke-width="2.2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
			<span>{item}</span>
		</li>
	{/each}
</ul>

<style>
	.list {
		display: grid;
		gap: 10px;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	li {
		display: grid;
		grid-template-columns: 20px minmax(0, 1fr);
		gap: 10px;
		align-items: start;
	}

	svg {
		width: 18px;
		height: 18px;
		margin-top: 4px;
		color: var(--color-accent);
	}
</style>
