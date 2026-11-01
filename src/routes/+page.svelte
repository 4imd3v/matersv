<script>
	import { Button, Dialog, Input, SectionHeader, Tabs, Timeline, Window } from '#lib/index.js';
	import CapsuleNav from '#lib/components/CapsuleNav.svelte';
	import SegmentedControl from '#lib/components/SegmentedControl.svelte';
	import Dots from '#lib/components/Dots.svelte';
	import Stat from '#lib/components/Stat.svelte';
	import Strike from '#lib/components/Strike.svelte';
	import Wordmark from '#lib/components/Wordmark.svelte';
	import { components } from '../docs/registry.js';
	import { setHue } from '#lib/hue.svelte.js';

	const nav = [
		{ href: '#components', label: 'Components' },
		{ href: '#night', label: 'Night' },
		{ href: '/blocks', label: 'Blocks' },
		{ href: '/components', label: 'Docs' }
	];

	const drawbacks = ['Chromium inside', 'Ads', 'Telemetry'];

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
	<title>Mater — Svelte 5 design system</title>
	<meta
		name="description"
		content="A pure CSS + Svelte 5 design system: one hue, four surfaces, capsule chrome."
	/>
</svelte:head>

<CapsuleNav brand="Mater" items={nav}>
	<Button href="#components">Browse</Button>
</CapsuleNav>

{#snippet windowRail()}
	<span>Home</span>
	<span>Search</span>
	<span>Stats</span>
{/snippet}

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

				<article class="card reveal wide">
					<h3>Window</h3>
					<p>Frame, rail and pane. The chrome dots stay monochrome so the page keeps one hue.</p>
					<div class="window-demo">
						<Window rail={windowRail}>
							<h3>Product tour</h3>
							<p>The mockup is real UI, never a screenshot.</p>
						</Window>
					</div>
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
	<div class="wrap footer__inner">
		<p>Built with Svelte 5 and modern CSS. Tokens and rules from <code>DESIGN.md</code>.</p>
		<p class="muted">One hue · four surfaces · capsule chrome</p>
	</div>
	<div class="wrap footer__mark">
		<Wordmark text="Mater" />
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

	.row span {
		font-size: 15px;
	}

	code {
		font-size: 0.9em;
	}

	.dialog-actions {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		gap: 16px;
		margin-top: 28px;
	}

	.tabs-demo,
	.timeline-demo,
	.window-demo {
		margin-top: 24px;
	}

	.timeline-demo {
		max-width: 420px;
	}

	.wide {
		grid-column: 1 / -1;
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
		padding-block: 72px 96px;
		background: var(--color-bg-soft);
		font-size: 14px;
	}

	.footer__inner {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		gap: 16px 32px;
	}
</style>
