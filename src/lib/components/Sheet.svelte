<script>
	const uid = $props.id();

	/**
	 * @typedef {object} SheetProps
	 * @property {boolean} [open]
	 * @property {string} title
	 * @property {string} [class]
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {SheetProps} */
	let { open = $bindable(false), title, class: className = '', children = undefined } = $props();

	let dialog = $state(/** @type {HTMLDialogElement | null} */ (null));

	$effect(() => {
		if (!dialog) return;
		if (open && !dialog.open) dialog.showModal();
		else if (!open && dialog.open) dialog.close();
	});
</script>

<dialog
	bind:this={dialog}
	class="sheet {className}"
	aria-labelledby="{uid}-title"
	onclose={() => (open = false)}
	onclick={(event) => {
		if (event.target === dialog) open = false;
	}}
>
	<div class="panel">
		<header>
			<h2 id="{uid}-title">{title}</h2>
			<button type="button" class="close" aria-label="Close" onclick={() => (open = false)}>
				<svg viewBox="0 0 24 24" aria-hidden="true">
					<path d="M6 6l12 12M18 6L6 18" />
				</svg>
			</button>
		</header>
		<div class="content">
			{@render children?.()}
		</div>
	</div>
</dialog>

<style>
	.sheet {
		--sheet-off: 100% 0;

		width: min(420px, 100vw);
		max-width: none;
		height: 100dvh;
		max-height: none;
		margin: 0 0 0 auto;
		padding: 0;
		border: 0;
		border-radius: var(--radius-card) 0 0 var(--radius-card);
		background: transparent;
		color: var(--color-ink);
		opacity: 0;
		translate: var(--sheet-off);
		transition:
			opacity var(--dur-control) ease,
			translate 0.3s var(--ease-glide),
			display 0.3s allow-discrete,
			overlay 0.3s allow-discrete;
	}

	.sheet[open] {
		opacity: 1;
		translate: 0 0;
	}

	@starting-style {
		.sheet[open] {
			opacity: 0;
			translate: var(--sheet-off);
		}
	}

	/* A drawer from the bottom is easier to reach on a phone. */
	@media (max-width: 560px) {
		.sheet {
			--sheet-off: 0 100%;

			width: 100vw;
			height: min(82dvh, 640px);
			margin: auto 0 0;
			border-radius: var(--radius-card) var(--radius-card) 0 0;
		}
	}

	.sheet::backdrop {
		background: oklch(0 0 0 / 0.45);
		opacity: 0;
		transition:
			opacity 0.3s ease,
			display 0.3s allow-discrete,
			overlay 0.3s allow-discrete;
	}

	.sheet[open]::backdrop {
		opacity: 1;
	}

	@starting-style {
		.sheet[open]::backdrop {
			opacity: 0;
		}
	}

	.panel {
		display: flex;
		flex-direction: column;
		height: 100%;
		overflow-y: auto;
		padding: clamp(24px, 3vw, 32px);
		border-radius: inherit;
		background: var(--color-bg);
		box-shadow: var(--shadow-capsule);
	}

	header {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		gap: 16px;
	}

	h2 {
		font-size: var(--text-h3);
		line-height: 1.08;
		letter-spacing: -0.03em;
		font-weight: 600;
		text-wrap: balance;
	}

	.close {
		display: grid;
		place-items: center;
		flex: none;
		width: 40px;
		height: 40px;
		border: 0;
		border-radius: var(--radius-circle);
		background: transparent;
		color: inherit;
		cursor: pointer;
		transition:
			background-color var(--dur-control) ease,
			scale var(--dur-tap) ease;
	}

	.close:hover {
		background: var(--color-field);
	}

	.close:active {
		scale: 0.92;
	}

	.close svg {
		width: 20px;
		height: 20px;
		fill: none;
		stroke: currentColor;
		stroke-width: 2;
		stroke-linecap: round;
	}

	.content {
		margin-top: 16px;
		color: var(--color-muted);
		text-wrap: pretty;
	}
</style>
