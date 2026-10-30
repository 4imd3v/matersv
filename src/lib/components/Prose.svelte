<script>
	/**
	 * @typedef {object} ProseProps
	 * @property {string} [class]
	 * @property {import('svelte').Snippet} children
	 */

	/** @type {ProseProps & Record<string, any>} */
	let { class: className = '', children, ...rest } = $props();
</script>

<div class="prose {className}" {...rest}>
	{@render children()}
</div>

<style>
	.prose {
		max-width: 68ch;
		font-size: 18px;
		line-height: 1.55;
	}

	/* Rhythm between blocks, not inside them. */
	.prose :global(* + *) {
		margin-top: 1.1em;
	}

	.prose :global(h2) {
		font-size: var(--text-h3);
		font-weight: 600;
		line-height: 1.1;
		letter-spacing: -0.03em;
		text-wrap: balance;
	}

	.prose :global(h3) {
		font-size: 24px;
		font-weight: 600;
		line-height: 1.2;
		letter-spacing: -0.02em;
		text-wrap: balance;
	}

	.prose :global(h2 + *),
	.prose :global(h3 + *) {
		margin-top: 0.6em;
	}

	.prose :global(p),
	.prose :global(li) {
		text-wrap: pretty;
	}

	.prose :global(ul),
	.prose :global(ol) {
		display: grid;
		gap: 0.45em;
		padding-left: 1.3em;
	}

	.prose :global(ul) {
		list-style: disc;
	}

	.prose :global(ol) {
		list-style: decimal;
	}

	/* The list gap already spaces items; the block owl would double it. */
	.prose :global(li + li) {
		margin-top: 0;
	}

	.prose :global(li::marker) {
		color: var(--color-muted);
	}

	.prose :global(a) {
		text-decoration: underline;
		text-decoration-thickness: 2px;
		text-underline-offset: 4px;
		text-decoration-color: color-mix(in oklab, currentColor 30%, transparent);
		transition: text-decoration-color var(--dur-control) ease;
	}

	.prose :global(a:hover) {
		text-decoration-color: currentColor;
	}

	.prose :global(code) {
		padding: 2px 8px;
		border-radius: 8px;
		background: var(--color-field);
		color: var(--color-field-ink);
		font: 400 0.9em/1.4 var(--font-mono);
	}

	.prose :global(blockquote) {
		padding: 20px 24px;
		border-radius: 22px;
		background: var(--color-field);
		color: var(--color-field-ink);
		font-size: var(--text-lead);
	}

	.prose :global(hr) {
		height: 2px;
		border: 0;
		border-radius: var(--radius-pill);
		background: var(--color-field);
	}

	.prose :global(img) {
		max-width: 100%;
		height: auto;
		border-radius: 22px;
	}

	.prose :global(strong) {
		font-weight: 600;
	}
</style>
