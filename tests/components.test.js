import { createRawSnippet } from 'svelte';
import { fireEvent, render, screen } from '@testing-library/svelte';
import { describe, expect, it, vi } from 'vitest';

import AccordionItem from '../src/lib/components/AccordionItem.svelte';
import Button from '../src/lib/components/Button.svelte';
import Input from '../src/lib/components/Input.svelte';
import Annotation from '../src/lib/components/Annotation.svelte';
import Avatar from '../src/lib/components/Avatar.svelte';
import AvatarGroup from '../src/lib/components/AvatarGroup.svelte';
import Breadcrumbs from '../src/lib/components/Breadcrumbs.svelte';
import Byline from '../src/lib/components/Byline.svelte';
import Card from '../src/lib/components/Card.svelte';
import Checkbox from '../src/lib/components/Checkbox.svelte';
import CodeBlock from '../src/lib/components/CodeBlock.svelte';
import Cover from '../src/lib/components/Cover.svelte';
import EmptyState from '../src/lib/components/EmptyState.svelte';
import Figure from '../src/lib/components/Figure.svelte';
import Fieldset from '../src/lib/components/Fieldset.svelte';
import FileInput from '../src/lib/components/FileInput.svelte';
import Dots from '../src/lib/components/Dots.svelte';
import ListRow from '../src/lib/components/ListRow.svelte';
import Menu from '../src/lib/components/Menu.svelte';
import Notice from '../src/lib/components/Notice.svelte';
import NumberInput from '../src/lib/components/NumberInput.svelte';
import Pagination from '../src/lib/components/Pagination.svelte';
import Popover from '../src/lib/components/Popover.svelte';
import Progress from '../src/lib/components/Progress.svelte';
import Prose from '../src/lib/components/Prose.svelte';
import Quote from '../src/lib/components/Quote.svelte';
import RadioGroup from '../src/lib/components/RadioGroup.svelte';
import Rating from '../src/lib/components/Rating.svelte';
import ScrollProgress from '../src/lib/components/ScrollProgress.svelte';
import SegmentedControl from '../src/lib/components/SegmentedControl.svelte';
import SearchField from '../src/lib/components/SearchField.svelte';
import Select from '../src/lib/components/Select.svelte';
import Skeleton from '../src/lib/components/Skeleton.svelte';
import SkipLink from '../src/lib/components/SkipLink.svelte';
import Slider from '../src/lib/components/Slider.svelte';
import Spinner from '../src/lib/components/Spinner.svelte';
import Stat from '../src/lib/components/Stat.svelte';
import Steps from '../src/lib/components/Steps.svelte';
import Strike from '../src/lib/components/Strike.svelte';
import Window from '../src/lib/components/Window.svelte';
import Switch from '../src/lib/components/Switch.svelte';
import Table from '../src/lib/components/Table.svelte';
import Tabs from '../src/lib/components/Tabs.svelte';
import TagList from '../src/lib/components/TagList.svelte';
import Tooltip from '../src/lib/components/Tooltip.svelte';
import Wordmark from '../src/lib/components/Wordmark.svelte';
import Textarea from '../src/lib/components/Textarea.svelte';
import Timeline from '../src/lib/components/Timeline.svelte';
import Toast from '../src/lib/components/Toast.svelte';
import { applyTheme } from '../src/lib/theme.svelte.js';

/** @param {string} value */
const text = (value) =>
	createRawSnippet(() => ({ render: () => `<span>${value}</span>` }));

describe('Button', () => {
	it('renders a link when href is set', () => {
		render(Button, { props: { href: '/download', children: text('Download') } });

		const link = screen.getByRole('link', { name: 'Download' });
		expect(link.getAttribute('href')).toBe('/download');
	});

	it('renders a disabled button when a link is disabled', () => {
		render(Button, { props: { href: '/download', disabled: true, children: text('Download') } });

		const button = /** @type {HTMLButtonElement} */ (
			screen.getByRole('button', { name: 'Download' })
		);
		expect(button.disabled).toBe(true);
		expect(screen.queryByRole('link')).toBeNull();
	});
});

