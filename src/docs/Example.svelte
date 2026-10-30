<script>
	import {
		Accordion,
		AccordionItem,
		Annotation,
		Avatar,
		AvatarGroup,
		Badge,
		Breadcrumbs,
		Button,
		Byline,
		Card,
		Checkbox,
		CodeBlock,
		Cover,
		Dialog,
		Dots,
		EmptyState,
		Fieldset,
		Figure,
		FileInput,
		IconButton,
		Input,
		Kbd,
		ListRow,
		Menu,
		Notice,
		NumberInput,
		Pagination,
		Popover,
		Progress,
		Prose,
		Quote,
		RadioGroup,
		Rating,
		ScrollProgress,
		SearchField,
		SectionHeader,
		SegmentedControl,
		Select,
		Skeleton,
		SkipLink,
		Slider,
		Spinner,
		Stat,
		Steps,
		Strike,
		Switch,
		Table,
		Tabs,
		TagList,
		Textarea,
		Timeline,
		Toast,
		Tooltip,
		Window,
		Wordmark,
		ThemeToggle
	} from '#lib/index.js';

	let { slug } = $props();

	let email = $state('');
	let playing = $state(true);
	let lyrics = $state(true);
	let density = $state('comfortable');
	let note = $state('');
	let changelog = $state(true);
	let volume = $state(64);
	let tab = $state('specs');
	let sort = $state('newest');
	let query = $state('');
	let toastOpen = $state(false);
	let seats = $state(3);
	let score = $state(3);
	let filtersOpen = $state(false);
	let showLyrics = $state(true);

	const reviewers = [
		{ name: 'Ada Lovelace' },
		{ name: 'Grace Hopper' },
		{ name: 'Alan Turing' },
		{ name: 'Katherine Johnson' },
		{ name: 'Edsger Dijkstra' }
	];

	const releases = [
		{ date: 'March 2026', title: '0.2.0', body: 'Strike, Tabs, Quote, EmptyState.' },
		{ date: 'February 2026', title: '0.1.2', body: 'The first tagged release.' }
	];

	const checkout = [
		{ label: 'Cart', hint: 'Two items' },
		{ label: 'Shipping', hint: 'Address and speed' },
		{ label: 'Payment' }
	];

	const sortItems = [
		{ value: 'newest', label: 'Newest first' },
		{ value: 'oldest', label: 'Oldest first' },
		{ value: 'title', label: 'Title A–Z' }
	];

	const tabItems = [
		{ value: 'specs', label: 'Specs' },
		{ value: 'reviews', label: 'Reviews' }
	];

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

