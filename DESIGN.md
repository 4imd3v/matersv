# Meiro-style design system — pure CSS + Svelte 5

A reproduction guide for the visual language of <https://meiro.elianiva.com> (Astro + Tailwind 4 in the original). This file rebuilds it with **plain CSS and Svelte 5 runes**. The Tailwind version of the same system is in [`DESIGN.tailwind.md`](./DESIGN.tailwind.md).

> The source is a product site for a native YouTube Music player. Its trick is not a component library — it is **one hue, four surfaces, capsule chrome, giant quiet type, and careful motion**.
>
> This is a design study. Replace the name, wordmark, album art and copy before shipping anything public.

---

## 1. The five decisions behind the look

1. **One hue owns everything.** Every colour is `oklch(L C var(--h))`. `--h` is the hue in degrees, `--c` is a base chroma, and each token multiplies that chroma. Change two numbers on `<html>` and the whole page reskins — the demo changes hue from the album art.
2. **Four surfaces, used semantically.** `bg` (canvas), `bg-soft` (raised), `field` (inset / coloured band), `night` (near-black interlude). The hero and the colour section sit on `field`, not on the page background. That is why the page feels banded rather than flat.
3. **Capsule chrome.** Nav, logo, buttons, switches, tabs, preset chips and sliders are pills or circles. Nothing has a hard 1px border. Floating chrome gets a hairline ring plus a soft deep shadow.
4. **Editorial type.** Display is 600 weight, `0.92` line-height, `-0.055em` tracking, up to 96px. Headings are capped at `17ch`; body copy at `34–46ch`. Body text stays 18px / 1.55. One handwritten line of Caveat is the only whimsy.
5. **Motion is punctuation.** Long 700–800ms glide reveals, 24–80ms stagger, 400ms colour fades, short 150–200ms control feedback. No bounce, no spring, no parallax.

### Material DNA, editorial skin

It reads as Material because of the **filled tonal surfaces**, **pill controls**, **24px icon grid**, **8px-ish spacing rhythm**, and **state changes by background colour**. It does not read as a Google app because:

- No ripple, no FAB, no app bar, no bottom navigation.
- Cards are flat colour fields with no elevation shadow. Only floating chrome gets a shadow.
- The type is editorial, not Material: 600 weight at 96px, `.92` line-height, `-.055em` tracking.
- The palette is generated from one hue in OKLCH, not a fixed Material palette.
- There are no outlined text fields, chips with borders, or dense data tables.

Take the Material ergonomics, leave the Material decoration.

---

## 2. Colour tokens

### 2.1 The hue/chroma engine

```css
:root {
  --h: 225;   /* hue, degrees */
  --c: 0.1;   /* base chroma; every token scales it */
}
```

The demo uses `--h` values like **225** (blue), **75** (amber), **265** (violet), **12** (red), with `--c` around **0.1–0.14**. Hue changes should be rare and meaningful (album art, brand colour), not decorative.

### 2.2 Full token set

```css
:root {
  color-scheme: light;

  /* surfaces */
  --color-bg:        oklch(.985 calc(var(--c) * .07)  var(--h));
  --color-bg-soft:   oklch(.955 calc(var(--c) * .12)  var(--h));
  --color-field:     oklch(.91  calc(var(--c) * .3)   var(--h));
  --color-night:     oklch(.17  calc(var(--c) * .2)   var(--h));

  /* text */
  --color-ink:       oklch(.21  calc(var(--c) * .12)  var(--h));
  --color-muted:     oklch(.44  calc(var(--c) * .14)  var(--h));
  --color-field-ink: oklch(.24  calc(var(--c) * .45)  var(--h));

  /* action */
  --color-accent:     oklch(.47 calc(var(--c) * 1)    var(--h));
  --color-accent-ink: oklch(.99 0 0);

  /* the dark band */
  --color-night-ink:    oklch(.96 calc(var(--c) * .05)  var(--h));
  --color-night-muted:  oklch(.76 calc(var(--c) * .12)  var(--h));
  --color-night-accent: oklch(.74 calc(var(--c) * 1.05) var(--h));
  --color-night-field:  oklch(.34 calc(var(--c) * .5)   var(--h));

  /* floating chrome */
  --color-capsule: #fff;
}

:root[data-theme='dark'] {
  color-scheme: dark;

  --color-bg:        oklch(.175 calc(var(--c) * .12) var(--h));
  --color-bg-soft:   oklch(.215 calc(var(--c) * .22) var(--h));
  --color-field:     oklch(.3   calc(var(--c) * .4)  var(--h));
  --color-night:     oklch(.13  calc(var(--c) * .15) var(--h));

  --color-ink:       oklch(.96 calc(var(--c) * .04) var(--h));
  --color-muted:     oklch(.76 calc(var(--c) * .1)  var(--h));
  --color-field-ink: oklch(.95 calc(var(--c) * .1)  var(--h));

  --color-accent:     oklch(.82 calc(var(--c) * .85) var(--h));
  --color-accent-ink: oklch(.2  calc(var(--c) * .3)  var(--h));

  --color-night-ink:    oklch(.96 calc(var(--c) * .05)  var(--h));
  --color-night-muted:  oklch(.76 calc(var(--c) * .12)  var(--h));
  --color-night-accent: oklch(.74 calc(var(--c) * 1.05) var(--h));
  --color-night-field:  oklch(.34 calc(var(--c) * .5)   var(--h));

  --color-capsule: color-mix(in oklab, var(--color-bg-soft) 50%, var(--color-field));
}

/* While the viewport sits over the always-dark band */
:root[data-over-dark='true'] {
  --color-capsule: oklch(.24 calc(var(--c) * .3) var(--h));
}
```

### 2.3 Resolved palette at `--h: 225`, `--c: .1`

Use these hexes for design tools or a Figma library only; keep `oklch()` in code so the hue can move.

| Token | Light | Dark | Role |
|---|---|---|---|
| `bg` | `#f5fbfe` | `#0b1214` | page canvas, card inner surface, hover chip |
| `bg-soft` | `#e8f2f6` | `#0e1c21` | raised cards, app sidebar, footer, active tour tab |
| `field` | `#cde6f1` | `#15323d` | coloured hero band, inset controls, selected nav item |
| `field-ink` | `#00232f` | `#e8f0f4` | text on `field` |
| `ink` | `#121a1c` | `#eff2f4` | primary text |
| `muted` | `#4b5458` | `#abb3b6` | secondary text, inactive icons |
| `accent` | `#006585` | `#85d0ee` | primary button, progress, active switch |
| `accent-ink` | `#fcfcfc` | `#051920` | text/icon on accent |
| `night` | `#061116` | `#03080c` | full-dark interlude |
| `night-ink` | `#eef2f4` | `#eef2f4` | text on night |
| `night-muted` | `#a9b3b7` | `#a9b3b7` | secondary text on night |
| `night-accent` | `#56b9dd` | `#56b9dd` | strike lines on night |
| `night-field` | `#163d4b` | `#163d4b` | inset controls on night |
| `capsule` | `#ffffff` | ~`#12272f` | nav/logo pills |

Measured contrast in the original:

| Pair | Light | Dark |
|---|---|---|
| ink / bg | 16.9 | 16.8 |
| muted / bg | 7.43 | 8.87 |
| field-ink / field | 12.6 | 11.7 |
| accent-ink / accent | 6.4 | 10.5 |
| night-ink / night | 17.0 | 17.9 |
| night-muted / night | 8.9 | 9.4 |

