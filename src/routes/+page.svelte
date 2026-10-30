<script>
	import Byline from '#lib/components/Byline.svelte';
	import CapsuleNav from '#lib/components/CapsuleNav.svelte';
	import SectionHeader from '#lib/components/SectionHeader.svelte';
	import Accordion from '#lib/components/Accordion.svelte';
	import AccordionItem from '#lib/components/AccordionItem.svelte';
	import Annotation from '#lib/components/Annotation.svelte';
	import Avatar from '#lib/components/Avatar.svelte';
	import AvatarGroup from '#lib/components/AvatarGroup.svelte';
	import Badge from '#lib/components/Badge.svelte';
	import Breadcrumbs from '#lib/components/Breadcrumbs.svelte';
	import Card from '#lib/components/Card.svelte';
	import Checkbox from '#lib/components/Checkbox.svelte';
	import Notice from '#lib/components/Notice.svelte';
	import NumberInput from '#lib/components/NumberInput.svelte';
	import Pagination from '#lib/components/Pagination.svelte';
	import CodeBlock from '#lib/components/CodeBlock.svelte';
	import Cover from '#lib/components/Cover.svelte';
	import Dots from '#lib/components/Dots.svelte';
	import EmptyState from '#lib/components/EmptyState.svelte';
	import Fieldset from '#lib/components/Fieldset.svelte';
	import Stat from '#lib/components/Stat.svelte';
	import Steps from '#lib/components/Steps.svelte';
	import Strike from '#lib/components/Strike.svelte';
	import Table from '#lib/components/Table.svelte';
	import Tabs from '#lib/components/Tabs.svelte';
	import Tooltip from '#lib/components/Tooltip.svelte';
	import Wordmark from '#lib/components/Wordmark.svelte';
	import Window from '#lib/components/Window.svelte';
	import Button from '#lib/components/Button.svelte';
	import Dialog from '#lib/components/Dialog.svelte';
	import Figure from '#lib/components/Figure.svelte';
	import FileInput from '#lib/components/FileInput.svelte';
	import IconButton from '#lib/components/IconButton.svelte';
	import Input from '#lib/components/Input.svelte';
	import Kbd from '#lib/components/Kbd.svelte';
	import ListRow from '#lib/components/ListRow.svelte';
	import Menu from '#lib/components/Menu.svelte';
	import Popover from '#lib/components/Popover.svelte';
	import Progress from '#lib/components/Progress.svelte';
	import Prose from '#lib/components/Prose.svelte';
	import Quote from '#lib/components/Quote.svelte';
	import RadioGroup from '#lib/components/RadioGroup.svelte';
	import Rating from '#lib/components/Rating.svelte';
	import ScrollProgress from '#lib/components/ScrollProgress.svelte';
	import SearchField from '#lib/components/SearchField.svelte';
	import Select from '#lib/components/Select.svelte';
	import Skeleton from '#lib/components/Skeleton.svelte';
	import SkipLink from '#lib/components/SkipLink.svelte';
	import Slider from '#lib/components/Slider.svelte';
	import TagList from '#lib/components/TagList.svelte';
	import Spinner from '#lib/components/Spinner.svelte';
	import Textarea from '#lib/components/Textarea.svelte';
	import Timeline from '#lib/components/Timeline.svelte';
	import Toast from '#lib/components/Toast.svelte';
	import Switch from '#lib/components/Switch.svelte';
	import SegmentedControl from '#lib/components/SegmentedControl.svelte';
	import { setHue } from '#lib/hue.svelte.js';

	const nav = [
		{ href: '#components', label: 'Components' },
		{ href: '#night', label: 'Night' },
		{ href: '/components', label: 'Docs' }
	];

	const drawbacks = ['Chromium inside', 'Ads', 'Telemetry'];

	const sortItems = [
		{ value: 'newest', label: 'Newest first' },
		{ value: 'oldest', label: 'Oldest first' },
		{ value: 'title', label: 'Title A–Z' }
	];

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
	let changelog = $state(true);
	let volume = $state(64);
	let tab = $state('specs');

	const tabItems = [
		{ value: 'specs', label: 'Specs' },
		{ value: 'reviews', label: 'Reviews' }
	];
	let plan = $state('team');
	let dialogOpen = $state(false);
	let playing = $state(false);
	let lyrics = $state(true);
	let audioOnly = $state(false);
	let layout = $state('comfortable');
	let sort = $state('newest');
	let query = $state('');
	let toastOpen = $state(false);
	let seats = $state(3);
	let score = $state(4);
	let filtersOpen = $state(false);
	let showLyrics = $state(true);

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

