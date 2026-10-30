import { createRawSnippet } from 'svelte';
import { fireEvent, render, screen } from '@testing-library/svelte';
import { describe, expect, it, vi } from 'vitest';

import AccordionItem from '../src/lib/components/AccordionItem.svelte';
import Button from '../src/lib/components/Button.svelte';
import Input from '../src/lib/components/Input.svelte';
import Annotation from '../src/lib/components/Annotation.svelte';
import Avatar from '../src/lib/components/Avatar.svelte';
import Breadcrumbs from '../src/lib/components/Breadcrumbs.svelte';
import Card from '../src/lib/components/Card.svelte';
import Checkbox from '../src/lib/components/Checkbox.svelte';
import Cover from '../src/lib/components/Cover.svelte';
import EmptyState from '../src/lib/components/EmptyState.svelte';
import Fieldset from '../src/lib/components/Fieldset.svelte';
import Dots from '../src/lib/components/Dots.svelte';
import ListRow from '../src/lib/components/ListRow.svelte';
import Notice from '../src/lib/components/Notice.svelte';
import Pagination from '../src/lib/components/Pagination.svelte';
import Progress from '../src/lib/components/Progress.svelte';
import Quote from '../src/lib/components/Quote.svelte';
import SegmentedControl from '../src/lib/components/SegmentedControl.svelte';
import Select from '../src/lib/components/Select.svelte';
import Skeleton from '../src/lib/components/Skeleton.svelte';
import Slider from '../src/lib/components/Slider.svelte';
import Spinner from '../src/lib/components/Spinner.svelte';
import Stat from '../src/lib/components/Stat.svelte';
import Strike from '../src/lib/components/Strike.svelte';
import Window from '../src/lib/components/Window.svelte';
import Switch from '../src/lib/components/Switch.svelte';
import Table from '../src/lib/components/Table.svelte';
import Tabs from '../src/lib/components/Tabs.svelte';
import Tooltip from '../src/lib/components/Tooltip.svelte';
import Wordmark from '../src/lib/components/Wordmark.svelte';
import Textarea from '../src/lib/components/Textarea.svelte';
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
