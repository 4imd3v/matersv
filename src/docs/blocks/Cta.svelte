<script>
	import { Button } from '#lib/index.js';
</script>

<section class="section section--night">
	<div class="wrap inner">
		<h2>One hue. Four surfaces.<br />Zero dependencies.</h2>
		<p class="lead">
			Take the primitives, take the blocks, or take the two tokens and rebuild the rest
			yourself. It is all MIT.
		</p>
		<div class="actions">
			<Button href="/components" size="lg">Browse components</Button>
			<Button href="/blocks" variant="ghost">See every block</Button>
		</div>
		<p class="fine">Svelte 5 and CSS. No account, no telemetry, no cookie banner.</p>
	</div>
</section>

<style>
	.inner {
		display: grid;
		justify-items: center;
		text-align: center;
	}

	h2 {
		max-width: 18ch;
		font-size: var(--text-h2);
		font-weight: 600;
		line-height: 0.98;
		letter-spacing: -0.045em;
		text-wrap: balance;
	}

	.lead {
		margin-top: 24px;
		max-width: 44ch;
		font-size: var(--text-lead);
		line-height: 1.35;
		opacity: 0.8;
		text-wrap: pretty;
	}

	.actions {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		gap: 16px 20px;
		margin-top: 36px;
	}

	.fine {
		margin-top: 28px;
		font-size: 15px;
		opacity: 0.6;
	}
</style>
