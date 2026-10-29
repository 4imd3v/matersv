// The single-hue engine: every colour token is oklch(L C var(--h)) with
// chroma scaled by --c. Changing hue is rare and meaningful.
export const hue = $state({ h: 225, c: 0.1 });

export function setHue(h, c = hue.c) {
	hue.h = h;
	hue.c = c;

	const root = document.documentElement;
	root.style.setProperty('--h', String(h));
	root.style.setProperty('--c', String(c));
}
