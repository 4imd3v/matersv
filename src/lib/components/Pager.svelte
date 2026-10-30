<script>
	/**
	 * @typedef {object} Page
	 * @property {string} href
	 * @property {string} title
	 *
	 * @typedef {object} PagerProps
	 * @property {Page} [prev]
	 * @property {Page} [next]
	 * @property {string} [label]
	 * @property {string} [class]
	 */

	/** @type {PagerProps & Record<string, any>} */
	let { prev = undefined, next = undefined, label = 'Pagination', class: className = '', ...rest } = $props();
</script>

<nav class="pager {className}" aria-label={label} {...rest}>
	{#if prev}
		<a class="link" href={prev.href}>
			<span class="kicker">Previous</span>
			<span class="title">{prev.title}</span>
		</a>
	{/if}
	{#if next}
		<a class="link link--next" href={next.href}>
			<span class="kicker">Next</span>
			<span class="title">{next.title}</span>
		</a>
	{/if}
</nav>

<style>
	.pager {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		gap: 16px 32px;
	}

	.link {
		display: grid;
		gap: 4px;
		max-width: 34ch;
		color: inherit;
		text-decoration: none;
	}

	.link--next {
		margin-left: auto;
		text-align: right;
	}

	.kicker {
		color: var(--color-muted);
		font-size: 13px;
		font-weight: 600;
		line-height: 1.2;
	}

	.title {
		font-size: 18px;
		font-weight: 600;
		line-height: 1.25;
		letter-spacing: -0.01em;
		text-wrap: balance;
	}

	.link:hover .title {
		text-decoration: underline;
		text-decoration-thickness: 2px;
		text-underline-offset: 4px;
		text-decoration-color: color-mix(in oklab, currentColor 30%, transparent);
	}
</style>
