<script>
	import { Badge, Button, FeatureList, SectionHeader } from '#lib/index.js';

	const plans = [
		{
			name: 'Solo',
			price: '$0',
			note: 'For one page, one hue, no build step.',
			cta: 'Start free',
			features: ['Three projects', 'All 68 components', 'Community support']
		},
		{
			name: 'Studio',
			price: '$24',
			note: 'For a small team shipping one site a month.',
			cta: 'Pick Studio',
			featured: true,
			features: ['Unlimited projects', 'Every block, copy and paste', 'Hue presets per brand', 'Email support']
		},
		{
			name: 'Agency',
			price: '$79',
			note: 'For studios handing the system to clients.',
			cta: 'Talk to us',
			features: ['Everything in Studio', 'White-label tokens', 'Shared component audit', 'Priority support']
		}
	];

	const notIncluded = 'analytics, AI copywriting and CDN hosting';
</script>

<section class="section">
	<div class="wrap">
		<SectionHeader
			title="One price per studio, not per seat"
			lead="Every plan is the same library. The difference is how many pages and how much of our time you need."
		/>

		<div class="plans">
			{#each plans as plan (plan.name)}
				<article class="card plan" class:featured={plan.featured}>
					<div class="head">
						<h3>{plan.name}</h3>
						{#if plan.featured}<Badge tone="accent">Most picked</Badge>{/if}
					</div>

					<p class="price">
						<span class="amount">{plan.price}</span>
						<span class="unit">per month</span>
					</p>

					<p class="note">{plan.note}</p>

					<div class="action">
						<Button href="/blocks/auth" variant={plan.featured ? 'primary' : 'ghost'}>
							{plan.cta}
						</Button>
					</div>

					<FeatureList label="{plan.name} includes" items={plan.features} />
				</article>
			{/each}
		</div>

		<div class="fine">
			<p>Prices in USD, billed monthly. Cancel any time.</p>
			<p>Not in any plan: {notIncluded}.</p>
		</div>
	</div>
</section>

<style>
	.plans {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: clamp(16px, 2vw, 28px);
		align-items: stretch;
	}

	/* Every row above the list is the same height, so the lists line up. */
	.plan {
		display: grid;
		align-content: start;
		gap: 14px;
		padding: clamp(28px, 2.6vw, 36px);
	}

	.head {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 12px;
	}

	h3 {
		font-size: var(--text-h3);
	}

	.price {
		display: flex;
		align-items: baseline;
		gap: 8px;
	}

	.amount {
		font-size: clamp(34px, 3.4vw, 46px);
		font-weight: 600;
		line-height: 1;
		letter-spacing: -0.04em;
		font-variant-numeric: tabular-nums;
	}

	.unit {
		color: var(--color-muted);
		font-size: 15px;
	}

	.note {
		min-height: 3.1em;
		margin: 0;
		color: var(--color-muted);
	}

	.action {
		display: flex;
	}

	.plan :global(ul) {
		margin-top: 6px;
	}

	.featured {
		background: var(--color-field);
		color: var(--color-field-ink);
	}

	.featured .note,
	.featured .unit {
		color: inherit;
	}

	.fine {
		display: grid;
		gap: 6px;
		margin-top: clamp(40px, 5vw, 64px);
		max-width: 62ch;
		color: var(--color-muted);
		font-size: 15px;
	}

	@media (max-width: 900px) {
		.plans {
			grid-template-columns: 1fr;
		}

		.note {
			min-height: 0;
		}
	}
</style>