**Rules**

- Use `accent` for **one** primary action per view. If everything is accent, nothing is.
- `bg-soft` is for grouping, `field` is for insets and coloured bands. Do not use `field` as a generic card colour on `bg` — it reads as a hole.
- `night` is always dark, in both themes. It is a section-level statement, not a card colour.
- Never put `muted` on `accent` or `accent` text on `field` at small sizes.
- On `night`, switch focus/hover colours to `--color-night-*`. The original forgets this for focus rings; fix it.

---

## 3. Typography

### 3.1 Fonts

```css
@font-face {
  font-family: 'Google Sans';
  src: url('/fonts/GoogleSans.woff2') format('woff2');
  font-weight: 100 900;
  font-display: swap;
}
@font-face {
  font-family: 'Caveat';
  src: url('/fonts/Caveat.woff2') format('woff2');
  font-weight: 400 700;
  font-display: swap;
}

:root {
  --font-sans: 'Google Sans', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
  --font-hand: 'Caveat', cursive;
}
```

- **Google Sans** is the entire UI voice. If you do not have a licence, use **Google Sans Text** where licensed, or **Inter** with `-0.01em` extra tracking on headings. Do not substitute Arial/Roboto and expect the same feel.
- **Caveat** appears exactly twice in the whole page, inside one annotation. Keep it to one moment.
- Self-host, subset, `font-display: swap`, preload the sans file.

### 3.2 Scale

```css
:root {
  --text-display: clamp(40px, 6.4vw, 96px);
  --text-display--line-height: .92;
  --text-display--letter-spacing: -.055em;
  --text-display--font-weight: 600;

  --text-h2: clamp(38px, 5.4vw, 80px);
  --text-h2--line-height: .98;
  --text-h2--letter-spacing: -.045em;
  --text-h2--font-weight: 600;

  --text-h3: clamp(24px, 2.6vw, 36px);
  --text-h3--line-height: 1.08;
  --text-h3--letter-spacing: -.03em;
  --text-h3--font-weight: 600;

  --text-lead: clamp(18px, 1.5vw, 21px);
  --text-small: 14px;
  --text-small--line-height: 1.5;
}
```

| Role | Size / line / tracking | Weight | Notes |
|---|---|---|---|
| Display (h1) | `clamp(40, 6.4vw, 96)` / .92 / -.055em | 600 | 2 lines max, `text-wrap: balance` |
| Section h2 | `clamp(38, 5.4vw, 80)` / .98 / -.045em | 600 | max `17ch` |
| Card h3 | `clamp(24, 2.6vw, 36)` / 1.08 / -.03em | 600 | max `17ch` |
| Lead | `clamp(18, 1.5vw, 21)` / 1.35 | 400 | max `46ch`, `text-wrap: pretty` |
| Body | 18px / 1.55 | 400 | app prose, footer |
| Small | 14px / 1.5 | 400 | captions, legal |
| Nav / button | 15–18px / 1 | 600 | 15px nav, 16px secondary, 18px hero |
| UI micro | 13px / 1.3 | 400–500 | player metadata, queue artist |
| Eyebrow / label | 13–14px / 1 | 500–600 | presets, kbd, time |

**Rules**

- `text-wrap: balance` on h1/h2/h3; `text-wrap: pretty` on paragraphs.
- Display headings use `letter-spacing: -.055em`; do not use the same tracking at 24px.
- Line-height below 1 only for ≥24px. Body never goes below 1.5.
- `font-variant-numeric: tabular-nums` on counters, clocks, memory figures, EQ labels.
- `-webkit-font-smoothing: antialiased; text-rendering: optimizeLegibility`.
- Links are underlined in body copy with a 30%-opacity decoration that goes to full on hover.
- No uppercase, no letter-spaced eyebrow labels above headings. The hierarchy comes from size.

---

## 4. Layout, spacing, rhythm

### 4.1 Page map

The page is a single narrative, told in alternating surface bands:

| # | Section | Surface | Job |
|---|---|---|---|
| 1 | Hero | `field` | Promise: “YouTube Music, without the bloat.” |
| 2 | Memory | `bg` | Proof: 100 MB vs 300–800 MB, with dots. |
| 3 | What Meiro leaves out | `night` | Removal: Chromium, Ads, Telemetry, Video, struck through. |
| 4 | Screens | `bg` | Product tour: Home, Search, Player, Lyrics, Library, Stats. |
| 5 | Colour | `field` | Signature interaction: album art recolours the whole page. |
| 6 | Details | `bg` | Craft: EQ presets, keyboard shortcuts. |
| 7 | Download | `bg` | Conversion: three OS cards, recommended one first. |
| 8 | Footer | `bg-soft` | Giant masked wordmark + small links. |

The alternation is the rhythm: **field → bg → night → bg → field → bg → bg → bg-soft**. Two coloured bands, one dark break, the rest quiet. Do not add more bands; the contrast only works because it is rare.

### 4.2 Grid and spacing

```css
:root {
  --head: 72px;
  --gap: clamp(112px, 13vw, 200px);
}

.wrap {
  width: min(1240px, 100% - 48px);
  margin-inline: auto;
}

@media (max-width: 560px) {
  :root { --head: 60px; --gap: 80px; }
  .wrap { width: calc(100% - 32px); }
}

.section { padding-block: var(--gap); }
```

- **Content width:** 1240px. Gutters 24px each side (16px under 560px).
- **Vertical rhythm:** every major section gets `80–200px` top and bottom. This is the single biggest reason the site feels calm. Do not compress it on desktop.
- **Section intro:** `h2` + 28px gap + lead, then `clamp(48px, 6vw, 88px)` before the content.
- **Heading widths:** `17ch` for h2. Lead `46ch`. Card copy `30–34ch`. Footer blurb `38ch`.
- **Grid patterns used:**
  - Hero: one centred column; headline over mockup.
  - Memory comparison: `230px minmax(0,1fr) clamp(220px,26vw,360px)`.
  - Screens: `minmax(0,400px) minmax(0,1fr)`, gap `clamp(32px,5vw,80px)`.
  - Details cards: `minmax(0,1.5fr) minmax(0,1fr)`, gap `clamp(16px,2vw,28px)`.
  - Download: `minmax(0,.8fr) minmax(0,1.2fr)`.
- **Breakpoints:** 560 (gutters/head/gap), 640 (`sm`: hide nav, stack OS cards), 768 (`md`: stack the strike list), 1024 (`lg`: stack all multi-column sections).
- **Sticky chrome without a bar:** header is `position: sticky; top: 0; height: 0; z-index: 40; pointer-events: none`. The inner row has top padding, and only the pills have `pointer-events: auto`. Content scrolls underneath.
- `scroll-behavior: smooth; scroll-padding-top: calc(var(--head) + 24px)`.
- Anchored sections use `scroll-margin-top: calc(-1 * var(--gap))` so a nav click lands at the section's **content**, not at the top of its huge vertical padding.

---

## 5. Shape, elevation, borders

