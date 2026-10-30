<script>
	const uid = $props.id();

	/**
	 * @typedef {object} RatingProps
	 * @property {string} label
	 * @property {number} [value]
	 * @property {number} [max]
	 * @property {boolean} [readonly]
	 * @property {string} [class]
	 */

	/** @type {RatingProps & Record<string, any>} */
	let {
		label,
		value = $bindable(0),
		max = 5,
		readonly = false,
		class: className = '',
		...rest
	} = $props();

	const stars = $derived(Array.from({ length: max }, (_, i) => i + 1));
</script>

{#snippet star(/** @type {number} */ index)}
	<svg viewBox="0 0 24 24" class="star" class:on={index <= value} aria-hidden="true">
		<path
			d="M12 16.9 6.8 20l1-5.9-4.3-4.2 6-1L12 3.5l2.5 5.4 6 1L16.2 14l1 5.9z"
		/>
	</svg>
{/snippet}

{#if readonly}
	<p class="rating {className}" role="img" aria-label="{value} out of {max}" {...rest}>
		{#each stars as index (index)}
			{@render star(index)}
		{/each}
	</p>
{:else}
	<fieldset class="rating {className}" {...rest}>
		<legend class="sr-only">{label}</legend>
		{#each stars as index (index)}
			<label>
				<input type="radio" name={uid} value={index} bind:group={value} />
				{@render star(index)}
				<span class="sr-only">{index} of {max}</span>
			</label>
		{/each}
	</fieldset>
{/if}

<style>
	.rating {
		display: flex;
		gap: 4px;
		margin: 0;
		padding: 0;
		border: 0;
	}

	label {
		display: grid;
		place-items: center;
		width: 36px;
		height: 36px;
		cursor: pointer;
	}

	input {
		position: absolute;
		width: 1px;
		height: 1px;
		opacity: 0;
	}

	.star {
		width: 28px;
		height: 28px;
		fill: var(--color-field);
		transition: fill var(--dur-control) ease;
	}

	label:hover .star {
		fill: color-mix(in oklab, var(--color-accent) 50%, var(--color-field));
	}

	.star.on,
	label:hover .star.on {
		fill: var(--color-accent);
	}

	input:focus-visible + .star {
		outline: 2px solid var(--color-accent);
		outline-offset: 3px;
		border-radius: 6px;
	}
</style>
