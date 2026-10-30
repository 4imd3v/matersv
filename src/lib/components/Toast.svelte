<script>
	/**
	 * @typedef {object} ToastProps
	 * @property {string} message
	 * @property {boolean} [open]
	 * @property {number} [duration]
	 * @property {string} [class]
	 */

	/** @type {ToastProps & Record<string, any>} */
	let { message, open = $bindable(false), duration = 4000, class: className = '', ...rest } = $props();

	// Auto-dismiss only while open, and reset the timer whenever the message changes.
	$effect(() => {
		if (!open || !duration) return;

		const timer = setTimeout(() => (open = false), duration);
		return () => clearTimeout(timer);
	});
</script>

<div
	class="toast {className}"
	role="status"
	aria-live="polite"
	aria-atomic="true"
	data-open={open}
	{...rest}
>
	{#if open}
		<span class="msg">{message}</span>
	{/if}
</div>

<style>
	.toast {
		position: fixed;
		bottom: calc(24px + env(safe-area-inset-bottom, 0px));
		left: 50%;
		z-index: 10;
		display: flex;
		align-items: center;
		max-width: min(420px, calc(100vw - 32px));
		padding: 14px 22px;
		border-radius: var(--radius-pill);
		background: var(--color-field);
		color: var(--color-field-ink);
		font: 600 14px/1.3 var(--font-sans);
		box-shadow: var(--shadow-capsule);
		pointer-events: none;
		opacity: 0;
		translate: -50% 12px;
		visibility: hidden;
		transition:
			opacity var(--dur-control) ease,
			translate var(--dur-control) var(--ease-glide),
			visibility var(--dur-control) ease;
	}

	.toast[data-open='true'] {
		opacity: 1;
		translate: -50% 0;
		visibility: visible;
	}
</style>