```css
:root {
  --radius-card: 28px;
  --radius-pill: 999px;
  --radius-circle: 50%;

  --shadow-capsule:
    0 0 0 1px color-mix(in oklab, var(--color-ink) 8%, transparent),
    0 10px 30px -18px oklch(.2 .05 var(--h) / .5);

  --shadow-cover:
    0 0 0 4px var(--color-bg),
    0 0 0 5px var(--color-field);

  --ease-glide: cubic-bezier(.2, .7, .2, 1);
}
```

| Element | Radius |
|---|---|
| Card / article | 28px |
| App window outer shell | 26px |
| App window inner pane | 22px |
| App cover | 26px |
| Tour tab | 20px |
| Queue row | 18px |
| Kbd | 10px |
| Pills / buttons | 999px |
| Icon buttons / play | 50% |

**Rules**

- **No `border: 1px solid`.** Separation comes from surface changes and the hairline ring in `--shadow-capsule`.
- The cover gets a 4px `bg` gap then a 1px `field` ring — `--shadow-cover` — so it looks mounted, not pasted.
- Shadows are short, deep and negative-spread. Never a large diffuse `0 20px 60px rgba(0,0,0,.3)`.
- Selection uses `field` / `field-ink`.
- Focus: `outline: 2px solid var(--color-accent); outline-offset: 3px; border-radius: 6px`.

---

## 6. Components

The CSS in this section is **component CSS**. Put each block in the component's `<style>` (Svelte scopes it) or in `app.css` under a `components` layer. Keep the global tokens in `app.css`.

### 6.1 Capsule nav

```html
<header class="site-head">
  <div class="wrap site-head__row">
    <a class="capsule logo" href="#top" aria-label="Home">
      <img src="/wordmark.svg" alt="Meiro" />
    </a>

    <nav class="capsule nav" aria-label="Sections">
      <a href="#memory" data-spy aria-current="true">
        <svg aria-hidden="true">…</svg><span>Memory</span>
      </a>
      <!-- … -->
    </nav>

    <div class="capsule tools">
      <button class="icon-btn" aria-label="Switch to dark theme" aria-pressed="false">…</button>
      <a class="btn" href="#download">Download</a>
    </div>
  </div>
</header>
```

```css
.site-head {
  position: sticky;
  top: 0;
  z-index: 40;
  height: 0;
  pointer-events: none;
}
.site-head__row {
  display: flex;
  align-items: center;
  gap: 16px;
  padding-top: 14px;
}
.site-head__row > * { pointer-events: auto; }

.capsule {
  background: var(--color-capsule);
  border-radius: var(--radius-pill);
  box-shadow: var(--shadow-capsule);
  transition: background-color .4s ease;
}

.logo { display: flex; align-items: center; height: 52px; padding-inline: 22px; }
.logo img { height: 26px; width: auto; }

.nav { display: flex; gap: 2px; padding: 5px; margin-inline: auto; }
.nav a {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 42px;
  padding-inline: 18px;
  border-radius: var(--radius-pill);
  color: var(--color-muted);
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  transition: background-color .3s ease, color .2s ease;
}
.nav a:hover { color: var(--color-ink); }
.nav a[aria-current='true'] {
  background: var(--color-field);
  color: var(--color-field-ink);
}
.nav svg { width: 20px; height: 20px; fill: currentColor; }

.tools { display: flex; align-items: center; gap: 6px; padding: 5px; }
.tools .icon-btn { width: 42px; height: 42px; }

@media (max-width: 1024px) {
  .nav a { padding-inline: 12px; font-size: 0; gap: 0; }
}
@media (max-width: 640px) {
  .nav, .tools .btn { display: none; }
  .logo { height: 46px; padding-inline: 18px; }
  .tools { margin-left: auto; padding: 2px; }
}
```

- Scroll spy sets `aria-current="true"` on the link whose section crosses `scrollY + innerHeight * .35`.
- On the `night` section, add `data-over-dark="true"` to `<html>`; the capsule token darkens and nav text switches to `--color-night-*`.
- Sign-in/action button in the tools capsule uses a 42px height, 22px horizontal padding, 16px semibold.

### 6.2 Buttons

```css
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 42px;
  padding-inline: 22px;
  border: 0;
  border-radius: var(--radius-pill);
  background: var(--color-accent);
  color: var(--color-accent-ink);
  font: 600 16px/1 var(--font-sans);
  cursor: pointer;
  text-decoration: none;
  transition:
    translate .18s var(--ease-glide),
    scale .18s var(--ease-glide),
    background-color .4s ease,
    color .4s ease;
}
.btn:hover { translate: 0 -2px; }
.btn:active { translate: 0 0; scale: .97; }
.btn:disabled { opacity: .38; cursor: default; }

.btn--lg { height: 58px; padding-inline: 30px; font-size: 18px; }
.btn--text {
  height: auto;
  padding: 0;
  background: none;
  color: inherit;
  text-decoration: underline;
  text-decoration-thickness: 2px;
  text-underline-offset: 6px;
  text-decoration-color: color-mix(in oklab, currentColor 30%, transparent);
}
.btn--text:hover { text-decoration-color: currentColor; }

.icon-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border: 0;
  border-radius: 50%;
  background: transparent;
  color: inherit;
  cursor: pointer;
  transition: background-color .2s ease, color .2s ease, scale .15s ease;
}
.icon-btn:hover { background: var(--color-field); }
.icon-btn:active { scale: .92; }

.play-btn {
  width: 76px;
  height: 76px;
  border: 0;
  border-radius: 50%;
  background: var(--color-accent);
  color: var(--color-accent-ink);
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: background-color .4s ease, scale .15s ease;
}
.play-btn:active { scale: .92; }
```

- Primary hero action: 58px tall, 30px sides, 18px semibold.
- Nav / compact action: 42px tall.
- OS download CTA: 44px tall, 22px sides, 16px.
- Press feedback is a scale of `.92–.97`, never a colour flash.
- Hover lifts primary buttons 2px; cards/links never lift more than that.

### 6.3 Kbd

```css
kbd {
  display: inline-grid;
  place-items: center;
  min-width: 32px;
  height: 32px;
  padding-inline: 10px;
  border-radius: 10px;
  background: var(--color-field);
  color: var(--color-field-ink);
  font: 600 14px/1 var(--font-sans);
}
```

Rows are 14px text with a 12px vertical padding and 14px radius; hover fills `bg`.

### 6.4 Switch

```css
.switch {
  display: grid;
  place-items: center;
  width: 52px;
  height: 32px;
  padding: 0 20px 0 0;
  border: 0;
  border-radius: 16px;
  background: var(--color-field);
  color: var(--color-muted);
  cursor: pointer;
  transition: background-color .4s ease, padding .25s var(--ease-glide);
}
.switch[aria-checked='true'] {
  background: var(--color-accent);
  color: var(--color-accent-ink);
  padding: 0 0 0 20px;
}
.switch svg {
  width: 18px;
  height: 18px;
  padding: 3px;
  border-radius: 50%;
  background: var(--color-muted);
  fill: var(--color-muted);
}
.switch[aria-checked='true'] svg {
  background: var(--color-accent-ink);
  fill: var(--color-accent);
}
```

The knob is just a check icon with a padded circular background. The “slide” is a padding swap, which means no absolute positioning and no width math.

### 6.5 Segmented control

```css
.segmented {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;
  font-size: 14px;
  font-weight: 500;
}
.segmented > * {
  padding-block: 12px;
  border-radius: var(--radius-pill);
  transition: background-color .4s ease;
}
.segmented > [aria-selected='true'] {
  background: var(--color-field);
  font-weight: 600;
}
```

