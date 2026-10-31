import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

import * as lib from '../src/lib/index.js';
import { blocks } from '../src/docs/blocks/registry.js';
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

describe('blocks registry', () => {
	it('has unique slugs, more than one variant each, and copy-pasteable sources', () => {
		const slugs = blocks.map((block) => block.slug);
		expect(new Set(slugs).size).toBe(slugs.length);

		for (const block of blocks) {
			expect(block.lead.length).toBeGreaterThan(10);
			expect(block.variants.length).toBeGreaterThan(1);

			const ids = block.variants.map((variant) => variant.id);
			expect(new Set(ids).size).toBe(ids.length);

			for (const variant of block.variants) {
				expect(variant.label.length).toBeGreaterThan(2);
				expect(variant.lead.length).toBeGreaterThan(10);
				expect(variant.source.length).toBeGreaterThan(200);
				expect(existsSync(variant.file), variant.file).toBe(true);
				// The preview imports from #lib; the shown code must import the package.
				expect(variant.source).not.toContain('#lib');
			}
		}
	});
});

/** Every prerendered route, with dynamic segments turned into wildcards. */
function routePatterns(dir = 'src/routes', prefix = '', out = []) {
	for (const entry of readdirSync(dir, { withFileTypes: true })) {
		const path = dir + '/' + entry.name;
		if (entry.isDirectory()) routePatterns(path, prefix + '/' + entry.name, out);
		else if (entry.name === '+page.svelte') out.push(prefix || '/');
	}

	return out;
}

const ROUTES = routePatterns().map(
	(route) => new RegExp('^' + route.replace(/\[[^\]]+\]/g, '[^/]+') + '/?$')
);

const read = (/** @type {string} */ path) => readFileSync(path, 'utf8');

/**
 * Demo pages are prerendered and crawled, so a demo link to a missing id or
 * route fails the static build with prerender_missing_id / prerender_http_error.
 * Catch it in the unit suite instead.
 */
const DEMOS = [
	{
		file: 'src/docs/Example.svelte',
		hosts: ['src/docs/Example.svelte', 'src/routes/components/[slug]/+page.svelte']
	},
	{ file: 'src/routes/+page.svelte', hosts: ['src/routes/+page.svelte'] },
	// Blocks are rendered on their own docs page, so links must resolve there.
	...blocks.flatMap((block) => block.variants.map((variant) => ({ file: variant.file, hosts: [] })))
];

describe('demo links', () => {
	for (const { file, hosts } of DEMOS) {
		it(file + ' only links to anchors and routes that exist', () => {
			const ids = new Set(
				[...hosts, file].flatMap((host) =>
					[...read(host).matchAll(/\bid="([^"]+)"/g)].map((match) => match[1])
				)
			);

			// Matches both href="..." and the href: '...' used in demo data arrays,
			// which also end up as real anchors after rendering.
			for (const [, href] of read(file).matchAll(/href[=:]\s*["']([^"']+)["']/g)) {
				if (href.startsWith('http')) continue;

				if (href.startsWith('#')) {
					expect(ids.has(href.slice(1)), file + ' links to ' + href).toBe(true);
				} else {
					expect(
						ROUTES.some((route) => route.test(href)),
						file + ' links to ' + href
					).toBe(true);
				}
			}
		});
	}
});
