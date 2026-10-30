<script>
	/**
	 * @typedef {object} StatusDotProps
	 * @property {string} label
	 * @property {'ok' | 'danger' | 'muted'} [tone]
	 * @property {string} [class]
	 */

	/** @type {StatusDotProps & Record<string, any>} */
	let { label, tone = /** @type {'ok' | 'danger' | 'muted'} */ ('ok'), class: className = '', ...rest } = $props();
</script>

<span class="status {className}" data-tone={tone} {...rest}>
	<span class="dot" aria-hidden="true"></span>
	{label}
</span>

<style>
	.status {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		color: var(--color-ink);
		font-size: 14px;
		font-weight: 600;
		line-height: 1.2;
	}

	.dot {
		width: 8px;
		height: 8px;
		border-radius: var(--radius-circle);
		background: var(--color-accent);
	}

	.status[data-tone='danger'] .dot {
		background: var(--color-danger);
	}

	.status[data-tone='muted'] .dot {
		background: var(--color-muted);
	}
</style>