describe('Switch', () => {
	it('toggles and reports the new value', async () => {
		const onchange = vi.fn();
		render(Switch, { props: { label: 'Lyrics', checked: false, onchange } });

		const control = screen.getByRole('switch', { name: 'Lyrics' });
		expect(control.getAttribute('aria-checked')).toBe('false');

		await fireEvent.click(control);

		expect(control.getAttribute('aria-checked')).toBe('true');
		expect(onchange).toHaveBeenCalledWith(true);
	});
});

describe('SegmentedControl', () => {
	it('uses native radios and switches the checked item', async () => {
		render(SegmentedControl, {
			props: {
				label: 'Density',
				items: [
					{ value: 'comfortable', label: 'Comfortable' },
					{ value: 'compact', label: 'Compact' }
				],
				value: 'comfortable'
			}
		});

		const radios = /** @type {HTMLInputElement[]} */ (screen.getAllByRole('radio'));
		expect(radios).toHaveLength(2);
		expect(radios[0].checked).toBe(true);

		await fireEvent.click(screen.getByLabelText('Compact'));

		expect(radios[1].checked).toBe(true);
	});
});

describe('Input', () => {
	it('links the hint through aria-describedby', () => {
		render(Input, { props: { label: 'Email', hint: 'No spam.', value: '' } });

		const input = screen.getByLabelText('Email');
		const hint = screen.getByText('No spam.');

		expect(input.getAttribute('aria-describedby')).toBe(hint.id);
		expect(input.hasAttribute('aria-invalid')).toBe(false);
	});

	it('replaces the hint with the error and marks the field invalid', () => {
		render(Input, { props: { label: 'Email', hint: 'No spam.', error: 'Required.' } });

		const input = screen.getByLabelText('Email');
		expect(input.getAttribute('aria-invalid')).toBe('true');
		expect(screen.queryByText('No spam.')).toBeNull();
		expect(input.getAttribute('aria-describedby')).toBe(screen.getByText('Required.').id);
	});
});

describe('Card', () => {
	it('renders the title, lead and body', () => {
		render(Card, {
			props: { title: 'Surface', lead: 'Flat colour.', children: text('Body copy') }
		});

		expect(screen.getByRole('heading', { level: 3, name: 'Surface' })).toBeTruthy();
		expect(screen.getByText('Flat colour.')).toBeTruthy();
		expect(screen.getByText('Body copy')).toBeTruthy();
	});
});

describe('ListRow', () => {
	it('renders a current link with its meta line', () => {
		render(ListRow, { props: { title: 'Drafts', meta: '12 items', href: '/drafts', current: true } });

		const link = screen.getByRole('link', { name: /Drafts/ });
		expect(link.getAttribute('href')).toBe('/drafts');
		expect(link.getAttribute('aria-current')).toBe('true');
		expect(screen.getByText('12 items')).toBeTruthy();
	});

	it('stays a plain row without href', () => {
		render(ListRow, { props: { title: 'Archive' } });

		expect(screen.queryByRole('link')).toBeNull();
		expect(screen.getByText('Archive')).toBeTruthy();
	});
});

describe('Strike', () => {
	it('renders one list item per word', () => {
		render(Strike, { props: { items: ['Ads', 'Telemetry'] } });

		expect(screen.getAllByRole('listitem')).toHaveLength(2);
		expect(screen.getByText('Telemetry')).toBeTruthy();
	});
});

describe('Window', () => {
	it('renders the rail and the pane, with decorative dots', () => {
		const rail = createRawSnippet(() => ({ render: () => '<span>Home</span>' }));
		const { container } = render(Window, { props: { rail, children: text('Pane') } });

		expect(screen.getByText('Home')).toBeTruthy();
		expect(screen.getByText('Pane')).toBeTruthy();
		expect(container.querySelector('.dots')?.getAttribute('aria-hidden')).toBe('true');
	});
});

