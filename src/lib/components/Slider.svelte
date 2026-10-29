<script>
	const uid = $props.id();

	/**
	 * @typedef {object} SliderProps
	 * @property {string} label
	 * @property {number} [value]
	 * @property {number} [min]
	 * @property {number} [max]
	 * @property {number} [step]
	 * @property {string} [hint]
	 * @property {string} [id]
	 * @property {string} [class]
	 */

	/** @type {SliderProps & Record<string, any>} */
	let {
		label,
		value = $bindable(0),
		min = 0,
		max = 100,
		step = 1,
		hint = undefined,
		id = uid,
		class: className = '',
		...rest
	} = $props();

	const helpId = $derived(`${id}-help`);
	const percent = $derived(max === min ? 0 : ((value - min) / (max - min)) * 100);
</script>

<div class="field {className}">
	<div class="head">
		<label for={id}>{label}</label>
		<span class="value" aria-hidden="true">{value}</span>
	</div>
	<input
		type="range"
		{id}
		bind:value
		{min}
		{max}
		{step}
		style="--p: {percent}%"
		aria-describedby={hint ? helpId : undefined}
		{...rest}
	/>
	{#if hint}
		<p class="msg" id={helpId}>{hint}</p>
	{/if}
</div>

<style>
	.field {
		display: grid;
		gap: 10px;
		width: 100%;
	}

	.head {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		gap: 16px;
		padding-inline: 18px;
		font-size: 14px;
		font-weight: 600;
	}

	.value {
		color: var(--color-muted);
		font-variant-numeric: tabular-nums;
	}

	input {
		width: 100%;
		height: 44px;
		appearance: none;
		background: transparent;
		cursor: pointer;
	}

	input::-webkit-slider-runnable-track {
		height: 10px;
		border-radius: var(--radius-pill);
		background: linear-gradient(
			to right,
			var(--color-accent) var(--p),
			var(--color-field) var(--p)
		);
	}

	input::-webkit-slider-thumb {
		width: 28px;
		height: 28px;
		margin-top: -9px;
		border-radius: var(--radius-circle);
		background: var(--color-accent);
		box-shadow: var(--shadow-capsule);
		appearance: none;
	}

	input::-moz-range-track {
		height: 10px;
		border-radius: var(--radius-pill);
		background: var(--color-field);
	}

	input::-moz-range-progress {
		height: 10px;
		border-radius: var(--radius-pill);
		background: var(--color-accent);
	}

	input::-moz-range-thumb {
		width: 28px;
		height: 28px;
		border: 0;
		border-radius: var(--radius-circle);
		background: var(--color-accent);
		box-shadow: var(--shadow-capsule);
	}

	input:focus-visible::-webkit-slider-thumb {
		outline: 2px solid var(--color-accent);
		outline-offset: 3px;
	}

	input:focus-visible::-moz-range-thumb {
		outline: 2px solid var(--color-accent);
		outline-offset: 3px;
	}

	.msg {
		padding-left: 18px;
		font-size: 14px;
		line-height: 1.4;
		color: var(--color-muted);
		text-wrap: pretty;
	}
</style>
