<script>
	import { Button, Cover, FeatureList, Wordmark } from '#lib/index.js';

	const rules = [
		'The mark is one weight and one colour: the ink token, never the accent.',
		'Clear space is the height of the M, on every side.',
		'On a coloured surface, use the solid field version, not an outline.'
	];
</script>

<section class="section">
	<div class="wrap">
		<header class="head">
			<p class="eyebrow">Press kit</p>
			<h1>MaterSV, on your page.</h1>
			<p class="lead">
				Two files, one page of rules and no agreement to sign. If you write about the library,
				start here.
			</p>
		</header>

		<div class="grid">
			<article class="card mark">
				<div class="mark-head">
					<p class="label">Wordmark</p>
					<div class="row">
						<Button variant="ghost">Download SVG</Button>
						<Button variant="text">Copy as text</Button>
					</div>
				</div>
				<Wordmark text="MaterSV" />
				<p class="note">
					Vector, single weight, 4 KB. It ships with the letters spaced at −0.06em, so do not
					set it in another face.
				</p>
			</article>

			<article class="card icon">
				<p class="label">App icon</p>
				<div class="tile">
					<Cover>
						<span class="glyph" aria-hidden="true">M</span>
					</Cover>
				</div>
				<p class="note">1024 × 1024 PNG, transparent, 24 KB.</p>
				<div class="row">
					<Button variant="ghost">Download PNG</Button>
				</div>
			</article>

			<article class="card rules">
				<h3>Three rules</h3>
				<FeatureList label="Logo rules" items={rules} />
				<p class="note">
					Anything not covered here is probably fine. Recolour, stretch and drop shadows are
					not.
				</p>
			</article>
		</div>

		<p class="fine">Need a photo or an interview? <a href="/blocks/contact">Ask the studio</a>.</p>
	</div>
</section>

<style>
	.head {
		max-width: 660px;
	}

	.eyebrow {
		color: var(--color-muted);
		font-size: 14px;
		font-weight: 600;
	}

	h1 {
		margin-top: 12px;
		font-size: clamp(38px, 5vw, 68px);
		font-weight: 600;
		line-height: 0.94;
		letter-spacing: -0.05em;
		text-wrap: balance;
	}

	.lead {
		margin-top: 20px;
		max-width: 48ch;
		color: var(--color-muted);
		font-size: 18px;
		line-height: 1.5;
		text-wrap: pretty;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: clamp(16px, 2vw, 24px);
		margin-top: clamp(32px, 4vw, 52px);
	}

	.mark {
		grid-column: 1 / -1;
		display: grid;
		gap: 20px;
		/* The wordmark is set wider than the card on purpose; clip it, do not wrap it. */
		overflow: hidden;
		padding: clamp(26px, 3vw, 40px);
	}

	.mark-head {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		gap: 16px;
	}

	.label {
		color: var(--color-muted);
		font-size: 14px;
		font-weight: 600;
	}

	.note {
		margin-top: 0;
		max-width: 52ch;
		color: var(--color-muted);
		font-size: 15px;
		line-height: 1.5;
		text-wrap: pretty;
	}

	.row {
		display: flex;
		flex-wrap: wrap;
		gap: 12px;
	}

	.icon,
	.rules {
		display: grid;
		justify-items: start;
		gap: 16px;
		align-content: start;
		padding: clamp(26px, 3vw, 40px);
	}

	.tile {
		width: 132px;
	}

	.glyph {
		display: grid;
		place-items: center;
		height: 100%;
		color: var(--color-field-ink);
		font-size: 64px;
		font-weight: 600;
		letter-spacing: -0.06em;
	}

	.rules > h3 {
		font-size: 22px;
		line-height: 1.1;
		letter-spacing: -0.03em;
	}

	.fine {
		margin-top: clamp(24px, 3vw, 36px);
		color: var(--color-muted);
		font-size: 15px;
	}

	.fine a {
		color: var(--color-ink);
		font-weight: 600;
	}

	@media (max-width: 760px) {
		.grid {
			grid-template-columns: 1fr;
		}
	}
</style>