describe('Avatar', () => {
	it('falls back to initials with one accessible name', () => {
		render(Avatar, { props: { name: 'Ada Lovelace' } });

		const img = screen.getByRole('img', { name: 'Ada Lovelace' });
		expect(img.textContent?.trim()).toBe('AL');
	});

	it('keeps the image out of the accessibility tree', () => {
		const { container } = render(Avatar, { props: { name: 'Ada', src: '/ada.webp' } });
		const image = /** @type {HTMLImageElement} */ (container.querySelector('img'));

		expect(image.getAttribute('alt')).toBe('');
		expect(image.getAttribute('src')).toBe('/ada.webp');
	});
});

describe('Pagination', () => {
	it('marks the current page and links the rest', () => {
		render(Pagination, {
			props: {
				current: 1,
				items: [
					{ href: '/p1', label: '1' },
					{ href: '/p2', label: '2' },
					{ href: '/p3', label: '3' }
				]
			}
		});

		expect(screen.getByRole('navigation', { name: 'Pagination' })).toBeTruthy();
		expect(screen.getByText('2').getAttribute('aria-current')).toBe('page');
		expect(screen.queryByRole('link', { name: '2' })).toBeNull();
		expect(screen.getByRole('link', { name: '3' })).toBeTruthy();
	});
});

describe('Slider', () => {
	it('renders a native range with bounds and a hint', async () => {
		render(Slider, { props: { label: 'Volume', value: 40, min: 0, max: 100, hint: 'Nudge it.' } });

		const input = /** @type {HTMLInputElement} */ (
			screen.getByRole('slider', { name: 'Volume' })
		);
		expect(input.value).toBe('40');
		expect(input.getAttribute('max')).toBe('100');
		expect(input.getAttribute('aria-describedby')).toBe(screen.getByText('Nudge it.').id);

		await fireEvent.input(input, { target: { value: '70' } });
		expect(input.value).toBe('70');
	});
});

describe('Tabs', () => {
	const items = [
		{ value: 'specs', label: 'Specs' },
		{ value: 'reviews', label: 'Reviews' }
	];

	it('selects the first tab and switches on click', async () => {
		render(Tabs, { props: { items, label: 'Details', children: text('Panel') } });

		const tabs = screen.getAllByRole('tab');
		expect(tabs).toHaveLength(2);
		expect(tabs[0].getAttribute('aria-selected')).toBe('true');
		expect(tabs[1].getAttribute('aria-selected')).toBe('false');

		await fireEvent.click(tabs[1]);

		expect(tabs[0].getAttribute('aria-selected')).toBe('false');
		expect(tabs[1].getAttribute('aria-selected')).toBe('true');
		expect(screen.getByRole('tabpanel').getAttribute('aria-labelledby')).toBe(tabs[1].id);
	});

	it('moves selection with the arrow keys and Home/End', async () => {
		render(Tabs, { props: { items, label: 'Details', children: text('Panel') } });
		const [first, second] = screen.getAllByRole('tab');

		await fireEvent.keyDown(first, { key: 'ArrowRight' });
		expect(second.getAttribute('aria-selected')).toBe('true');

		await fireEvent.keyDown(second, { key: 'ArrowLeft' });
		expect(first.getAttribute('aria-selected')).toBe('true');

		await fireEvent.keyDown(first, { key: 'End' });
		expect(second.getAttribute('aria-selected')).toBe('true');

		await fireEvent.keyDown(second, { key: 'Home' });
		expect(first.getAttribute('aria-selected')).toBe('true');
	});

	it('keeps one tab in the tab order', () => {
		render(Tabs, { props: { items, label: 'Details', children: text('Panel') } });
		const [first, second] = screen.getAllByRole('tab');

		expect(first.getAttribute('tabindex')).toBe('0');
		expect(second.getAttribute('tabindex')).toBe('-1');
	});
});

describe('Quote', () => {
	it('renders the quote and its attribution', () => {
		render(Quote, { props: { cite: 'Dieter Rams', children: text('Less, but better.') } });

		expect(screen.getByText('Less, but better.').closest('blockquote')).not.toBeNull();
		expect(screen.getByText('Dieter Rams', { selector: 'figcaption' })).toBeTruthy();
	});
});

