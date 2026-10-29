// Shared theme state. The initial value is set pre-paint in app.html.
export const theme = $state({ current: 'light' });

const KEY = 'matersv-theme';
const META = { light: '#f5fbfe', dark: '#0b1214' };

export function applyTheme(next, persist = true) {
	theme.current = next;
	document.documentElement.dataset.theme = next;

	if (persist) {
		try {
			localStorage.setItem(KEY, next);
		} catch {}
	}

	const meta = document.querySelector('meta[name="theme-color"]');
	if (meta) meta.content = META[next];
}

export function initTheme() {
	theme.current = document.documentElement.dataset.theme ?? 'light';

	// Only follow the OS when the user has not chosen a theme manually.
	matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
		let saved = null;
		try {
			saved = localStorage.getItem(KEY);
		} catch {}
		if (!saved) applyTheme(event.matches ? 'dark' : 'light', false);
	});
}
