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
			background-color var(--dur-control) var(--ease-effects),
			box-shadow var(--dur-control) var(--ease-effects);
	}

	select:hover {
		background: color-mix(in oklab, var(--color-field) 82%, var(--color-bg));
	}

	select[aria-invalid='true'] {
		box-shadow: 0 0 0 2px var(--color-danger);
	}

	/* Customizable select (Chrome 135+, Safari 26+): give the popup the same
	   surface, radius and shadow as Combobox and Menu. Other browsers keep the
	   platform list, which CSS cannot reach. */
	@supports (appearance: base-select) {
		select,
		select::picker(select) {
			appearance: base-select;
		}

		/* base-select makes the select an inline-flex box; without this the
		   selected label pins to the top of the pill instead of centring. */
		select {
			align-items: center;
		}

		select::picker-icon {
			/* the native arrow would sit under our own chevron */
			display: none;
		}

		select::picker(select) {
			/* The UA tries the side with the most room first, which opens the list
			   above the field on a tall page. Keep the flip, but only when it
			   cannot fit below. */
			position-try-order: normal;
			margin-block-start: 8px;
			padding: 6px;
			border: 0;
			border-radius: 22px;
			background: var(--color-bg-soft);
			box-shadow: var(--shadow-capsule);
		}

		select option {
			padding: 10px 16px;
			border-radius: 16px;
			font: 500 15px/1.2 var(--font-sans);
		}

		select option:hover,
		select option:focus-visible {
			background: var(--color-field);
		}

		select option:checked {
			font-weight: 600;
		}
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