describe('EmptyState', () => {
	it('renders the title, lead and action', () => {
		render(EmptyState, {
			props: { title: 'No drafts', lead: 'Save one first.', children: text('Start') }
		});

		expect(screen.getByText('No drafts')).toBeTruthy();
		expect(screen.getByText('Save one first.')).toBeTruthy();
		expect(screen.getByText('Start')).toBeTruthy();
	});
});

describe('Fieldset', () => {
	it('names the group with its legend and describes it with the hint', () => {
		render(Fieldset, {
			props: { legend: 'Notifications', hint: 'This device.', children: text('Controls') }
		});

		const group = screen.getByRole('group', { name: 'Notifications' });
		expect(group.getAttribute('aria-describedby')).toBe(screen.getByText('This device.').id);
		expect(screen.getByText('Controls')).toBeTruthy();
	});
});

describe('Spinner', () => {
	it('exposes a status with the given label', () => {
		render(Spinner, { props: { label: 'Saving' } });

		expect(screen.getByRole('status', { name: 'Saving' })).toBeTruthy();
	});
});

describe('Skeleton', () => {
	it('stays out of the accessibility tree and takes the given size', () => {
		const { container } = render(Skeleton, { props: { width: '60%', height: '20px' } });
		const block = /** @type {HTMLElement} */ (container.querySelector('.skeleton'));

		expect(block.getAttribute('aria-hidden')).toBe('true');
		expect(block.style.width).toBe('60%');
		expect(block.style.height).toBe('20px');
		expect(block.className).toContain('skeleton--pill');
	});
});

describe('Checkbox', () => {
	it('toggles the native input from the label and links the hint', async () => {
		render(Checkbox, { props: { label: 'Changelog', hint: 'Once a release.' } });

		const box = /** @type {HTMLInputElement} */ (
			screen.getByRole('checkbox', { name: 'Changelog' })
		);
		expect(box.checked).toBe(false);
		expect(box.getAttribute('aria-describedby')).toBe(screen.getByText('Once a release.').id);

		await fireEvent.click(screen.getByText('Changelog'));
		expect(box.checked).toBe(true);
	});
});

describe('Notice', () => {
	it('is a polite status for info and an alert for danger', () => {
		const { unmount } = render(Notice, { props: { title: 'Saved', children: text('Stored.') } });
		expect(screen.getByRole('status')).toBeTruthy();
		expect(screen.getByText('Saved')).toBeTruthy();
		unmount();

		render(Notice, { props: { tone: 'danger', title: 'Failed', children: text('Too big.') } });
		expect(screen.getByRole('alert')).toBeTruthy();
	});
});

describe('Breadcrumbs', () => {
	it('marks the last crumb as the current page and links the rest', () => {
		render(Breadcrumbs, {
			props: {
				items: [
					{ href: '/', label: 'Home' },
					{ href: '/components', label: 'Components' }
				]
			}
		});

		expect(screen.getByRole('navigation', { name: 'Breadcrumb' })).toBeTruthy();
		expect(screen.getByRole('link', { name: 'Home' })).toBeTruthy();
		expect(screen.getByText('Components').getAttribute('aria-current')).toBe('page');
		expect(screen.queryByRole('link', { name: 'Components' })).toBeNull();
	});
});

describe('Cover', () => {
	it('renders a square image with intrinsic size', () => {
		render(Cover, { props: { src: '/art.webp', alt: 'Album art' } });

		const img = /** @type {HTMLImageElement} */ (screen.getByAltText('Album art'));
		expect(img.getAttribute('src')).toBe('/art.webp');
		expect(img.getAttribute('width')).toBe('760');
		expect(img.getAttribute('height')).toBe('760');
	});
});

