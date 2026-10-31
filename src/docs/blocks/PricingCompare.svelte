<script>
	import { Badge, Button, SectionHeader, Table } from '#lib/index.js';

	const plans = [
		{ name: 'Solo', price: '$0' },
		{ name: 'Studio', price: '$24', featured: true },
		{ name: 'Agency', price: '$79' }
	];

	const rows = [
		{ label: 'Projects', cells: ['3', 'Unlimited', 'Unlimited'] },
		{ label: 'Components', cells: ['All 63', 'All 63', 'All 63'] },
		{ label: 'Blocks, copy and paste', cells: [false, true, true] },
		{ label: 'Hue presets per brand', cells: [false, true, true] },
		{ label: 'White-label tokens', cells: [false, false, true] },
		{ label: 'Email support', cells: [false, true, true] },
		{ label: 'Priority support', cells: [false, false, true] }
	];
</script>

<section class="section">
	<div class="wrap">
		<SectionHeader
			title="Every plan, side by side"
			lead="The same library in all three. The table is there for the one person on the call who wants the grid."
		/>

		<div class="card compare">
			<Table caption="What each plan includes">
				<thead>
					<tr>
						<th scope="col"><span class="sr-only">Feature</span></th>
						{#each plans as plan (plan.name)}
							<th scope="col">
								<span class="plan">
									{plan.name}
									{#if plan.featured}<Badge tone="accent">Most picked</Badge>{/if}
								</span>
								<span class="price">{plan.price}<span class="unit"> / month</span></span>
							</th>
						{/each}
					</tr>
				</thead>
				<tbody>
					{#each rows as row (row.label)}
						<tr>
							<th scope="row">{row.label}</th>
							{#each row.cells as cell, i (i)}
								<td>
									{#if cell === true}
										<svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
											<path
												d="m5 12.5 4.5 4.5L19 7.5"
												stroke="currentColor"
												stroke-width="2.2"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
										</svg>
										<span class="sr-only">Included</span>
									{:else if cell === false}
										<span class="dash" aria-hidden="true">&mdash;</span>
										<span class="sr-only">Not included</span>
									{:else}
										{cell}
									{/if}
								</td>
							{/each}
						</tr>
					{/each}
				</tbody>
				<tfoot>
					<tr>
						<td></td>
						<td><Button variant="ghost" href="/blocks/auth">Start free</Button></td>
						<td><Button href="/blocks/auth">Pick Studio</Button></td>
						<td><Button variant="ghost" href="/blocks/auth">Talk to us</Button></td>
					</tr>
				</tfoot>
			</Table>
		</div>

		<p class="fine">Prices in USD, billed monthly. Not in any plan: analytics, AI copywriting, CDN hosting.</p>
	</div>
</section>

<style>
	.compare {
		padding: clamp(20px, 3vw, 32px) clamp(8px, 2vw, 20px);
	}

	.compare :global(table) {
		min-width: 600px;
	}

	/* Containing block for the sr-only labels, so the scroller clips them too. */
	.compare :global(th),
	.compare :global(td) {
		position: relative;
	}

	th[scope='col'] {
		vertical-align: top;
	}

	.plan {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 8px;
		color: var(--color-ink);
		font-size: 18px;
	}

	.price {
		display: block;
		margin-top: 6px;
		color: var(--color-ink);
		font-size: 26px;
		font-weight: 600;
		letter-spacing: -0.03em;
		font-variant-numeric: tabular-nums;
	}

	.unit {
		color: var(--color-muted);
		font-size: 14px;
		font-weight: 400;
	}

	/* The middle column is the recommendation: one tint, no border. */
	th:nth-child(3),
	td:nth-child(3) {
		background: color-mix(in oklab, var(--color-field) 50%, transparent);
	}

	td svg {
		width: 18px;
		height: 18px;
		color: var(--color-accent);
	}

	.dash {
		color: var(--color-muted);
	}

	tfoot td {
		padding-top: 20px;
	}

	tfoot td:empty {
		padding: 0;
	}

	.fine {
		margin-top: clamp(20px, 3vw, 32px);
		max-width: 62ch;
		color: var(--color-muted);
		font-size: 15px;
	}
</style>
