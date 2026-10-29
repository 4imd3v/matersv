<script>
	let { tone = 'field', class: className = '', children, ...rest } = $props();
</script>

<span class="badge badge--{tone} {className}" {...rest}>{@render children()}</span>

<style>
	.badge {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		padding: 6px 12px;
		border-radius: var(--radius-pill);
		background: var(--color-field);
		color: var(--color-field-ink);
		font: 600 13px/1 var(--font-sans);
	}

	.badge--accent {
		background: var(--color-accent);
		color: var(--color-accent-ink);
	}
</style>