Used for **Up next / Lyrics / Related**. The active pill is `field`; the container is `bg-soft`.

### 6.6 Cards

```css
.card {
  border-radius: var(--radius-card);
  background: var(--color-bg-soft);
  padding: clamp(28px, 3.4vw, 52px);
  transition: background-color .4s ease;
}
.card--split { display: flex; flex-direction: column; justify-content: space-between; gap: 32px; }
.card h3 { font-size: var(--text-h3); line-height: 1.08; letter-spacing: -.03em; text-wrap: balance; }
.card p { margin-top: 12px; max-width: 34ch; }
```

**Download card**

```css
.os-card {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  gap: 6px 24px;
  padding: 26px 30px;
  border-radius: var(--radius-card);
  background: var(--color-bg-soft);
  text-decoration: none;
  transition: background-color .3s ease, translate .2s var(--ease-glide);
}
.os-card:hover { translate: 6px 0; background: var(--color-field); }
.os-card h3 { font-size: var(--text-h3); line-height: 1.05; letter-spacing: -.04em; }
.os-card p { max-width: 44ch; color: var(--color-muted); }
.os-card .btn { grid-column: 2; grid-row: 1 / span 2; height: 44px; }
.os-card[data-recommended='true'] { order: -1; background: var(--color-field); }

@media (max-width: 640px) {
  .os-card { grid-template-columns: 1fr; padding: 22px; }
  .os-card .btn { grid-column: 1; grid-row: auto; margin-top: 12px; justify-content: center; }
}
```

**Tour tab**

```css
.tour-tab {
  display: block;
  width: 100%;
  padding: 18px 22px;
  border: 0;
  border-radius: 20px;
  background: transparent;
  color: inherit;
  text-align: left;
  cursor: pointer;
  transition: background-color .25s ease;
}
.tour-tab[aria-selected='true'] { background: var(--color-bg-soft); }
.tour-tab h3 {
  font-size: var(--text-h3);
  line-height: 1.1;
  letter-spacing: -.035em;
  color: var(--color-muted);
  transition: color .2s ease;
}
.tour-tab:hover h3,
.tour-tab[aria-selected='true'] h3 { color: var(--color-ink); }

.tour-tab p {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows .4s var(--ease-glide);
}
.tour-tab[aria-selected='true'] p { grid-template-rows: 1fr; }
.tour-tab p > span { overflow: hidden; }
```

The description opens with the `grid-template-rows: 0fr → 1fr` trick. It is the safest way to animate to intrinsic height.

**Tour progress**

```css
.tour-progress {
  display: block;
  height: 4px;
  margin-top: 16px;
  border-radius: 4px;
  overflow: hidden;
  background: color-mix(in oklab, var(--color-accent) 18%, transparent);
  opacity: 0;
  transition: opacity .2s ease;
}
.tour-tab[aria-selected='true'] .tour-progress { opacity: 1; }
.tour-progress::after {
  content: '';
  display: block;
  height: 100%;
  background: var(--color-accent);
  transform: scaleX(0);
  transform-origin: left;
}
.tour.auto .tour-tab[aria-selected='true'] .tour-progress::after {
  animation: tab-fill 6s linear forwards;
}
@keyframes tab-fill { to { transform: scaleX(1); } }
```

### 6.7 App window frame

```html
<div class="app-window">
  <aside class="app-rail">…</aside>
  <div class="app-pane">
    <span class="traffic"><i></i><i></i><i></i></span>
    …
  </div>
</div>
```

```css
.app-window {
  display: grid;
  grid-template-columns: 92px minmax(0, 1fr);
  overflow: hidden;
  border-radius: 26px 26px 0 0;
  background: var(--color-bg-soft);
  color: var(--color-ink);
  transition: background-color .4s ease;
}
.app-rail {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 22px;
  padding: 56px 0 20px;
  font-size: 13px;
  font-weight: 500;
}
.app-pane {
  position: relative;
  margin: 12px 12px 0;
  border-radius: 22px;
  background: var(--color-bg);
  padding: 26px 28px 28px;
  transition: background-color .4s ease;
}
.traffic { position: absolute; top: -2px; left: -80px; display: flex; gap: 8px; }
.traffic i { width: 12px; height: 12px; border-radius: 50%; }
.traffic i:nth-child(1) { background: #ff5f57; }
.traffic i:nth-child(2) { background: #febc2e; }
.traffic i:nth-child(3) { background: #28c840; }

@media (max-width: 1024px) {
  .app-window { grid-template-columns: 1fr; }
  .app-rail { display: none; }
  .app-pane { margin: 10px; padding-inline: 12px; }
}
@media (max-width: 640px) {
  .app-pane { margin: 6px; padding: 16px 12px 12px; }
}
```

The mockup is **real interactive UI**, not a screenshot. That is the second-biggest reason the page feels expensive. If time is short, make one half interactive and keep the other static, but do not fake the whole thing with an image.

### 6.8 Cover ring and queue rows

```css
.cover {
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: 26px;
  background: var(--color-field);
  box-shadow: var(--shadow-cover);
}
.queue-row {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 28px;
  align-items: center;
  gap: 14px;
  padding: 6px 10px 6px 6px;
  border-radius: 18px;
  transition: background-color .25s ease;
}
.queue-row:hover { background: color-mix(in oklab, var(--color-field) 45%, transparent); }
.queue-row[data-current='true'] { background: var(--color-field); }
.queue-row img { width: 56px; height: 56px; border-radius: 12px; object-fit: cover; }
```

### 6.9 Memory dots

The comparison rows are the most “designed” data visual on the page. One dot = 20 MB. Accent dots for the product, ink dots for the browser, muted dots for the part that grows with use.

```css
.mem-row {
  display: grid;
  grid-template-columns: 230px minmax(0, 1fr) clamp(220px, 26vw, 360px);
  align-items: center;
  gap: 32px;
}
.mem-row__dots {
  display: grid;
  grid-template-columns: repeat(20, 1fr);
  gap: clamp(5px, .8vw, 12px);
}
.mem-row__dots i {
  aspect-ratio: 1;
  border-radius: 50%;
  background: var(--color-accent);
  opacity: 0;
  transform: scale(.6);
  transition:
    transform .5s var(--ease-glide),
    opacity .4s ease,
    background-color .4s ease;
  transition-delay: calc(var(--i) * 24ms);
}
.mem-row__dots.in i { opacity: 1; transform: none; }
.mem-row__dots--browser i:nth-child(n+17) { background: var(--color-muted); }
.mem-row__dots--browser.in i:nth-child(n+17) { opacity: .32; }

.mem-row__meta { color: var(--color-muted); }

.mem-row__value {
  text-align: right;
  font-size: clamp(38px, 5.4vw, 80px);
  line-height: 1;
  font-weight: 600;
  letter-spacing: -.05em;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}
.mem-row__value small {
  margin-left: 6px;
  font-size: .34em;
  font-weight: 500;
  letter-spacing: 0;
  color: var(--color-muted);
}

@media (max-width: 1024px) {
  .mem-row {
    grid-template-columns: 1fr auto;
    gap: 4px 24px;
  }
  .mem-row__dots {
    grid-column: 1 / -1;
    grid-row: 2;
    grid-template-columns: repeat(10, 1fr);
  }
}
```

