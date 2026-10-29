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
