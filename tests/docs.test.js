import { readdirSync, readFileSync } from 'node:fs';
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
	{ file: 'src/routes/+page.svelte', hosts: ['src/routes/+page.svelte'] }
];

describe('demo links', () => {
	for (const { file, hosts } of DEMOS) {
		it(file + ' only links to anchors and routes that exist', () => {
			const ids = new Set(
				hosts.flatMap((host) =>
					[...read(host).matchAll(/\bid="([^"]+)"/g)].map((match) => match[1])
				)
			);

			for (const [, href] of read(file).matchAll(/href="([^"]+)"/g)) {
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
