<script>
	import { tick } from 'svelte';
	import { placePopover } from '../popover-place.js';

	const uid = $props.id();

	/**
	 * @typedef {object} MenuItem
	 * @property {string} value
	 * @property {string} label
	 *
	 * @typedef {object} MenuProps
	 * @property {MenuItem[]} items
	 * @property {string} label
	 * @property {(value: string) => void} [onselect]
	 * @property {string} [class]
	 */

	/** @type {MenuProps & Record<string, any>} */
	let { items, label, onselect = undefined, class: className = '', ...rest } = $props();

	let open = $state(false);
	/** @type {HTMLButtonElement | null} */
	let trigger = $state(null);
	/** @type {HTMLElement | null} */
	let panel = $state(null);

	const panelId = `${uid}-menu`;

	/** @param {number} index */
	function focusItem(index) {
		const list = /** @type {HTMLButtonElement[]} */ ([
			...(panel?.querySelectorAll('[role="menuitem"]') ?? [])
		]);
		list[(index + list.length) % list.length]?.focus();
	}

	function place() {
		placePopover(trigger, panel);
	}

	$effect(() => {
		if (!open) return;

		place();
		const options = { capture: true, passive: true };
		window.addEventListener('scroll', place, options);
		window.addEventListener('resize', place);
		return () => {
			window.removeEventListener('scroll', place, options);
			window.removeEventListener('resize', place);
		};
	});

	/** @param {string} value */
	function select(value) {
		onselect?.(value);
		panel?.hidePopover?.();
		open = false;
		trigger?.focus();
	}

	/** @param {KeyboardEvent} event */
	function onTriggerKeydown(event) {
		if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') return;

		event.preventDefault();
		panel?.showPopover?.();
		open = true;
		const first = event.key === 'ArrowDown' ? 0 : -1;
		tick().then(() => focusItem(first));
	}

	/** @param {KeyboardEvent} event */
	function onPanelKeydown(event) {
		const list = [...(panel?.querySelectorAll('[role="menuitem"]') ?? [])];
		const index = list.indexOf(/** @type {Element} */ (document.activeElement));

		if (event.key === 'ArrowDown') {
			event.preventDefault();
			focusItem(index + 1);
		} else if (event.key === 'ArrowUp') {
			event.preventDefault();
			focusItem(index - 1);
		} else if (event.key === 'Home') {
			event.preventDefault();
			focusItem(0);
		} else if (event.key === 'End') {
			event.preventDefault();
			focusItem(-1);
		} else if (event.key === 'Tab') {
			panel?.hidePopover?.();
			open = false;
		}
	}

	/** @param {Event} event */
	function onToggle(event) {
		open = /** @type {ToggleEvent} */ (event).newState === 'open';
	}
</script>

<div class="menu {className}" {...rest}>
	<button
		type="button"
		class="trigger"
		bind:this={trigger}
		popovertarget={panelId}
		aria-haspopup="menu"
		aria-expanded={open}
		onkeydown={onTriggerKeydown}
	>
		<span>{label}</span>
		<svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
			<path d="m6 9 6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
		</svg>
	</button>

	<div
		bind:this={panel}
		id={panelId}
		popover="auto"
		role="menu"
		tabindex="-1"
		aria-label={label}
		onkeydown={onPanelKeydown}
		ontoggle={onToggle}
	>
		{#each items as item (item.value)}
			<button type="button" role="menuitem" tabindex="-1" onclick={() => select(item.value)}>
				{item.label}
			</button>
		{/each}
	</div>
</div>

<style>
	.menu {
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

	.trigger svg {
		width: 18px;
		height: 18px;
		transition: rotate var(--dur-control) var(--ease-glide);
	}

	.trigger[aria-expanded='true'] svg {
		rotate: 180deg;
	}

	[popover] {
		position: fixed;
		inset: auto;
		top: var(--popover-y, 0);
		left: var(--popover-x, 0);
		min-width: var(--popover-w, 0);
		margin: 0;
		padding: 6px;
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

	[role='menuitem'] {
		display: block;
		width: 100%;
		padding: 10px 16px;
		border: 0;
		border-radius: 16px;
		background: none;
		color: inherit;
		font: 500 15px/1.2 var(--font-sans);
		text-align: left;
		cursor: pointer;
	}

	[role='menuitem']:hover,
	[role='menuitem']:focus-visible {
		background: var(--color-field);
		color: var(--color-field-ink);
	}
</style>