describe('Dots', () => {
	it('fills the first value dots and hides the row from assistive tech', () => {
		const { container } = render(Dots, { props: { count: 5, value: 2 } });
		const row = /** @type {HTMLElement} */ (container.querySelector('.dots'));

		expect(row.getAttribute('aria-hidden')).toBe('true');
		expect(row.querySelectorAll('i')).toHaveLength(5);
		expect(row.querySelectorAll('i.on')).toHaveLength(2);
	});
});

describe('Annotation', () => {
	it('keeps the arrow out of the accessibility tree', () => {
		const { container } = render(Annotation, { props: { arrow: true, children: text('note') } });

		expect(screen.getByText('note')).toBeTruthy();
		expect(container.querySelector('svg')?.getAttribute('aria-hidden')).toBe('true');
	});
});

describe('Stat', () => {
	it('shows the final figure with its suffix and label', () => {
		render(Stat, { props: { value: 98, suffix: '%', label: 'Lighthouse' } });

		expect(screen.getByText('98%')).toBeTruthy();
		expect(screen.getByText('Lighthouse')).toBeTruthy();
	});
});

describe('Textarea', () => {
	it('binds the value and links the hint', async () => {
		render(Textarea, { props: { label: 'Note', hint: 'Visible.', value: '' } });

		const field = /** @type {HTMLTextAreaElement} */ (screen.getByLabelText('Note'));
		expect(field.getAttribute('aria-describedby')).toBe(screen.getByText('Visible.').id);

		await fireEvent.input(field, { target: { value: 'Hi' } });
		expect(field.value).toBe('Hi');
	});
});

describe('Select', () => {
	it('renders the items and reports the chosen value', async () => {
		const onchange = vi.fn();
		render(Select, {
			props: {
				label: 'Plan',
				items: [
					{ value: 'solo', label: 'Solo' },
					{ value: 'team', label: 'Team' }
				],
				value: 'solo',
				onchange
			}
		});

		const select = /** @type {HTMLSelectElement} */ (screen.getByLabelText('Plan'));
		expect(select.options).toHaveLength(2);
		expect(select.value).toBe('solo');

		await fireEvent.change(select, { target: { value: 'team' } });
		expect(select.value).toBe('team');
		expect(onchange).toHaveBeenCalled();
	});
});

describe('Progress', () => {
	it('exposes the value with an accessible name', () => {
		render(Progress, { props: { label: 'Storage', value: 30, max: 60 } });

		const bar = /** @type {HTMLProgressElement} */ (screen.getByRole('progressbar', { name: 'Storage' }));
		expect(bar.value).toBe(30);
		expect(bar.max).toBe(60);
		expect(screen.getByText('50%')).toBeTruthy();
	});
});

describe('AccordionItem', () => {
	it('renders a native details/summary pair', () => {
		render(AccordionItem, { props: { title: 'Question', children: text('Answer') } });

		expect(screen.getByText('Question').closest('summary')).not.toBeNull();
		expect(screen.getByText('Answer')).toBeTruthy();
	});
});

describe('Popover', () => {
	it('wires the trigger to a named panel', () => {
		render(Popover, {
			props: {
				label: 'Filters',
				trigger: text('Filters'),
				children: text('Filter body')
			}
		});

		const trigger = screen.getByRole('button', { name: 'Filters' });
		expect(trigger.getAttribute('aria-expanded')).toBe('false');
		expect(trigger.getAttribute('popovertarget')).toBeTruthy();

		// jsdom hides a closed popover, so reach it by attribute.
		const panel = /** @type {HTMLElement} */ (document.querySelector('[popover]'));
		expect(panel.getAttribute('role')).toBe('dialog');
		expect(panel.getAttribute('aria-label')).toBe('Filters');
		expect(panel.getAttribute('popover')).toBe('auto');
		expect(panel.textContent).toContain('Filter body');
	});
});

describe('SkipLink', () => {
	it('points at the main id by default', () => {
		render(SkipLink, {});

		const link = screen.getByRole('link', { name: 'Skip to content' });
		expect(link.getAttribute('href')).toBe('#main');
	});
});

