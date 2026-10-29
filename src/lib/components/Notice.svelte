<script>
	/**
	 * @typedef {object} NoticeProps
	 * @property {'info' | 'danger'} [tone]
	 * @property {string} [title]
	 * @property {string} [class]
	 * @property {import('svelte').Snippet} children
	 */

	/** @type {NoticeProps & Record<string, any>} */
	let {
		tone = /** @type {'info' | 'danger'} */ ('info'),
		title = undefined,
		class: className = '',
		children,
		...rest
	} = $props();
</script>

<div
	class="notice notice--{tone} {className}"
	role={tone === 'danger' ? 'alert' : 'status'}
	{...rest}
>
	<span class="dot" aria-hidden="true"></span>
	<div class="body">
		{#if title}<p class="title">{title}</p>{/if}
		<div class="text">{@render children()}</div>
	</div>
</div>

<style>
	.notice {
		display: flex;
		gap: 14px;
		padding: 18px 22px;
		border-radius: 22px;
		background: var(--color-field);
		color: var(--color-field-ink);
	}

	.notice--danger {
		background: color-mix(in oklab, var(--color-danger) 12%, var(--color-bg-soft));
		color: var(--color-ink);
	}

	.dot {
		flex: none;
		width: 10px;
		height: 10px;
		margin-top: 7px;
		border-radius: 50%;
		background: var(--color-accent);
	}

	.notice--danger .dot {
		background: var(--color-danger);
	}

	.body {
		min-width: 0;
	}

	.title {
		font-weight: 600;
	}

	.text {
		max-width: 52ch;
		font-size: 16px;
		line-height: 1.5;
		text-wrap: pretty;
	}

	.title + .text {
		margin-top: 4px;
	}

	.text :global(a) {
		text-underline-offset: 3px;
	}
</style>
