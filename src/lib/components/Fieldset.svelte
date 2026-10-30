<script>
	const uid = $props.id();

	/**
	 * @typedef {object} FieldsetProps
	 * @property {string} legend
	 * @property {string} [hint]
	 * @property {string} [class]
	 * @property {import('svelte').Snippet} children
	 */

	/** @type {FieldsetProps & Record<string, any>} */
	let { legend, hint = undefined, class: className = '', children, ...rest } = $props();

	const helpId = $derived(`${uid}-help`);
</script>

<fieldset class="set {className}" aria-describedby={hint ? helpId : undefined} {...rest}>
	<legend>{legend}</legend>
	{#if hint}
		<p class="msg" id={helpId}>{hint}</p>
	{/if}
	<div class="body">{@render children()}</div>
</fieldset>

<style>
	.set {
		display: grid;
		gap: 14px;
		margin: 0;
		padding: 0;
		border: 0;
		min-width: 0;
	}

	legend {
		padding: 0;
		font-size: 14px;
		font-weight: 600;
	}

	.msg {
		max-width: 52ch;
		font-size: 14px;
		line-height: 1.4;
		color: var(--color-muted);
		text-wrap: pretty;
	}

	.body {
		display: grid;
		gap: 16px;
	}
</style>
