import { error } from '@sveltejs/kit';
import { components } from '../../../docs/registry.js';

export const prerender = true;

export function entries() {
	return components.map((component) => ({ slug: component.slug }));
}

export function load({ params }) {
	const index = components.findIndex((component) => component.slug === params.slug);
	if (index === -1) error(404, 'Component not found');

	return {
		component: components[index],
		prev: components[index - 1] ?? null,
		next: components[index + 1] ?? null
	};
}