Markup:

```html
<div class="mem-row">
  <div>
    <strong>Meiro</strong>
    <span class="mem-row__meta">Typical use</span>
  </div>
  <div class="mem-row__dots" aria-hidden="true">
    <i style="--i: 0"></i><i style="--i: 1"></i>…
  </div>
  <div class="mem-row__value"><span data-to="100">100</span><small>MB</small></div>
</div>
```

Set `--i` per dot (0–39) for the 24ms stagger, and add `.in` from the same IntersectionObserver that reveals the section. Do not make the dots a canvas; CSS handles it, and screen readers get one text summary instead.

### 6.10 Handwritten annotation

One line, rotated ~4°, in Caveat, with a hand-drawn SVG arrow. Position it outside the content edge so it feels like a note on the page.

```css
.annotation {
  position: absolute;
  top: -88px;
  right: 4%;
  max-width: 24ch;
  rotate: -4deg;
  font-family: var(--font-hand);
  font-size: clamp(24px, 2.4vw, 34px);
  font-weight: 600;
  line-height: 1;
  text-align: right;
}
.annotation svg {
  position: absolute;
  top: 40px;
  left: -64px;
  width: 70px;
  height: 54px;
  rotate: 8deg;
  fill: none;
  stroke: currentColor;
  stroke-width: 3.2;
  stroke-linecap: round;
  stroke-linejoin: round;
}
```

### 6.11 Giant masked wordmark

```css
.footer-mark {
  margin-top: clamp(-130px, -9vw, -50px);
  max-height: clamp(130px, 27vw, 380px);
  overflow: hidden;
  mask-image: linear-gradient(to bottom, #000 0%, rgb(0 0 0 / .55) 45%, transparent 92%);
}
.footer-mark img {
  width: 100%;
  height: auto;
  opacity: 0;
  translate: 0 36px;
  transition: opacity 1.4s ease, translate 1.4s var(--ease-glide);
}
.footer-mark.in img { opacity: .4; translate: 0 0; }
```

It is cropped by the viewport and faded out, not placed as a normal logo. Keep it decorative (`aria-hidden="true"`) and use the real logo in the footer blurb.

### 6.12 Icons and imagery

- **Icons:** Material-style 24×24 paths, `fill: currentColor` for nav/player icons. System icons (moon, sun, download) are 24×24 with `stroke-width: 1.8–1.9`, round caps and joins. Sizes are 16, 18, 20, 22, 24, 34 and 44px; the play glyph is 34px inside a 76px circle.
- **Avoid icon fonts** and mixed icon families. Inline SVG paths keep the weight controllable and avoid a flash of missing glyphs.
- **Album art:** square, 1:1, at least 760×760 for a 380px cover, WebP/AVIF. Apply `object-fit: cover` and a solid `field` background so transparent PNGs do not flash.
- **App screenshots:** 1440×888 (or 2× that), WebP, shown at `aspect-ratio: 1440/888`. They sit on `field` and get `rounded-card`.
- **Wordmark:** SVG, two colour variants for light/dark. Give every image explicit `width`/`height` to avoid layout shift.
- **No stock photography, no gradients as decoration, no glassmorphism.** Depth comes from surface colour and the ring shadow. The only gradient is the footer wordmark mask.

---

## 7. Motion system

### 7.1 Tokens

```css
:root {
  --ease-glide: cubic-bezier(.2, .7, .2, 1); /* the house curve */
  --dur-tap: .15s;
  --dur-control: .2s;
  --dur-surface: .4s;
  --dur-tab: .55s;
  --dur-reveal-opacity: .7s;
  --dur-reveal-transform: .8s;
}
```

| Moment | Property | Duration / delay | Easing |
|---|---|---|---|
| Press feedback | `scale` | 150ms | ease |
| Hover lift | `translate` | 180ms | glide |
| Button/card colour | `background-color` | 200–400ms | ease |
| Theme / hue change | `background-color, color, fill, stroke` | 400ms | ease |
| Section reveal | opacity .7s, translateY 28px .8s | delay `--d * 80ms` | ease / glide |
| Memory dots | scale .6→1, opacity 0→1 | 500/400ms, 24ms stagger | glide / ease |
| Strike-through | `scaleX` 0→1 | 700ms, 300ms delay | glide |
| Headline “bloat” strike | fade + strike | fade .7s @1.3s, strike .7s @.9s | ease / glide |
| Tour auto-advance | progress scaleX | 6s linear | linear |
| Footer wordmark | opacity/translate | 1.4s | ease / glide |

### 7.2 Scroll reveal

```css
.js .reveal {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity .7s ease, transform .8s var(--ease-glide);
  transition-delay: calc(var(--d, 0) * 80ms);
}
.js .reveal.in { opacity: 1; transform: none; }
```

```js
// action: use:reveal
export function reveal(node, { delay = 0, rootMargin = '0px 0px -10% 0px' } = {}) {
  node.classList.add('reveal');
  node.style.setProperty('--d', delay);

  if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
    node.classList.add('in');
    return;
  }
  const io = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting) return;
      node.classList.add('in');
      io.disconnect();
    },
    { rootMargin, threshold: 0.12 }
  );
  io.observe(node);
  return { destroy: () => io.disconnect() };
}
```

- Reveal **once**, then unobserve.
- Stagger by sections, not by every element. Two or three items per group is enough.
- Never animate more than ~12 elements at once.

### 7.3 Counters

```js
export function countUp(el, to, duration = 1000) {
  const start = performance.now();
  const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
  function frame(now) {
    const t = Math.min(1, (now - start) / duration);
    el.textContent = String(Math.round(to * easeOutCubic(t)));
    if (t < 1) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}
```

Numbers are **read from the DOM** (`data-to`), so SSR shows the final value and the animation is an enhancement. Add `tabular-nums`.

### 7.4 “What we leave out” strike

```css
.strike-item .word {
  opacity: 1;
  transition: opacity .6s ease .45s;
}
.strike-item .word::after {
  content: '';
  position: absolute;
  left: -.04em;
  right: -.04em;
  top: 54%;
  height: .085em;
  border-radius: 99px;
  background: var(--color-night-accent);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform .7s var(--ease-glide) .3s, background-color .4s ease;
}
.strike-item.in .word { opacity: .4; }
.strike-item.in .word::after { transform: scaleX(1); }
```

Use `::after` on an inline-block span. Keep the strike as the only “destructive” motion on the page.

### 7.5 Reduced motion

```css
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after {
    transition-duration: .01ms !important;
    transition-delay: 0s !important;
    animation: none !important;
  }
  .js .reveal { opacity: 1; transform: none; }
}
```

Also skip counters, auto-rotating tabs and the strike animation in JS when the media query matches. Do not merely slow them down.

### 7.6 Performance rules

- Animate **transform, opacity, background-color, color, fill, stroke** only.
- The `grid-template-rows: 0fr → 1fr` description is the only layout animation; keep it inside a small card.
- Prefer one transition on a shared property over many per-element transitions.
- Do not animate the hue custom property directly; animate the resulting `background-color` / `color` on the surfaces that need it. (The original declares `:root { transition: --h .9s, --c .9s }`, which only works if `@property` is registered and repaints the world every frame.)
- Respect `content-visibility` only for long pages, not for the hero.

---

## 8. Theme and hue engine

### 8.1 Pre-paint script

