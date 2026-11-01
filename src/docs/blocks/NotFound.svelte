<script>
	import { Button, TagList } from '#lib/index.js';

	const popular = [
		{ href: '/components', label: 'Components' },
		{ href: '/blocks', label: 'Blocks' },
		{ href: '/blocks/pricing', label: 'Pricing' }
	];
</script>

<section class="section notfound">
	<div class="wrap center">
		<p class="watermark" aria-hidden="true">404</p>
		<h1>This page moved.</h1>
		<p class="lead">
			The link is older than the last redesign, or the page never existed. Both happen.
		</p>

		<div class="actions">
			<Button href="/blocks" size="lg">Back to the blocks</Button>
			<Button href="/components" variant="text">Browse components</Button>
		</div>

		<div class="popular">
			<p class="k">Popular</p>
			<TagList label="Popular pages" items={popular} />
		</div>
	</div>
</section>

<style>
	.center {
		display: grid;
		justify-items: center;
		text-align: center;
	}

	/* A watermark, not information: the heading carries the message. */
	.watermark {
		color: var(--color-field);
		font-size: clamp(96px, 19vw, 220px);
		font-weight: 600;
		line-height: 0.78;
		letter-spacing: -0.07em;
		font-variant-numeric: tabular-nums;
	}

	h1 {
		margin-top: clamp(26px, 3vw, 40px);
		font-size: clamp(34px, 4.4vw, 56px);
		font-weight: 600;
		line-height: 1;
		letter-spacing: -0.045em;
		text-wrap: balance;
	}

	.lead {
		margin-top: 18px;
		max-width: 38ch;
		color: var(--color-muted);
		font-size: var(--text-lead);
		line-height: 1.4;
		text-wrap: pretty;
	}

	.actions {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		gap: 16px 24px;
		margin-top: 32px;
	}

	.popular {
		display: grid;
		justify-items: center;
		gap: 14px;
		margin-top: clamp(40px, 5vw, 64px);
	}

	.k {
		color: var(--color-muted);
		font-size: 14px;
		font-weight: 600;
	}
</style>
