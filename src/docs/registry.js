// Docs metadata for /components. This lives outside src/lib on purpose:
// everything in src/lib is published to npm.
// Keep this in sync with the README table; tests/docs.test.js checks the slugs
// and component names against the library barrel.

export const components = [
	{
		slug: 'accordion',
		name: 'Accordion',
		lead: 'A vertical list of collapsible items. Native details, no ARIA re-implementation.',
		props: [
			{ name: 'children', type: 'Snippet', default: '—', description: 'AccordionItem children.' }
		],
		code: `<script>
	import { Accordion, AccordionItem } from 'matersv';
</script>

<Accordion>
	<AccordionItem title="Is there a runtime dependency?">
		No. Svelte 5 and CSS only.
	</AccordionItem>
	<AccordionItem title="Does it respect reduced motion?">
		Yes, with the rest of the motion.
	</AccordionItem>
</Accordion>`
	},
	{
		slug: 'accordionitem',
		name: 'AccordionItem',
		lead: 'One native details element with a pill summary and an animated body.',
		props: [
			{ name: 'title', type: 'string', default: '—', description: 'Summary text.' },
			{ name: 'open', type: 'boolean', default: 'false', description: 'Open state. Supports bind:open.' },
			{ name: 'children', type: 'Snippet', default: '—', description: 'Body content.' }
		],
		code: `<script>
	import { AccordionItem } from 'matersv';
</script>

<AccordionItem title="Shipping" open>
	Dispatched in two business days.
</AccordionItem>`
	},
	{
		slug: 'annotation',
		name: 'Annotation',
		lead: 'One handwritten line, rotated off the grid. Decorative, so the arrow is hidden from assistive tech.',
		props: [
			{ name: 'arrow', type: 'boolean', default: 'false', description: 'Draws the hand-drawn arrow pointing back at the content.' },
			{ name: 'children', type: 'Snippet', default: '—', description: 'The note. One line reads best.' }
		],
		code: `<script>
	import { Annotation } from 'matersv';
</script>

<Annotation arrow>no build step</Annotation>`
	},
	{
		slug: 'avatar',
		name: 'Avatar',
		lead: 'Circle portrait with an initials fallback. One accessible name, whether it renders an image or letters.',
		props: [
			{ name: 'name', type: 'string', default: '—', description: 'Accessible name and source of the initials.' },
			{ name: 'src', type: 'string', default: '—', description: 'Image source; initials render without it.' },
			{ name: 'size', type: 'number', default: '44', description: 'Diameter in px.' }
		],
		code: `<script>
	import { Avatar } from 'matersv';
</script>

<Avatar name="Ada Lovelace" />
<Avatar name="Ada Lovelace" src="/people/ada.webp" size={64} />`
	},
	{
		slug: 'avatargroup',
		name: 'AvatarGroup',
		lead: 'A stacked row of avatars with a +N tail. The names are read once as a list instead of one per circle.',
		props: [
			{ name: 'people', type: '{ name, src? }[]', default: '—', description: 'Everyone in the group.' },
			{ name: 'label', type: 'string', default: '—', description: 'Group name.' },
			{ name: 'max', type: 'number', default: '4', description: 'How many circles to show before the tail.' },
			{ name: 'size', type: 'number', default: '40', description: 'Circle size in px.' }
		],
		code: `<script>
	import { AvatarGroup } from 'matersv';
</script>

<AvatarGroup
	label="Reviewers"
	people={[
		{ name: 'Ada Lovelace' },
		{ name: 'Grace Hopper' },
		{ name: 'Alan Turing' },
		{ name: 'Katherine Johnson' },
		{ name: 'Edsger Dijkstra' }
	]}
/>`
	},
	{
		slug: 'badge',
		name: 'Badge',
		lead: 'Small state or version label. No borders, no uppercase.',
		props: [
			{ name: 'tone', type: "'field' | 'accent'", default: "'field'", description: 'Surface colour.' },
			{ name: 'children', type: 'Snippet', default: '—', description: 'Label content.' }
		],
		code: `<script>
	import { Badge } from 'matersv';
</script>

<Badge>New</Badge>
<Badge tone="accent">v0.1.1</Badge>`
	},
	{
		slug: 'breadcrumbs',
		name: 'Breadcrumbs',
		lead: 'Wayfinding with a real nav landmark and aria-current on the last crumb.',
		props: [
			{ name: 'items', type: '{ href, label }[]', default: '—', description: 'Trail, root first.' },
			{ name: 'label', type: 'string', default: "'Breadcrumb'", description: 'Accessible name of the nav.' }
		],
		code: `<script>
	import { Breadcrumbs } from 'matersv';
</script>

<Breadcrumbs
	items={[
		{ href: '/', label: 'Home' },
		{ href: '/components', label: 'Components' },
		{ href: '/components/button', label: 'Button' }
	]}
/>`
	},
	{
		slug: 'button',
		name: 'Button',
		lead: 'Pill action. Renders a link with href, or a disabled button when disabled.',
		props: [
			{ name: 'href', type: 'string', default: '—', description: 'Renders an anchor instead of a button.' },
			{ name: 'variant', type: "'primary' | 'text'", default: "'primary'", description: 'Filled or underlined text.' },
			{ name: 'size', type: "'md' | 'lg'", default: "'md'", description: '42px or 58px tall.' },
			{ name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the action; a disabled href becomes a button.' },
			{ name: 'type', type: "'button' | 'submit' | 'reset'", default: "'button'", description: 'Native button type.' },
			{ name: 'children', type: 'Snippet', default: '—', description: 'Label content.' }
		],
		code: `<script>
	import { Button } from 'matersv';
</script>

<Button>Download</Button>
<Button href="/docs" size="lg">Read the docs</Button>
<Button variant="text">Cancel</Button>`
	},
	{
		slug: 'byline',
		name: 'Byline',
		lead: 'Author line: avatar, name as a link when you pass one, and a single meta line for date and reading time.',
		props: [
			{ name: 'name', type: 'string', default: '—', description: 'Author name.' },
			{ name: 'src', type: 'string', default: '—', description: 'Portrait. Initials when omitted.' },
			{ name: 'href', type: 'string', default: '—', description: 'Turns the name into a link.' },
			{ name: 'meta', type: 'string', default: '—', description: 'Second line, usually date and reading time.' },
			{ name: 'size', type: 'number', default: '40', description: 'Avatar size in px.' }
		],
		code: `<script>
	import { Byline } from 'matersv';
</script>

<Byline
	name="Ada Lovelace"
	href="/authors/ada"
	meta="12 March 2026 · 6 min read"
/>`
	},
	{
		slug: 'capsulenav',
		name: 'CapsuleNav',
		lead: 'Floating capsule header with a scroll spy and automatic night-band contrast.',
		preview: false,
		props: [
			{ name: 'brand', type: 'string', default: "'Mater'", description: 'Brand text in the left capsule.' },
			{ name: 'items', type: '{ href, label }[]', default: '[]', description: 'Hash links get the scroll spy; route links still render.' },
			{ name: 'children', type: 'Snippet', default: '—', description: 'Extra actions, rendered before ThemeToggle.' }
		],
		code: `<script>
	import { CapsuleNav } from 'matersv';
</script>

<CapsuleNav
	brand="Mater"
	items={[
		{ href: '#components', label: 'Components' },
		{ href: '/components', label: 'Docs' }
	]}
/>`
	},
	{
		slug: 'card',
		name: 'Card',
		lead: 'A flat colour surface with an optional h3 and lead. Padding, radius and copy width come from the layout tokens.',
		props: [
			{ name: 'title', type: 'string', default: '—', description: 'Optional h3 heading.' },
			{ name: 'lead', type: 'string', default: '—', description: 'Optional lead paragraph.' },
			{ name: 'children', type: 'Snippet', default: '—', description: 'Card body.' }
		],
		code: `<script>
	import { Card } from 'matersv';
</script>

<Card title="One surface, no shadow" lead="Separation comes from colour, never a 1px border.">
	<p>Cards stay flat; only floating chrome lifts.</p>
</Card>`
	},
	{
		slug: 'checkbox',
		name: 'Checkbox',
		lead: 'A circular checkbox on the field surface. Native input, label wraps the hit area.',
		props: [
			{ name: 'label', type: 'string', default: '—', description: 'Visible and accessible name.' },
			{ name: 'checked', type: 'boolean', default: 'false', description: 'Supports bind:checked.' },
			{ name: 'hint', type: 'string', default: '—', description: 'Help text, wired with aria-describedby.' },
			{ name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the control.' },
			{ name: 'id', type: 'string', default: 'auto', description: 'Field id.' }
		],
		code: `<script>
	import { Checkbox } from 'matersv';
	let terms = $state(false);
</script>

<Checkbox bind:checked={terms} label="Email me the changelog" hint="Once a release." />`
	},
	{
		slug: 'codeblock',
		name: 'CodeBlock',
		lead: 'A monospace panel on the field surface with a copy button and a polite announcement of the result.',
		props: [
			{ name: 'code', type: 'string', default: '—', description: 'The text to show and copy.' },
			{ name: 'label', type: 'string', default: '—', description: 'Caption above the block, usually a filename.' }
		],
		code: `<script>
	import { CodeBlock } from 'matersv';
</script>

<CodeBlock label="app.html" code={'<meta name="theme-color" content="#f5fbfe" />'} />`
	},
	{
		slug: 'cover',
		name: 'Cover',
		lead: 'Square art mounted with the ring shadow: a bg gap and a field hairline, never a pasted image.',
		props: [
			{ name: 'src', type: 'string', default: '—', description: 'Image source. Omit it and pass a snippet for generated art.' },
			{ name: 'alt', type: 'string', default: "''", description: 'Alt text; empty means decorative.' },
			{ name: 'width', type: 'number', default: '760', description: 'Intrinsic width, so the layout never shifts.' },
			{ name: 'height', type: 'number', default: '760', description: 'Intrinsic height.' },
			{ name: 'children', type: 'Snippet', default: '—', description: 'Inline art instead of src.' }
		],
		code: `<script>
	import { Cover } from 'matersv';
</script>

<Cover src="/art/cover.webp" alt="Album art" />`
	},
	{
		slug: 'dialog',
		name: 'Dialog',
		lead: 'Native modal dialog. Top layer, backdrop, focus trap and Esc come from the platform.',
		props: [
			{ name: 'open', type: 'boolean', default: 'false', description: 'Open state. Supports bind:open.' },
			{ name: 'title', type: 'string', default: '—', description: 'Dialog heading, wired with aria-labelledby.' },
			{ name: 'children', type: 'Snippet', default: '—', description: 'Body content.' }
		],
		code: `<script>
	import { Button, Dialog } from 'matersv';
	let open = $state(false);
</script>

<Button onclick={() => (open = true)}>Delete</Button>

<Dialog bind:open title="Delete workspace?">
	<p>This cannot be undone.</p>
	<Button onclick={() => (open = false)}>Cancel</Button>
</Dialog>`
	},
	{
		slug: 'dots',
		name: 'Dots',
		lead: 'A dot meter where one dot is one unit. Decorative: the number beside it carries the meaning.',
		props: [
			{ name: 'count', type: 'number', default: '20', description: 'Total dots.' },
			{ name: 'value', type: 'number', default: 'count', description: 'Accent dots, counted from the left.' },
			{ name: 'class', type: 'string', default: '—', description: 'Passthrough class.' }
		],
		code: `<script>
	import { Dots } from 'matersv';
</script>

<Dots count={20} value={17} />
<p>17 of 20</p>`
	},
	{
		slug: 'emptystate',
		name: 'EmptyState',
		lead: 'What a list says when it has nothing to show: a title, a line of guidance and one action.',
		props: [
			{ name: 'title', type: 'string', default: '—', description: 'The state in three words.' },
			{ name: 'lead', type: 'string', default: '—', description: 'What to do next.' },
			{ name: 'icon', type: 'Snippet', default: '—', description: 'Optional 24px glyph on a circle.' },
			{ name: 'children', type: 'Snippet', default: '—', description: 'One action.' }
		],
		code: `<script>
	import { Button, EmptyState } from 'matersv';
</script>

<EmptyState title="No drafts" lead="Anything you save lands here first.">
	<Button variant="text">Start a draft</Button>
</EmptyState>`
	},
	{
		slug: 'fieldset',
		name: 'Fieldset',
		lead: 'A group of controls with a real legend, so a set of checkboxes is announced as one group.',
		props: [
			{ name: 'legend', type: 'string', default: '—', description: 'Group name, rendered as the legend.' },
			{ name: 'hint', type: 'string', default: '—', description: 'Group description, wired with aria-describedby.' },
			{ name: 'children', type: 'Snippet', default: '—', description: 'The controls.' }
		],
		code: `<script>
	import { Checkbox, Fieldset } from 'matersv';
</script>

<Fieldset legend="Notifications" hint="Applies to this device.">
	<Checkbox label="Releases" />
	<Checkbox label="Billing" />
</Fieldset>`
	},
	{
		slug: 'figure',
		name: 'Figure',
		lead: 'An image at a fixed ratio with a caption and an optional credit. The frame sits on the field surface, so a transparent image never flashes.',
		props: [
			{ name: 'src', type: 'string', default: '—', description: 'Image source. Omit it to pass inline media as children.' },
			{ name: 'alt', type: 'string', default: "''", description: 'Empty means decorative.' },
			{ name: 'ratio', type: 'string', default: "'16 / 9'", description: 'Any aspect-ratio value.' },
			{ name: 'caption', type: 'string', default: '—', description: 'Caption under the frame.' },
			{ name: 'credit', type: 'string', default: '—', description: 'Attribution, muted and after the caption.' },
			{ name: 'width', type: 'number', default: '—', description: 'Intrinsic width, avoids layout shift.' },
			{ name: 'height', type: 'number', default: '—', description: 'Intrinsic height.' },
			{ name: 'loading', type: "'lazy' | 'eager'", default: "'lazy'", description: 'Native loading hint.' }
		],
		code: `<script>
	import { Figure } from 'matersv';
</script>

<Figure
	src="/shots/home.webp"
	alt="The home screen at 1440px"
	width={1440}
	height={888}
	caption="One hue, four surfaces, capsule chrome."
	credit="MaterSV"
/>`
	},
	{
		slug: 'fileinput',
		name: 'FileInput',
		lead: 'The native file input under a pill: the whole control opens the picker, the chosen name is shown, and the input keeps its tab stop.',
		props: [
			{ name: 'label', type: 'string', default: '—', description: 'Visible label, wired with for/id.' },
			{ name: 'accept', type: 'string', default: '—', description: 'Native accept filter.' },
			{ name: 'multiple', type: 'boolean', default: 'false', description: 'Allows several files; the summary becomes a count.' },
			{ name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the picker.' },
			{ name: 'hint', type: 'string', default: '—', description: 'Hint under the control, wired with aria-describedby.' }
		],
		code: `<script>
	import { FileInput } from 'matersv';
</script>

<FileInput
	label="Cover image"
	accept="image/*"
	hint="WebP or AVIF, at least 1600px wide."
/>`
	},
	{
		slug: 'iconbutton',
		name: 'IconButton',
		lead: 'Circular 44px control for a single icon with an accessible label.',
		props: [
			{ name: 'label', type: 'string', default: '—', description: 'Accessible name.' },
			{ name: 'pressed', type: 'boolean', default: '—', description: 'Sets aria-pressed for toggle buttons.' },
			{ name: 'type', type: "'button' | 'submit' | 'reset'", default: "'button'", description: 'Native button type.' },
			{ name: 'children', type: 'Snippet', default: '—', description: 'The SVG icon.' }
		],
		code: `<script>
	import { IconButton } from 'matersv';
</script>

<IconButton label="Play">
	<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
		<path d="M8 5v14l11-7z" />
	</svg>
</IconButton>`
	},
	{
		slug: 'input',
		name: 'Input',
		lead: 'Filled pill field with a label, hint and error wired through ARIA.',
		props: [
			{ name: 'label', type: 'string', default: '—', description: 'Field label.' },
			{ name: 'hint', type: 'string', default: '—', description: 'Helper text, connected with aria-describedby.' },
			{ name: 'error', type: 'string', default: '—', description: 'Error text; also sets aria-invalid.' },
			{ name: 'type', type: 'string', default: "'text'", description: 'Any native input type.' },
			{ name: 'value', type: 'string', default: "''", description: 'Supports bind:value.' },
			{ name: 'id', type: 'string', default: 'auto', description: 'Overrides the generated id.' },
			{ name: '...rest', type: 'attributes', default: '—', description: 'Native input attributes are forwarded.' }
		],
		code: `<script>
	import { Input } from 'matersv';
	let email = $state('');
</script>

<Input
	label="Email"
	type="email"
	bind:value={email}
	hint="One issue per month."
/>`
	},
	{
		slug: 'kbd',
		name: 'Kbd',
		lead: 'Keyboard key hint on the field surface.',
		props: [
			{ name: 'children', type: 'Snippet', default: '—', description: 'Key or key combination.' }
		],
		code: `<script>
	import { Kbd } from 'matersv';
</script>

<Kbd>⌘</Kbd> <Kbd>K</Kbd> to search`
	},
	{
		slug: 'listrow',
		name: 'ListRow',
		lead: 'A list row with an optional 56px thumbnail and end slot. Renders a link with href, and marks the current row.',
		props: [
			{ name: 'title', type: 'string', default: '—', description: 'Primary text.' },
			{ name: 'meta', type: 'string', default: '—', description: 'Secondary line.' },
			{ name: 'href', type: 'string', default: '—', description: 'Renders an anchor instead of a div.' },
			{ name: 'current', type: 'boolean', default: 'false', description: 'Marks the row with aria-current and the field surface.' },
			{ name: 'lead', type: 'Snippet', default: '—', description: 'Thumbnail, clipped to 56px.' },
			{ name: 'trailing', type: 'Snippet', default: '—', description: '28px end slot, usually an icon.' }
		],
		code: `<script>
	import { ListRow } from 'matersv';
</script>

<ListRow title="Drafts" meta="12 items" href="/drafts" current />
<ListRow title="Archive" meta="Saved for later" href="/archive" />`
	},
	{
		slug: 'menu',
		name: 'Menu',
		lead: 'A menu button on a native popover: top layer, light dismiss and Esc from the platform, arrows and Home/End from the component.',
		props: [
			{ name: 'items', type: 'MenuItem[]', default: '—', description: 'Each item is { value, label }.' },
			{ name: 'label', type: 'string', default: '—', description: 'Trigger text, and the menu name.' },
			{ name: 'onselect', type: '(value: string) => void', default: '—', description: 'Called with the chosen value before the menu closes.' }
		],
		code: `<script>
	import { Menu } from 'matersv';

	let sort = $state('newest');
</script>

<Menu
	label="Sort"
	items={[
		{ value: 'newest', label: 'Newest first' },
		{ value: 'oldest', label: 'Oldest first' }
	]}
	onselect={(value) => (sort = value)}
/>`
	},
	{
		slug: 'notice',
		name: 'Notice',
		lead: 'Inline message on the field surface. Danger is an alert, everything else a polite status.',
		props: [
			{ name: 'tone', type: "'info' | 'danger'", default: "'info'", description: 'Surface and the ARIA role.' },
			{ name: 'title', type: 'string', default: '—', description: 'Optional bold first line.' },
			{ name: 'children', type: 'Snippet', default: '—', description: 'Message body.' }
		],
		code: `<script>
	import { Notice } from 'matersv';
</script>

<Notice title="Saved" tone="info">The layout is stored on this device.</Notice>
<Notice title="Upload failed" tone="danger">The file was larger than 10 MB.</Notice>`
	},
	{
		slug: 'numberinput',
		name: 'NumberInput',
		lead: 'A number field with circular minus and plus buttons. Both clamp to min and max and disable themselves at the ends.',
		props: [
			{ name: 'label', type: 'string', default: '—', description: 'Visible label, also the name of both buttons.' },
			{ name: 'value', type: 'number', default: '0', description: 'Current value. Supports bind:value.' },
			{ name: 'min', type: 'number', default: '—', description: 'Lower bound.' },
			{ name: 'max', type: 'number', default: '—', description: 'Upper bound.' },
			{ name: 'step', type: 'number', default: '1', description: 'Amount per click.' },
			{ name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the input and both buttons.' }
		],
		code: `<script>
	import { NumberInput } from 'matersv';

	let seats = $state(3);
</script>

<NumberInput label="Seats" bind:value={seats} min={1} max={20} />`
	},
	{
		slug: 'pagination',
		name: 'Pagination',
		lead: 'Page pills in a nav landmark. The current page is a span, not a dead link.',
		props: [
			{ name: 'items', type: '{ href, label }[]', default: '—', description: 'Pages in order.' },
			{ name: 'current', type: 'number', default: '0', description: 'Index of the current page.' },
			{ name: 'label', type: 'string', default: "'Pagination'", description: 'Accessible name of the nav.' }
		],
		code: `<script>
	import { Pagination } from 'matersv';
</script>

<Pagination
	current={1}
	items={[
		{ href: '/blog?page=1', label: '1' },
		{ href: '/blog?page=2', label: '2' },
		{ href: '/blog?page=3', label: '3' }
	]}
/>`
	},
	{
		slug: 'progress',
		name: 'Progress',
		lead: 'Native progress element on the field surface, with a percentage and an accessible name.',
		props: [
			{ name: 'label', type: 'string', default: '—', description: 'Visible and accessible name.' },
			{ name: 'value', type: 'number', default: '—', description: 'Current value.' },
			{ name: 'max', type: 'number', default: '100', description: 'Upper bound.' },
			{ name: 'id', type: 'string', default: 'auto', description: 'Id that links the label to the bar.' }
		],
		code: `<script>
	import { Progress } from 'matersv';
</script>

<Progress label="Upload" value={64} />`
	},
	{
		slug: 'prose',
		name: 'Prose',
		lead: 'Article typography in one wrapper: headings, paragraphs, lists, links, inline code, quotes and rules, all from tokens.',
		props: [
			{ name: 'children', type: 'Snippet', default: '—', description: 'Unstyled article markup.' }
		],
		code: `<script>
	import { Prose } from 'matersv';
</script>

<Prose>
	<h2>One hue, four surfaces</h2>
	<p>Every colour derives from <code>--h</code> and <code>--c</code>.</p>
	<ul>
		<li>No runtime dependencies</li>
		<li>No borders</li>
	</ul>
</Prose>`
	},
	{
		slug: 'quote',
		name: 'Quote',
		lead: 'A pull quote at heading scale, with the attribution set in the handwritten face.',
		props: [
			{ name: 'cite', type: 'string', default: '—', description: 'Attribution line.' },
			{ name: 'children', type: 'Snippet', default: '—', description: 'The quote itself.' }
		],
		code: `<script>
	import { Quote } from 'matersv';
</script>

<Quote cite="Dieter Rams">Less, but better.</Quote>`
	},
	{
		slug: 'radiogroup',
		name: 'RadioGroup',
		lead: 'Native radios in a real fieldset, so the group is announced once and the arrow keys work without JavaScript.',
		props: [
			{ name: 'label', type: 'string', default: '—', description: 'Legend text.' },
			{ name: 'items', type: 'RadioItem[]', default: '—', description: 'Each item is { value, label, hint? }.' },
			{ name: 'value', type: 'string', default: '—', description: 'Chosen value. Supports bind:value.' },
			{ name: 'name', type: 'string', default: 'generated', description: 'Radio group name.' }
		],
		code: `<script>
	import { RadioGroup } from 'matersv';

	let plan = $state('team');
</script>

<RadioGroup
	label="Plan"
	bind:value={plan}
	items={[
		{ value: 'solo', label: 'Solo', hint: 'One seat.' },
		{ value: 'team', label: 'Team', hint: 'Five seats.' },
		{ value: 'studio', label: 'Studio' }
	]}
/>`
	},
	{
		slug: 'rating',
		name: 'Rating',
		lead: 'Native radios drawn as stars, or a read-only display. Arrow keys, forms and screen readers work without JavaScript.',
		props: [
			{ name: 'label', type: 'string', default: '—', description: 'Group name. Visually hidden.' },
			{ name: 'value', type: 'number', default: '0', description: 'Stars filled. Supports bind:value.' },
			{ name: 'max', type: 'number', default: '5', description: 'How many stars.' },
			{ name: 'readonly', type: 'boolean', default: 'false', description: 'Renders one image labelled “N out of M” instead of controls.' }
		],
		code: `<script>
	import { Rating } from 'matersv';

	let score = $state(4);
</script>

<Rating label="Your rating" bind:value={score} />
<Rating label="Average" value={4} readonly />`
	},
	{
		slug: 'scrollprogress',
		name: 'ScrollProgress',
		lead: 'A reading bar driven by a scroll timeline: no JavaScript, no observer. It is decorative and simply absent where scroll timelines are unsupported or motion is reduced.',
		props: [],
		code: `<script>
	import { ScrollProgress } from 'matersv';
</script>

<ScrollProgress />`
	},
	{
		slug: 'searchfield',
		name: 'SearchField',
		lead: 'A search pill: icon, input, a shortcut hint while empty and a clear button once there is a value.',
		props: [
			{ name: 'label', type: 'string', default: '—', description: 'Accessible name. Visually hidden.' },
			{ name: 'value', type: 'string', default: "''", description: 'Current query. Supports bind:value.' },
			{ name: 'placeholder', type: 'string', default: '—', description: 'Placeholder text.' },
			{ name: 'id', type: 'string', default: 'generated', description: 'Input id.' },
			{ name: 'shortcut', type: 'Snippet', default: '—', description: 'Hint shown while the field is empty, usually Kbd.' }
		],
		code: `<script>
	import { Kbd, SearchField } from 'matersv';

	let query = $state('');
</script>

<SearchField label="Search the docs" bind:value={query} placeholder="Search">
	{#snippet shortcut()}
		<Kbd>⌘</Kbd><Kbd>K</Kbd>
	{/snippet}
</SearchField>`
	},
	{
		slug: 'sectionheader',
		name: 'SectionHeader',
		lead: 'Section h2 and lead paragraph with the editorial type scale.',
		props: [
			{ name: 'title', type: 'string', default: '—', description: 'Section heading.' },
			{ name: 'lead', type: 'string', default: '—', description: 'Optional lead paragraph.' },
			{ name: 'id', type: 'string', default: '—', description: 'Id for anchor links.' }
		],
		code: `<script>
	import { SectionHeader } from 'matersv';
</script>

<SectionHeader
	title="Primitives"
	lead="Every control is a pill, a circle or a surface."
/>`
	},
	{
		slug: 'segmentedcontrol',
		name: 'SegmentedControl',
		lead: 'Exclusive choice built on native radios, so arrows, forms and AT work without JS.',
		props: [
			{ name: 'items', type: '{ value, label }[]', default: '[]', description: 'Options. Values keep their original type.' },
			{ name: 'label', type: 'string', default: '—', description: 'Accessible group name.' },
			{ name: 'value', type: 'any', default: '—', description: 'Selected value. Supports bind:value.' },
			{ name: 'name', type: 'string', default: 'auto', description: 'Radio group name.' }
		],
		code: `<script>
	import { SegmentedControl } from 'matersv';
	let density = $state('comfortable');
</script>

<SegmentedControl
	label="Density"
	bind:value={density}
	items={[
		{ value: 'comfortable', label: 'Comfortable' },
		{ value: 'compact', label: 'Compact' }
	]}
/>`
	},
	{
		slug: 'select',
		name: 'Select',
		lead: 'Native select with the field pill shape and a chevron. The option list is the platform one.',
		props: [
			{ name: 'items', type: '{ value, label }[]', default: '—', description: 'Options in render order.' },
			{ name: 'label', type: 'string', default: '—', description: 'Visible and accessible name.' },
			{ name: 'value', type: 'string', default: "''", description: 'Selected value. Supports bind:value.' },
			{ name: 'hint', type: 'string', default: '—', description: 'Help text under the field.' },
			{ name: 'error', type: 'string', default: '—', description: 'Error text; sets aria-invalid.' },
			{ name: 'id', type: 'string', default: 'auto', description: 'Field id.' }
		],
		code: `<script>
	import { Select } from 'matersv';
	let plan = $state('team');
</script>

<Select
	label="Plan"
	bind:value={plan}
	items={[
		{ value: 'solo', label: 'Solo' },
		{ value: 'team', label: 'Team' }
	]}
/>`
	},
	{
		slug: 'skeleton',
		name: 'Skeleton',
		lead: 'A placeholder block in the field surface with a shimmer. Decorative, so it stays out of the accessibility tree.',
		props: [
			{ name: 'width', type: 'string', default: "'100%'", description: 'Any CSS length.' },
			{ name: 'height', type: 'string', default: "'1em'", description: 'Any CSS length.' },
			{ name: 'shape', type: "'pill' | 'card' | 'circle'", default: "'pill'", description: 'Corner radius family.' }
		],
		code: `<script>
	import { Skeleton } from 'matersv';
</script>

<Skeleton width="60%" height="20px" />
<Skeleton width="40px" height="40px" shape="circle" />`
	},
	{
		slug: 'slider',
		name: 'Slider',
		lead: 'Native range input with a pill track and a capsule thumb. Arrow keys, forms and AT come from the platform.',
		props: [
			{ name: 'label', type: 'string', default: '—', description: 'Visible and accessible name.' },
			{ name: 'value', type: 'number', default: '0', description: 'Supports bind:value.' },
			{ name: 'min', type: 'number', default: '0', description: 'Lower bound.' },
			{ name: 'max', type: 'number', default: '100', description: 'Upper bound.' },
			{ name: 'step', type: 'number', default: '1', description: 'Keyboard and snap increment.' },
			{ name: 'hint', type: 'string', default: '—', description: 'Help text under the control.' }
		],
		code: `<script>
	import { Slider } from 'matersv';
	let volume = $state(64);
</script>

<Slider label="Volume" bind:value={volume} hint="Arrow keys nudge by one." />`
	},
	{
		slug: 'stat',
		name: 'Stat',
		lead: 'Big tabular figure with a caption. Renders the final value on the server and counts up when it scrolls into view.',
		props: [
			{ name: 'value', type: 'number', default: '—', description: 'The number to display.' },
			{ name: 'label', type: 'string', default: '—', description: 'Caption under the figure.' },
			{ name: 'suffix', type: 'string', default: "''", description: 'Unit or symbol appended to the figure.' },
			{ name: 'duration', type: 'number', default: '1000', description: 'Count-up length in ms; skipped with reduced motion.' }
		],
		code: `<script>
	import { Stat } from 'matersv';
</script>

<Stat value={98} suffix="%" label="Lighthouse, all four categories" />`
	},
	{
		slug: 'spinner',
		name: 'Spinner',
		lead: 'An indeterminate busy state. It holds still with reduced motion and keeps its status role.',
		props: [
			{ name: 'size', type: 'number', default: '24', description: 'Diameter in px.' },
			{ name: 'label', type: 'string', default: "'Loading'", description: 'Accessible status text.' }
		],
		code: `<script>
	import { Spinner } from 'matersv';
</script>

<Spinner size={20} label="Saving" />`
	},
	{
		slug: 'steps',
		name: 'Steps',
		lead: 'A vertical numbered path. The current step gets the accent circle and aria-current, finished steps stay filled.',
		props: [
			{ name: 'items', type: '{ label, hint? }[]', default: '—', description: 'Ordered steps.' },
			{ name: 'current', type: 'number', default: '1', description: '1-based index of the current step.' },
			{ name: 'label', type: 'string', default: '—', description: 'Accessible name of the list.' }
		],
		code: `<script>
	import { Steps } from 'matersv';
</script>

<Steps
	label="Checkout"
	current={2}
	items={[
		{ label: 'Cart', hint: 'Two items' },
		{ label: 'Shipping', hint: 'Address and speed' },
		{ label: 'Payment' }
	]}
/>`
	},
	{
		slug: 'strike',
		name: 'Strike',
		lead: 'Words the page leaves out. The line draws as the item scrolls in, and stays put with reduced motion.',
		props: [
			{ name: 'items', type: 'string[]', default: '—', description: 'One line per item.' }
		],
		code: `<script>
	import { Strike } from 'matersv';
</script>

<Strike items={['Chromium inside', 'Ads', 'Telemetry']} />`
	},
	{
		slug: 'switch',
		name: 'Switch',
		lead: 'Boolean toggle. The knob is a check icon; the slide is a padding swap.',
		props: [
			{ name: 'checked', type: 'boolean', default: 'false', description: 'Supports bind:checked.' },
			{ name: 'label', type: 'string', default: '—', description: 'Accessible name.' },
			{ name: 'onchange', type: '(checked: boolean) => void', default: '—', description: 'Called with the new value.' }
		],
		code: `<script>
	import { Switch } from 'matersv';
	let lyrics = $state(true);
</script>

<Switch bind:checked={lyrics} label="Show lyrics" />`
	},
	{
		slug: 'table',
		name: 'Table',
		lead: 'Quiet rows with tabular numerals. You write the semantic thead and th scope; the component only sets the rhythm and the hover surface.',
		props: [
			{ name: 'caption', type: 'string', default: '—', description: 'Caption above the table.' },
			{ name: 'children', type: 'Snippet', default: '—', description: 'thead and tbody markup.' }
		],
		code: `<script>
	import { Table } from 'matersv';
</script>

<Table caption="Plan limits">
	<thead>
		<tr>
			<th scope="col">Plan</th>
			<th scope="col">Seats</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th scope="row">Solo</th>
			<td>1</td>
		</tr>
		<tr>
			<th scope="row">Team</th>
			<td>5</td>
		</tr>
	</tbody>
</Table>`
	},
	{
		slug: 'tabs',
		name: 'Tabs',
		lead: 'One panel at a time, with arrow keys, Home and End. Moving focus also selects.',
		props: [
			{ name: 'items', type: '{ value, label }[]', default: '—', description: 'Tabs in order.' },
			{ name: 'value', type: 'string', default: 'first item', description: 'Active tab. Supports bind:value.' },
			{ name: 'label', type: 'string', default: '—', description: 'Accessible name of the tab list.' },
			{ name: 'children', type: 'Snippet', default: '—', description: 'Panel content; switch on the bound value.' }
		],
		code: `<script>
	import { Tabs } from 'matersv';
	let tab = $state('specs');
	const items = [
		{ value: 'specs', label: 'Specs' },
		{ value: 'reviews', label: 'Reviews' }
	];
</script>

<Tabs {items} bind:value={tab} label="Details">
	{#if tab === 'specs'}<p>Pill controls, one hue.</p>{:else}<p>No runtime dependencies.</p>{/if}
</Tabs>`
	},
	{
		slug: 'timeline',
		name: 'Timeline',
		lead: 'A dated vertical story: accent dot, rail on the field surface, date in tabular numerals, then title and body.',
		props: [
			{ name: 'items', type: 'TimelineEntry[]', default: '—', description: 'Each entry is { date, title, body? }.' },
			{ name: 'label', type: 'string', default: '—', description: 'Accessible name of the list.' }
		],
		code: `<script>
	import { Timeline } from 'matersv';
</script>

<Timeline
	label="Releases"
	items={[
		{ date: 'March 2026', title: '0.2.0', body: 'Strike, Tabs, Quote, EmptyState.' },
		{ date: 'February 2026', title: '0.1.2', body: 'The first tagged release.' }
	]}
/>`
	},
	{
		slug: 'textarea',
		name: 'Textarea',
		lead: 'Multi-line field with the same label, hint and error wiring as Input.',
		props: [
			{ name: 'label', type: 'string', default: '—', description: 'Visible and accessible name.' },
			{ name: 'value', type: 'string', default: "''", description: 'Field value. Supports bind:value.' },
			{ name: 'rows', type: 'number', default: '4', description: 'Visible rows before scrolling.' },
			{ name: 'hint', type: 'string', default: '—', description: 'Help text under the field.' },
			{ name: 'error', type: 'string', default: '—', description: 'Error text; sets aria-invalid.' },
			{ name: 'id', type: 'string', default: 'auto', description: 'Field id.' }
		],
		code: `<script>
	import { Textarea } from 'matersv';
	let note = $state('');
</script>

<Textarea label="Note" bind:value={note} hint="Shown on the invoice." />`
	},
	{
		slug: 'toast',
		name: 'Toast',
		lead: 'One status pill at the bottom of the viewport. It announces politely and closes itself unless duration is 0.',
		props: [
			{ name: 'message', type: 'string', default: '—', description: 'Announced text.' },
			{ name: 'open', type: 'boolean', default: 'false', description: 'Visibility. Supports bind:open.' },
			{ name: 'duration', type: 'number', default: '4000', description: 'Auto-dismiss delay in ms. 0 keeps it open.' }
		],
		code: `<script>
	import { Toast } from 'matersv';

	let saved = $state(false);
</script>

<button onclick={() => (saved = true)}>Save</button>
<Toast bind:open={saved} message="Layout saved" />`
	},
	{
		slug: 'tooltip',
		name: 'Tooltip',
		lead: 'A pill label above its trigger, on hover and on keyboard focus. Decorative: the trigger still needs its own accessible name.',
		props: [
			{ name: 'text', type: 'string', default: '—', description: 'The label.' },
			{ name: 'children', type: 'Snippet', default: '—', description: 'The trigger. Hover or focus it.' }
		],
		code: `<script>
	import { IconButton, Tooltip } from 'matersv';
</script>

<Tooltip text="Copy link">
	<IconButton label="Copy link">
		<svg viewBox="0 0 24 24" aria-hidden="true">…</svg>
	</IconButton>
</Tooltip>`
	},
	{
		slug: 'window',
		name: 'Window',
		lead: 'App window frame: optional rail, inset pane and monochrome chrome dots, so the page keeps one hue.',
		props: [
			{ name: 'rail', type: 'Snippet', default: '—', description: 'Left rail content. Hidden below 1024px.' },
			{ name: 'children', type: 'Snippet', default: '—', description: 'Pane content.' }
		],
		code: `<script>
	import { Window } from 'matersv';
</script>

<Window>
	<p>Real UI goes in the pane, never a screenshot.</p>
</Window>`
	},
	{
		slug: 'wordmark',
		name: 'Wordmark',
		lead: 'Giant brand mark cropped by the viewport and faded out by a mask. Decorative, so the real name still belongs in the footer copy.',
		props: [
			{ name: 'text', type: 'string', default: '—', description: 'The brand name. Reads best in one short word.' }
		],
		code: `<script>
	import { Wordmark } from 'matersv';
</script>

<Wordmark text="Mater" />`
	},
	{
		slug: 'themetoggle',
		name: 'ThemeToggle',
		lead: 'Icon button that switches light and dark and persists the choice.',
		props: [],
		code: `<script>
	import { ThemeToggle } from 'matersv';
</script>

<ThemeToggle />`
	}
];
