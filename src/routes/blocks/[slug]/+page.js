import { error } from '@sveltejs/kit';
import { blocks } from '../../../docs/blocks/registry.js';

export const prerender = true;

export function entries() {
	return blocks.map((block) => ({ slug: block.slug }));
}

export function load({ params }) {
	const index = blocks.findIndex((block) => block.slug === params.slug);
	if (index === -1) error(404, 'Block not found');

	return {
		block: blocks[index],
		prev: blocks[index - 1] ?? null,
		next: blocks[index + 1] ?? null
	};
}
