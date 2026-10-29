# AGENTS.md

Guidance for coding agents working in this repo. Read this before editing.
`DESIGN.md` is the visual spec; `README.md` is the public API reference.
Neither should be rewritten to match the code — change the code instead.

## What this repo is

MaterSV is a reusable UI component library in pure Svelte 5 + CSS for wide,
editorial website UI. The same repo is also the demo app that documents it.

- No runtime dependencies. No UI framework, no Tailwind, no CSS-in-JS, no icon
  package. Dev dependencies are for build, test and packaging only.
- The visual language is derived from <https://meiro.elianiva.com>. Only
  `README.md` and `DESIGN.md` may name it; keep it out of `src/` and UI copy.
- Branding: MaterSV. The demo nav uses "Mater".

## Stack and commands

- SvelteKit 3, Svelte 5 (runes), Vite 8, pnpm, adapter-static.
- SvelteKit 3 removed `$lib`. Use the `#lib` alias in this repo.
- Config lives in `vite.config.js`; there is no `svelte.config.js`.

Use pnpm, never npm (the user was explicit: "use pnpm instead of npm").

```sh
pnpm dev            # demo app
pnpm check          # svelte-check, must be 0 errors / 0 warnings
pnpm test           # vitest + testing-library
pnpm build          # static demo -> build/
pnpm package        # library -> dist/ (svelte-package)
pnpm publint        # package lint (needs dist, run after pnpm package)
pnpm release:patch # or :minor / :major — verify, bump, commit, tag
```

## Hard rules

- **Do not commit, push, tag or publish unless the user asks.** No auto-commits.
  The one exception is an explicit release request: `release:patch|minor|major`
  intentionally commits and tags.
- **Do not memorize uncommitted work.** Memory describes commits, not the working
  tree. See Memory below.
- **Do not add runtime dependencies** without asking. If a platform API or the
  standard library can do it, use that instead.
- Work in Svelte 5 runes: `$props`, `$state`, `$derived`, `$bindable`,
  `$props.id()`, `{@render children()}`, snippets. No legacy syntax
  (`export let`, `on:click`, stores for component state, slots).
- Author components in JavaScript with JSDoc. No TypeScript source.
- Never import `$lib`; use `#lib/index.js` or `#lib/components/X.svelte`.
- Keep `dist/`, `build/` and `.svelte-kit/` out of git. `dist/` is generated.
- Do not add Google Sans or Caveat font files; they are not licensed for
  redistribution. The system fallback is intentional.
- `DESIGN.md` may keep its Meiro references (it is the source spec). Do not ship
  that name in UI copy, code, ids or storage keys.

## Layout

```
src/lib/
  matersv.css            # tokens + base + global helpers (.wrap/.section/.card/.reveal)
  index.js               # public barrel: every exported component and store
  theme.svelte.js        # theme store (applyTheme, initTheme)
  hue.svelte.js          # --h/--c engine (setHue)
  components/*.svelte    # one component per file, scoped styles
src/routes/+page.svelte  # demo gallery
src/routes/components/   # /components index and /components/[slug] docs pages
src/docs/                # docs registry, live examples, code + props blocks
tests/components.test.js # vitest, kept outside src/lib so it is not packaged
e2e/                     # Playwright + axe; docs, dialog, accordion, theme
playwright.config.js
src/app.html             # pre-paint theme script
.github/workflows/ci.yml # check, test, package, publint, build
```

## Adding or changing a component

1. Create `src/lib/components/Name.svelte` with a `<style>` block.
2. Export it from `src/lib/index.js` (alphabetical).
3. Add a demo card to `src/routes/+page.svelte` using the global `.card` class.
4. Add an entry to `src/docs/registry.js` (slug, lead, props, code) and a live
   case in `src/docs/Example.svelte`. `tests/docs.test.js` fails if an exported
   component has no registry entry.
5. Add a row to the components table in `README.md`.
6. Add a test when the behavior is non-trivial (state, a11y wiring, branching).
7. Run the verification list below.

Component API conventions:

- `class` passthrough: `class: className = ''`, merged into the class attribute.
- Native attributes spread via `...rest`; do not swallow `onclick`, `aria-*`, etc.
- Optional props need a default of `= undefined`, otherwise `svelte-check` marks
  them required. Required props keep no default.
- Use `$bindable()` for two-way state (`bind:checked`, `bind:value`, `bind:open`).
- Tiny SVG icons are inline with `stroke="currentColor"` or `fill="currentColor"`.
  No icon dependency.
- Prefer native semantics first: `<button>`, radiogroup, `<details>`, `<dialog>`.
  Do not re-implement ARIA behavior the platform already provides.

## Styling rules

- Tokens live in `src/lib/matersv.css`. Components use tokens, never raw colors.
- The palette is one hue: `oklch(L calc(var(--c) * n) var(--h))`. Never hardcode
  a hue; `--color-danger` is the only fixed chromatic token (errors).
- Semantic surfaces: `bg`, `bg-soft`, `field`, `night`.
  - `field`: insets, selected states, coloured bands.
  - `night`: one dark interruption per page, always dark in both themes.
- No `border: 1px`. Separation comes from surface changes and
  `--shadow-capsule`.