Add these to `<head>`:

```html
<meta name="color-scheme" content="light dark" />
<meta name="theme-color" content="#16111a" />
```

Then put this inline in `app.html` before the first paint. It avoids a white flash and sets the starting hue before CSS resolves.

```html
<script>
  (function () {
    var root = document.documentElement;
    var h = 225, c = 0.1;
    root.style.setProperty('--h', h);
    root.style.setProperty('--c', c);

    var theme;
    try { theme = localStorage.getItem('meiro-theme'); } catch (e) {}
    if (theme !== 'light' && theme !== 'dark') {
      theme = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    root.dataset.theme = theme;
    root.classList.add('js');

    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = theme === 'dark' ? '#16111a' : '#fbf8f9';
  })();
</script>
```

- `class="js"` is what gates the reveal styles, so content is visible without JavaScript.
- Persist the user's choice under one key, e.g. `meiro-theme`.
- Update `<meta name="theme-color">` when the theme changes.
- Listen to `prefers-color-scheme` changes only when the user has not chosen manually.

### 8.2 Theme store (Svelte 5)

```js
// src/lib/theme.svelte.js
export const theme = $state({ current: 'light' });

export function applyTheme(next, persist = true) {
  theme.current = next;
  document.documentElement.dataset.theme = next;

  if (persist) {
    try { localStorage.setItem('meiro-theme', next); } catch {}
  }
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.content = next === 'dark' ? '#16111a' : '#fbf8f9';
}

export function initTheme() {
  theme.current = document.documentElement.dataset.theme || 'light';
  matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    let saved = null;
    try { saved = localStorage.getItem('meiro-theme'); } catch {}
    if (!saved) applyTheme(e.matches ? 'dark' : 'light', false);
  });
}
```

```svelte
<!-- src/lib/components/ThemeToggle.svelte -->
<script>
  import { theme, applyTheme } from '$lib/theme.svelte.js';
  const dark = $derived(theme.current === 'dark');
</script>

<button
  class="icon-btn"
  aria-pressed={dark}
  aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
  onclick={() => applyTheme(dark ? 'light' : 'dark')}
>
  {#if dark}
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  {:else}
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M21 12.8A8.5 8.5 0 1 1 11.2 3a6.5 6.5 0 0 0 9.8 9.8Z" />
    </svg>
  {/if}
</button>
```

### 8.3 Hue store

```js
// src/lib/hue.svelte.js
export const hue = $state({ h: 225, c: 0.1 });

export function setHue(h, c = hue.c) {
  hue.h = h;
  hue.c = c;
  const root = document.documentElement;
  root.style.setProperty('--h', String(h));
  root.style.setProperty('--c', String(c));
}
```

Call `setHue(75, 0.12)` when the user picks a track. Every element with `transition: background-color .4s` will cross-fade for free. Keep a static hue for marketing pages unless the product genuinely owns a colour token.

### 8.4 Over-dark detector

```js
// src/lib/over-dark.js
export function watchOverDark(id = 'night-section') {
  const night = document.getElementById(id);
  if (!night) return () => {};

  const update = () => {
    const y = scrollY + 73;
    const over = y >= night.offsetTop && y < night.offsetTop + night.offsetHeight;
    if (over) document.documentElement.dataset.overDark = 'true';
    else delete document.documentElement.dataset.overDark;
  };

  addEventListener('scroll', update, { passive: true });
  addEventListener('resize', update);
  update();
  return () => {
    removeEventListener('scroll', update);
    removeEventListener('resize', update);
  };
}
```

### 8.5 Scroll spy

```js
export function watchSpy(onChange) {
  const links = [...document.querySelectorAll('[data-spy]')];

  const update = () => {
    const line = scrollY + innerHeight * 0.35;
    let active = null;
    for (const link of links) {
      const section = document.querySelector(link.getAttribute('href'));
      if (section && line >= section.offsetTop && line < section.offsetTop + section.offsetHeight) {
        active = link;
      }
    }
    for (const link of links) {
      link.setAttribute('aria-current', String(link === active));
    }
    if (active) onChange?.(active.getAttribute('href').slice(1));
  };

  addEventListener('scroll', update, { passive: true });
  update();
  return () => removeEventListener('scroll', update);
}
```

---

## 9. Accessibility

- **Contrast:** all body pairs exceed WCAG AA by a wide margin (see table). Keep `muted` at ≥4.5:1; never use `accent` for long text.
- **Focus:** 2px accent outline, 3px offset. On `night`, override with `--color-night-accent`.
- **Hit targets:** nav links 42px, icon buttons 44px, play 76px, switches 52×32. Do not shrink the icon button below 44px on touch.
- **Semantics:**
  - Nav = `<nav aria-label="Sections">` + `aria-current`.
  - Theme toggle = `aria-pressed` + dynamic `aria-label`.
  - Tabs = `role="tablist"`/`role="tab"`/`aria-selected`; or buttons with `aria-selected` if you also manage panels.
  - Switch = `role="switch"` + `aria-checked` + `aria-labelledby`.
  - Sliders = `role="slider"` + `aria-valuemin/max/now` + arrow-key support.
  - Equalizer is decorative: `aria-hidden="true"` plus a text summary.
  - Decorative screenshots have `alt=""`; the product name and one-line description carry meaning.
- **Motion:** respect `prefers-reduced-motion` in both CSS and JS.
- **Zoom:** do not lock the viewport; body remains usable at 200% text zoom because widths are `ch`/`clamp` based.
- **Keyboard:** visible focus on every interactive element; the segmented control and tabs respond to arrows; the mobile nav is not hidden from screen readers if it contains the only navigation.

---

## 10. Copy voice

The design is quiet, so the words do the selling. Keep them:

- **Short declarative sentences.** “A native player with no browser inside. No ads, about 100 MB.”
- **Specific numbers.** “about 100 MB”, “300–800 MB”, “3:34”. Numbers are more convincing than adjectives.
- **Second person, present tense.** “Pick a preset and the bands move.”
- **One dry joke, maximum.** “try clicking around, it's real!” is the only playful line and it is handwritten, which excuses it.
- **Sentence case everywhere.** No Title Case headings, no ALL CAPS.
- **No feature-list adjectives** (“powerful”, “seamless”, “next-generation”). Show the feature with a number or an interaction instead.
- **Legal caveats stay small and grey**, not hidden.

---

## 11. Svelte 5 implementation

### 11.1 File tree

```
src/
  app.html
  app.css                 # tokens + base + motion
  lib/
    theme.svelte.js
    hue.svelte.js
    spy.js
    over-dark.js
    actions/reveal.js
    components/
      Button.svelte
      IconButton.svelte
      CapsuleNav.svelte
      ThemeToggle.svelte
      SectionHeader.svelte
      Kbd.svelte
      Switch.svelte
      TourTabs.svelte
  routes/
    +layout.svelte
    +page.svelte
```

### 11.2 `app.css` (complete core)

