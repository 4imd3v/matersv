<script>
	const uid = $props.id();

	/**
	 * @typedef {object} SearchFieldProps
	 * @property {string} label
	 * @property {string} [value]
	 * @property {string} [placeholder]
	 * @property {string} [id]
	 * @property {string} [class]
	 * @property {import('svelte').Snippet} [shortcut]
	 */

	/** @type {SearchFieldProps & Record<string, any>} */
	let {
		label,
		value = $bindable(''),
		placeholder = undefined,
		id = uid,
		class: className = '',
		shortcut = undefined,
		...rest
	} = $props();
</script>

<div class="search {className}">
	<label class="sr-only" for={id}>{label}</label>
	<span class="icon" aria-hidden="true">
		<svg viewBox="0 0 24 24" fill="none">
			<circle cx="11" cy="11" r="6.5" stroke="currentColor" stroke-width="1.9" />
			<path d="m16 16 4 4" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" />
		</svg>
	</span>
	<input {id} type="search" bind:value {placeholder} {...rest} />
	{#if value}
		<button type="button" class="clear" aria-label="Clear search" onclick={() => (value = '')}>
			<svg viewBox="0 0 24 24" aria-hidden="true">
				<path d="M6 6l12 12M18 6 6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
			</svg>
		</button>
	{:else if shortcut}
		<span class="keys" aria-hidden="true">{@render shortcut()}</span>
	{/if}
</div>

<style>
	.search {
		display: flex;
		align-items: center;
		gap: 10px;
		width: 100%;
		height: 52px;
		padding-inline: 20px 14px;
		border-radius: var(--radius-pill);
		background: var(--color-field);
		color: var(--color-field-ink);
		transition: background-color var(--dur-control) ease;
	}

	.search:hover {
		background: color-mix(in oklab, var(--color-field) 82%, var(--color-bg));
	}

	/* The pill is the control, so the ring goes on the wrapper, not the bare input. */
	.search:has(input:focus-visible) {
		outline: 2px solid var(--color-accent);
		outline-offset: 3px;
	}

	input:focus-visible {
		outline: none;
	}

	.icon {
		display: grid;
		place-items: center;
		flex: none;
		opacity: 0.7;
	}

	.icon svg,
	.clear svg {
		width: 20px;
		height: 20px;
	}

	input {
		flex: 1;
		min-width: 0;
		height: 100%;
		padding: 0;
		border: 0;
		background: none;
		color: inherit;
		font: 400 16px/1 var(--font-sans);
		appearance: none;
	}

	input::placeholder {
		color: var(--color-muted);
	}

	input::-webkit-search-cancel-button,
	input::-webkit-search-decoration {
		appearance: none;
	}

	.clear {
		display: grid;
		place-items: center;
		flex: none;
		width: 32px;
		height: 32px;
		border: 0;
		border-radius: var(--radius-circle);
		background: color-mix(in oklab, var(--color-bg) 70%, transparent);
		color: inherit;
		cursor: pointer;
	}

	.keys {
		display: flex;
		flex: none;
		gap: 4px;
	}
</style>
