import { createRawSnippet } from 'svelte';
import { fireEvent, render, screen } from '@testing-library/svelte';
import { describe, expect, it, vi } from 'vitest';

import AccordionItem from '../src/lib/components/AccordionItem.svelte';
import Button from '../src/lib/components/Button.svelte';
import Input from '../src/lib/components/Input.svelte';
import Annotation from '../src/lib/components/Annotation.svelte';
import Card from '../src/lib/components/Card.svelte';
import Progress from '../src/lib/components/Progress.svelte';
import SegmentedControl from '../src/lib/components/SegmentedControl.svelte';
import Select from '../src/lib/components/Select.svelte';
import Stat from '../src/lib/components/Stat.svelte';
import Switch from '../src/lib/components/Switch.svelte';
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

describe('theme', () => {
	it('writes the theme to the document root', () => {
		applyTheme('dark', false);
		expect(document.documentElement.dataset.theme).toBe('dark');

		applyTheme('light', false);
		expect(document.documentElement.dataset.theme).toBe('light');
	});
});