```css
@font-face {
  font-family: 'Google Sans';
  src: url('/fonts/GoogleSans.woff2') format('woff2');
  font-weight: 100 900;
  font-display: swap;
}
@font-face {
  font-family: 'Caveat';
  src: url('/fonts/Caveat.woff2') format('woff2');
  font-weight: 400 700;
  font-display: swap;
}

:root {
  color-scheme: light;
  --h: 225;
  --c: .1;
  --head: 72px;
  --gap: clamp(112px, 13vw, 200px);
  --font-sans: 'Google Sans', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
  --font-hand: 'Caveat', cursive;

  --text-display: clamp(40px, 6.4vw, 96px);
  --text-h2: clamp(38px, 5.4vw, 80px);
  --text-h3: clamp(24px, 2.6vw, 36px);
  --text-lead: clamp(18px, 1.5vw, 21px);
  --text-small: 14px;

  --radius-card: 28px;
  --radius-pill: 999px;
  --radius-circle: 50%;
  --ease-glide: cubic-bezier(.2, .7, .2, 1);

  --color-bg:        oklch(.985 calc(var(--c) * .07) var(--h));
  --color-bg-soft:   oklch(.955 calc(var(--c) * .12) var(--h));
  --color-field:     oklch(.91  calc(var(--c) * .3)  var(--h));
  --color-night:     oklch(.17  calc(var(--c) * .2)  var(--h));
  --color-ink:       oklch(.21  calc(var(--c) * .12) var(--h));
  --color-muted:     oklch(.44  calc(var(--c) * .14) var(--h));
  --color-field-ink: oklch(.24  calc(var(--c) * .45) var(--h));
  --color-accent:     oklch(.47 calc(var(--c) * 1)   var(--h));
  --color-accent-ink: oklch(.99 0 0);
  --color-night-ink:    oklch(.96 calc(var(--c) * .05)  var(--h));
  --color-night-muted:  oklch(.76 calc(var(--c) * .12)  var(--h));
  --color-night-accent: oklch(.74 calc(var(--c) * 1.05) var(--h));
  --color-night-field:  oklch(.34 calc(var(--c) * .5)   var(--h));
  --color-capsule: #fff;

  --shadow-capsule:
    0 0 0 1px color-mix(in oklab, var(--color-ink) 8%, transparent),
    0 10px 30px -18px oklch(.2 .05 var(--h) / .5);
  --shadow-cover:
    0 0 0 4px var(--color-bg),
    0 0 0 5px var(--color-field);
}

:root[data-theme='dark'] {
  color-scheme: dark;
  --color-bg:        oklch(.175 calc(var(--c) * .12) var(--h));
  --color-bg-soft:   oklch(.215 calc(var(--c) * .22) var(--h));
  --color-field:     oklch(.3   calc(var(--c) * .4)  var(--h));
  --color-night:     oklch(.13  calc(var(--c) * .15) var(--h));
  --color-ink:       oklch(.96 calc(var(--c) * .04) var(--h));
  --color-muted:     oklch(.76 calc(var(--c) * .1)  var(--h));
  --color-field-ink: oklch(.95 calc(var(--c) * .1)  var(--h));
  --color-accent:     oklch(.82 calc(var(--c) * .85) var(--h));
  --color-accent-ink: oklch(.2  calc(var(--c) * .3)  var(--h));
  --color-night-ink:    oklch(.96 calc(var(--c) * .05)  var(--h));
  --color-night-muted:  oklch(.76 calc(var(--c) * .12)  var(--h));
  --color-night-accent: oklch(.74 calc(var(--c) * 1.05) var(--h));
  --color-night-field:  oklch(.34 calc(var(--c) * .5)   var(--h));
  --color-capsule: color-mix(in oklab, var(--color-bg-soft) 50%, var(--color-field));
}

:root[data-over-dark='true'] {
  --color-capsule: oklch(.24 calc(var(--c) * .3) var(--h));
}

* { box-sizing: border-box; }

html {
  scroll-behavior: smooth;
  scroll-padding-top: calc(var(--head) + 24px);
  background: var(--color-bg);
}

body {
  margin: 0;
  background: var(--color-bg);
  color: var(--color-ink);
  font: 400 18px/1.55 var(--font-sans);
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  overflow-x: hidden;
}

h1, h2, h3, p, ul, ol, figure { margin: 0; padding: 0; }
ul, ol { list-style: none; }
img { display: block; max-width: 100%; height: auto; }
a { color: inherit; text-underline-offset: 3px; }
button { font: inherit; color: inherit; }

::selection { background: var(--color-field); color: var(--color-field-ink); }
:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 3px;
  border-radius: 6px;
}

.wrap { width: min(1240px, 100% - 48px); margin-inline: auto; }
.section { padding-block: var(--gap); }
.section--field { background: var(--color-field); color: var(--color-field-ink); }
.section--night { background: var(--color-night); color: var(--color-night-ink); }

@media (max-width: 560px) {
  :root { --head: 60px; --gap: 80px; }
  .wrap { width: calc(100% - 32px); }
}

/* motion primitives */
.js .reveal {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity .7s ease, transform .8s var(--ease-glide);
  transition-delay: calc(var(--d, 0) * 80ms);
}
.js .reveal.in { opacity: 1; transform: none; }

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after {
    transition-duration: .01ms !important;
    transition-delay: 0s !important;
    animation: none !important;
  }
  .js .reveal { opacity: 1; transform: none; }
}
```

### 11.3 Components

```svelte
<!-- src/lib/components/Button.svelte -->
<script>
  let { href, variant = 'primary', size = 'md', children } = $props();
</script>

{#if href}
  <a {href} class="btn btn--{variant} btn--{size}">{@render children()}</a>
{:else}
  <button class="btn btn--{variant} btn--{size}" type="button">{@render children()}</button>
{/if}
```

```svelte
<!-- src/lib/components/IconButton.svelte -->
<script>
  let { label, pressed, onclick, children } = $props();
</script>

<button class="icon-btn" aria-label={label} aria-pressed={pressed} {onclick}>
  {@render children()}
</button>
```

```svelte
<!-- src/lib/components/SectionHeader.svelte -->
<script>
  let { title, lead } = $props();
</script>

<header class="section-head">
  <h2 class="reveal">{title}</h2>
  {#if lead}
    <p class="reveal section-lead" style="--d: 1">{lead}</p>
  {/if}
</header>

<style>
  .section-head { margin-bottom: clamp(48px, 6vw, 88px); }
  h2 {
    max-width: 17ch;
    font-size: var(--text-h2);
    line-height: .98;
    letter-spacing: -.045em;
    font-weight: 600;
    text-wrap: balance;
  }
  .section-lead {
    margin-top: 28px;
    max-width: 46ch;
    font-size: var(--text-lead);
    line-height: 1.35;
    text-wrap: pretty;
  }
</style>
```

```svelte
<!-- src/lib/components/CapsuleNav.svelte -->
<script>
  import ThemeToggle from './ThemeToggle.svelte';
  import { onMount } from 'svelte';
  import { watchSpy } from '$lib/spy.js';

  let active = $state('');

  onMount(() => watchSpy((id) => (active = id)));

  const items = [
    { id: 'memory', label: 'Memory', icon: '…' },
    { id: 'screens', label: 'Screens', icon: '…' },
    { id: 'colour', label: 'Colour', icon: '…' },
    { id: 'details', label: 'Details', icon: '…' }
  ];
</script>

<header class="site-head">
  <div class="wrap site-head__row">
    <a class="capsule logo" href="#top" aria-label="Back to top">
      <img src="/wordmark.svg" alt="Meiro" />
    </a>

    <nav class="capsule nav" aria-label="Sections">
      {#each items as item}
        <a href="#{item.id}" aria-current={active === item.id}>
          <svg aria-hidden="true"><use href="#{item.icon}" /></svg>
          <span>{item.label}</span>
        </a>
      {/each}
    </nav>

    <div class="capsule tools">
      <ThemeToggle />
      <a class="btn" href="#download">Download</a>
    </div>
  </div>
</header>
```

