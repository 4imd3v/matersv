<script>
	const uid = $props.id();

	/**
	 * @typedef {object} RadioItem
	 * @property {string} value
	 * @property {string} label
	 * @property {string} [hint]
	 *
	 * @typedef {object} RadioGroupProps
	 * @property {string} label
	 * @property {RadioItem[]} items
	 * @property {string} [value]
	 * @property {string} [name]
	 * @property {string} [class]
	 */

	/** @type {RadioGroupProps & Record<string, any>} */
	let {
		label,
		items,
		value = $bindable(),
		name = uid,
		class: className = '',
		...rest
	} = $props();
</script>

<fieldset class="group {className}" {...rest}>
	<legend>{label}</legend>
	{#each items as item, i (item.value)}
		{@const id = `${uid}-${i}`}
		<div class="item">
			<label class="row" for={id}>
				<input
					type="radio"
					{id}
					{name}
					value={item.value}
					bind:group={value}
					aria-describedby={item.hint ? `${id}-hint` : undefined}
				/>
				<span class="dot" aria-hidden="true"></span>
				<span class="text">{item.label}</span>
			</label>
			{#if item.hint}
				<p class="msg" id={`${id}-hint`}>{item.hint}</p>
			{/if}
		</div>
	{/each}
</fieldset>

<style>
	.group {
		display: grid;
		gap: 14px;
		margin: 0;
		padding: 0;
		border: 0;
	}

	legend {
		padding: 0 0 6px;
		font-size: 14px;
		font-weight: 600;
	}

	.item {
		display: grid;
		gap: 6px;
	}

	.row {
		display: flex;
		align-items: flex-start;
		gap: 12px;
		cursor: pointer;
	}

	input {
		position: absolute;
		width: 1px;
		height: 1px;
		opacity: 0;
	}

	.dot {
		display: grid;
		flex: none;
		place-items: center;
		width: 24px;
		height: 24px;
		border-radius: var(--radius-circle);
		background: var(--color-field);
		color: transparent;
		transition:
			background-color var(--dur-control) ease,
			color var(--dur-control) ease;
	}

	.dot::after {
		content: '';
		width: 8px;
		height: 8px;
		border-radius: var(--radius-circle);
		background: currentColor;
	}

	input:checked + .dot {
		background: var(--color-accent);
		color: var(--color-accent-ink);
	}

	input:focus-visible + .dot {
		outline: 2px solid var(--color-accent);
		outline-offset: 3px;
	}

	.text {
		padding-top: 2px;
		font-size: 16px;
		line-height: 1.4;
	}

	.msg {
		padding-left: 36px;
		font-size: 14px;
		line-height: 1.4;
		color: var(--color-muted);
		text-wrap: pretty;
	}
</style>
