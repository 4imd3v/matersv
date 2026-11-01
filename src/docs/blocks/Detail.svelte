<script>
	import { untrack } from 'svelte';
	import { CodeBlock, SegmentedControl } from '#lib/index.js';
	import Blocks from './Blocks.svelte';

	/**
	 * @typedef {object} BlockVariant
	 * @property {string} id
	 * @property {string} label
	 * @property {string} lead
	 * @property {string} file
	 * @property {string} source
	 *
	 * @typedef {object} BlockEntry
	 * @property {string} slug
	 * @property {string} name
	 * @property {string} category
	 * @property {string} lead
	 * @property {BlockVariant[]} variants
	 *
	 * @typedef {object} DetailProps
	 * @property {BlockEntry} block
	 */

	/** @type {DetailProps} */
	let { block } = $props();

	// The parent keys this component on the block, so the first variant is the start.
	let active = $state(untrack(() => block.variants[0].id));
	const current = $derived(block.variants.find((item) => item.id === active) ?? block.variants[0]);
	const tabs = $derived(block.variants.map((item) => ({ value: item.id, label: item.label })));
</script>

<section id="preview">
	<div class="bar">
		<h2>Preview</h2>
		<SegmentedControl label="Variant" items={tabs} bind:value={active} />
	</div>
	<p class="variant-lead">{current.lead}</p>

	<div class="frame">
		<Blocks slug={block.slug} variant={current.id} />
	</div>
</section>

<section id="code">
	<h2>Code</h2>
	<p class="hint">
		One section and one style block, the {current.label.toLowerCase()} variant. It only uses
		classes from <code>matersv.css</code>, so it works on its own.
	</p>
	<CodeBlock code={current.source} />
</section>

<style>
	section {
		margin-top: clamp(40px, 5vw, 64px);
	}

	h2 {
		font-size: var(--text-h3);
		font-weight: 600;
		line-height: 1.1;
		letter-spacing: -0.03em;
	}

	.bar {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		gap: 12px 24px;
		margin-bottom: 16px;
	}

	/* The control sizes itself to its labels, so no 1fr stretching. */
	.bar :global(.segmented) {
		grid-auto-columns: auto;
	}

	.variant-lead {
		margin-bottom: 20px;
		max-width: 68ch;
		color: var(--color-muted);
		font-size: 15px;
		text-wrap: pretty;
	}

	.hint {
		margin-bottom: 16px;
		max-width: 60ch;
		color: var(--color-muted);
		text-wrap: pretty;
	}

	.frame {
		/* Blocks keep their real rhythm, tightened here so the preview reads as one screen. */
		--gap: clamp(48px, 5vw, 88px);
		overflow: hidden;
		border-radius: var(--radius-card);
		background: var(--color-bg);
		box-shadow: var(--shadow-capsule);
	}
</style>
