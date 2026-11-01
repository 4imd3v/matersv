<script>
	import { Button, Table } from '#lib/index.js';

	const items = [
		{ name: 'Studio plan, seat 1', period: 'Nov 14 – Dec 14', amount: '€24.00' },
		{ name: 'Studio plan, seat 2', period: 'Nov 14 – Dec 14', amount: '€24.00' },
		{ name: 'Studio plan, seat 3', period: 'Nov 14 – Dec 14', amount: '€24.00' }
	];
</script>

<section class="section">
	<div class="wrap">
		<div class="receipt">
			<header class="head">
				<div>
					<p class="brand">Northwind Studio</p>
					<p class="addr">Rua da Prata 12<br />1100-052 Lisbon, Portugal</p>
				</div>
				<div class="doc">
					<p class="doc-title">Receipt</p>
					<p class="doc-meta">MSV-2041 · 14 Nov 2024</p>
				</div>
			</header>

			<dl class="meta">
				<div><dt>Billed to</dt><dd>Ada Lovelace<br />ada@northwind.co</dd></div>
				<div><dt>Paid with</dt><dd>Visa ending 4242</dd></div>
				<div><dt>VAT</dt><dd>PT123456789</dd></div>
			</dl>

			<Table caption="Three seats, one month">
				<thead>
					<tr>
						<th scope="col">Item</th>
						<th scope="col">Period</th>
						<th scope="col" class="num">Amount</th>
					</tr>
				</thead>
				<tbody>
					{#each items as item (item.name)}
						<tr>
							<th scope="row">{item.name}</th>
							<td>{item.period}</td>
							<td class="num">{item.amount}</td>
						</tr>
					{/each}
				</tbody>
			</Table>

			<div class="totals">
				<div class="line"><span>Subtotal</span><span>€72.00</span></div>
				<div class="line"><span>VAT, 23%</span><span>€16.56</span></div>
				<div class="line line--total"><span>Total paid</span><span>€88.56</span></div>
			</div>

			<div class="actions">
				<Button>Download PDF</Button>
				<Button variant="ghost" href="/blocks/pricing">Buy more seats</Button>
			</div>
		</div>

		<div class="foot">
			<div class="card small">
				<h3>Need a VAT invoice?</h3>
				<p>
					Add a company name and a VAT number in Account, then download the invoice again. It
					is issued the same day.
				</p>
				<Button variant="text" href="/blocks/account">Add billing details</Button>
			</div>
			<div class="card small">
				<h3>Something off?</h3>
				<p>
					Reply to the receipt email and a person answers, usually within a working day.
				</p>
				<Button variant="text" href="/blocks/contact">Contact the studio</Button>
			</div>
		</div>
	</div>
</section>

<style>
	.receipt {
		max-width: 760px;
		margin-inline: auto;
		padding: clamp(28px, 4vw, 52px);
		border-radius: var(--radius-card);
		background: var(--color-bg-soft);
	}

	.head {
		display: flex;
		flex-wrap: wrap;
		align-items: start;
		justify-content: space-between;
		gap: 24px;
	}

	.brand {
		font-size: 20px;
		font-weight: 600;
		letter-spacing: -0.03em;
	}

	.addr {
		margin-top: 6px;
		color: var(--color-muted);
		font-size: 14px;
		line-height: 1.45;
	}

	.doc {
		text-align: right;
	}

	.doc-title {
		font-size: 14px;
		font-weight: 600;
		letter-spacing: 0.04em;
		color: var(--color-muted);
	}

	.doc-meta {
		margin-top: 6px;
		font-size: 15px;
		font-variant-numeric: tabular-nums;
	}

	.meta {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 20px;
		margin-top: clamp(28px, 3vw, 40px);
		padding: 20px 24px;
		border-radius: 20px;
		background: var(--color-bg);
		font-size: 14px;
	}

	.meta dt {
		color: var(--color-muted);
		font-weight: 600;
	}

	.meta dd {
		margin: 4px 0 0;
		line-height: 1.4;
	}

	.receipt :global(.table-wrap) {
		margin-top: clamp(24px, 3vw, 32px);
	}

	.num {
		text-align: right;
		font-variant-numeric: tabular-nums;
	}

	.totals {
		display: grid;
		gap: 10px;
		margin-top: 24px;
		padding-top: 20px;
		font-size: 15px;
		font-variant-numeric: tabular-nums;
	}

	.line {
		display: flex;
		justify-content: space-between;
		gap: 16px;
		color: var(--color-muted);
	}

	/* The one line that gets a surface of its own. */
	.line--total {
		margin-top: 6px;
		padding: 14px 18px;
		border-radius: 18px;
		background: var(--color-field);
		color: var(--color-field-ink);
		font-size: 18px;
		font-weight: 600;
	}

	.actions {
		display: flex;
		flex-wrap: wrap;
		gap: 12px;
		margin-top: clamp(24px, 3vw, 32px);
	}

	.foot {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: clamp(16px, 2vw, 24px);
		max-width: 760px;
		margin: clamp(16px, 2vw, 24px) auto 0;
	}

	.small {
		display: grid;
		justify-items: start;
		gap: 10px;
		padding: clamp(24px, 2.6vw, 32px);
	}

	.small > h3 {
		font-size: 19px;
		line-height: 1.15;
		letter-spacing: -0.02em;
	}

	.small > p {
		margin-top: 0;
		max-width: 40ch;
		font-size: 15px;
		line-height: 1.5;
		text-wrap: pretty;
	}

	@media (max-width: 720px) {
		.meta {
			grid-template-columns: 1fr;
			gap: 12px;
		}

		.foot {
			grid-template-columns: 1fr;
		}
	}
</style>
