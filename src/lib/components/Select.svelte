<script>
	const uid = $props.id();

	/**
	 * @typedef {object} SelectOption
	 * @property {string} value
	 * @property {string} label
	 *
	 * @typedef {object} SelectProps
	 * @property {string} label
	 * @property {SelectOption[]} items
	 * @property {string} [hint]
	 * @property {string} [error]
	 * @property {string} [value]
	 * @property {string} [id]
	 * @property {string} [class]
	 */

	/** @type {SelectProps & Record<string, any>} */
	let {
		label,
		items,
		hint = undefined,
		error = undefined,
		value = $bindable(''),
		id = uid,
		class: className = '',
		...rest
	} = $props();

	const helpId = $derived(`${id}-help`);
</script>

<div class="field {className}">
	<label for={id}>{label}</label>
	<div class="wrap">
		<select
			{id}
			bind:value
			aria-invalid={error ? 'true' : undefined}
			aria-describedby={hint || error ? helpId : undefined}
			{...rest}
		>
			{#each items as item (item.value)}
				<option value={item.value}>{item.label}</option>
			{/each}
		</select>
		<svg class="chevron" viewBox="0 0 24 24" fill="none" aria-hidden="true">
			<path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
		</svg>
	</div>
	{#if error}
		<p class="msg msg--error" id={helpId}>{error}</p>
	{:else if hint}
		<p class="msg" id={helpId}>{hint}</p>
	{/if}
</div>

<style>
	.field {
		display: grid;
		gap: 10px;
		width: 100%;
	}

	label {
		padding-left: 18px;
		font-size: 14px;
		font-weight: 600;
	}

	.wrap {
		position: relative;
		width: 100%;
	}

	select {
		width: 100%;
		min-width: 0;
		height: 52px;
		padding: 0 52px 0 22px;
		border: 0;
		border-radius: var(--radius-pill);
		background: var(--color-field);
		color: var(--color-field-ink);
		font: 400 16px/1 var(--font-sans);
		appearance: none;
		cursor: pointer;
		transition:
			background-color var(--dur-control) ease,
			box-shadow var(--dur-control) ease;
	}

	select:hover {
		background: color-mix(in oklab, var(--color-field) 82%, var(--color-bg));
	}

	select[aria-invalid='true'] {
		box-shadow: 0 0 0 2px var(--color-danger);
	}

	.chevron {
		position: absolute;
		top: 50%;
		right: 22px;
		width: 18px;
		height: 18px;
		translate: 0 -50%;
		color: var(--color-muted);
		pointer-events: none;
	}

	.msg {
		padding-left: 18px;
		font-size: 14px;
		line-height: 1.4;
		color: var(--color-muted);
		text-wrap: pretty;
	}

	.msg--error {
		color: var(--color-danger);
	}
</style>
