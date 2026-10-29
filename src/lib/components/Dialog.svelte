<script>
	const uid = $props.id();
	let { open = $bindable(false), title, class: className = '', children = undefined } = $props();

	let dialog = $state(/** @type {HTMLDialogElement | null} */ (null));

	$effect(() => {
		if (!dialog) return;
		if (open && !dialog.open) dialog.showModal();
		else if (!open && dialog.open) dialog.close();
	});

	function close() {
		open = false;
	}
</script>

<dialog
	bind:this={dialog}
	class="dialog {className}"
	aria-labelledby="{uid}-title"
	onclose={() => (open = false)}
	onclick={(event) => {
		if (event.target === dialog) close();
	}}
>
	<div class="panel">
		<header>
			<h2 id="{uid}-title">{title}</h2>
			<button type="button" class="close" aria-label="Close" onclick={close}>
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
	.dialog {
		width: min(560px, calc(100vw - 32px));
		max-width: none;
		max-height: calc(100dvh - 32px);
		margin: auto;
		padding: 0;
		border: 0;
		border-radius: var(--radius-card);
		background: transparent;
		color: var(--color-ink);
		opacity: 0;
		translate: 0 12px;
		transition:
			opacity var(--dur-control) ease,
			translate 0.28s var(--ease-glide),
			display 0.28s allow-discrete,
			overlay 0.28s allow-discrete;
	}

	.dialog[open] {
		opacity: 1;
		translate: 0 0;
	}

	@starting-style {
		.dialog[open] {
			opacity: 0;
			translate: 0 12px;
		}
	}

	.dialog::backdrop {
		background: oklch(0 0 0 / 0.45);
		opacity: 0;
		transition:
			opacity 0.28s ease,
			display 0.28s allow-discrete,
			overlay 0.28s allow-discrete;
	}

	.dialog[open]::backdrop {
		opacity: 1;
	}

	@starting-style {
		.dialog[open]::backdrop {
			opacity: 0;
		}
	}

	.panel {
		max-height: calc(100dvh - 32px);
		overflow-y: auto;
		padding: clamp(24px, 3vw, 36px);
		border-radius: var(--radius-card);
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
