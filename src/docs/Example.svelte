<script>
	import {
		Accordion,
		AccordionItem,
		Annotation,
		Badge,
		Button,
		Card,
		Cover,
		Dialog,
		Dots,
		IconButton,
		Input,
		Kbd,
		ListRow,
		Progress,
		SectionHeader,
		SegmentedControl,
		Select,
		Stat,
		Strike,
		Switch,
		Textarea,
		Window,
		ThemeToggle
	} from '#lib/index.js';

	let { slug } = $props();

	let email = $state('');
	let playing = $state(true);
	let lyrics = $state(true);
	let density = $state('comfortable');
	let note = $state('');

	const drawbacks = ['Chromium inside', 'Ads', 'Telemetry'];
	let plan = $state('team');
	let dialogOpen = $state(false);

	const plans = [
		{ value: 'solo', label: 'Solo' },
		{ value: 'team', label: 'Team' },
		{ value: 'studio', label: 'Studio' }
	];

	const densities = [
		{ value: 'comfortable', label: 'Comfortable' },
		{ value: 'compact', label: 'Compact' }
	];
</script>

{#snippet cover()}
	<svg viewBox="0 0 56 56" aria-hidden="true">
		<rect width="56" height="56" fill="currentColor" opacity=".12" />
		<circle cx="28" cy="28" r="10" fill="currentColor" opacity=".3" />
	</svg>
{/snippet}

{#snippet coverArt()}
	<svg viewBox="0 0 760 760" aria-hidden="true">
		<rect width="760" height="760" fill="currentColor" opacity=".08" />
		<circle cx="380" cy="380" r="220" fill="currentColor" opacity=".18" />
		<circle cx="380" cy="380" r="120" fill="currentColor" opacity=".3" />
	</svg>
{/snippet}

{#snippet chevron()}
	<svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
		<path d="M9 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
	</svg>
{/snippet}

{#snippet railNav()}
	<span>Home</span>
	<span>Search</span>
	<span>Stats</span>
{/snippet}

{#if slug === 'button'}
	<div class="row">
		<Button>Primary</Button>
		<Button size="lg">Large</Button>
		<Button variant="text">Text action</Button>
		<Button href="#docs" disabled>Disabled link</Button>
	</div>
{:else if slug === 'iconbutton'}
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
{:else if slug === 'input'}
	<div class="col">
		<Input
			label="Email"
			type="email"
			placeholder="you@example.com"
			bind:value={email}
			hint="One issue per month. No spam."
		/>
	</div>
{:else if slug === 'textarea'}
	<div class="col">
		<Textarea label="Note" bind:value={note} hint="Shown on the invoice." />
	</div>
{:else if slug === 'select'}
	<div class="col">
		<Select label="Plan" items={plans} bind:value={plan} hint="Change any time." />
	</div>
{:else if slug === 'progress'}
	<div class="col">
		<Progress label="Storage" value={64} />
	</div>
{:else if slug === 'card'}
	<div class="col">
		<Card title="One surface, no shadow" lead="Separation comes from colour, never a 1px border.">
			<p>Cards stay flat; only floating chrome lifts.</p>
		</Card>
	</div>
{:else if slug === 'annotation'}
	<div class="note">
		<Annotation arrow>no runtime deps</Annotation>
	</div>
{:else if slug === 'stat'}
	<div class="stats">
		<Stat value={98} suffix="%" label="Lighthouse, all four categories" />
		<Stat value={0} label="Runtime dependencies" />
	</div>
{:else if slug === 'listrow'}
	<div class="col">
		<ListRow title="Drafts" meta="12 items" href="/components/listrow" current lead={cover} />
		<ListRow
			title="Archive"
			meta="Saved for later"
			href="/components/listrow"
			lead={cover}
			trailing={chevron}
		/>
	</div>
{:else if slug === 'strike'}
	<div class="col">
		<Strike items={drawbacks} />
	</div>
{:else if slug === 'window'}
	<div class="wide-col">
		<Window rail={railNav}>
			<p>Real UI goes in the pane, never a screenshot.</p>
		</Window>
	</div>
{:else if slug === 'cover'}
	<div class="cover-demo">
		<Cover>{@render coverArt()}</Cover>
	</div>
{:else if slug === 'dots'}
	<div class="col">
		<Dots count={12} value={9} />
		<p class="muted">9 of 12, one dot per unit</p>
	</div>
{:else if slug === 'badge'}
	<div class="row">
		<Badge>New</Badge>
		<Badge tone="accent">v0.1.1</Badge>
	</div>
{:else if slug === 'kbd'}
	<div class="row">
		<Kbd>⌘</Kbd>
		<Kbd>K</Kbd>
		<span>to search</span>
	</div>
{:else if slug === 'switch'}
	<div class="row">
		<Switch bind:checked={lyrics} label="Show lyrics" />
		<span>Lyrics</span>
	</div>
{:else if slug === 'segmentedcontrol'}
	<div class="col">
		<SegmentedControl label="Density" items={densities} bind:value={density} />
	</div>
{:else if slug === 'accordion'}
	<div class="col">
		<Accordion>
			<AccordionItem title="Is there a runtime dependency?">
				No. Svelte 5 and CSS only; the platform does the work.
			</AccordionItem>
			<AccordionItem title="Does it respect reduced motion?">
				Yes. The open and close transition is disabled with the rest of the motion.
			</AccordionItem>
		</Accordion>
	</div>
{:else if slug === 'accordionitem'}
	<div class="col">
		<AccordionItem title="Single item" open>
			Dispatched in two business days.
		</AccordionItem>
	</div>
{:else if slug === 'dialog'}
	<div class="row">
		<Button onclick={() => (dialogOpen = true)}>Open dialog</Button>
	</div>
	<Dialog bind:open={dialogOpen} title="Delete workspace?">
		<p>Everything in <strong>Northwind</strong> will be removed. This cannot be undone.</p>
		<div class="actions">
			<Button variant="text" onclick={() => (dialogOpen = false)}>Cancel</Button>
			<Button onclick={() => (dialogOpen = false)}>Delete</Button>
		</div>
	</Dialog>
{:else if slug === 'sectionheader'}
	<SectionHeader
		title="Quiet type, big scale"
		lead="The hierarchy comes from size, not from labels or borders."
	/>
{:else if slug === 'themetoggle'}
	<div class="row">
		<ThemeToggle />
		<span>Click to switch the theme</span>
	</div>
{:else if slug === 'capsulenav'}
	<p class="note">
		CapsuleNav is the header of the demo site itself. Open the home page to see it in
		place, with the scroll spy and the night-band contrast.
	</p>
{/if}

<style>
	.row {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 12px;
	}

	.col {
		display: grid;
		gap: 16px;
		width: 100%;
		max-width: 420px;
	}

	.wide-col {
		width: 100%;
		max-width: 620px;
	}

	.cover-demo {
		width: min(220px, 100%);
	}

	.note {
		padding: 24px 0 24px 80px;
	}

	.stats {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
		gap: 24px;
		width: 100%;
		max-width: 480px;
	}

	.actions {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		gap: 16px;
		margin-top: 24px;
	}

	.note {
		max-width: 52ch;
		color: var(--color-muted);
		text-wrap: pretty;
	}
</style>