- Shape: cards 28px, pills 999px, circles 50%. Controls are pills or circles.
- Type: display `clamp(40px,6.4vw,96px)` / .92 / -.055em / 600; body 18px / 1.55.
  `text-wrap: balance` on headings, `pretty` on paragraphs. No uppercase labels.
- Motion: use the existing tokens (`--dur-*`, `--ease-glide`). Animate transform,
  opacity, background-color, color and fill only. Respect
  `prefers-reduced-motion` (the global reset disables transitions/animations).
- Modern CSS is welcome and already used: `@layer`, oklch, color-mix,
  `@starting-style`, `::details-content`, `overlay/display allow-discrete`,
  scroll-driven `.reveal`. Always keep a working no-animation fallback.
- Keep global CSS in `matersv.css` under `@layer`; component CSS in scoped
  `<style>`. Unlayered rules (reduced motion) intentionally win.

## Accessibility

- Every interactive control has an accessible name (visible label, `aria-label`
  or `aria-labelledby`).
- Inputs wire `aria-describedby` for hint/error and `aria-invalid` when invalid.
- Icon-only buttons need `aria-label`; toggles use `aria-pressed` or
  `role="switch"` + `aria-checked`.
- Focus uses the global `:focus-visible` outline. On `night`, use
  `--color-night-accent`.
- Do not remove the visible nav on mobile (it was a bug once). Keep the
  existing target sizes: 44px icon buttons, 42px nav/buttons.

## Verification (definition of done)

```sh
pnpm check
pnpm test
pnpm test:e2e   # needs: pnpm exec playwright install
pnpm package
pnpm publint
pnpm build
```

All must pass. `pnpm check` must report 0 errors and 0 warnings. `test:e2e`
runs Chromium, Firefox and WebKit plus an axe WCAG 2.1 A/AA pass. WebKit needs
the host libraries from `playwright install --with-deps`; without them run
`--project=chromium --project=firefox`. Then check the demo in a browser:

- light and dark theme, 1440px and ~500px wide
- keyboard focus, Esc on Dialog, Accordion open/close
- the night section: capsules flip to `data-over-dark`
- no horizontal overflow

## Packaging

- `dist/` is built by `svelte-package -i src/lib -o dist`. It includes the
  entry, the `.svelte` component sources, `.d.ts` files and `matersv.css`.
- `package.json` `exports` point at `dist`; `files` ships only `dist`.
  `svelte` is a peer dependency (`^5.0.0`). Keep it that way.
- Run `pnpm package` before `publint`; CI does this in order.
- `prepublishOnly` rebuilds `dist` and runs `publint`, so npm publish cannot
  ship stale output.
- Keep tests and demo-only assets out of `src/lib`: everything there is
  packaged. Favicon lives in `static/`; tests live in `tests/`; docs data and
  examples live in `src/docs/`.
- Releases use `pnpm release:patch|minor|major`: `preversion` runs check + test,
  then pnpm bumps, commits `chore(release): x.y.z` and tags `vx.y.z`.
- Version bumps, `npm publish` and tags are the user's call. Do not publish.

## Known gotchas

- `$props.id()` only works as a top-level initializer:
  `const uid = $props.id();` then `id = uid` as a prop default.
- Snippets passed as props: `children = undefined` makes them optional. In tests,
  build them with `createRawSnippet` from `svelte`.
- `Dialog`: `$state(null)` infers `null`; use
  `$state(/** @type {HTMLDialogElement | null} */ (null))`.
- Svelte scopes child markup, so parent selectors cannot style snippet SVG.
  Use `:global(svg)` inside the owning component.
- `Input`: the input needs `width: 100%; min-width: 0` to shrink inside a card.
- `SegmentedControl` track uses `--color-bg` (not `--color-bg-soft`), otherwise
  it disappears on `.card` surfaces.
- A `Button` with `href` + `disabled` must render a disabled `<button>`, never a
  clickable link.
- `CapsuleNav` scroll spy uses IntersectionObserver, not scroll offsets, so a
  fresh `#hash` load highlights the right item. The initial hash scroll is
  smooth; screenshots taken immediately show mid-scroll and faded reveals.
- `pnpm build` (static demo) and `pnpm package` (library) are different. Run both.
- Playwright covers Chromium and Firefox locally and WebKit in CI. Axe checks
  `/`, `/components`, `/components/button`, `/components/dialog`, the open
  dialog and the dark home page.
- The open-dialog axe scan waits for the entrance animation to finish; otherwise
  a mid-transition opacity shows up as a false color-contrast failure.
- Scroll-driven reveals and details/dialog animations degrade gracefully where
  unsupported; content is never hidden.

## Memory

If the NWron MCP is available, search project `matersv` before starting.

Only memorize committed work:

1. Run `git status --short`. If anything is uncommitted, do not write a memory.
   Ask the user to commit first, or wait for the commit.
2. Record the commit hash and describe the state at that commit. Never claim work
   that only exists in the working tree.
3. When a change alters a decision already in memory, update or supersede that
   memory after the new commit instead of adding a second copy. Leave stale
   memories alone until the replacement is committed.
4. Never commit, tag or publish just to make a memory writable.

If the user asks to memorize while the tree is dirty, say so and stop at the
commit step unless they explicitly asked you to commit.
