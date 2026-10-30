<script>
	const uid = $props.id();

	/**
	 * @typedef {object} FileInputProps
	 * @property {string} label
	 * @property {string} [accept]
	 * @property {boolean} [multiple]
	 * @property {boolean} [disabled]
	 * @property {string} [hint]
	 * @property {string} [id]
	 * @property {string} [class]
	 */

	/** @type {FileInputProps & Record<string, any>} */
	let {
		label,
		accept = undefined,
		multiple = false,
		disabled = false,
		hint = undefined,
		id = uid,
		class: className = '',
		...rest
	} = $props();

	/** @type {File[]} */
	let files = $state([]);

	const summary = $derived(
		files.length === 0
			? 'No file chosen'
			: files.length === 1
				? files[0].name
				: `${files.length} files`
	);

	const helpId = $derived(`${id}-hint`);
</script>

<div class="field {className}">
	<label for={id}>{label}</label>
	<div class="control">
		<input
			{id}
			type="file"
			{accept}
			{multiple}
			{disabled}
			aria-describedby={hint ? helpId : undefined}
			onchange={(event) => (files = [...(event.currentTarget.files ?? [])])}
			{...rest}
		/>
		<span class="button" aria-hidden="true">Choose file</span>
		<span class="name" aria-hidden="true">{summary}</span>
	</div>
	{#if hint}
		<p class="hint" id={helpId}>{hint}</p>
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

	.control {
		position: relative;
		display: flex;
		align-items: center;
		gap: 14px;
		min-height: 52px;
		padding: 8px 20px 8px 8px;
		border-radius: var(--radius-pill);
		background: var(--color-field);
		color: var(--color-field-ink);
		transition: background-color var(--dur-control) ease;
	}

	.control:hover {
		background: color-mix(in oklab, var(--color-field) 82%, var(--color-bg));
	}

	/* The whole pill opens the picker; the native input stays in the tab order. */
	input {
		position: absolute;
		inset: 0;
		opacity: 0;
		cursor: pointer;
	}

	input:focus-visible ~ .button {
		outline: 2px solid var(--color-accent);
		outline-offset: 3px;
	}

	input:disabled {
		cursor: default;
	}

	input:disabled ~ .button,
	input:disabled ~ .name {
		opacity: 0.5;
	}

	.button {
		display: inline-flex;
		align-items: center;
		height: 36px;
		padding-inline: 18px;
		border-radius: var(--radius-pill);
		background: var(--color-bg);
		font: 600 14px/1 var(--font-sans);
	}

	.name {
		min-width: 0;
		overflow: hidden;
		color: var(--color-muted);
		font-size: 14px;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.hint {
		padding-left: 18px;
		color: var(--color-muted);
		font-size: 14px;
		line-height: 1.4;
		text-wrap: pretty;
	}
</style>
