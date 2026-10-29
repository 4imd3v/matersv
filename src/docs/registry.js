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