{#snippet shot()}
	<svg viewBox="0 0 720 405" aria-hidden="true">
		<rect width="720" height="405" fill="currentColor" opacity=".1" />
		<rect x="40" y="40" width="250" height="24" rx="12" fill="currentColor" opacity=".25" />
		<rect x="40" y="84" width="420" height="12" rx="6" fill="currentColor" opacity=".18" />
		<rect x="40" y="150" width="180" height="215" rx="26" fill="currentColor" opacity=".2" />
		<rect x="240" y="150" width="180" height="215" rx="26" fill="currentColor" opacity=".14" />
		<rect x="440" y="150" width="180" height="215" rx="26" fill="currentColor" opacity=".08" />
	</svg>
{/snippet}

{#snippet keys()}
	<Kbd>⌘</Kbd><Kbd>K</Kbd>
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

{#if slug === 'emptystate'}
	<div class="col">
		<EmptyState title="No drafts" lead="Anything you save lands here first.">
			<Button variant="text">Start a draft</Button>
		</EmptyState>
	</div>
{:else if slug === 'quote'}
	<div class="col">
		<Quote cite="Dieter Rams">Less, but better.</Quote>
	</div>
{:else if slug === 'tabs'}
	<div class="col">
		<Tabs items={tabItems} bind:value={tab} label="Details">
			{#if tab === 'specs'}
				<p>Pill controls, one hue, no borders.</p>
			{:else}
				<p>No runtime dependencies; the platform does the work.</p>
			{/if}
		</Tabs>
	</div>
{:else if slug === 'fieldset'}
	<div class="col">
		<Fieldset legend="Notifications" hint="Applies to this device.">
			<Checkbox label="Releases" />
			<Checkbox label="Billing" />
		</Fieldset>
	</div>
{:else if slug === 'spinner'}
	<div class="row">
		<Spinner size={18} label="Saving" />
		<Spinner size={24} />
		<Spinner size={36} label="Rendering" />
	</div>
{:else if slug === 'skeleton'}
	<div class="col">
		<Skeleton width="40px" height="40px" shape="circle" />
		<Skeleton width="70%" height="20px" />
		<Skeleton width="100%" height="14px" />
		<Skeleton width="100%" height="88px" shape="card" />
	</div>
{:else if slug === 'avatar'}
	<div class="row">
		<Avatar name="Ada Lovelace" />
		<Avatar name="Grace Hopper" size={64} />
		<Avatar name="Mater" size={32} />
		<span class="muted">Initials when there is no portrait</span>
	</div>
{:else if slug === 'pagination'}
	<Pagination
		current={1}
		items={[
			{ href: '/components/pagination', label: '1' },
			{ href: '/components/pagination', label: '2' },
			{ href: '/components/pagination', label: '3' },
			{ href: '/components/pagination', label: '4' }
		]}
	/>
{:else if slug === 'slider'}
	<div class="col">
		<Slider label="Volume" bind:value={volume} hint="Arrow keys nudge by one." />
	</div>
{:else if slug === 'breadcrumbs'}
	<Breadcrumbs
		items={[
			{ href: '/', label: 'Home' },
			{ href: '/components', label: 'Components' },
			{ href: '/components/breadcrumbs', label: 'Breadcrumbs' }
		]}
	/>
{:else if slug === 'checkbox'}
	<div class="col">
		<Checkbox bind:checked={changelog} label="Email me the changelog" hint="Once a release." />
		<Checkbox label="Share anonymous usage" hint="Never sold, never combined." />
	</div>
{:else if slug === 'notice'}
	<div class="col">
		<Notice title="Saved" tone="info">The layout is stored on this device.</Notice>
		<Notice title="Upload failed" tone="danger">The file was larger than 10 MB.</Notice>
	</div>
{:else if slug === 'button'}
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
{:else if slug === 'popover'}
	<div class="row">
		<Popover label="Filters" bind:open={filtersOpen}>
			{#snippet trigger()}Filters{/snippet}
			<Checkbox label="Show lyrics" bind:checked={showLyrics} />
		</Popover>
		<span class="muted">{filtersOpen ? 'Open' : 'Closed'}</span>
	</div>
{:else if slug === 'skiplink'}
	<div class="col">
		<SkipLink href="#main" />
		<p class="note">
			SkipLink is the first tab stop on the demo site. Press Tab from the address bar to see it.
		</p>
	</div>
{:else if slug === 'taglist'}
	<div class="wide-col">
		<TagList
			label="Topics"
			items={[
				{ href: '/components', label: 'Design' },
				{ href: '/components', label: 'Svelte' },
				{ href: '/components', label: 'CSS' }
			]}
		/>
	</div>
{:else if slug === 'byline'}
	<div class="col">
		<Byline name="Ada Lovelace" href="/components" meta="12 March 2026 · 6 min read" />
		<Byline name="Grace Hopper" meta="5 March 2026 · 3 min read" />
	</div>
{:else if slug === 'fileinput'}
	<div class="col">
		<FileInput label="Cover image" accept="image/*" hint="WebP or AVIF, at least 1600px wide." />
	</div>
{:else if slug === 'timeline'}
	<div class="wide-col">
		<Timeline label="Releases" items={releases} />
	</div>
{:else if slug === 'figure'}
	<div class="wide-col">
		<Figure ratio="16 / 9" caption="One hue, four surfaces, capsule chrome." credit="MaterSV">
			{@render shot()}
		</Figure>
	</div>
{:else if slug === 'rating'}
	<div class="col">
		<Rating label="Your rating" bind:value={score} />
		<Rating label="Average" value={4} readonly />
	</div>
{:else if slug === 'scrollprogress'}
	<div class="col">
		<ScrollProgress />
		<p class="note">
			ScrollProgress is fixed to the top of the demo site itself. Scroll this page and watch the
			accent bar fill.
		</p>
	</div>
{:else if slug === 'avatargroup'}
	<div class="row">
		<AvatarGroup label="Reviewers" people={reviewers} />
		<span class="muted">Five reviewers, four circles</span>
	</div>
{:else if slug === 'numberinput'}
	<div class="col">
		<NumberInput label="Seats" bind:value={seats} min={1} max={20} />
	</div>
{:else if slug === 'steps'}
	<div class="wide-col">
		<Steps label="Checkout" current={2} items={checkout} />
	</div>
{:else if slug === 'codeblock'}
	<div class="wide-col">
		<CodeBlock label="app.html" code={'<meta name="theme-color" content="#f5fbfe" />'} />
	</div>
{:else if slug === 'prose'}
	<div class="wide-col">
		<Prose>
			<h2>One hue, four surfaces</h2>
			<p>
				Every colour derives from <code>--h</code> and <code>--c</code>, so a single pair of
				numbers reskins the page. <strong>Nothing is outlined.</strong>
			</p>
			<ul>
				<li>No runtime dependencies</li>
				<li>No borders, no uppercase labels</li>
			</ul>
			<blockquote>Separation comes from surface changes.</blockquote>
			<hr />
			<p>Motion is punctuation, never decoration.</p>
		</Prose>
	</div>
{:else if slug === 'radiogroup'}
	<div class="col">
		<RadioGroup label="Plan" items={plans} bind:value={plan} />
	</div>
{:else if slug === 'menu'}
	<div class="row">
		<Menu label="Sort" items={sortItems} onselect={(value) => (sort = value)} />
		<span class="muted">Sorted by {sort}</span>
	</div>
{:else if slug === 'searchfield'}
	<div class="col">
		<SearchField
			label="Search the docs"
			bind:value={query}
			placeholder="Search components"
			shortcut={keys}
		/>
	</div>
{:else if slug === 'toast'}
	<div class="row">
		<Button onclick={() => (toastOpen = true)}>Save layout</Button>
		<Toast bind:open={toastOpen} message="Layout saved to this device" />
	</div>
{:else if slug === 'table'}
	<div class="wide-col">
		<Table caption="Plan limits">
			<thead>
				<tr>
					<th scope="col">Plan</th>
					<th scope="col">Seats</th>
					<th scope="col">Storage</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th scope="row">Solo</th>
					<td>1</td>
					<td>20 GB</td>
				</tr>
				<tr>
					<th scope="row">Team</th>
					<td>5</td>
					<td>120 GB</td>
				</tr>
				<tr>
					<th scope="row">Studio</th>
					<td>20</td>
					<td>1 TB</td>
				</tr>
			</tbody>
		</Table>
	</div>
{:else if slug === 'tooltip'}
	<div class="row">
		<Tooltip text="Copy link">
			<IconButton label="Copy link">
				<svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
					<path
						d="M10 13a5 5 0 0 0 7 0l2-2a5 5 0 0 0-7-7l-1 1m3 6a5 5 0 0 0-7 0l-2 2a5 5 0 0 0 7 7l1-1"
						stroke="currentColor"
						stroke-width="1.9"
						stroke-linecap="round"
					/>
				</svg>
			</IconButton>
		</Tooltip>
		<Tooltip text="Synced two minutes ago">
			<Badge>Synced</Badge>
		</Tooltip>
	</div>
{:else if slug === 'wordmark'}
	<div class="mark-demo">
		<Wordmark text="Mater" />
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

	.mark-demo {
		overflow: hidden;
		width: 100%;
		padding-top: 80px;
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
