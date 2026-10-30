<script>
	/**
	 * @typedef {object} QuoteProps
	 * @property {string} [cite]
	 * @property {string} [class]
	 * @property {import('svelte').Snippet} children
	 */

	/** @type {QuoteProps & Record<string, any>} */
	let { cite = undefined, class: className = '', children, ...rest } = $props();
</script>

<figure class="quote {className}" {...rest}>
	<blockquote>
		<p>{@render children()}</p>
	</blockquote>
	{#if cite}
		<figcaption>{cite}</figcaption>
	{/if}
</figure>

<style>
	.quote {
		display: grid;
		gap: 18px;
		max-width: 26ch;
	}

	blockquote p {
		font-size: var(--text-h3);
		font-weight: 600;
		line-height: 1.14;
		letter-spacing: -0.03em;
		text-wrap: balance;
	}

	figcaption {
		font-family: var(--font-hand);
		font-size: 22px;
		font-weight: 600;
		line-height: 1;
		color: var(--color-muted);
	}

	figcaption::before {
		content: '— ';
	}
</style>
