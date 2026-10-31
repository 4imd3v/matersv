<script>
	import { Button } from '#lib/index.js';
</script>

<section class="section section--field">
	<div class="wrap split">
		<div class="copy">
			<h2>Copy a section.<br />Keep the hue.</h2>
			<p class="lead">
				Fifteen blocks and thirty-two layouts. Take the one you need, delete the rest, keep
				the two tokens that make it yours.
			</p>
		</div>

		<div class="side">
			<div class="actions">
				<Button href="/components" size="lg">Browse components</Button>
				<Button href="/blocks" variant="ghost">See every block</Button>
			</div>
			<p class="fine">MIT licensed. No account, no telemetry, no cookie banner.</p>
		</div>
	</div>
</section>

<style>
	.split {
		display: grid;
		grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
		gap: clamp(32px, 5vw, 80px);
		align-items: center;
	}

	h2 {
		max-width: 20ch;
		font-size: clamp(38px, 4.4vw, 64px);
		font-weight: 600;
		line-height: 0.98;
		letter-spacing: -0.045em;
		text-wrap: balance;
	}

	.lead {
		margin-top: 24px;
		max-width: 46ch;
		font-size: var(--text-lead);
		line-height: 1.35;
		opacity: 0.8;
		text-wrap: pretty;
	}

	.side {
		display: grid;
		justify-items: start;
		gap: 20px;
	}

	.actions {
		display: flex;
		flex-wrap: wrap;
		gap: 14px;
	}

	.fine {
		font-size: 15px;
		opacity: 0.8;
		text-wrap: pretty;
	}

	@media (max-width: 900px) {
		.split {
			grid-template-columns: 1fr;
		}

		.side {
			gap: 18px;
		}
	}
</style>