describe('TagList', () => {
	it('renders one link per tag inside a named list', () => {
		render(TagList, {
			props: {
				label: 'Topics',
				items: [
					{ href: '/components', label: 'Design' },
					{ href: '/components', label: 'Svelte' }
				]
			}
		});

		expect(screen.getByRole('list', { name: 'Topics' })).toBeTruthy();
		expect(screen.getAllByRole('link')).toHaveLength(2);
		expect(screen.getByRole('link', { name: 'Svelte' }).getAttribute('href')).toBe('/components');
	});
});

describe('Byline', () => {
	it('links the name when href is given and keeps the meta line', () => {
		render(Byline, {
			props: { name: 'Ada Lovelace', href: '/authors/ada', meta: '12 March 2026 · 6 min read' }
		});

		const link = screen.getByRole('link', { name: 'Ada Lovelace' });
		expect(link.getAttribute('href')).toBe('/authors/ada');
		expect(screen.getByText('12 March 2026 · 6 min read')).toBeTruthy();
	});
});

describe('FileInput', () => {
	it('shows the chosen file name and stays labelled', async () => {
		render(FileInput, { props: { label: 'Cover image', hint: 'WebP only.' } });

		const input = /** @type {HTMLInputElement} */ (screen.getByLabelText('Cover image'));
		expect(input.type).toBe('file');
		expect(screen.getByText('No file chosen')).toBeTruthy();

		const file = new File(['x'], 'cover.webp', { type: 'image/webp' });
		await fireEvent.change(input, { target: { files: [file] } });

		expect(screen.getByText('cover.webp')).toBeTruthy();
	});
});

describe('Timeline', () => {
	it('renders one dated entry per item', () => {
		render(Timeline, {
			props: {
				label: 'Releases',
				items: [
					{ date: 'March 2026', title: '0.2.0', body: 'New components.' },
					{ date: 'February 2026', title: '0.1.2' }
				]
			}
		});

		expect(screen.getByRole('list', { name: 'Releases' })).toBeTruthy();
		expect(document.querySelectorAll('li')).toHaveLength(2);
		expect(screen.getByText('March 2026')).toBeTruthy();
		expect(screen.getByText('New components.')).toBeTruthy();
	});
});

describe('Figure', () => {
	it('renders the image, caption and credit in a fixed ratio frame', () => {
		const { container } = render(Figure, {
			props: {
				src: '/shots/home.webp',
				alt: 'Home screen',
				ratio: '4 / 3',
				caption: 'One hue',
				credit: 'MaterSV'
			}
		});

		expect(screen.getByRole('img', { name: 'Home screen' }).getAttribute('src')).toBe(
			'/shots/home.webp'
		);
		expect(screen.getByText('One hue')).toBeTruthy();
		expect(screen.getByText('MaterSV')).toBeTruthy();
		expect(container.querySelector('figure')?.getAttribute('style')).toContain('--ratio: 4 / 3');
	});
});

describe('Rating', () => {
	it('uses native radios and reports the chosen star', async () => {
		render(Rating, { props: { label: 'Your rating', value: 2 } });

		const third = /** @type {HTMLInputElement} */ (screen.getByRole('radio', { name: '3 of 5' }));
		expect(third.checked).toBe(false);

		await fireEvent.click(third);
		expect(third.checked).toBe(true);
		expect(/** @type {HTMLInputElement} */ (screen.getByRole('radio', { name: '2 of 5' })).checked).toBe(
			false
		);
	});

	it('reads as one image when read-only', () => {
		render(Rating, { props: { label: 'Average', value: 4, readonly: true } });

		expect(screen.getByRole('img', { name: '4 out of 5' })).toBeTruthy();
		expect(screen.queryByRole('radio')).toBeNull();
	});
});

describe('ScrollProgress', () => {
	it('is decorative', () => {
		render(ScrollProgress, {});

		const bar = document.querySelector('.progress');
		expect(bar?.getAttribute('aria-hidden')).toBe('true');
	});
});

