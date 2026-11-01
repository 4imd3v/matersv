<script>
	import { SearchField } from '#lib/index.js';

	let query = $state('');

	const suggestions = [
		{ href: '/components', title: 'Components', path: '/components' },
		{ href: '/blocks', title: 'Blocks', path: '/blocks' },
		{ href: '/blocks/pricing', title: 'Pricing', path: '/blocks/pricing' }
	];
</script>

<section class="section">
	<div class="wrap split">
		<div class="copy">
			<p class="code">404</p>
			<h1>Wrong turn.</h1>
			<p class="lead">
				Search the docs, or start from a page that certainly exists. Every block is one click
				from here.
			</p>
		</div>

		<div class="card find">
			<h2>Search</h2>
			<SearchField
				label="Search the docs"
				bind:value={query}
				placeholder="Component, token, block"
			/>

			<ul class="suggest">
				{#each suggestions as item (item.path)}
					<li>
						<a href={item.href}>
							<span>{item.title}</span>
							<span class="path">{item.path}</span>
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</section>

<style>
	.split {
		display: grid;
		grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
		gap: clamp(32px, 5vw, 80px);
		align-items: center;
	}

	.copy {
		display: grid;
		justify-items: start;
	}

	.code {
		color: var(--color-muted);
		font-size: 14px;
		font-weight: 600;
		font-variant-numeric: tabular-nums;
	}

	h1 {
		margin-top: 10px;
		font-size: clamp(40px, 4.6vw, 64px);
		font-weight: 600;
		line-height: 0.98;
		letter-spacing: -0.05em;
		text-wrap: balance;
	}

	.lead {
		margin-top: 20px;
		max-width: 40ch;
		color: var(--color-muted);
		text-wrap: pretty;
	}

	.find {
		display: grid;
		/* minmax(0, 1fr) keeps the search field from widening the grid column. */
		grid-template-columns: minmax(0, 1fr);
		gap: 20px;
		padding: clamp(26px, 3vw, 36px);
	}

	.find h2 {
		font-size: 20px;
		font-weight: 600;
		letter-spacing: -0.02em;
	}

	.suggest {
		display: grid;
		gap: 2px;
	}

	.suggest a {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		gap: 16px;
		padding: 10px 14px;
		border-radius: var(--radius-pill);
		color: inherit;
		font-size: 15px;
		font-weight: 600;
		text-decoration: none;
		transition: background-color var(--dur-control) ease;
	}

	.suggest a:hover {
		background: var(--color-field);
		color: var(--color-field-ink);
	}

	.path {
		color: var(--color-muted);
		font-family: var(--font-mono);
		font-size: 13px;
		font-weight: 400;
	}

	.suggest a:hover .path {
		color: inherit;
		opacity: 0.8;
	}

	@media (max-width: 900px) {
		.split {
			grid-template-columns: 1fr;
		}
	}
</style>
