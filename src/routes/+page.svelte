<script>
	import CapsuleNav from '#lib/components/CapsuleNav.svelte';
	import SectionHeader from '#lib/components/SectionHeader.svelte';
	import Accordion from '#lib/components/Accordion.svelte';
	import AccordionItem from '#lib/components/AccordionItem.svelte';
	import Annotation from '#lib/components/Annotation.svelte';
	import Badge from '#lib/components/Badge.svelte';
	import Card from '#lib/components/Card.svelte';
	import Stat from '#lib/components/Stat.svelte';
	import Button from '#lib/components/Button.svelte';
	import Dialog from '#lib/components/Dialog.svelte';
	import IconButton from '#lib/components/IconButton.svelte';
	import Input from '#lib/components/Input.svelte';
	import Kbd from '#lib/components/Kbd.svelte';
	import Progress from '#lib/components/Progress.svelte';
	import Select from '#lib/components/Select.svelte';
	import Textarea from '#lib/components/Textarea.svelte';
	import Switch from '#lib/components/Switch.svelte';
	import SegmentedControl from '#lib/components/SegmentedControl.svelte';
	import { setHue } from '#lib/hue.svelte.js';

	const nav = [
		{ href: '#components', label: 'Components' },
		{ href: '#night', label: 'Night' },
		{ href: '/components', label: 'Docs' }
	];

	const plans = [
		{ value: 'solo', label: 'Solo' },
		{ value: 'team', label: 'Team' },
		{ value: 'studio', label: 'Studio' }
	];

	const presets = [
		{ label: 'Blue', h: 225, c: 0.1 },
		{ label: 'Amber', h: 75, c: 0.12 },
		{ label: 'Violet', h: 265, c: 0.11 },
		{ label: 'Red', h: 12, c: 0.14 }
	];
	const presetItems = presets.map(({ h, label }) => ({ value: String(h), label }));

	const layouts = [
		{ value: 'comfortable', label: 'Comfortable' },
		{ value: 'compact', label: 'Compact' },
		{ value: 'list', label: 'List' }
	];

	let preset = $state('225');
	let email = $state('');
	let note = $state('');
	let plan = $state('team');
	let dialogOpen = $state(false);
	let playing = $state(false);
	let lyrics = $state(true);
	let audioOnly = $state(false);
	let layout = $state('comfortable');

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

<main>
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
				lead="Every control is a pill, a circle or a surface — never a 1px border."
			/>

			<div class="grid">
				<article class="card reveal">
					<h3>Button</h3>
					<p>One primary action per view. Press feedback is a scale, never a colour flash.</p>
					<div class="row">
						<Button>Primary</Button>
						<Button size="lg">Large</Button>
						<Button href="#night" disabled>Disabled link</Button>
						<Button variant="text">Text action</Button>
					</div>
				</article>

				<article class="card reveal">
					<h3>Icon button</h3>
					<p>A 44px hit target that fills with <code>field</code> on hover and on press.</p>
					<div class="row">
						<IconButton
							label={playing ? 'Pause' : 'Play'}
							pressed={playing}
							onclick={() => (playing = !playing)}
						>
							{#if playing}
								<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
									<path d="M7 5h4v14H7zm6 0h4v14h-4z" />
								</svg>
							{:else}
								<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
									<path d="M8 5v14l11-7z" />
								</svg>
							{/if}
						</IconButton>
						<IconButton label="Next track">
							<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
								<path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
							</svg>
						</IconButton>
					</div>
				</article>

				<article class="card reveal">
					<h3>Kbd</h3>
					<p>Keyboard hints sit on the field surface with a 10px radius and tabular numerals.</p>
					<div class="row">
						<Kbd>⌘</Kbd>
						<Kbd>K</Kbd>
						<span class="muted">to search</span>
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
					<h3>Textarea</h3>
					<p>Multi-line field with the same label, hint and error wiring as Input.</p>
					<div class="row">
						<Textarea label="Note" bind:value={note} hint="Shown on the invoice." />
					</div>
				</article>

				<article class="card reveal">
					<h3>Select</h3>
					<p>A native select in the field pill, with a chevron instead of the platform arrow.</p>
					<div class="row">
						<Select label="Plan" items={plans} bind:value={plan} hint="Change any time." />
					</div>
				</article>

				<article class="card reveal">
					<h3>Progress</h3>
					<p>Native <code>progress</code>, filled with the accent at the current hue.</p>
					<div class="row">
						<Progress label="Storage" value={64} />
					</div>
				</article>

				<Card
					class="reveal"
					title="Card"
					lead="The surface primitive: flat colour, 28px radius, copy capped at 34ch."
				>
					<div class="row">
						<Badge>bg-soft</Badge>
						<Badge>28px</Badge>
						<Badge>no shadow</Badge>
					</div>
				</Card>

				<article class="card reveal annotation-demo">
					<h3>Annotation</h3>
					<p>A handwritten note, rotated off the grid. The arrow is decoration.</p>
					<Annotation arrow>one line, never two</Annotation>
				</article>

				<article class="card reveal">
					<h3>Badge</h3>
					<p>Small state and version labels. No borders, no uppercase.</p>
					<div class="row">
						<Badge>New</Badge>
						<Badge tone="accent">v0.1</Badge>
					</div>
				</article>

				<article class="card reveal">
					<h3>Accordion</h3>
					<p>Native <code>details</code> with no ARIA re-implementation; content animates via <code>::details-content</code>.</p>
					<div class="row">
						<Accordion>
							<AccordionItem title="Is there a runtime dependency?">
								No. Svelte 5 and CSS only, the platform does the work.
							</AccordionItem>
							<AccordionItem title="Does it respect reduced motion?">
								Yes. The open and close transition is disabled with the rest of the motion.
							</AccordionItem>
						</Accordion>
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

				<article class="card reveal">
					<h3>Switch</h3>
					<p>The knob is a check icon. The “slide” is a padding swap, so no absolute maths.</p>
					<div class="row">
						<Switch bind:checked={lyrics} label="Show lyrics" />
						<span>Lyrics</span>
						<Switch bind:checked={audioOnly} label="Audio only" />
						<span>Audio only</span>
					</div>
				</article>

				<article class="card reveal">
					<h3>Segmented control</h3>
					<p>Native radios, so arrow keys, forms and screen readers work without JavaScript.</p>
					<div class="row">
						<SegmentedControl label="Layout density" items={layouts} bind:value={layout} />
					</div>
				</article>
			</div>
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
			<ul class="strike">
				{#each ['Chromium inside', 'Ads', 'Telemetry'] as item}
					<li class="reveal"><span>{item}</span></li>
				{/each}
			</ul>
		</div>
	</section>
</main>

<footer class="footer">
	<div class="wrap footer__inner">
		<p>Built with Svelte 5 and modern CSS. Tokens and rules from <code>DESIGN.md</code>.</p>
		<p class="muted">One hue · four surfaces · capsule chrome</p>
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

	.annotation-demo {
		padding-left: clamp(80px, 9vw, 120px);
	}

	.strike {
		display: grid;
		gap: 10px;
		margin-top: clamp(40px, 5vw, 64px);
	}

	.strike span {
		position: relative;
		font-size: var(--text-h3);
		font-weight: 600;
		letter-spacing: -0.03em;
		color: var(--color-night-muted);
	}

	.strike span::after {
		content: '';
		position: absolute;
		left: -0.04em;
		right: -0.04em;
		top: 54%;
		height: 0.085em;
		border-radius: 99px;
		background: var(--color-night-accent);
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
