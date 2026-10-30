<script>
	import { tick } from 'svelte';
	import { placePopover } from '../popover-place.js';

	const uid = $props.id();

	/**
	 * @typedef {object} PopoverProps
	 * @property {string} label
	 * @property {boolean} [open]
	 * @property {'dialog' | 'region'} [role]
	 * @property {string} [class]
	 * @property {import('svelte').Snippet} trigger
	 * @property {import('svelte').Snippet} children
	 */

	/** @type {PopoverProps & Record<string, any>} */
	let {
		label,
		open = $bindable(false),
		role = /** @type {'dialog' | 'region'} */ ('dialog'),
		class: className = '',
		trigger,
		children
	} = $props();

	/** @type {HTMLButtonElement | null} */
	let triggerEl = $state(null);
	/** @type {HTMLElement | null} */
	let panel = $state(null);

	const panelId = `${uid}-popover`;

	function reposition() {
		placePopover(triggerEl, panel);
	}

	$effect(() => {
		if (!open) return;

		reposition();
		const options = { capture: true, passive: true };
		window.addEventListener('scroll', reposition, options);
		window.addEventListener('resize', reposition);
		return () => {
			window.removeEventListener('scroll', reposition, options);
			window.removeEventListener('resize', reposition);
		};
	});

	/** @param {Event} event */
	function onToggle(event) {
		open = /** @type {ToggleEvent} */ (event).newState === 'open';
		if (open) tick().then(() => panel?.focus());
	}

	/** @param {KeyboardEvent} event */
	function onTriggerKeydown(event) {
		if (event.key !== 'ArrowDown') return;

		event.preventDefault();
		panel?.showPopover?.();
		open = true;
	}
</script>

<div class="popover {className}">
	<button
		type="button"
		class="trigger"
		bind:this={triggerEl}
		popovertarget={panelId}
		aria-expanded={open}
		onkeydown={onTriggerKeydown}
	>
		{@render trigger()}
	</button>

	<div
		bind:this={panel}
		id={panelId}
		popover="auto"
		{role}
		aria-label={label}
		tabindex="-1"
		ontoggle={onToggle}
	>
		{@render children()}
	</div>
</div>

<style>
	.popover {
		display: inline-flex;
	}

	.trigger {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		height: 42px;
		padding-inline: 20px;
		border: 0;
		border-radius: var(--radius-pill);
		background: var(--color-field);
		color: var(--color-field-ink);
		font: 600 15px/1 var(--font-sans);
		cursor: pointer;
		transition: background-color var(--dur-control) ease;
	}

	.trigger:hover {
		background: color-mix(in oklab, var(--color-field) 82%, var(--color-bg));
	}

	[popover] {
		position: fixed;
		inset: auto;
		top: var(--popover-y, 0);
		left: var(--popover-x, 0);
		min-width: var(--popover-w, 0);
		margin: 0;
		padding: 18px;
		border: 0;
		border-radius: 22px;
		background: var(--color-bg-soft);
		color: var(--color-ink);
		box-shadow: var(--shadow-capsule);
		opacity: 0;
		translate: 0 -6px;
		transition:
			opacity var(--dur-control) ease,
			translate var(--dur-control) var(--ease-glide),
			display var(--dur-control) allow-discrete,
			overlay var(--dur-control) allow-discrete;
	}

	[popover]:popover-open {
		opacity: 1;
		translate: 0 0;
	}

	@starting-style {
		[popover]:popover-open {
			opacity: 0;
			translate: 0 -6px;
		}
	}
</style>