describe('AvatarGroup', () => {
	it('shows max circles plus a tail and names everyone once', () => {
		render(AvatarGroup, {
			props: {
				label: 'Reviewers',
				max: 2,
				people: [{ name: 'Ada' }, { name: 'Grace' }, { name: 'Alan' }]
			}
		});

		expect(screen.getByRole('group', { name: 'Reviewers' })).toBeTruthy();
		expect(screen.getByText('+1')).toBeTruthy();
		expect(screen.getByText('Ada, Grace, Alan')).toBeTruthy();
	});
});

describe('NumberInput', () => {
	it('steps and clamps between min and max', async () => {
		render(NumberInput, { props: { label: 'Seats', value: 2, min: 1, max: 4 } });

		const input = /** @type {HTMLInputElement} */ (screen.getByLabelText('Seats'));
		const increase = screen.getByRole('button', { name: 'Increase Seats' });
		const decrease = screen.getByRole('button', { name: 'Decrease Seats' });

		await fireEvent.click(increase);
		await fireEvent.click(increase);
		expect(input.value).toBe('4');
		expect(/** @type {HTMLButtonElement} */ (increase).disabled).toBe(true);

		await fireEvent.click(decrease);
		await fireEvent.click(decrease);
		await fireEvent.click(decrease);
		expect(input.value).toBe('1');
		expect(/** @type {HTMLButtonElement} */ (decrease).disabled).toBe(true);
	});
});

describe('Steps', () => {
	it('marks only the current step with aria-current', () => {
		render(Steps, {
			props: {
				label: 'Checkout',
				current: 2,
				items: [{ label: 'Cart' }, { label: 'Shipping' }, { label: 'Payment' }]
			}
		});

		const items = [...document.querySelectorAll('li')];
		expect(items.map((item) => item.getAttribute('data-state'))).toEqual([
			'done',
			'current',
			'next'
		]);
		expect(screen.getByText('Shipping').closest('li')?.getAttribute('aria-current')).toBe('step');
		expect(screen.getByText('Payment').closest('li')?.getAttribute('aria-current')).toBeNull();
	});
});

describe('RadioGroup', () => {
	it('is a named group of native radios', async () => {
		render(RadioGroup, {
			props: {
				label: 'Plan',
				value: 'solo',
				items: [
					{ value: 'solo', label: 'Solo' },
					{ value: 'team', label: 'Team', hint: 'Five seats.' }
				]
			}
		});

		expect(screen.getByRole('group', { name: 'Plan' })).toBeTruthy();

		const solo = /** @type {HTMLInputElement} */ (screen.getByRole('radio', { name: 'Solo' }));
		const team = /** @type {HTMLInputElement} */ (screen.getByRole('radio', { name: 'Team' }));
		expect(solo.checked).toBe(true);
		expect(team.getAttribute('aria-describedby')).toBeTruthy();

		await fireEvent.click(team);
		expect(team.checked).toBe(true);
		expect(solo.checked).toBe(false);
	});
});

describe('Prose', () => {
	it('renders article markup inside one wrapper', () => {
		render(Prose, {
			props: {
				class: 'article',
				children: createRawSnippet(() => ({
					render: () => '<h2>Title</h2><p>Body</p>'
				}))
			}
		});

		const heading = screen.getByRole('heading', { name: 'Title' });
		expect(heading.closest('.prose')).not.toBeNull();
		expect(heading.closest('.prose')?.classList.contains('article')).toBe(true);
	});
});

describe('CodeBlock', () => {
	it('copies the code and announces it', async () => {
		const writeText = vi.fn(() => Promise.resolve());
		Object.defineProperty(navigator, 'clipboard', {
			value: { writeText },
			configurable: true
		});

		render(CodeBlock, { props: { code: 'const a = 1;', label: 'a.js' } });

		expect(screen.getByText('a.js')).toBeTruthy();
		expect(screen.getByText('const a = 1;')).toBeTruthy();

		await fireEvent.click(screen.getByRole('button', { name: 'Copy code' }));

		expect(writeText).toHaveBeenCalledWith('const a = 1;');
		expect(await screen.findByText('Copied')).toBeTruthy();
		expect(screen.getByRole('status').textContent).toBe('Copied to clipboard');
	});
});

