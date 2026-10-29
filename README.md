# MaterSV

A reusable UI component library in pure Svelte 5 + CSS, built for wide editorial
website UI. No UI framework, no Tailwind, no CSS-in-JS — Svelte 5 runes, OKLCH
tokens and modern CSS only.

Reference: the visual language is derived from <https://meiro.elianiva.com>
(Astro + Tailwind 4 in the original). This is an independent Svelte 5 + pure CSS
rebuild and is not affiliated with that project.

## Install

```sh
pnpm add matersv
```

```svelte
<script>
	import { Button, Input } from 'matersv';
	import 'matersv/matersv.css'; // once, e.g. in your root layout

	let email = $state('');
</script>

<Input label="Email" type="email" bind:value={email} hint="One issue per month." />
<Button href="/download" size="lg">Download</Button>
```

Inside this repo use the `#lib` alias instead:

```js
import { Button } from '#lib/index.js';
import '#lib/matersv.css';
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
| `Accordion` | snippet children (a list of `AccordionItem`) |
| `AccordionItem` | `title`, `bind:open`, snippet children |
| `Dialog` | `bind:open`, `title`, snippet children |
| `SectionHeader` | `title`, `lead`, `id` |
| `CapsuleNav` | `brand`, `items: { href, label }[]`, children snippet for extra actions |
| `ThemeToggle` | — |

Also exported: `theme`, `applyTheme`, `initTheme`, `hue`, `setHue`.

A `Button` with `href` renders an `<a>`; adding `disabled` renders a disabled
`<button>` instead, so it cannot be clicked or tabbed to.

`AccordionItem` is a native `<details>`; opening content is animated with
`::details-content` where supported and toggles instantly elsewhere. `Dialog` is
a native `<dialog>` opened with `showModal()`: top layer, backdrop, focus trap and
Esc come from the platform.

## Scripts

| Script | Job |
| --- | --- |
| `pnpm dev` | demo app |
| `pnpm build` | static demo build (`build/`) |
| `pnpm package` | library build via `svelte-package` (`dist/`) |
| `pnpm check` | `svelte-check` (0 errors expected) |
| `pnpm test` | vitest + testing-library |
| `pnpm publint` | package lint |

## Publishing

```sh
pnpm package
pnpm publint
npm publish --access public
```

`dist/` contains compiled entries, `.d.ts` files and `matersv.css`. The package
declares `svelte` as a peer dependency (`^5.0.0`) and ships only `dist/`.

## Theming

- `--h` (hue) and `--c` (base chroma) live on `<html>`. Change two numbers and
  every surface, text and action token reskins. `setHue(h, c)` does it at runtime.
- `data-theme="light|dark"` on `<html>`. `applyTheme()` persists the choice;
  without a stored choice the OS preference wins.
- Surfaces are semantic: `bg`, `bg-soft`, `field`, `night`. Use `field` for
  insets and coloured bands, `night` once per page.
- `--color-danger` is the one fixed hue, reserved for errors.
- No `border: 1px`. Separation comes from surface changes and `--shadow-capsule`.
- `CapsuleNav` sets `data-over-dark` on `<html>` while the capsules sit over a
  `.section--night`, switching chrome to the night tokens.

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
			Accordion.svelte
			AccordionItem.svelte
			Badge.svelte
			Button.svelte
			CapsuleNav.svelte        # sticky capsules, scroll spy, night detection
			Dialog.svelte
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

## License

MIT
