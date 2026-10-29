<script>
	const uid = $props.id();
	let { items = [], label, name = uid, value = $bindable(), class: className = '' } = $props();
</script>

<div class="segmented {className}" role="radiogroup" aria-label={label}>
	{#each items as item (item.value)}
		<input
			type="radio"
			{name}
			id="{name}-{item.value}"
			value={item.value}
			checked={value === item.value}
			onchange={() => (value = item.value)}
		/>
		<label for="{name}-{item.value}">{item.label}</label>
	{/each}
</div>

<style>
	/* Native radios: arrow keys, form reset and screen reader semantics for free. */
	.segmented {
		position: relative;
		display: grid;
		grid-auto-flow: column;
		grid-auto-columns: 1fr;
		gap: 2px;
		padding: 4px;
		border-radius: var(--radius-pill);
		background: var(--color-bg);
		text-align: center;
		font-size: 14px;
		font-weight: 500;
	}

	.segmented input {
		position: absolute;
		width: 1px;
		height: 1px;
		opacity: 0;
		clip-path: inset(50%);
	}

	.segmented label {
		padding: 12px 16px;
		border-radius: var(--radius-pill);
		color: var(--color-muted);
		cursor: pointer;
		transition:
			background-color var(--dur-surface) ease,
			color var(--dur-control) ease;
	}

	.segmented label:hover {
		color: var(--color-ink);
	}

	.segmented input:checked + label {
		background: var(--color-field);
		color: var(--color-field-ink);
		font-weight: 600;
	}

	.segmented input:focus-visible + label {
		outline: 2px solid var(--color-accent);
		outline-offset: 3px;
	}
</style>
