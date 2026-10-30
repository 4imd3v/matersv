<script>
	const uid = $props.id();

	/**
	 * @typedef {object} NumberInputProps
	 * @property {string} label
	 * @property {number} [value]
	 * @property {number} [min]
	 * @property {number} [max]
	 * @property {number} [step]
	 * @property {boolean} [disabled]
	 * @property {string} [id]
	 * @property {string} [class]
	 */

	/** @type {NumberInputProps & Record<string, any>} */
	let {
		label,
		value = $bindable(0),
		min = undefined,
		max = undefined,
		step = 1,
		disabled = false,
		id = uid,
		class: className = '',
		...rest
	} = $props();

	const atMin = $derived(min !== undefined && value <= min);
	const atMax = $derived(max !== undefined && value >= max);

	/** @param {number} next */
	function clamp(next) {
		if (!Number.isFinite(next)) return value;
		if (min !== undefined) next = Math.max(min, next);
		if (max !== undefined) next = Math.min(max, next);
		return next;
	}

	/** @param {number} direction */
	function nudge(direction) {
		const base = Number.isFinite(value) ? value : (min ?? 0);
		value = clamp(base + direction * step);
	}
</script>

<div class="field {className}">
	<label for={id}>{label}</label>
	<div class="control">
		<button
			type="button"
			aria-label="Decrease {label}"
			disabled={disabled || atMin}
			onclick={() => nudge(-1)}
		>
			<svg viewBox="0 0 24 24" aria-hidden="true">
				<path d="M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
			</svg>
		</button>
		<input
			{id}
			type="number"
			bind:value
			min={min}
			max={max}
			{step}
			{disabled}
			onblur={() => (value = clamp(Number(value)))}
			{...rest}
		/>
		<button
			type="button"
			aria-label="Increase {label}"
			disabled={disabled || atMax}
			onclick={() => nudge(1)}
		>
			<svg viewBox="0 0 24 24" aria-hidden="true">
				<path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
			</svg>
		</button>
	</div>
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

	.control {
		display: grid;
		grid-template-columns: 40px minmax(0, 1fr) 40px;
		align-items: center;
		height: 52px;
		padding-inline: 6px;
		border-radius: var(--radius-pill);
		background: var(--color-field);
		color: var(--color-field-ink);
	}

	/* The pill is the control, so the ring wraps the whole field. */
	.control:has(input:focus-visible) {
		outline: 2px solid var(--color-accent);
		outline-offset: 3px;
	}

	input:focus-visible {
		outline: none;
	}

	button {
		display: grid;
		place-items: center;
		width: 40px;
		height: 40px;
		border: 0;
		border-radius: var(--radius-circle);
		background: transparent;
		color: inherit;
		cursor: pointer;
		transition: background-color var(--dur-control) ease;
	}

	button:hover:not(:disabled) {
		background: color-mix(in oklab, var(--color-bg) 70%, transparent);
	}

	button:disabled {
		opacity: 0.35;
		cursor: default;
	}

	button svg {
		width: 20px;
		height: 20px;
	}

	input {
		width: 100%;
		min-width: 0;
		height: 100%;
		border: 0;
		background: none;
		color: inherit;
		font: 600 16px/1 var(--font-sans);
		font-variant-numeric: tabular-nums;
		text-align: center;
		appearance: textfield;
	}

	input::-webkit-inner-spin-button,
	input::-webkit-outer-spin-button {
		appearance: none;
		margin: 0;
	}
</style>
