# MaterSV

A reusable UI component library in pure Svelte 5 + CSS, built for wide editorial
website UI. No UI framework, no Tailwind, no CSS-in-JS — Svelte 5 runes, OKLCH
tokens and modern CSS only.

Reference: the visual language is derived from <https://meiro.elianiva.com>
(Astro + Tailwind 4 in the original). This is an independent Svelte 5 + pure CSS
rebuild and is not affiliated with that project.

## Run

```sh
pnpm install
pnpm dev --open
pnpm build
pnpm preview
```

## Using the library

Inside this repo, import through the `#lib` alias:

```svelte
<script>
	import { Button, Input } from '#lib/index.js';
	let email = $state('');
</script>

<Input label="Email" type="email" bind:value={email} hint="One issue per month." />
<Button href="/download" size="lg">Download</Button>
```

Import the stylesheet once (the demo does it in `src/routes/+layout.svelte`):

```js
import '#lib/matersv.css';
```

`package.json` exposes the library entry and the stylesheet, so a workspace or
published install can use:

```svelte
import { Button } from 'matersv';
import 'matersv/matersv.css';
```

## Components

| Component | API |
| --- | --- |
| `Button` | `href`, `variant="primary\|text"`, `size="md\|lg"`, `disabled`, `type` |
| `IconButton` | `label`, `pressed`, `type`, native attributes |
| `Input` | `label`, `hint`, `error`, `type`, `bind:value`, `id`, native attributes |
| `Switch` | `bind:checked`, `label`, `onchange` |
| `SegmentedControl` | `items: { value, label }[]`, `label`, `bind:value`, `name` |
| `Badge` | `tone="field\|accent"` |
| `Kbd` | snippet children |
| `SectionHeader` | `title`, `lead`, `id` |
| `CapsuleNav` | `brand`, `items: { href, label }[]`, children snippet for extra actions |
| `ThemeToggle` | — |

Also exported: `theme`, `applyTheme`, `initTheme`, `hue`, `setHue`.

A `Button` with `href` renders an `<a>`; adding `disabled` renders a disabled
`<button>` instead, so it cannot be clicked or tabbed to.

## Theming

- `--h` (hue) and `--c` (base chroma) live on `<html>`. Change two numbers and
  every surface, text and action token reskins. `setHue(h, c)` does it at runtime.
- `data-theme="light|dark"` on `<html>`. `applyTheme()` persists the choice;
  without a stored choice the OS preference wins.
- Surfaces are semantic: `bg`, `bg-soft`, `field`, `night`. Use `field` for
  insets and coloured bands, `night` once per page.
- `--color-danger` is the one fixed hue, reserved for errors.
- No `border: 1px`. Separation comes from surface changes and `--shadow-capsule`.

## Motion

`.reveal` uses scroll-driven animations (`animation-timeline: view()`) where
supported, so no IntersectionObserver ships. Browsers without support show the
content immediately. `prefers-reduced-motion` disables all of it.

## File layout

```
src/
	app.html                      # pre-paint theme script, color-scheme, theme-color
	lib/
		matersv.css                 # tokens + base + .wrap/.section/.card/.reveal
		index.js                    # library entry
		theme.svelte.js             # theme store, persists to localStorage
		hue.svelte.js               # --h / --c single-hue engine
		components/
			Badge.svelte
			Button.svelte
			CapsuleNav.svelte        # sticky capsules + scroll spy
			IconButton.svelte
			Input.svelte
			Kbd.svelte
			SectionHeader.svelte
			SegmentedControl.svelte  # native radios, bind:value
			Switch.svelte
			ThemeToggle.svelte
	routes/
		+layout.js                  # prerender = true (adapter-static)
		+layout.svelte
		+page.svelte                # component gallery + hue demo
```

## Fonts

The reference uses **Google Sans** and **Caveat**. They are not licensed for
redistribution here, so `--font-sans` falls back to the system UI stack. To match
the reference, self-host licensed woff2 files in `static/fonts/` and add
`@font-face` rules in `src/lib/matersv.css` (a commented template is there).

Demo copy is placeholder. Replace the brand name before shipping.
