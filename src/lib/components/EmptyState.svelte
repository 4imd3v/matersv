<script>
	/**
	 * @typedef {object} EmptyStateProps
	 * @property {string} title
	 * @property {string} [lead]
	 * @property {string} [class]
	 * @property {import('svelte').Snippet} [children]
	 * @property {import('svelte').Snippet} [icon]
	 */

	/** @type {EmptyStateProps & Record<string, any>} */
	let {
		title,
		lead = undefined,
		class: className = '',
		children = undefined,
		icon = undefined,
		...rest
	} = $props();
</script>

<div class="empty {className}" {...rest}>
	{#if icon}
		<span class="icon" aria-hidden="true">{@render icon()}</span>
	{/if}
	<p class="title">{title}</p>
	{#if lead}
		<p class="lead">{lead}</p>
	{/if}
	{#if children}
		<div class="action">{@render children()}</div>
	{/if}
</div>

<style>
	.empty {
		display: grid;
		justify-items: start;
		gap: 8px;
		padding: clamp(28px, 4vw, 48px) 0;
	}

	.icon {
		display: grid;
		place-items: center;
		width: 56px;
		height: 56px;
		margin-bottom: 8px;
		border-radius: var(--radius-circle);
		background: var(--color-field);
		color: var(--color-field-ink);
	}

	.icon :global(svg) {
		width: 24px;
		height: 24px;
	}

	.title {
		font-size: var(--text-h3);
		font-weight: 600;
		line-height: 1.1;
		letter-spacing: -0.03em;
		text-wrap: balance;
	}

	.lead {
		max-width: 44ch;
		color: var(--color-muted);
		text-wrap: pretty;
	}

	.action {
		margin-top: 12px;
	}
</style>
