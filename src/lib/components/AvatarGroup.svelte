<script>
	/**
	 * @typedef {object} AvatarPerson
	 * @property {string} name
	 * @property {string} [src]
	 *
	 * @typedef {object} AvatarGroupProps
	 * @property {AvatarPerson[]} people
	 * @property {string} label
	 * @property {number} [max]
	 * @property {number} [size]
	 * @property {string} [class]
	 */

	/** @type {AvatarGroupProps & Record<string, any>} */
	let { people, label, max = 4, size = 40, class: className = '', ...rest } = $props();

	const shown = $derived(people.slice(0, max));
	const extra = $derived(people.length - shown.length);
</script>

<div class="group {className}" role="group" aria-label={label} {...rest}>
	{#each shown as person (person.name)}
		<span class="slot" style:--size="{size}px">
			{#if person.src}
				<img src={person.src} alt="" />
			{:else}
				<span class="initials" aria-hidden="true">{person.name.slice(0, 1).toUpperCase()}</span>
			{/if}
		</span>
	{/each}
	{#if extra > 0}
		<span class="slot more" style:--size="{size}px" aria-hidden="true">+{extra}</span>
	{/if}
	<span class="sr-only">{people.map((person) => person.name).join(', ')}</span>
</div>

<style>
	.group {
		display: flex;
		align-items: center;
	}

	.slot {
		display: grid;
		flex: none;
		place-items: center;
		width: var(--size);
		height: var(--size);
		border-radius: var(--radius-circle);
		background: var(--color-field);
		color: var(--color-field-ink);
		font-size: calc(var(--size) * 0.36);
		font-weight: 600;
		overflow: hidden;
	}

	/* Stacked, not outlined: overlap reads as one group without a border. */
	.slot + .slot {
		margin-left: calc(var(--size) * -0.28);
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.more {
		background: var(--color-field);
		color: var(--color-muted);
		font-variant-numeric: tabular-nums;
	}
</style>
