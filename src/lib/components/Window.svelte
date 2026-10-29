<script>
	/**
	 * @typedef {object} WindowProps
	 * @property {import('svelte').Snippet} [rail]
	 * @property {string} [class]
	 * @property {import('svelte').Snippet} children
	 */

	/** @type {WindowProps & Record<string, any>} */
	let { rail = undefined, class: className = '', children, ...rest } = $props();
</script>

<div class="window {rail ? '' : 'window--solo'} {className}" {...rest}>
	<span class="dots" aria-hidden="true"><i></i><i></i><i></i></span>
	{#if rail}
		<aside class="rail">{@render rail()}</aside>
	{/if}
	<div class="pane">{@render children()}</div>
</div>

<style>
	.window {
		position: relative;
		display: grid;
		grid-template-columns: 92px minmax(0, 1fr);
		padding-top: 44px;
		overflow: hidden;
		border-radius: 26px;
		background: var(--color-bg-soft);
		color: var(--color-ink);
		transition: background-color var(--dur-surface) ease;
	}

	.window--solo {
		grid-template-columns: minmax(0, 1fr);
	}

	/* One hue: the chrome dots are surface, not the macOS three. */
	.dots {
		position: absolute;
		top: 20px;
		left: 24px;
		display: flex;
		gap: 8px;
	}

	.dots i {
		width: 12px;
		height: 12px;
		border-radius: 50%;
		background: var(--color-field);
	}

	.rail {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 22px;
		padding: 8px 0 24px;
		font-size: 13px;
		font-weight: 500;
	}

	.pane {
		min-width: 0;
		margin: 0 12px 12px;
		padding: 26px 28px 28px;
		border-radius: 22px;
		background: var(--color-bg);
		transition: background-color var(--dur-surface) ease;
	}

	@media (max-width: 1024px) {
		.window {
			grid-template-columns: minmax(0, 1fr);
		}

		.rail {
			display: none;
		}

		.pane {
			margin: 0 10px 10px;
			padding-inline: 16px;
		}
	}

	@media (max-width: 640px) {
		.pane {
			margin: 0 6px 6px;
			padding: 20px 16px 18px;
		}
	}
</style>
