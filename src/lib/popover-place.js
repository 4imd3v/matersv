/**
 * Keep a top-layer popover under its trigger; the top layer does not anchor
 * itself, and the panel must stay on screen near the right edge.
 *
 * @param {HTMLElement | null} trigger
 * @param {HTMLElement | null} panel
 */
export function placePopover(trigger, panel) {
	if (!trigger || !panel) return;

	const rect = trigger.getBoundingClientRect();
	const maxX = window.innerWidth - panel.offsetWidth - 16;
	panel.style.setProperty('--popover-x', `${Math.max(16, Math.min(rect.left, maxX))}px`);
	panel.style.setProperty('--popover-y', `${rect.bottom + 8}px`);
	panel.style.setProperty('--popover-w', `${rect.width}px`);
}
