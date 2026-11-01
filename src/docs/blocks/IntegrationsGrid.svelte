<script>
	import { Badge, Button, SearchField, SectionHeader, Tabs } from '#lib/index.js';

	let query = $state('');
	let tab = $state('all');

	const tabs = [
		{ value: 'all', label: 'All' },
		{ value: 'data', label: 'Data' },
		{ value: 'design', label: 'Design' },
		{ value: 'ops', label: 'Ops' }
	];

	const integrations = [
		{
			name: 'Postgres',
			kind: 'data',
			mono: 'P',
			official: true,
			lead: 'Read-only connection, one query per card, nothing cached in between.'
		},
		{
			name: 'Figma',
			kind: 'design',
			mono: 'F',
			official: true,
			lead: 'Pull colour overrides straight from a library, published or draft.'
		},
		{
			name: 'Linear',
			kind: 'ops',
			mono: 'L',
			official: true,
			lead: 'Turn a failing audit into an issue with the page and the selector attached.'
		},
		{
			name: 'Notion',
			kind: 'data',
			mono: 'N',
			official: false,
			lead: 'Keep release notes and changelogs next to the code that caused them.'
		},
		{
			name: 'Stripe',
			kind: 'ops',
			mono: 'S',
			official: true,
			lead: 'Plan and invoice rows in a dashboard block, no server of your own.'
		},
		{
			name: 'Contentful',
			kind: 'design',
			mono: 'C',
			official: false,
			lead: 'Long-form bodies render through Prose on the same type scale.'
		}
	];

	const visible = $derived(
		integrations.filter(
			(item) =>
				(tab === 'all' || item.kind === tab) &&
				item.name.toLowerCase().includes(query.trim().toLowerCase())
		)
	);
</script>

<section class="section">
	<div class="wrap">
		<SectionHeader
			title="Connect what you already use"
			lead="Six of the twenty-four integrations, each one a page of settings rather than a plugin to install."
		/>

		<Tabs items={tabs} bind:value={tab} label="Category">
			<div class="tools">
				<div class="search">
					<SearchField
						label="Search integrations"
						bind:value={query}
						placeholder="Search by name"
					/>
				</div>
			</div>

			{#if visible.length}
				<ul class="grid">
					{#each visible as item (item.name)}
						<li class="card item">
							<span class="mono" aria-hidden="true">{item.mono}</span>
							<div class="text">
								<p class="name">
									{item.name}
									<Badge tone={item.official ? 'accent' : 'field'}>
										{item.official ? 'Official' : 'Community'}
									</Badge>
								</p>
								<p class="copy">{item.lead}</p>
							</div>
							<Button variant="text">Connect</Button>
						</li>
					{/each}
				</ul>
			{:else}
				<div class="none">
					<p class="none-title">Nothing matches &ldquo;{query}&rdquo;</p>
					<p class="copy">Ask for it in the issue tracker, or clear both filters.</p>
					<Button
						variant="ghost"
						onclick={() => {
							query = '';
							tab = 'all';
						}}>Clear filters</Button
					>
				</div>
			{/if}
		</Tabs>
	</div>
</section>

<style>
	.tools {
		display: flex;
		justify-content: flex-end;
		margin-top: clamp(16px, 2vw, 24px);
	}

	.search {
		width: min(320px, 100%);
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 12px;
		margin-top: 20px;
	}

	.item {
		display: grid;
		grid-template-columns: 52px minmax(0, 1fr);
		grid-template-areas:
			'mono text'
			'action action';
		gap: 16px;
		align-items: start;
		padding: clamp(22px, 2.4vw, 28px);
	}

	/* A monogram tile instead of six logo files. */
	.mono {
		display: grid;
		place-items: center;
		width: 52px;
		height: 52px;
		border-radius: 18px;
		background: var(--color-field);
		color: var(--color-field-ink);
		font-size: 20px;
		font-weight: 600;
		letter-spacing: -0.02em;
	}

	.text {
		grid-area: text;
		display: grid;
		gap: 6px;
	}

	.name {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 10px;
		font-size: 19px;
		font-weight: 600;
		letter-spacing: -0.02em;
	}

	.copy {
		color: var(--color-muted);
		font-size: 15px;
		line-height: 1.45;
		text-wrap: pretty;
	}

	.item :global(.btn) {
		grid-area: action;
		justify-self: start;
	}

	.none {
		display: grid;
		justify-items: start;
		gap: 12px;
		margin-top: 20px;
		padding: clamp(28px, 4vw, 48px);
		border-radius: var(--radius-card);
		background: var(--color-bg-soft);
	}

	.none-title {
		font-size: 20px;
		font-weight: 600;
		letter-spacing: -0.02em;
	}

	@media (max-width: 820px) {
		.grid {
			grid-template-columns: 1fr;
		}

		.tools {
			justify-content: stretch;
		}

		.search {
			width: 100%;
		}
	}
</style>
