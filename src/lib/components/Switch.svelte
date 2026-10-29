<script>
	let { checked = $bindable(false), label, onchange, class: className = '', ...rest } = $props();

	function toggle() {
		checked = !checked;
		onchange?.(checked);
	}
</script>

<button
	type="button"
	class="switch {className}"
	role="switch"
	aria-checked={checked}
	aria-label={label}
	{...rest}
	onclick={toggle}
>
	<svg viewBox="0 0 24 24" aria-hidden="true">
		<path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
	</svg>
</button>

<style>
	/* The knob is a padded check icon; the slide is a padding swap. */
	.switch {
		display: grid;
		place-items: center;
		width: 52px;
		height: 32px;
		padding: 0 20px 0 0;
		border: 0;
		border-radius: 16px;
		background: var(--color-field);
		color: var(--color-muted);
		cursor: pointer;
		transition:
			background-color var(--dur-surface) ease,
			padding var(--dur-control) var(--ease-glide);
	}

	.switch[aria-checked='true'] {
		background: var(--color-accent);
		color: var(--color-accent-ink);
		padding: 0 0 0 20px;
	}

	.switch svg {
		width: 18px;
		height: 18px;
		padding: 3px;
		border-radius: var(--radius-circle);
		background: var(--color-muted);
		fill: var(--color-muted);
		transition:
			background-color var(--dur-surface) ease,
			fill var(--dur-surface) ease;
	}

	.switch[aria-checked='true'] svg {
		background: var(--color-accent-ink);
		fill: var(--color-accent);
	}
</style>
