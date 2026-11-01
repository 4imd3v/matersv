<script>
	import { Button, EmptyState, SearchField, TagList } from '#lib/index.js';

	let query = $state('surface tension');

	const popular = [
		{ href: '/components/card', label: 'Card' },
		{ href: '/components/table', label: 'Table' },
		{ href: '/blocks/pricing', label: 'Pricing' },
		{ href: '/blocks/stats', label: 'Stats' }
	];
</script>

<section class="section">
	<div class="wrap narrow">
		<SearchField
			label="Search the docs"
			bind:value={query}
			placeholder="Component, token, block"
		/>

		<div class="empty">
			<EmptyState
				title="Nothing matched &ldquo;surface tension&rdquo;"
				lead="Try a component name, a token, or a phrase you remember from the docs."
			>
				{#snippet icon()}
					<svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
						<circle cx="11" cy="11" r="6.5" stroke="currentColor" stroke-width="1.9" />
						<path d="m16 16 4 4" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" />
					</svg>
				{/snippet}
				<Button href="/components" variant="ghost">Browse components</Button>
			</EmptyState>
		</div>

		<div class="suggest">
			<p class="k">Popular searches</p>
			<TagList label="Popular searches" items={popular} />
		</div>
	</div>
</section>

<style>
	.narrow {
		width: min(640px, 100%);
		margin-inline: auto;
	}

	.empty {
		margin-top: clamp(28px, 4vw, 44px);
	}

	.suggest {
		display: grid;
		justify-items: start;
		gap: 14px;
		margin-top: clamp(28px, 4vw, 40px);
	}

	.k {
		color: var(--color-muted);
		font-size: 14px;
		font-weight: 600;
	}
</style>
