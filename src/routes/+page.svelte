<script>
	import { Annotation, Button, Dialog, Input, SectionHeader, Tabs, Timeline } from '#lib/index.js';
	import CapsuleNav from '#lib/components/CapsuleNav.svelte';
	import SegmentedControl from '#lib/components/SegmentedControl.svelte';
	import Dots from '#lib/components/Dots.svelte';
	import Stat from '#lib/components/Stat.svelte';
	import Strike from '#lib/components/Strike.svelte';
	import Wordmark from '#lib/components/Wordmark.svelte';
	import { components } from '../docs/registry.js';
	// The demo states its own version; read it from the manifest so a release bump shows up here.
	import { version } from '../../package.json';
	import { setHue } from '#lib/hue.svelte.js';

	const nav = [
		{ href: '#components', label: 'Components' },
		{ href: '#night', label: 'Night' },
		{ href: '/blocks', label: 'Blocks' },
		{ href: '/components', label: 'Docs' }
	];

	const drawbacks = ['Chromium inside', 'Ads', 'Telemetry'];

	const footerLinks = [
		{ href: '/components', label: 'Components', external: false },
		{ href: '/blocks', label: 'Blocks', external: false },
		{ href: 'https://github.com/4imd3v/matersv', label: 'GitHub', external: true },
		{ href: 'https://svelte.dev/docs/svelte', label: 'Svelte docs', external: true }
	];

	const presets = [
		{ label: 'Blue', h: 225, c: 0.1 },
		{ label: 'Amber', h: 75, c: 0.12 },
		{ label: 'Violet', h: 265, c: 0.11 },
		{ label: 'Red', h: 12, c: 0.14 }
	];
	const presetItems = presets.map(({ h, label }) => ({ value: String(h), label }));

	let preset = $state('225');
	let email = $state('');
	let tab = $state('specs');
	let dialogOpen = $state(false);

	const releases = [
		{ date: 'March 2026', title: '0.2.0', body: 'Strike, Tabs, Quote, EmptyState.' },
		{ date: 'February 2026', title: '0.1.2', body: 'The first tagged release.' }
	];

	const tabItems = [
		{ value: 'specs', label: 'Specs' },
		{ value: 'reviews', label: 'Reviews' }
	];

	// Demo of the hue engine: two numbers on <html> reskin every token.
	$effect(() => {
		const next = presets.find((item) => String(item.h) === preset);
		if (next) setHue(next.h, next.c);
	});
</script>

<svelte:head>
	<title>MaterSV — Svelte 5 design system</title>
	<meta
		name="description"
		content="A pure CSS + Svelte 5 design system: one hue, four surfaces, capsule chrome."
	/>
</svelte:head>

<CapsuleNav brand="MaterSV" items={nav}>
	<Button href="#components">Browse</Button>
</CapsuleNav>

