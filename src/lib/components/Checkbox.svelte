<script>
	const uid = $props.id();

	/**
	 * @typedef {object} CheckboxProps
	 * @property {string} label
	 * @property {string} [hint]
	 * @property {boolean} [checked]
	 * @property {boolean} [disabled]
	 * @property {string} [id]
	 * @property {string} [class]
	 */

	/** @type {CheckboxProps & Record<string, any>} */
	let {
		label,
		hint = undefined,
		checked = $bindable(false),
		disabled = false,
		id = uid,
		class: className = '',
		...rest
	} = $props();

	const helpId = $derived(`${id}-help`);
</script>

<div class="field {className}">
	<label class="row">
		<input
			type="checkbox"
			{id}
			bind:checked
			{disabled}
			aria-describedby={hint ? helpId : undefined}
			{...rest}
		/>
		<span class="box" aria-hidden="true">
			<svg viewBox="0 0 24 24" fill="none">
				<path
					d="M5 12.5l4.5 4.5L19 7.5"
					stroke="currentColor"
					stroke-width="2.4"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</span>
		<span class="text">{label}</span>
	</label>
	{#if hint}
		<p class="msg" id={helpId}>{hint}</p>
	{/if}
</div>

<style>
	.field {
		display: grid;
		gap: 8px;
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

	.box {
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

	.box svg {
		width: 16px;
		height: 16px;
	}

	input:checked + .box {
		background: var(--color-accent);
		color: var(--color-accent-ink);
	}

	input:focus-visible + .box {
		outline: 2px solid var(--color-accent);
		outline-offset: 3px;
	}

	input:disabled + .box,
	input:disabled + .box + .text {
		opacity: 0.4;
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
