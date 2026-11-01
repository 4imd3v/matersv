<script>
	import { Button, Input, Notice, SectionHeader, Table } from '#lib/index.js';

	let promo = $state('');

	const items = [
		{ name: 'Studio plan', meta: 'Two seats, billed monthly', qty: 2, price: '€48' },
		{ name: 'Support add-on', meta: 'Twelve months', qty: 1, price: '€12' }
	];
</script>

<section class="section">
	<div class="wrap cart-wrap">
		<SectionHeader title="Your cart" lead="Two items, one hue. Checkout takes one step." />

		<div class="card cart">
			<Table caption="Two items, prices in euro">
				<thead>
					<tr>
						<th scope="col">Item</th>
						<th scope="col">Qty</th>
						<th scope="col" class="num">Price</th>
					</tr>
				</thead>
				<tbody>
					{#each items as item (item.name)}
						<tr>
							<th scope="row">{item.name}<span class="meta">{item.meta}</span></th>
							<td>{item.qty}</td>
							<td class="num">{item.price}</td>
						</tr>
					{/each}
				</tbody>
			</Table>

			<div class="extras">
				<div class="promo">
					<div class="field">
						<Input label="Promo code" placeholder="MATER10" bind:value={promo} />
					</div>
					<Button variant="ghost">Apply</Button>
				</div>

				<div class="totals">
					<p><span>Subtotal</span><span>€60</span></p>
					<p><span>VAT, 23%</span><span>€14</span></p>
					<p class="total"><span>Total</span><span>€74</span></p>
				</div>
			</div>

			<div class="action">
				<Button href="/blocks/checkout">Checkout</Button>
			</div>
		</div>

		<Notice title="A VAT number takes 23% off">
			Add one on the next step and the total updates before you pay.
		</Notice>
	</div>
</section>

<style>
	.cart-wrap {
		width: min(900px, 100%);
	}

	.cart {
		display: grid;
		gap: 24px;
		padding: clamp(24px, 3vw, 36px);
	}

	th[scope='row'] {
		font-weight: 600;
	}

	.meta {
		display: block;
		margin-top: 4px;
		color: var(--color-muted);
		font-size: 14px;
		font-weight: 400;
	}

	.num {
		text-align: right;
	}

	.extras {
		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(0, 260px);
		gap: 24px 40px;
		align-items: start;
	}

	.promo {
		display: flex;
		align-items: end;
		gap: 10px;
	}

	.field {
		flex: 1;
		min-width: 0;
	}

	.totals {
		display: grid;
		gap: 8px;
		color: var(--color-muted);
		font-size: 15px;
		font-variant-numeric: tabular-nums;
	}

	.totals p {
		display: flex;
		justify-content: space-between;
		gap: 16px;
	}

	.total {
		padding-top: 10px;
		color: var(--color-ink);
		font-size: 20px;
		font-weight: 600;
		letter-spacing: -0.02em;
	}

	.action {
		display: flex;
		justify-content: flex-end;
	}

	@media (max-width: 720px) {
		.extras {
			grid-template-columns: 1fr;
		}

		.action :global(.btn) {
			flex: 1;
		}
	}
</style>
