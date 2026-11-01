<script>
	import { Button, Combobox, Fieldset, Input, NumberInput, Notice, RadioGroup, Steps } from '#lib/index.js';

	const price = 24;
	let seats = $state(3);
	let country = $state('pt');
	let speed = $state('instant');
	let name = $state('');
	let email = $state('');
	let city = $state('');

	const countries = [
		{ value: 'pt', label: 'Portugal' },
		{ value: 'de', label: 'Germany' },
		{ value: 'jp', label: 'Japan' }
	];

	const speeds = [
		{ value: 'instant', label: 'Instant licence', hint: 'A key by email, in a minute.' },
		{ value: 'boxed', label: 'Boxed USB', hint: 'Ships in two days, adds €8.' }
	];

	const steps = [{ label: 'Cart', hint: 'Studio plan' }, { label: 'Details' }, { label: 'Payment' }];

	const subtotal = $derived(seats * price);
	const vat = $derived(Math.round(subtotal * 0.23));
</script>

<section class="section">
	<div class="wrap split">
		<form class="form" onsubmit={(event) => event.preventDefault()}>
			<Steps label="Checkout" current={2} items={steps} />

			<Fieldset legend="Billing details" hint="The invoice goes here.">
				<div class="pair">
					<Input label="Name" bind:value={name} autocomplete="name" />
					<Input
						label="Email"
						type="email"
						bind:value={email}
						autocomplete="email"
						hint="The licence key lands here."
					/>
				</div>
				<div class="pair">
					<Input label="City" bind:value={city} autocomplete="address-level2" />
					<Combobox label="Country" items={countries} bind:value={country} />
				</div>
			</Fieldset>

			<Fieldset legend="Licences" hint="One per developer.">
				<div class="seats">
					<NumberInput label="Seats" bind:value={seats} min={1} max={20} />
					<p class="calc">{seats} × €{price} per month</p>
				</div>

				<RadioGroup label="Delivery" items={speeds} bind:value={speed} />
			</Fieldset>

			<div class="action">
				<Button type="submit">Pay €{subtotal + vat}</Button>
			</div>
		</form>

		<aside class="card summary">
			<h3>Studio plan</h3>
			<p class="note">Monthly, cancel any time. Demo maths: €24 a seat, 23% VAT.</p>

			<ul class="lines">
				<li><span>Licences</span><span>{seats} × €{price}</span></li>
				<li><span>VAT, 23%</span><span>€{vat}</span></li>
			</ul>

			<div class="total">
				<span>Total</span>
				<span>€{subtotal + vat}</span>
			</div>

			<Notice title="Invoice ready">A PDF arrives with the licence key.</Notice>

			<p class="help">Something wrong? <a href="/components">Read the docs</a>.</p>
		</aside>
	</div>
</section>

<style>
	.split {
		display: grid;
		grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
		gap: clamp(32px, 5vw, 80px);
		align-items: start;
	}

	.form {
		display: grid;
		gap: clamp(26px, 3vw, 32px);
	}

	.form :global(legend) {
		font-size: 17px;
		letter-spacing: -0.02em;
	}

	.pair {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 16px;
	}

	.seats {
		display: grid;
		gap: 10px;
		max-width: 320px;
	}

	.calc {
		color: var(--color-muted);
		font-size: 15px;
		font-variant-numeric: tabular-nums;
	}

	.action {
		display: flex;
	}

	.summary {
		position: sticky;
		top: calc(var(--head) + 24px);
		display: grid;
		gap: 18px;
		padding: clamp(26px, 3vw, 36px);
	}

	h3 {
		font-size: 22px;
		line-height: 1.1;
		letter-spacing: -0.03em;
	}

	.note {
		margin: -8px 0 0;
		color: var(--color-muted);
		font-size: 15px;
		text-wrap: pretty;
	}

	.lines {
		display: grid;
		gap: 10px;
		font-size: 16px;
		font-variant-numeric: tabular-nums;
	}

	.lines li {
		display: flex;
		justify-content: space-between;
		gap: 16px;
		color: var(--color-muted);
	}

	.total {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		gap: 16px;
		padding-top: 16px;
		font-size: 22px;
		font-weight: 600;
		letter-spacing: -0.02em;
		font-variant-numeric: tabular-nums;
	}

	.help {
		color: var(--color-muted);
		font-size: 15px;
	}

	.help a {
		color: var(--color-ink);
		font-weight: 600;
	}

	@media (max-width: 900px) {
		.split {
			grid-template-columns: 1fr;
		}

		.summary {
			position: static;
		}
	}

	@media (max-width: 560px) {
		.pair {
			grid-template-columns: 1fr;
		}
	}
</style>
