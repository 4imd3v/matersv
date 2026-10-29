<script>
	let { title, open = $bindable(false), class: className = '', children, ...rest } = $props();
</script>

<details class="item {className}" bind:open {...rest}>
	<summary>
		<span>{title}</span>
		<svg viewBox="0 0 24 24" aria-hidden="true">
			<path d="m6 9 6 6 6-6" />
		</svg>
	</summary>
	<div class="body">
		<div>{@render children()}</div>
	</div>
</details>

<style>
	.item {
		border-radius: 20px;
		background: var(--color-bg-soft);
		transition: background-color var(--dur-surface) ease;
	}

	.item[open] {
		background: var(--color-field);
		color: var(--color-field-ink);
	}

	summary {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 16px;
		padding: 18px 22px;
		border-radius: 20px;
		cursor: pointer;
		font-weight: 600;
		list-style: none;
	}

	summary::-webkit-details-marker {
		display: none;
	}

	summary:focus-visible {
		outline-offset: -3px;
		border-radius: 20px;
	}

	svg {
		flex: none;
		width: 20px;
		height: 20px;
		fill: none;
		stroke: currentColor;
		stroke-width: 2;
		stroke-linecap: round;
		stroke-linejoin: round;
		transition: rotate var(--dur-control) var(--ease-glide);
	}

	.item[open] svg {
		rotate: 180deg;
	}

	.body {
		padding: 0 22px 20px;
	}

	.body > div {
		max-width: 60ch;
		color: var(--color-muted);
		text-wrap: pretty;
	}

	/* Native open/close animation; browsers without ::details-content just toggle. */
	.item::details-content {
		block-size: 0;
		overflow-y: clip;
		transition:
			block-size var(--dur-surface) var(--ease-glide),
			content-visibility var(--dur-surface) allow-discrete;
	}

	.item[open]::details-content {
		block-size: auto;
	}
</style>
