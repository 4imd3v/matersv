<script>
	import { Annotation, Button } from '#lib/index.js';
</script>

<section class="section section--field hero">
	<div class="wrap inner">
		<p class="eyebrow">Blocks, new in 0.3</p>
		<h1>Wide pages,<br />quiet details.</h1>
		<p class="lead">
			A centred hero band: display type, one accent action, and a note in the margin that
			never shouts.
		</p>
		<div class="actions">
			<Button href="/components" size="lg">Browse components</Button>
			<Button href="/blocks" variant="text">See every block</Button>
		</div>
		<div class="note"><Annotation>no runtime dependencies</Annotation></div>
	</div>
</section>

<style>
	.hero {
		padding-block: clamp(112px, 11vw, 168px) clamp(96px, 10vw, 152px);
		overflow: hidden;
	}

	.inner {
		display: grid;
		justify-items: center;
		text-align: center;
	}

	.eyebrow {
		font-size: 14px;
		font-weight: 600;
		opacity: 0.8;
	}

	h1 {
		margin-top: 22px;
		font-size: var(--text-display);
		font-weight: 600;
		line-height: 0.92;
		letter-spacing: -0.055em;
		text-wrap: balance;
	}

	.lead {
		margin-top: 24px;
		max-width: 42ch;
		font-size: clamp(19px, 1.7vw, 24px);
		line-height: 1.35;
		opacity: 0.8;
		text-wrap: pretty;
	}

	.actions {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		gap: 16px 28px;
		margin-top: 32px;
	}

	/* Sits under the actions like a margin note, not a third line of copy. */
	.note {
		margin-top: 18px;
		opacity: 0.85;
	}

	.note :global(.annotation) {
		font-size: clamp(24px, 2.4vw, 32px);
	}

	@media (max-width: 560px) {
		.actions {
			gap: 14px 24px;
		}
	}
</style>
