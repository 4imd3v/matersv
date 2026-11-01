<script>
	import { Button, Notice, Steps, Toast } from '#lib/index.js';

	let sent = $state(false);
	const email = 'ada@northwind.co';

	const steps = [
		{ label: 'Cart', hint: 'Studio plan' },
		{ label: 'Details' },
		{ label: 'Payment' }
	];

	const lines = [
		{ label: 'Studio plan, 3 seats', value: '€72.00' },
		{ label: 'VAT, 23%', value: '€16.56' }
	];
</script>

<section class="section">
	<div class="wrap">
		<div class="hero">
			<span class="tick" aria-hidden="true">
				<svg viewBox="0 0 24 24" fill="none">
					<path
						d="m5 12.5 4.5 4.5L19 7.5"
						stroke="currentColor"
						stroke-width="2.4"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</span>
			<p class="eyebrow">Order MSV-2041</p>
			<h1>Paid.<br />The keys are in your inbox.</h1>
			<p class="lead">
				Three licence keys and a receipt went to {email}. They work as soon as you paste one
				into the app.
			</p>
		</div>

		<div class="card panel">
			<Steps label="Order progress" current={4} items={steps} />

			<div class="summary">
				<h3>What you paid</h3>
				<ul class="lines">
					{#each lines as line (line.label)}
						<li><span>{line.label}</span><span>{line.value}</span></li>
					{/each}
				</ul>
				<div class="total">
					<span>Total, VAT included</span>
					<span>€88.56</span>
				</div>
				<p class="method">Visa ending 4242, charged once today.</p>
			</div>
		</div>

		<div class="notice">
			<Notice title="Keep the receipt">
				Invoices are available for seven years. Re-send the receipt any time from the
				dashboard.
			</Notice>
		</div>

		<div class="actions">
			<Button href="/blocks/dashboard">Open the dashboard</Button>
			<Button variant="ghost" onclick={() => (sent = true)}>Resend the receipt</Button>
		</div>

		<p class="fine">
			Wrong address? <a href="/blocks/account">Change it in Account</a> and we send it again.
		</p>
	</div>

	<Toast bind:open={sent} message="Receipt sent to {email}" />
</section>

<style>
	.hero {
		display: grid;
		justify-items: center;
		max-width: 720px;
		margin-inline: auto;
		text-align: center;
	}

	.tick {
		display: grid;
		place-items: center;
		width: 64px;
		height: 64px;
		border-radius: var(--radius-circle);
		background: var(--color-accent);
		color: var(--color-accent-ink);
	}

	.tick svg {
		width: 30px;
		height: 30px;
	}

	.eyebrow {
		margin-top: 22px;
		color: var(--color-muted);
		font-size: 14px;
		font-weight: 600;
	}

	h1 {
		margin-top: 12px;
		font-size: clamp(36px, 5vw, 64px);
		font-weight: 600;
		line-height: 0.96;
		letter-spacing: -0.05em;
		text-wrap: balance;
	}

	.lead {
		margin-top: 20px;
		max-width: 46ch;
		color: var(--color-muted);
		font-size: 18px;
		line-height: 1.5;
		text-wrap: pretty;
	}

	.panel {
		display: grid;
		grid-template-columns: 232px minmax(0, 1fr);
		gap: clamp(28px, 4vw, 56px);
		max-width: 840px;
		margin: clamp(36px, 5vw, 56px) auto 0;
		padding: clamp(28px, 3.4vw, 44px);
	}

	.summary {
		display: grid;
		align-content: start;
		gap: 16px;
	}

	.summary > h3 {
		font-size: 22px;
		line-height: 1.1;
		letter-spacing: -0.03em;
	}

	.lines {
		display: grid;
		gap: 10px;
		font-size: 16px;
	}

	.lines li {
		display: flex;
		justify-content: space-between;
		gap: 16px;
		color: var(--color-muted);
		font-variant-numeric: tabular-nums;
	}

	.total {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		gap: 16px;
		padding: 14px 18px;
		border-radius: 18px;
		background: var(--color-field);
		color: var(--color-field-ink);
		font-size: 18px;
		font-weight: 600;
		font-variant-numeric: tabular-nums;
	}

	.method {
		color: var(--color-muted);
		font-size: 14px;
	}

	.notice {
		max-width: 840px;
		margin: clamp(16px, 2vw, 24px) auto 0;
	}

	.actions {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 12px;
		margin-top: clamp(24px, 3vw, 32px);
	}

	.fine {
		margin-top: 20px;
		color: var(--color-muted);
		font-size: 15px;
		text-align: center;
	}

	.fine a {
		color: var(--color-ink);
		font-weight: 600;
	}

	@media (max-width: 720px) {
		.panel {
			grid-template-columns: 1fr;
		}
	}
</style>
