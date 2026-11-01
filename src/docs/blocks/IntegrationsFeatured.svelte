<script>
	import { Badge, Button, FeatureList, ListRow, Menu, SectionHeader } from '#lib/index.js';

	let sort = $state('popular');

	const sorts = [
		{ value: 'popular', label: 'Most installed' },
		{ value: 'name', label: 'A to Z' },
		{ value: 'kind', label: 'By category' }
	];

	const rest = [
		{ name: 'Figma', meta: 'Official · Design · 4,120 workspaces' },
		{ name: 'Linear', meta: 'Official · Ops · 3,480 workspaces' },
		{ name: 'Notion', meta: 'Community · Data · 2,910 workspaces' },
		{ name: 'Stripe', meta: 'Official · Ops · 2,240 workspaces' },
		{ name: 'Contentful', meta: 'Community · Design · 860 workspaces' }
	];

	const sorted = $derived(
		sort === 'name'
			? [...rest].sort((a, b) => a.name.localeCompare(b.name))
			: sort === 'kind'
				? [...rest].sort((a, b) => a.meta.localeCompare(b.meta))
				: rest
	);

	const current = $derived(sorts.find((item) => item.value === sort)?.label ?? 'Sort');

	const syncs = [
		'Schema and row counts refresh every fifteen minutes.',
		'Queries run read-only, on the connection you nominate.',
		'Every card says when it was last read.'
	];
</script>

<section class="section">
	<div class="wrap">
		<SectionHeader
			title="Integrations"
			lead="One of them gets the full page: what it reads, what it writes, and where the connection lives."
		/>

		<div class="cols">
			<article class="card featured">
				<div class="top">
					<span class="mono" aria-hidden="true">P</span>
					<Badge tone="accent">Official</Badge>
				</div>
				<h3>Postgres</h3>
				<p class="copy">
					Point a card at a query and it stays live. No export step, no copy of the data
					sitting in a spreadsheet.
				</p>
				<FeatureList label="What it syncs" items={syncs} />
				<dl class="facts">
					<div><dt>Setup</dt><dd>4 minutes</dd></div>
					<div><dt>Direction</dt><dd>Read-only</dd></div>
					<div><dt>Plan</dt><dd>Studio and up</dd></div>
				</dl>
				<div class="actions">
					<Button>Connect Postgres</Button>
					<Button variant="ghost" href="/components/table">See the output</Button>
				</div>
			</article>

			<div class="list">
				<div class="list-head">
					<h3>All integrations</h3>
					<Menu
						label={'Sort: ' + current}
						items={sorts}
						onselect={(value) => (sort = value)}
					/>
				</div>

				<ul>
					{#each sorted as item (item.name)}
						<li>
							<ListRow title={item.name} meta={item.meta} />
						</li>
					{/each}
				</ul>

				<p class="fine">Twenty-four in total, six documented with a setup page.</p>
			</div>
		</div>
	</div>
</section>

<style>
	.cols {
		display: grid;
		grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
		gap: clamp(20px, 3vw, 40px);
		align-items: start;
		margin-top: clamp(28px, 4vw, 44px);
	}

	.featured {
		display: grid;
		justify-items: start;
		gap: 14px;
		padding: clamp(28px, 3vw, 40px);
	}

	.top {
		display: flex;
		align-items: center;
		gap: 12px;
	}

	.mono {
		display: grid;
		place-items: center;
		width: 56px;
		height: 56px;
		border-radius: 18px;
		background: var(--color-field);
		color: var(--color-field-ink);
		font-size: 22px;
		font-weight: 600;
	}

	/* The card's h3 rule is fine, but this one sits under a badge, not at the top. */
	.card > h3 {
		margin-top: 4px;
	}

	.copy {
		margin-top: 0;
		max-width: 42ch;
		font-size: 16px;
		line-height: 1.5;
		color: var(--color-muted);
		text-wrap: pretty;
	}

	.facts {
		display: grid;
		gap: 8px;
		width: 100%;
		padding-top: 16px;
		font-size: 14px;
	}

	.facts div {
		display: flex;
		justify-content: space-between;
		gap: 16px;
	}

	.facts dt {
		color: var(--color-muted);
	}

	.facts dd {
		margin: 0;
		font-weight: 600;
		font-variant-numeric: tabular-nums;
	}

	.actions {
		display: flex;
		flex-wrap: wrap;
		gap: 12px;
		margin-top: 6px;
	}

	.list {
		display: grid;
		gap: 14px;
	}

	.list-head {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		gap: 12px;
	}

	/* The menu button should not dominate the rows it sorts. */
	.list-head :global(.menu .trigger) {
		height: 36px;
		padding-inline: 14px;
		font-size: 13px;
	}

	.list ul {
		display: grid;
		gap: 2px;
	}

	.fine {
		color: var(--color-muted);
		font-size: 14px;
	}

	@media (max-width: 900px) {
		.cols {
			grid-template-columns: 1fr;
		}
	}
</style>
