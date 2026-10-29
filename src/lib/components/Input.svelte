<script>
	const uid = $props.id();
	let {
		label,
		hint,
		error,
		value = $bindable(''),
		type = 'text',
		id = uid,
		class: className = '',
		...rest
	} = $props();

	const helpId = $derived(`${id}-help`);
</script>

<div class="field {className}">
	<label for={id}>{label}</label>
	<input
		{id}
		{type}
		bind:value
		aria-invalid={error ? 'true' : undefined}
		aria-describedby={hint || error ? helpId : undefined}
		{...rest}
	/>
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

	input {
		width: 100%;
		min-width: 0;
		height: 52px;
		padding-inline: 22px;
		border: 0;
		border-radius: var(--radius-pill);
		background: var(--color-field);
		color: var(--color-field-ink);
		font: 400 16px/1 var(--font-sans);
		transition:
			background-color var(--dur-control) ease,
			box-shadow var(--dur-control) ease;
	}

	input::placeholder {
		color: var(--color-muted);
	}

	input:hover {
		background: color-mix(in oklab, var(--color-field) 82%, var(--color-bg));
	}

	input[aria-invalid='true'] {
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