describe('Menu', () => {
	it('exposes a menu button and reports the chosen value', async () => {
		const onselect = vi.fn();
		render(Menu, {
			props: {
				label: 'Sort',
				items: [
					{ value: 'newest', label: 'Newest first' },
					{ value: 'oldest', label: 'Oldest first' }
				],
				onselect
			}
		});

		const trigger = screen.getByRole('button', { name: 'Sort' });
		expect(trigger.getAttribute('aria-haspopup')).toBe('menu');
		expect(trigger.getAttribute('aria-expanded')).toBe('false');
		// jsdom hides a closed popover, so the items are only reachable as hidden.
		expect(screen.getAllByRole('menuitem', { hidden: true })).toHaveLength(2);

		await fireEvent.click(screen.getByRole('menuitem', { name: 'Oldest first', hidden: true }));
		expect(onselect).toHaveBeenCalledWith('oldest');
	});
});

describe('SearchField', () => {
	it('is a named search box with a clear button once it has a value', async () => {
		const { rerender } = render(SearchField, {
			props: { label: 'Search the docs', value: '' }
		});

		const input = /** @type {HTMLInputElement} */ (
			screen.getByRole('searchbox', { name: 'Search the docs' })
		);
		expect(input.value).toBe('');
		expect(screen.queryByRole('button', { name: 'Clear search' })).toBeNull();

		await rerender({ label: 'Search the docs', value: 'tabs' });
		expect(input.value).toBe('tabs');

		await fireEvent.click(screen.getByRole('button', { name: 'Clear search' }));
		expect(input.value).toBe('');
	});
});

describe('Toast', () => {
	it('stays in the DOM as a live region and closes itself', async () => {
		vi.useFakeTimers();
		render(Toast, { props: { message: 'Layout saved', open: true, duration: 3000 } });

		const region = screen.getByRole('status');
		expect(region.textContent).toContain('Layout saved');

		await vi.advanceTimersByTimeAsync(3000);
		expect(region.textContent).toBe('');
		vi.useRealTimers();
	});
});

describe('Table', () => {
	it('labels the table with its caption', () => {
		render(Table, {
			props: {
				caption: 'Plan limits',
				children: createRawSnippet(() => ({
					render: () => '<thead><tr><th scope="col">Plan</th></tr></thead><tbody><tr><td>Solo</td></tr></tbody>'
				}))
			}
		});

		const table = screen.getByRole('table', { name: 'Plan limits' });
		expect(table).toBeTruthy();
		expect(screen.getByRole('columnheader', { name: 'Plan' })).toBeTruthy();
	});

	it('renders the rows it is given', () => {
		render(Table, {
			props: {
				children: createRawSnippet(() => ({
					render: () => '<tbody><tr><th scope="row">Solo</th><td>1</td></tr></tbody>'
				}))
			}
		});

		expect(screen.getByRole('rowheader', { name: 'Solo' })).toBeTruthy();
		expect(screen.getByRole('cell', { name: '1' })).toBeTruthy();
	});
});

describe('Tooltip', () => {
	it('keeps the label decorative so the trigger stays the accessible name', () => {
		render(Tooltip, { props: { text: 'Copy link', children: text('Copy') } });

		expect(screen.getByText('Copy')).toBeTruthy();
		const bubble = screen.getByText('Copy link');
		expect(bubble.getAttribute('aria-hidden')).toBe('true');
		expect(bubble.closest('[tabindex]')).toBeNull();
	});
});

describe('Wordmark', () => {
	it('renders the brand as decorative text', () => {
		render(Wordmark, { props: { text: 'Mater' } });

		const mark = screen.getByText('Mater');
		expect(mark.getAttribute('aria-hidden')).toBe('true');
	});
});

describe('theme', () => {
	it('writes the theme to the document root', () => {
		applyTheme('dark', false);
		expect(document.documentElement.dataset.theme).toBe('dark');

		applyTheme('light', false);
		expect(document.documentElement.dataset.theme).toBe('light');
	});
});
