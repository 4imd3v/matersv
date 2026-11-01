# MaterSV

[![CI](https://github.com/4imd3v/matersv/actions/workflows/ci.yml/badge.svg)](https://github.com/4imd3v/matersv/actions/workflows/ci.yml)

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

## Docs

`pnpm dev` serves two surfaces:

- `/` — the gallery and hue demo
- `/components` — one page per component with a live example, usage snippet and
  props table (prerendered)
- `/blocks` — copy-paste page sections, 2–3 variants each, with a live preview
  and the matching source

## Blocks

Blocks are page sections, not components, so they are demo data: they live in
`src/docs/blocks/` and are never packaged. Each one is plain markup plus a
scoped style block that only uses the global classes (`.wrap`, `.section`,
`.card`, `.reveal`) and the library components, so it works after a copy-paste.

| Block | Variants |
| --- | --- |
| Hero | Centered (field band, handwritten note), Split (copy plus a Window mock) |
| Features | Cards (numbered, one wide), Rows (sticky header, numbered list), Bento (7/5 grid) |
| Logos | Row (text marks in a strip), Statement (quote beside a wall of names) |
| Stats | Figures (four Stat on the night band), Compare (two stacks, one dot per 32 KB) |
| Team | Grid (six portraits), Founder (large portrait plus rows) |
| Testimonials | Cards (three, with bylines), Spotlight (one quote at display size) |
| Pricing | Plans (three cards), Compare (one table, tinted column) |
| FAQ | Accordion (native details, contact card), Grid (six static answers) |
| Contact | Split (form plus studio details), Centered (short form on the field band) |
| Call to action | Night band (centred), Split (field band, actions right) |
| Footer | Full (columns plus wordmark), Compact (one row), Newsletter (signup form) |
| Journal | Featured (figure plus cards), List (rows with date and tag) |
| Article | Reading (single column, Sidenote), With contents (sticky Toc) |
| Changelog | Timeline, Cards (typed changes with StatusDot) |
| Careers | Roles (job rows), Apply (role description plus CV upload) |
| Not found | Centered (404 watermark), With search (search card) |
| Search | Results (tabs, filter popover, pagination), Empty (EmptyState) |
| Checkout | Steps (sticky summary), Cart (line-item table) |
| Dashboard | Overview (KPIs plus table), Settings (fieldsets, switches, save row) |
| Sign in | Split (form plus proof panel), Centered (one card) |

A block page switches between its variants; the preview and the code change
together, and the code is that variant's own source (`?raw` import) with the
`#lib` import rewritten to `matersv`, so it cannot drift from the preview.
Every variant is covered by the axe run.

## Components

See `/blocks` for whole sections built from these.

| Component | API |
| --- | --- |
| `Button` | `href`, `variant="primary\|ghost\|text"`, `size="md\|lg"`, `disabled`, `type` |
| `Byline` | `name`, `src`, `href`, `meta`, `size` |
| `IconButton` | `label`, `pressed`, `type`, native attributes |
| `Input` | `label`, `hint`, `error`, `type`, `bind:value`, `id`, native attributes |
| `FileDrop` | `label`, `accept`, `multiple`, `hint`, `onfiles` |
| `FileInput` | `label`, `accept`, `multiple`, `disabled`, `hint` |
| `Checkbox` | `label`, `hint`, `bind:checked`, `disabled`, `id` |
| `Slider` | `label`, `bind:value`, `min`, `max`, `step`, `hint` |
| `Fieldset` | `legend`, `hint`, snippet children |
| `RadioGroup` | `label`, `items: { value, label, hint? }[]`, `bind:value`, `name` |
| `Rating` | `label`, `bind:value`, `max`, `readonly` |
| `ScrollProgress` | — |
| `Spinner` | `size`, `label` |
| `Skeleton` | `width`, `height`, `shape="pill\|card\|circle"` |
| `Notice` | `tone="info\|danger"`, `title`, snippet children |
| `NumberInput` | `label`, `bind:value`, `min`, `max`, `step`, `disabled` |
| `Toast` | `message`, `bind:open`, `duration` (ms, 0 keeps it open) |
| `Toc` | `items: { href, label }[]`, `current`, `label` |
| `Toolbar` | `label`, snippet children |
| `Textarea` | `label`, `hint`, `error`, `rows`, `bind:value`, `id`, native attributes |
| `Select` | `label`, `items: { value, label }[]`, `bind:value`, `hint`, `error`, `id` |
| `SearchField` | `label`, `bind:value`, `placeholder`, `id`, `shortcut` snippet |
| `Switch` | `bind:checked`, `label`, `onchange` |
| `SegmentedControl` | `items: { value, label }[]`, `label`, `bind:value`, `name` |
| `Badge` | `tone="field\|accent"` |
| `Breadcrumbs` | `items: { href, label }[]`, `label` |
| `Pager` | `prev` / `next`: `{ href, title }`, `label` |
| `Pagination` | `items: { href, label }[]`, `current`, `label` |
| `Menu` | `items: { value, label }[]`, `label`, `onselect` |
| `Table` | `caption`, snippet children (you write `th scope`) |
| `Tabs` | `items: { value, label }[]`, `bind:value`, `label`, snippet children |
| `Tooltip` | `text`, snippet children (the trigger) |
| `Quote` | `cite`, snippet children |
| `EmptyState` | `title`, `lead`, `icon` / children snippets |
| `Prose` | snippet children (article markup) |
| `Avatar` | `name`, `src`, `size` |
| `AvatarGroup` | `people: { name, src? }[]`, `label`, `max`, `size` |
| `Stat` | `value`, `label`, `suffix`, `duration` |
| `StatusDot` | `label`, `tone="ok\|danger\|muted"` |
| `Steps` | `items: { label, hint? }[]`, `current`, `label` |
| `Timeline` | `items: { date, title, body? }[]`, `label` |
| `Strike` | `items: string[]` |
| `FeatureList` | `items: string[]`, `label` |
| `Kbd` | snippet children |
| `ListRow` | `title`, `meta`, `href`, `current`, `lead` / `trailing` snippets |
| `NavList` | `items: { href, label, meta?, current? }[]`, `label` |
| `Popover` | `label`, `bind:open`, `role="dialog\|region"`, `trigger` / `children` snippets |
| `Sidenote` | snippet children |
| `SkipLink` | `href`, `label` |
| `TagList` | `items: { href, label }[]`, `label` |
| `Progress` | `label`, `value`, `max`, `id` |
| `Accordion` | snippet children (a list of `AccordionItem`) |
| `AccordionItem` | `title`, `bind:open`, snippet children |
| `Dialog` | `bind:open`, `title`, snippet children |
| `Sheet` | `bind:open`, `title`, snippet children |
| `Card` | `title`, `lead`, snippet children |
| `CodeBlock` | `code`, `label` |
| `Carousel` | `label`, snippet children (one snapped slide each) |
| `Combobox` | `label`, `items: { value, label }[]`, `bind:value`, `placeholder`, `id` |
| `Cover` | `src`, `alt`, `width`, `height`, or snippet children |
| `Dots` | `count`, `value` (decorative, pair with a number) |
| `Figure` | `src`, `alt`, `ratio`, `caption`, `credit`, `width`, `height`, `loading` |
| `SectionHeader` | `title`, `lead`, `id` |
| `Annotation` | `arrow`, snippet children |
| `CapsuleNav` | `brand`, `items: { href, label }[]`, children snippet for extra actions |
| `ThemeToggle` | — |
| `Window` | `rail` snippet, snippet children |
| `Wordmark` | `text` |

Also exported: `theme`, `applyTheme`, `initTheme`, `hue`, `setHue`.

`Menu` is a native `popover` in the top layer: Esc, light dismiss and the
backdrop come from the platform, arrows and Home/End from the component.

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
| `pnpm test:e2e` | Playwright + axe (Chromium, Firefox, WebKit) — CI |
| `pnpm test:e2e:quick` | Same suite in Chromium only — local loop |
| `pnpm publint` | package lint |
| `pnpm release:patch\|minor\|major` | verify, bump, commit and tag |

## Testing

```sh
pnpm test                         # unit tests
pnpm exec playwright install      # once locally
pnpm test:e2e:quick               # Chromium only (local)
pnpm test:e2e                     # all three browsers (CI)
```

The e2e suite runs Chromium, Firefox and WebKit, checks WCAG 2.1 A/AA with axe
on the docs pages, and covers the dialog, accordion, theme toggle and docs nav.
CI installs the browsers with `playwright install --with-deps`; on Linux,
WebKit also needs those host libraries locally (`playwright install-deps`).

## Releasing

```sh
pnpm release:patch   # bug fixes
pnpm release:minor   # new components, backwards compatible
pnpm release:major   # breaking API
```

Each release runs `pnpm check` and `pnpm test` first (`preversion`), bumps
`package.json`, commits `chore(release): x.y.z` and creates the `vx.y.z` tag.
Then push and publish:

```sh
git push --follow-tags
npm publish --access public
```

`prepublishOnly` rebuilds `dist` and runs `publint` first. The package declares
`svelte` as a peer dependency (`^5.0.0`) and ships only `dist/`.

`dist/` holds the entry, the `.svelte` sources, `.d.ts` files and `matersv.css`.

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
	docs/                         # docs only: registry, live examples, code + props blocks
	docs/blocks/                  # the copy-paste blocks and their registry
	routes/components/            # /components and /components/[slug]
	routes/blocks/                # /blocks and /blocks/[slug]
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
tests/                           # vitest; docs.test.js keeps the registry in sync
e2e/                             # Playwright: a11y + interaction
playwright.config.js
```

## Fonts

The reference uses **Google Sans** and **Caveat**. They are not licensed for
redistribution here, so `--font-sans` falls back to the system UI stack. To match
the reference, self-host licensed woff2 files in `static/fonts/` and add
`@font-face` rules in `src/lib/matersv.css` (a commented template is there).

Demo copy is placeholder. Replace the brand name before shipping.

## License

MIT