Add the nav CSS from §6.1 to this component's `<style>` block (or global `app.css`).

```svelte
<!-- src/lib/components/Kbd.svelte -->
<script>
  let { children } = $props();
</script>
<kbd>{@render children()}</kbd>
```

```svelte
<!-- src/lib/components/Switch.svelte -->
<script>
  let { checked = $bindable(false), label, onclick } = $props();
</script>

<button
  class="switch"
  role="switch"
  aria-checked={checked}
  aria-label={label}
  {onclick}
>
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
  </svg>
</button>
```

```svelte
<!-- src/lib/components/TourTabs.svelte -->
<script>
  let { items, interval = 6000 } = $props();
  let index = $state(0);
  let auto = $state(true);

  function select(i) {
    index = i;
    auto = false;
  }

  $effect(() => {
    if (!auto) return;
    const id = setInterval(() => {
      index = (index + 1) % items.length;
    }, interval);
    return () => clearInterval(id);
  });
</script>

<div class="tour" class:auto>
  <div class="tour-tabs">
    {#each items as item, i}
      <button
        class="tour-tab"
        aria-selected={index === i}
        onclick={() => select(i)}
      >
        <h3>{item.title}</h3>
        <p><span>{item.description}</span></p>
        <span class="tour-progress"></span>
      </button>
    {/each}
  </div>

  <figure class="tour-shot">
    {#each items as item, i}
      <img
        src={item.image}
        alt={item.alt}
        hidden={index !== i}
        width="1440"
        height="888"
      />
    {/each}
  </figure>
</div>
```

The snippet auto-advances from mount and pauses permanently on the first manual click. In production, gate the interval with an IntersectionObserver so it only runs while the tour is visible. Keep the JS interval and the CSS progress animation at the same 6s so the bar and the switch stay in sync.

```svelte
<!-- src/routes/+layout.svelte -->
<script>
  import '../app.css';
  import { onMount } from 'svelte';
  import { initTheme } from '$lib/theme.svelte.js';
  import { watchOverDark } from '$lib/over-dark.js';
  let { children } = $props();

  onMount(() => {
    initTheme();
    return watchOverDark();
  });
</script>

{@render children()}
```

```svelte
<!-- src/routes/+page.svelte -->
<script>
  import CapsuleNav from '$lib/components/CapsuleNav.svelte';
  import SectionHeader from '$lib/components/SectionHeader.svelte';
  import Button from '$lib/components/Button.svelte';
  import { reveal } from '$lib/actions/reveal.js';
</script>

<CapsuleNav />

<main>
  <section id="top" class="section section--field hero">
    <div class="wrap hero__inner">
      <h1 class="reveal">YouTube Music,<br />without the <span class="bloat">bloat</span>.</h1>
      <p class="hero__lead reveal" style="--d: 1">
        A native player with no browser inside. No ads, about 100&nbsp;MB.
      </p>
      <div class="hero__actions reveal" style="--d: 2">
        <Button href="#download" size="lg">Download Meiro</Button>
        <a class="btn btn--text" href="https://github.com/">Source on GitHub</a>
      </div>
    </div>
  </section>

  <section id="memory" class="section">
    <div class="wrap">
      <SectionHeader
        title="A tab keeps growing. Meiro stays put."
        lead="A YouTube Music tab opens around 300 MB, then swells the longer you listen, up to 800. Meiro stays near 100 all day, because it draws its own window instead of carrying Chromium around."
      />
      <!-- comparison rows -->
    </div>
  </section>

  <section id="screens" class="section">
    <div class="wrap">
      <SectionHeader title="A player, not a web page" lead="…" />
      <!-- TourTabs -->
    </div>
  </section>

  <section id="colour" class="section section--field">
    <div class="wrap">
      <SectionHeader title="The cover picks the colour" lead="…" />
      <!-- interactive app window -->
    </div>
  </section>

  <section id="details" class="section">
    <div class="wrap">
      <SectionHeader title="Made to stay open all day" />
      <div class="details-grid">
        <article class="card card--split reveal">…</article>
        <article class="card card--split reveal" style="--d: 1">…</article>
      </div>
    </div>
  </section>

  <section id="download" class="section">
    <div class="wrap download-grid">
      <SectionHeader title="Download Meiro" lead="…" />
      <div class="os-list">…</div>
    </div>
  </section>

  <section id="night-section" class="section section--night">
    <div class="wrap">
      <SectionHeader title="What Meiro leaves out" />
      <ul class="strike-list">…</ul>
    </div>
  </section>
</main>
```

Use `use:reveal` on elements that are not already `.reveal`, and put the section-level `--d` on groups rather than every child.

### 11.4 Layout CSS to add

```css
.hero { padding-top: clamp(120px, 11vw, 168px); overflow: hidden; }
.hero__inner { display: grid; justify-items: center; text-align: center; }
.hero h1 {
  font-size: var(--text-display);
  line-height: .92;
  letter-spacing: -.055em;
  font-weight: 600;
  text-wrap: balance;
}
.hero__lead {
  margin-top: 24px;
  max-width: 34ch;
  font-size: clamp(19px, 1.7vw, 24px);
  line-height: 1.35;
  text-wrap: pretty;
}
.hero__actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 16px 28px;
  margin-top: 32px;
}

.details-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.5fr) minmax(0, 1fr);
  gap: clamp(16px, 2vw, 28px);
}
.download-grid {
  display: grid;
  grid-template-columns: minmax(0, .8fr) minmax(0, 1.2fr);
  align-items: start;
  gap: clamp(40px, 6vw, 96px);
}
.os-list { display: grid; gap: 12px; }

@media (max-width: 1024px) {
  .details-grid, .download-grid { grid-template-columns: 1fr; }
}
```

---

## 12. Reproduction checklist

- [ ] `--h` and `--c` exist; every colour uses `oklch(..., var(--h))`.
- [ ] Both themes are complete; `data-theme` is set before first paint; `color-scheme` follows.
- [ ] Hero and one later band use `field`; one section uses `night`; the rest use `bg`/`bg-soft`.
- [ ] Body 18/1.55. Display 600, `.92`, `-.055em`. h2 max `17ch`.
- [ ] Section spacing is `clamp(112px, 13vw, 200px)` on desktop.
- [ ] Nav, buttons, switches, tabs are pills/circles; no 1px solid borders.
- [ ] Floating chrome has the ring + deep soft shadow.
- [ ] Primary button is the only accent block in view.
- [ ] Reveals: 28px up, `.8s` glide, 80ms stagger, once.
- [ ] Colour changes take 400ms; presses take 150ms; nothing bounces.
- [ ] `prefers-reduced-motion` kills animation and counters.
- [ ] Focus is visible on every control, including on the dark band.
- [ ] Headline copy is ≤ 2 lines, lead ≤ 3 lines, card copy ≤ 4 lines.
- [ ] Works at 390px, 768px, 1024px, 1440px, 1920px.
- [ ] No layout shift when fonts load; wordmark and cover have width/height.
- [ ] One playful detail only (the handwritten annotation).