{#snippet keys()}
	<Kbd>⌘</Kbd><Kbd>K</Kbd>
{/snippet}

{#snippet chevron()}
	<svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
		<path d="M9 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
	</svg>
{/snippet}

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
					<h3>Quote</h3>
					<p>Pulled at heading scale, with the attribution in the handwritten face.</p>
					<Quote cite="Dieter Rams">Less, but better.</Quote>
				</article>

				<article class="card reveal">
					<h3>EmptyState</h3>
					<p>What a list says when it has nothing: a title, a line, one action.</p>
					<EmptyState title="No drafts" lead="Anything you save lands here first.">
						<Button variant="text">Start a draft</Button>
					</EmptyState>
				</article>

				<article class="card reveal">
					<h3>Fieldset</h3>
					<p>A real legend, so a set of controls is announced as one group.</p>
					<div class="fieldset-demo">
						<Fieldset legend="Notifications" hint="Applies to this device.">
							<Checkbox label="Releases" />
							<Checkbox label="Billing" />
						</Fieldset>
					</div>
				</article>

				<article class="card reveal">
					<h3>Spinner</h3>
					<p>Indeterminate busy. With reduced motion the arc holds still and the status remains.</p>
					<div class="spinner-demo">
						<Spinner size={18} label="Saving" />
						<Spinner size={24} />
						<Spinner size={36} label="Rendering" />
					</div>
				</article>

				<article class="card reveal">
					<h3>Skeleton</h3>
					<p>Placeholder blocks with a shimmer. Decorative, so screen readers skip them.</p>
					<div class="skeleton-demo">
						<Skeleton width="40px" height="40px" shape="circle" />
						<Skeleton width="65%" height="18px" />
						<Skeleton width="100%" height="12px" />
						<Skeleton width="85%" height="12px" />
					</div>
				</article>

				<article class="card reveal">
					<h3>Avatar</h3>
					<p>A circle portrait, or its initials. One accessible name either way.</p>
					<div class="avatars-demo">
						<Avatar name="Ada Lovelace" />
						<Avatar name="Grace Hopper" size={64} />
						<Avatar name="Mater" size={32} />
					</div>
				</article>

				<article class="card reveal">
					<h3>Slider</h3>
					<p>Native range input, pill track, capsule thumb. Arrow keys do the rest.</p>
					<div class="slider-demo">
						<Slider label="Volume" bind:value={volume} hint="Arrow keys nudge by one." />
					</div>
				</article>

				<article class="card reveal">
					<h3>Pagination</h3>
					<p>The current page is a span, not a dead link.</p>
					<div class="pagination-demo">
						<Pagination
							current={1}
							items={[
								{ href: '#components', label: '1' },
								{ href: '#components', label: '2' },
								{ href: '#components', label: '3' }
							]}
						/>
					</div>
				</article>

				<article class="card reveal">
					<h3>Breadcrumbs</h3>
					<p>A real nav landmark, with <code>aria-current</code> on the crumb you are on.</p>
					<div class="crumbs-demo">
						<Breadcrumbs
							items={[
								{ href: '/', label: 'Home' },
								{ href: '/components', label: 'Components' },
								{ href: '#components', label: 'Breadcrumbs' }
							]}
						/>
					</div>
				</article>

				<article class="card reveal">
					<h3>Checkbox</h3>
					<p>A circle on the field surface. The label wraps the whole hit area.</p>
					<div class="checks-demo">
						<Checkbox bind:checked={changelog} label="Email me the changelog" hint="Once a release." />
						<Checkbox label="Share anonymous usage" />
					</div>
				</article>

				<article class="card reveal">
					<h3>Notice</h3>
					<p>Inline feedback. Danger is an alert, everything else a polite status.</p>
					<div class="notices-demo">
						<Notice title="Saved">The layout is stored on this device.</Notice>
						<Notice title="Upload failed" tone="danger">The file was larger than 10 MB.</Notice>
					</div>
				</article>

				<article class="card reveal">
					<h3>Cover</h3>
					<p>Square art with a bg gap and a field hairline, so it reads as mounted.</p>
					<div class="cover-demo">
						<Cover>{@render coverArt()}</Cover>
					</div>
				</article>

				<article class="card reveal">
					<h3>Dots</h3>
					<p>One dot per unit, revealed in a stagger. The number does the talking.</p>
					<div class="dots-demo">
						<Dots count={10} value={8} />
						<span class="muted">8 of 10</span>
					</div>
				</article>

				<article class="card reveal">
					<h3>ListRow</h3>
					<p>A row with a thumbnail, two lines and an end slot. The current row takes the field surface.</p>
					<div class="rows">
						<ListRow title="Drafts" meta="12 items" href="#components" current lead={cover} />
						<ListRow
							title="Archive"
							meta="Saved for later"
							href="/components/listrow"
							lead={cover}
							trailing={chevron}
						/>
					</div>
				</article>

				<article class="card reveal">
					<h3>Strike</h3>
					<p>The line draws as the item scrolls in. With reduced motion it is simply already there.</p>
					<div class="strike-demo">
						<Strike items={drawbacks.slice(0, 2)} />
					</div>
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
					<h3>Popover</h3>
					<p>A non-modal panel on a native popover. Esc, light dismiss and focus return come free.</p>
					<div class="row">
						<Popover label="Filters" bind:open={filtersOpen}>
							{#snippet trigger()}Filters{/snippet}
							<Checkbox label="Show lyrics" bind:checked={showLyrics} />
						</Popover>
						<span>{filtersOpen ? 'Open' : 'Closed'}</span>
					</div>
				</article>

				<article class="card reveal">
					<h3>Skip link</h3>
					<p>The first tab stop. Hidden until focused, then a pill that jumps to the main content.</p>
					<div class="skip-demo">
						<SkipLink href="#main" />
						<span>Press Tab to reveal it</span>
					</div>
				</article>

				<article class="card reveal">
					<h3>Tag list</h3>
					<p>Topic pills that navigate. Hover fills with the accent; the row wraps on narrow screens.</p>
					<div class="tags-demo">
						<TagList
							label="Topics"
							items={[
								{ href: '#components', label: 'Design' },
								{ href: '#components', label: 'Svelte' },
								{ href: '#components', label: 'CSS' }
							]}
						/>
					</div>
				</article>

				<article class="card reveal">
					<h3>Byline</h3>
					<p>Author line: avatar, optional link, one meta line for date and reading time.</p>
					<div class="byline-demo">
						<Byline name="Ada Lovelace" href="#components" meta="12 March 2026 · 6 min read" />
					</div>
				</article>

				<article class="card reveal">
					<h3>File input</h3>
					<p>The native picker under a pill: the whole control opens it, the name is shown.</p>
					<div class="file-demo">
						<FileInput label="Cover image" accept="image/*" hint="WebP or AVIF, 1600px wide." />
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
					<h3>Figure</h3>
					<p>A fixed ratio on the field surface, with a caption and a credit.</p>
					<div class="figure-demo">
						<Figure ratio="16 / 9" caption="One hue, four surfaces." credit="MaterSV">
							{@render coverArt()}
						</Figure>
					</div>
				</article>

				<article class="card reveal">
					<h3>Rating</h3>
					<p>Native radios drawn as stars, plus a read-only display that reads as one image.</p>
					<div class="rating-demo">
						<Rating label="Your rating" bind:value={score} />
						<Rating label="Average" value={4} readonly />
					</div>
				</article>

				<article class="card reveal">
					<h3>Scroll progress</h3>
					<p>A reading bar on a scroll timeline: no JavaScript, no observer.</p>
					<div class="scroll-demo">
						<ScrollProgress />
						<span>Fixed to the top of this page</span>
					</div>
				</article>

				<article class="card reveal">
					<h3>Avatar group</h3>
					<p>Stacked circles with a +N tail. The names are read once, not five times.</p>
					<div class="avatargroup-demo">
						<AvatarGroup label="Reviewers" people={reviewers} />
					</div>
				</article>

				<article class="card reveal">
					<h3>Number input</h3>
					<p>Pill field with circular buttons. Both clamp to min and max and disable at the ends.</p>
					<div class="number-demo">
						<NumberInput label="Seats" bind:value={seats} min={1} max={20} />
					</div>
				</article>

				<article class="card reveal">
					<h3>Steps</h3>
					<p>A vertical path: accent for the current step, filled for the finished ones, muted ahead.</p>
					<div class="steps-demo">
						<Steps label="Checkout" current={2} items={checkout} />
					</div>
				</article>

				<article class="card reveal">
					<h3>Radio group</h3>
					<p>A real fieldset and legend, so the group is announced once. Arrows come from the platform.</p>
					<div class="radio-demo">
						<RadioGroup label="Plan" items={plans} bind:value={plan} />
					</div>
				</article>

				<article class="card reveal">
					<h3>Prose</h3>
					<p>Article typography in one wrapper: headings, lists, quotes and rules from tokens.</p>
					<div class="prose-demo">
						<Prose>
							<h3>One hue, four surfaces</h3>
							<p>
								Every colour derives from <code>--h</code> and <code>--c</code>.
								<strong>Nothing is outlined.</strong>
							</p>
							<ul>
								<li>No runtime dependencies</li>
								<li>No uppercase labels</li>
							</ul>
						</Prose>
					</div>
				</article>

				<article class="card reveal wide">
					<h3>CodeBlock</h3>
					<p>A monospace panel with a copy button. The result is announced, not just coloured.</p>
					<div class="code-demo">
						<CodeBlock label="theme.svelte.js" code={'export const theme = $state("light");'} />
					</div>
				</article>

				<article class="card reveal">
					<h3>Menu</h3>
					<p>A native popover in the top layer. Esc, light dismiss and the arrows all work.</p>
					<div class="row">
						<Menu label="Sort" items={sortItems} onselect={(value) => (sort = value)} />
						<span>Sorted by {sort}</span>
					</div>
				</article>

				<article class="card reveal">
					<h3>Search field</h3>
					<p>The pill is the control, so the focus ring wraps the whole field. Clear appears with a value.</p>
					<div class="search-demo">
						<SearchField
							label="Search the docs"
							bind:value={query}
							placeholder="Search components"
							shortcut={keys}
						/>
					</div>
				</article>

				<article class="card reveal">
					<h3>Toast</h3>
					<p>One polite status pill at the bottom. It closes itself after four seconds.</p>
					<div class="row">
						<Button onclick={() => (toastOpen = true)}>Save layout</Button>
						<Toast bind:open={toastOpen} message="Layout saved to this device" />
					</div>
				</article>

				<article class="card reveal wide">
					<h3>Table</h3>
					<p>Quiet rows and tabular numerals. You keep the semantics; the surface does the separation.</p>
					<div class="table-demo">
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
				</article>

				<article class="card reveal">
					<h3>Tooltip</h3>
					<p>A pill label on hover and on keyboard focus. The trigger keeps the accessible name.</p>
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

	.tabs-demo {
		margin-top: 24px;
	}

	.fieldset-demo,
	.spinner-demo,
	.skeleton-demo {
		margin-top: 24px;
	}

	.spinner-demo {
		display: flex;
		align-items: center;
		gap: 20px;
	}

	.skeleton-demo {
		display: grid;
		justify-items: start;
		gap: 10px;
	}

	.avatars-demo {
		display: flex;
		align-items: center;
		gap: 12px;
		margin-top: 24px;
	}

	.slider-demo,
	.pagination-demo {
		margin-top: 24px;
	}

	.crumbs-demo,
	.checks-demo,
	.notices-demo {
		margin-top: 24px;
	}

	.checks-demo,
	.notices-demo {
		display: grid;
		gap: 16px;
	}

	.cover-demo {
		width: min(180px, 100%);
		margin-top: 20px;
	}

	.dots-demo {
		display: grid;
		gap: 14px;
		margin-top: 24px;
	}

	.dots-night {
		max-width: 520px;
		margin-top: clamp(40px, 5vw, 64px);
	}

	.rows {
		display: grid;
		gap: 2px;
		margin-top: 20px;
	}

	.strike-demo,
	.window-demo {
		margin-top: 24px;
	}

	.wide {
		grid-column: 1 / -1;
	}

	.strike-wrap {
		margin-top: clamp(40px, 5vw, 64px);
	}

	.footer {
		padding-block: 72px 96px;
		background: var(--color-bg-soft);
		font-size: 14px;
	}

	.skip-demo,
	.tags-demo {
		margin-top: 24px;
	}

	.skip-demo {
		display: flex;
		align-items: center;
		gap: 12px;
		font-size: 15px;
	}

	.byline-demo,
	.file-demo,
	.timeline-demo {
		margin-top: 24px;
	}

	.file-demo,
	.timeline-demo {
		max-width: 420px;
	}

	.figure-demo,
	.rating-demo,
	.scroll-demo {
		margin-top: 24px;
	}

	.figure-demo {
		max-width: 380px;
	}

	.rating-demo {
		display: grid;
		gap: 10px;
		justify-items: start;
	}

	.scroll-demo {
		display: flex;
		align-items: center;
		gap: 12px;
		font-size: 15px;
	}

	.avatargroup-demo,
	.number-demo,
	.steps-demo {
		margin-top: 24px;
	}

	.number-demo {
		max-width: 260px;
	}

	.steps-demo {
		max-width: 360px;
	}

	.radio-demo,
	.prose-demo {
		margin-top: 24px;
	}

	.radio-demo {
		max-width: 320px;
	}

	.prose-demo {
		max-width: 440px;
	}

	.code-demo {
		max-width: 520px;
		margin-top: 24px;
	}

	.search-demo {
		margin-top: 24px;
	}

	.table-demo {
		margin-top: 20px;
	}

	.footer__inner {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		gap: 16px 32px;
	}

</style>