<main id="main">
	<section id="top" class="section section--field hero">
		<div class="wrap hero__inner">
			<h1 class="reveal">One hue.<br />Four surfaces.<br />No bloat.</h1>
			<p class="lead reveal">
				Svelte 5 and modern CSS: OKLCH tokens, capsule chrome and quiet editorial type.
			</p>
			<div class="hero__actions reveal">
				<Button href="#components" size="lg">See the primitives</Button>
				<Button href="https://svelte.dev/docs/svelte" variant="text" target="_blank" rel="noreferrer">
					Read the Svelte docs
				</Button>
			</div>
			<div class="hero__presets reveal">
				<span class="muted">Accent hue</span>
				<SegmentedControl label="Accent hue" items={presetItems} bind:value={preset} />
			</div>
		</div>
	</section>

	<section id="components" class="section">
		<div class="wrap">
			<SectionHeader
				title="Primitives"
				lead="Actions, fields, surfaces and the top layer. A few of them, here; every one has its own page."
			/>

			<div class="grid">
				<article class="card reveal">
					<h3>Button</h3>
					<p>One primary action per view. Press feedback is a scale, never a colour flash.</p>
					<div class="row">
						<Button>Primary</Button>
						<Button variant="ghost">Secondary</Button>
						<Button variant="text">Text action</Button>
					</div>
				</article>

				<article class="card reveal">
					<h3>Input</h3>
					<p>A filled pill field. Label, hint and error are wired with aria-describedby.</p>
					<div class="row">
						<Input
							label="Email"
							type="email"
							placeholder="you@example.com"
							bind:value={email}
							hint="One issue per month. No spam."
						/>
					</div>
				</article>

				<article class="card reveal">
					<h3>Timeline</h3>
					<p>A dated rail: accent dot, tabular date, then title and body.</p>
					<div class="timeline-demo">
						<Timeline label="Releases" items={releases} />
					</div>
				</article>

				<article class="card reveal">
					<h3>Tabs</h3>
					<p>One panel at a time. Arrow keys, Home and End move and select.</p>
					<div class="tabs-demo">
						<Tabs items={tabItems} bind:value={tab} label="Details">
							{#if tab === 'specs'}
								<p>Pill controls, one hue, no borders.</p>
							{:else}
								<p>No runtime dependencies; the platform does the work.</p>
							{/if}
						</Tabs>
					</div>
				</article>

				<article class="card reveal">
					<h3>Dialog</h3>
					<p>Native modal. Top layer, backdrop, focus trap and Esc come from the platform.</p>
					<div class="row">
						<Button onclick={() => (dialogOpen = true)}>Open dialog</Button>
					</div>
					<Dialog bind:open={dialogOpen} title="Delete workspace?">
						<p>Everything in <strong>Northwind</strong> will be removed. This cannot be undone.</p>
						<div class="dialog-actions">
							<Button variant="text" onclick={() => (dialogOpen = false)}>Cancel</Button>
							<Button onclick={() => (dialogOpen = false)}>Delete</Button>
						</div>
					</Dialog>
				</article>

				<article class="card reveal annotation-demo">
					<h3>Annotation</h3>
					<p>A handwritten note, rotated off the grid. The arrow is decoration.</p>
					<Annotation arrow>one line, never two</Annotation>
				</article>
			</div>

			<p class="more">
				<a href="/components">All {components.length} of them, with props and a code example</a>
			</p>
		</div>
	</section>

	<section id="night" class="section section--night">
		<div class="wrap night">
			<h2 class="reveal">The dark band is a statement, not a card colour.</h2>
			<p class="lead reveal">
				Night stays dark in both themes and keeps the page hue. Use it once per page, for the
				section that should interrupt.
			</p>
			<div class="stats">
				<Stat value={98} suffix="%" label="Lighthouse, all four categories" />
				<Stat value={0} label="Runtime dependencies" />
				<Stat value={4} label="Surfaces, no borders" />
			</div>
			<div class="dots-night reveal">
				<Dots count={20} value={17} />
			</div>
			<div class="strike-wrap reveal">
				<Strike items={drawbacks} />
			</div>
		</div>
	</section>
</main>

<footer class="footer">
	<div class="wrap">
		<div class="top">
			<div class="brand">
				<p class="name">MaterSV</p>
				<p class="blurb">
					A Svelte 5 and pure CSS design system for wide, quiet pages. One hue, four
					surfaces, capsule chrome.
				</p>
				<p class="meta">MIT licensed · v{version}</p>
			</div>

			<nav class="links" aria-label="Footer">
				{#each footerLinks as link (link.label)}
					<a
						href={link.href}
						target={link.external ? '_blank' : undefined}
						rel={link.external ? 'noreferrer' : undefined}>{link.label}</a
					>
				{/each}
			</nav>
		</div>

		<div class="legal">
			<p>© {new Date().getFullYear()} MaterSV</p>
			<p>Built with Svelte 5. No cookies, no analytics.</p>
		</div>
	</div>

	<div class="mark">
		<Wordmark text="MaterSV" />
	</div>
</footer>

<style>
	.hero__inner {
		display: grid;
		justify-items: start;
		gap: 28px;
	}

	h1 {
		max-width: 16ch;
		font-size: var(--text-display);
		line-height: 0.92;
		letter-spacing: -0.055em;
		font-weight: 600;
		text-wrap: balance;
	}

	.hero__actions {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 20px 28px;
	}

	.hero__presets {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 14px;
		margin-top: 8px;
		font-size: 14px;
		font-weight: 500;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(100%, 340px), 1fr));
		gap: clamp(16px, 2vw, 28px);
	}

	/* The grid is a selection, not the catalogue: one line to the full list. */
	.more {
		margin-top: clamp(20px, 2.4vw, 28px);
		font-size: 15px;
	}

	.more a {
		color: var(--color-muted);
		font-weight: 600;
		text-decoration-thickness: 2px;
		text-underline-offset: 4px;
	}

	.more a:hover {
		color: var(--color-ink);
	}

	.row {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 12px;
		margin-top: 24px;
	}

	.dialog-actions {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		gap: 16px;
		margin-top: 28px;
	}

	.tabs-demo,
	.timeline-demo {
		margin-top: 24px;
	}

	.timeline-demo {
		max-width: 420px;
	}

	/* The arrow hangs 60px to the left of the note, so the note steps across. */
	.annotation-demo :global(.annotation) {
		margin-left: 60px;
	}

	.night h2 {
		max-width: 17ch;
		font-size: var(--text-h2);
		line-height: 0.98;
		letter-spacing: -0.045em;
		font-weight: 600;
		text-wrap: balance;
	}

	.night .lead {
		margin-top: 28px;
		opacity: 0.8;
	}

	.stats {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
		gap: clamp(24px, 3vw, 48px);
		max-width: 720px;
		margin-top: clamp(40px, 5vw, 64px);
	}

	.dots-night {
		max-width: 520px;
		margin-top: clamp(40px, 5vw, 64px);
	}

	.strike-wrap {
		margin-top: clamp(40px, 5vw, 64px);
	}

	.footer {
		overflow: hidden;
		padding-top: clamp(56px, 7vw, 88px);
		background: var(--color-bg-soft);
		font-size: 14px;
	}

	.top {
		display: flex;
		flex-wrap: wrap;
		align-items: start;
		justify-content: space-between;
		gap: 32px 56px;
	}

	.brand {
		display: grid;
		gap: 10px;
		max-width: 44ch;
	}

	.name {
		font-size: 22px;
		font-weight: 600;
		letter-spacing: -0.03em;
	}

	.blurb {
		color: var(--color-muted);
		text-wrap: pretty;
	}

	.meta {
		color: var(--color-muted);
		font-size: 14px;
	}

	.links {
		display: flex;
		flex-wrap: wrap;
		gap: 8px 24px;
	}

	.links a {
		color: var(--color-muted);
		font-weight: 600;
		text-decoration: none;
		transition: color var(--dur-control) var(--ease-effects);
	}

	.links a:hover {
		color: var(--color-ink);
		text-decoration: underline;
		text-underline-offset: 4px;
	}

	.legal {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		gap: 8px 24px;
		margin-top: clamp(32px, 4vw, 48px);
		color: var(--color-muted);
	}

	.mark {
		margin-top: clamp(24px, 4vw, 48px);
		margin-bottom: clamp(-40px, -3vw, -16px);
	}
</style>
