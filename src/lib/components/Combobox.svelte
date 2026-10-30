<script>
	const uid = $props.id();

	/**
	 * @typedef {object} ComboItem
	 * @property {string} value
	 * @property {string} label
	 *
	 * @typedef {object} ComboboxProps
	 * @property {string} label
	 * @property {ComboItem[]} items
	 * @property {string} [value]
	 * @property {string} [placeholder]
	 * @property {string} [id]
	 * @property {string} [class]
	 */

	/** @type {ComboboxProps & Record<string, any>} */
	let {
		label,
		items,
		value = $bindable(''),
		placeholder = undefined,
		id = uid,
		class: className = '',
		...rest
	} = $props();

	/** @type {HTMLInputElement | null} */
	let input = $state(null);

	let open = $state(false);
	let text = $state('');
	let active = $state(-1);

	const listId = `${uid}-list`;
	const selected = $derived(items.find((item) => item.value === value));
	const matches = $derived(
		text ? items.filter((item) => item.label.toLowerCase().includes(text.toLowerCase())) : items
	);

	function show() {
		open = true;
		active = matches.length ? 0 : -1;
	}

	function close() {
		open = false;
		active = -1;
	}

	/** @param {ComboItem} item */
	function select(item) {
		value = item.value;
		text = '';
		close();
		input?.focus();
	}

	/** @param {KeyboardEvent} event */
	function onKeydown(event) {
		if (event.key === 'ArrowDown') {
			event.preventDefault();
			if (!open) show();
			else active = (active + 1) % Math.max(matches.length, 1);
		} else if (event.key === 'ArrowUp') {
			event.preventDefault();
			if (!open) show();
			else active = (active - 1 + matches.length) % Math.max(matches.length, 1);
		} else if (event.key === 'Enter' && open && active >= 0) {
			event.preventDefault();
			select(matches[active]);
		} else if (event.key === 'Escape') {
			close();
		}
	}
</script>

<div class="combo {className}">
	<label for={id}>{label}</label>
	<div class="control">
		<input
			{id}
			role="combobox"
			autocomplete="off"
			aria-expanded={open}
			aria-controls={listId}
			aria-autocomplete="list"
			aria-activedescendant={open && active >= 0 ? `${uid}-opt-${active}` : undefined}
			bind:this={input}
			value={text || selected?.label || ''}
			{placeholder}
			onfocus={() => {
				show();
				input?.select();
			}}
			oninput={(event) => {
				text = event.currentTarget.value;
				show();
			}}
			onblur={() => {
				close();
				text = '';
			}}
			onkeydown={onKeydown}
			{...rest}
		/>
		<svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
			<path d="m6 9 6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
		</svg>
	</div>

	{#if open}
		<div class="list" id={listId} role="listbox" aria-label={label}>
			{#each matches as item, i (item.value)}
				<button
					type="button"
					tabindex="-1"
					id={`${uid}-opt-${i}`}
					role="option"
					aria-selected={item.value === value}
					data-active={i === active}
					onmousedown={(event) => event.preventDefault()}
					onclick={() => select(item)}
					onmouseenter={() => (active = i)}
				>
					{item.label}
				</button>
			{:else}
				<div class="empty" role="option" aria-disabled="true" aria-selected="false">
					No matches
				</div>
			{/each}
		</div>
	{/if}
</div>

<style>
	.combo {
		position: relative;
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
	}

	input {
		width: 100%;
		min-width: 0;
		height: 52px;
		padding: 0 48px 0 22px;
		border: 0;
		border-radius: var(--radius-pill);
		background: var(--color-field);
		color: var(--color-field-ink);
		font: 400 16px/1 var(--font-sans);
		transition: background-color var(--dur-control) ease;
	}

	input::placeholder {
		color: var(--color-muted);
	}

	input:hover {
		background: color-mix(in oklab, var(--color-field) 82%, var(--color-bg));
	}

	.control svg {
		position: absolute;
		right: 18px;
		width: 18px;
		height: 18px;
		pointer-events: none;
		transition: rotate var(--dur-control) var(--ease-glide);
	}

	input[aria-expanded='true'] + svg {
		rotate: 180deg;
	}

	.list {
		position: absolute;
		top: calc(100% + 8px);
		left: 0;
		z-index: 5;
		display: grid;
		gap: 2px;
		width: 100%;
		max-height: 260px;
		margin: 0;
		padding: 6px;
		overflow-y: auto;
		list-style: none;
		border-radius: 22px;
		background: var(--color-bg-soft);
		box-shadow: var(--shadow-capsule);
	}

	[role='option'] {
		width: 100%;
		padding: 10px 16px;
		border: 0;
		border-radius: 16px;
		background: none;
		color: inherit;
		font: 500 15px/1.2 var(--font-sans);
		text-align: left;
		cursor: pointer;
		transition:
			background-color var(--dur-control) ease,
			color var(--dur-control) ease;
	}

	[role='option'][data-active='true'] {
		background: var(--color-field);
		color: var(--color-field-ink);
	}

	[role='option'][aria-selected='true'] {
		font-weight: 600;
	}

	.empty {
		padding: 10px 16px;
		color: var(--color-muted);
		font-size: 15px;
		cursor: default;
	}
</style>
