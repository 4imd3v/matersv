<script>
	const uid = $props.id();

	/**
	 * @typedef {object} TextareaProps
	 * @property {string} label
	 * @property {string} [hint]
	 * @property {string} [error]
	 * @property {string} [value]
	 * @property {number} [rows]
	 * @property {string} [id]
	 * @property {string} [class]
	 */

	/** @type {TextareaProps & Record<string, any>} */
	let {
		label,
		hint = undefined,
		error = undefined,
		value = $bindable(''),
		rows = 4,
		id = uid,
		class: className = '',
		...rest
	} = $props();

	const helpId = $derived(`${id}-help`);
</script>

<div class="field {className}">
	<label for={id}>{label}</label>
	<textarea
		{id}
		{rows}
		bind:value
		aria-invalid={error ? 'true' : undefined}
		aria-describedby={hint || error ? helpId : undefined}
		{...rest}
	></textarea>
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

	textarea {
		width: 100%;
		min-width: 0;
		padding: 16px 22px;
		border: 0;
		border-radius: 22px;
		background: var(--color-field);
		color: var(--color-field-ink);
		font: 400 16px/1.5 var(--font-sans);
		resize: vertical;
		transition:
			background-color var(--dur-control) ease,
			box-shadow var(--dur-control) ease;
	}

	textarea::placeholder {
		color: var(--color-muted);
	}

	textarea:hover {
		background: color-mix(in oklab, var(--color-field) 82%, var(--color-bg));
	}

	textarea[aria-invalid='true'] {
		box-shadow: 0 0 0 2px var(--color-danger);
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
