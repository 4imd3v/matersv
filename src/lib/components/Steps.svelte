<script>
	/**
	 * @typedef {object} StepItem
	 * @property {string} label
	 * @property {string} [hint]
	 *
	 * @typedef {object} StepsProps
	 * @property {StepItem[]} items
	 * @property {number} [current]
	 * @property {string} [label]
	 * @property {string} [class]
	 */

	/** @type {StepsProps & Record<string, any>} */
	let { items, current = 1, label = undefined, class: className = '', ...rest } = $props();
</script>

<ol class="steps {className}" aria-label={label} {...rest}>
	{#each items as item, i (item.label)}
		<li
			data-state={i + 1 === current ? 'current' : i + 1 < current ? 'done' : 'next'}
			aria-current={i + 1 === current ? 'step' : undefined}
		>
			<span class="num" aria-hidden="true">{i + 1}</span>
			<span class="text">
				<span class="title">{item.label}</span>
				{#if item.hint}
					<span class="hint">{item.hint}</span>
				{/if}
			</span>
		</li>
	{/each}
</ol>

<style>
	.steps {
		display: grid;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	li {
		position: relative;
		display: grid;
		grid-template-columns: 36px minmax(0, 1fr);
		gap: 14px;
		padding-bottom: 24px;
	}

	li:last-child {
		padding-bottom: 0;
	}

	/* The connector is a surface bar, never a border. */
	li:not(:last-child)::before {
		content: '';
		position: absolute;
		top: 36px;
		bottom: 4px;
		left: 17px;
		width: 2px;
		border-radius: var(--radius-pill);
		background: var(--color-field);
	}

	.num {
		display: grid;
		place-items: center;
		width: 36px;
		height: 36px;
		border-radius: var(--radius-circle);
		background: var(--color-field);
		color: var(--color-muted);
		font: 600 14px/1 var(--font-sans);
		font-variant-numeric: tabular-nums;
	}

	li[data-state='current'] .num {
		background: var(--color-accent);
		color: var(--color-accent-ink);
	}

	li[data-state='done'] .num {
		background: var(--color-field);
		color: var(--color-field-ink);
	}

	.text {
		display: grid;
		gap: 2px;
		padding-top: 2px;
	}

	.title {
		font-size: 16px;
		font-weight: 600;
		line-height: 1.3;
	}

	li[data-state='next'] .title {
		color: var(--color-muted);
		font-weight: 500;
	}

	.hint {
		color: var(--color-muted);
		font-size: 14px;
		line-height: 1.4;
		text-wrap: pretty;
	}
</style>
