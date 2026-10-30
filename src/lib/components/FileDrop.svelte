<script>
	const uid = $props.id();

	/**
	 * @typedef {object} FileDropProps
	 * @property {string} label
	 * @property {string} [accept]
	 * @property {boolean} [multiple]
	 * @property {string} [hint]
	 * @property {(files: File[]) => void} [onfiles]
	 * @property {string} [class]
	 */

	/** @type {FileDropProps & Record<string, any>} */
	let {
		label,
		accept = undefined,
		multiple = false,
		hint = undefined,
		onfiles = undefined,
		class: className = '',
		...rest
	} = $props();

	/** @type {File[]} */
	let files = $state([]);
	let dragging = $state(false);

	const helpId = $derived(`${uid}-hint`);

	/** @param {FileList | null} list */
	function take(list) {
		files = [...(list ?? [])];
		onfiles?.(files);
	}
</script>

<label
	class="drop {className}"
	data-dragging={dragging}
	for={uid}
	ondragover={(event) => {
		event.preventDefault();
		dragging = true;
	}}
	ondragleave={() => (dragging = false)}
	ondrop={(event) => {
		event.preventDefault();
		dragging = false;
		take(event.dataTransfer?.files ?? null);
	}}
	{...rest}
>
	<input
		id={uid}
		type="file"
		{accept}
		{multiple}
		aria-describedby={hint ? helpId : undefined}
		onchange={(event) => take(event.currentTarget.files)}
	/>
	<span class="title">{label}</span>
	<span class="meta">
		{files.length
			? files.length === 1
				? files[0].name
				: `${files.length} files`
			: 'Drop a file here, or click to browse'}
	</span>
	{#if hint}
		<span class="hint" id={helpId}>{hint}</span>
	{/if}
</label>

<style>
	.drop {
		display: grid;
		justify-items: center;
		gap: 6px;
		padding: clamp(28px, 4vw, 44px) 24px;
		border-radius: var(--radius-card);
		background: var(--color-field);
		color: var(--color-field-ink);
		text-align: center;
		cursor: pointer;
		transition: background-color var(--dur-control) ease;
	}

	.drop:hover,
	.drop[data-dragging='true'] {
		background: color-mix(in oklab, var(--color-accent) 18%, var(--color-field));
	}

	input {
		position: absolute;
		width: 1px;
		height: 1px;
		opacity: 0;
	}

	input:focus-visible ~ .title {
		outline: 2px solid var(--color-accent);
		outline-offset: 4px;
		border-radius: 6px;
	}

	.title {
		font-size: 16px;
		font-weight: 600;
		line-height: 1.3;
		text-wrap: balance;
	}

	.meta {
		color: var(--color-muted);
		font-size: 14px;
		line-height: 1.4;
		max-width: 42ch;
		text-wrap: pretty;
	}

	.hint {
		color: var(--color-muted);
		font-size: 13px;
		line-height: 1.4;
	}
</style>
