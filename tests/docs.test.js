import { describe, expect, it } from 'vitest';

import * as lib from '../src/lib/index.js';
import { components } from '../src/docs/registry.js';

const exportedComponents = Object.keys(lib)
	.filter((name) => /^[A-Z]/.test(name))
	.sort();

describe('docs registry', () => {
	it('documents every exported component', () => {
		expect(components.map((component) => component.name).sort()).toEqual(exportedComponents);
	});

	it('has unique slugs and complete entries', () => {
		const slugs = components.map((component) => component.slug);
		expect(new Set(slugs).size).toBe(slugs.length);

		for (const component of components) {
			expect(component.lead.length).toBeGreaterThan(10);
			expect(component.code.length).toBeGreaterThan(20);
			expect(Array.isArray(component.props)).toBe(true);
		}
	});
});
