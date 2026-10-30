<script>
	const uid = $props.id();

	/**
	 * @typedef {object} TabItem
	 * @property {string} value
	 * @property {string} label
	 *
	 * @typedef {object} TabsProps
	 * @property {TabItem[]} items
	 * @property {string} [value]
	 * @property {string} [label]
	 * @property {string} [class]
	 * @property {import('svelte').Snippet} children
	 */

	/** @type {TabsProps & Record<string, any>} */
	let {
		items,
		value = $bindable(),
		label = undefined,
		class: className = '',
		children,
		...rest
	} = $props();

	const active = $derived(value ?? items[0]?.value ?? '');
	const activeIndex = $derived(items.findIndex((item) => item.value === active));

	/**
	 * Automatic activation: moving focus also selects, per the tabs pattern.
	 * @param {KeyboardEvent} event
	 */
	function onKeydown(event) {
		if (!items.length) return;

		let next = -1;
		if (event.key === 'ArrowRight') next = (activeIndex + 1) % items.length;
		else if (event.key === 'ArrowLeft') next = (activeIndex - 1 + items.length) % items.length;
		else if (event.key === 'Home') next = 0;
		else if (event.key === 'End') next = items.length - 1;
		else return;

		event.preventDefault();
		value = items[next].value;
		document.getElementById(`${uid}-tab-${next}`)?.focus();
	}
</script>

<div class="tabs {className}" {...rest}>
	<div class="list" role="tablist" aria-label={label}>
		{#each items as item, i (item.value)}
			<button
				type="button"
				role="tab"
				id="{uid}-tab-{i}"
				aria-selected={active === item.value}
				aria-controls="{uid}-panel"
				tabindex={active === item.value ? 0 : -1}
				onclick={() => (value = item.value)}
				onkeydown={onKeydown}
			>
				{item.label}
			</button>
		{/each}
	</div>
	<div
		class="panel"
		role="tabpanel"
		id="{uid}-panel"
		aria-labelledby={activeIndex >= 0 ? `${uid}-tab-${activeIndex}` : undefined}
		tabindex="0"
	>
		{@render children()}
	</div>
</div>

<style>
	.tabs {
		display: grid;
		gap: 20px;
	}

	.list {
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
	}

	button {
		height: 42px;
		padding-inline: 20px;
		border: 0;
		border-radius: var(--radius-pill);
		background: transparent;
		color: var(--color-muted);
		font: 600 15px/1 var(--font-sans);
		cursor: pointer;
		transition:
			background-color var(--dur-control) ease,
			color var(--dur-control) ease;
	}

	button:hover {
		color: var(--color-ink);
	}

	button[aria-selected='true'] {
		background: var(--color-field);
		color: var(--color-field-ink);
	}

	.panel {
		min-width: 0;
	}
</style>
