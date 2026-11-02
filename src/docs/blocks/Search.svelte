<script>
	import { Badge, Checkbox, Kbd, Pagination, Popover, SearchField, Tabs } from '#lib/index.js';

	let query = $state('one hue');
	let tab = $state('all');
	let filters = $state(false);
	let noRuntime = $state(true);
	let night = $state(false);

	const tabs = [
		{ value: 'all', label: 'All' },
		{ value: 'component', label: 'Components' },
		{ value: 'block', label: 'Blocks' }
	];

	const results = [
		{
			title: 'One hue, four surfaces, no borders',
			kind: 'Article',
			snippet: 'How a two-number colour engine keeps a wide page calm, and what we deleted to get there.',
			href: '/blocks/article'
		},
		{
			title: 'Card',
			kind: 'Component',
			snippet: 'A flat colour surface with an optional heading and lead. Padding and radius come from the layout tokens.',
			href: '/components/card'
		},
		{
			title: 'Table',
			kind: 'Component',
			snippet: 'Native table in a scroll container, with the caption kept inside the table for screen readers.',
			href: '/components/table'
		},
		{
			title: 'Tabs',
			kind: 'Component',
			snippet: 'Pill tabs with automatic activation: the arrow keys move focus and select in one step.',
			href: '/components/tabs'
		},
		{
			title: 'Pricing',
			kind: 'Block',
			snippet: 'Three plans with aligned rows, the middle one on the field surface, and a ghost action.',
			href: '/blocks/pricing'
		},
		{
			title: 'Stats',
			kind: 'Block',
			snippet: 'Numbers as proof: a dark figures band, or a two-sided comparison with one dot per unit.',
			href: '/blocks/stats'
		}
	];

	const pages = [
		{ href: '/blocks/search', label: '1' },
		{ href: '/blocks/search', label: '2' },
		{ href: '/blocks/search', label: '3' }
	];

	const visible = $derived(
		tab === 'all' ? results : results.filter((result) => result.kind.toLowerCase() === tab)
	);
</script>

{#snippet keys()}
	<Kbd>⌘</Kbd><Kbd>K</Kbd>
{/snippet}

<section class="section">
	<div class="wrap search">
		<header class="head">
			<h1>Search</h1>
			<div class="field">
				<SearchField
					label="Search the docs"
					bind:value={query}
					placeholder="Component, token, block"
					shortcut={keys}
				/>
			</div>
		</header>

		<Tabs items={tabs} bind:value={tab} label="Result type">
			<div class="bar">
				<p class="count">
					{visible.length} results for <span>&ldquo;{query}&rdquo;</span>
				</p>
				<Popover label="Filters" bind:open={filters}>
					{#snippet trigger()}Filters{/snippet}
					<Checkbox label="No runtime dependency" bind:checked={noRuntime} />
					<Checkbox label="Has a night band" bind:checked={night} />
				</Popover>
			</div>

			<ul class="results">
				{#each visible as result (result.href)}
					<li>
						<article class="result">
							<div class="top">
								<a href={result.href}>{result.title}</a>
								<Badge>{result.kind}</Badge>
							</div>
							<p class="snippet">{result.snippet}</p>
							<p class="path">{result.href}</p>
						</article>
					</li>
				{/each}
			</ul>

			<div class="more">
				<Pagination items={pages} current={0} label="Search pages" />
			</div>
		</Tabs>
	</div>
</section>

<style>
	.search {
		width: min(880px, 100%);
	}

	.head {
		display: grid;
		gap: 20px;
		margin-bottom: clamp(28px, 4vw, 40px);
	}

	h1 {
		font-size: clamp(32px, 3.6vw, 44px);
		font-weight: 600;
		line-height: 1;
		letter-spacing: -0.045em;
	}

	.bar {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		gap: 12px 20px;
		margin-bottom: 10px;
	}

	.count {
		color: var(--color-muted);
		font-size: 15px;
		font-variant-numeric: tabular-nums;
	}

	.count span {
		color: var(--color-ink);
		font-weight: 600;
	}

	.results {
		display: grid;
		gap: 2px;
	}

	.result {
		display: grid;
		gap: 6px;
		margin-inline: -16px;
		padding: 18px 16px;
		border-radius: 20px;
		transition: background-color var(--dur-control) var(--ease-effects);
	}

	.result:hover {
		background: color-mix(in oklab, var(--color-field) 45%, transparent);
	}

	.top {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 12px;
	}

	.top a {
		color: inherit;
		font-size: 20px;
		font-weight: 600;
		letter-spacing: -0.02em;
		text-decoration: none;
	}

	.top a:hover {
		text-decoration: underline;
		text-decoration-thickness: 2px;
		text-underline-offset: 4px;
		text-decoration-color: color-mix(in oklab, currentColor 30%, transparent);
	}

	.snippet {
		max-width: 66ch;
		color: var(--color-muted);
		font-size: 16px;
		text-wrap: pretty;
	}

	.path {
		color: var(--color-muted);
		font-family: var(--font-mono);
		font-size: 13px;
	}

	.more {
		display: flex;
		justify-content: center;
		margin-top: clamp(24px, 3vw, 36px);
	}
</style>
