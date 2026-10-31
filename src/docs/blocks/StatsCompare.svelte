<script>
	import { Dots, SectionHeader } from '#lib/index.js';

	const sides = [
		{
			label: 'A typical UI stack',
			figure: '412',
			unit: 'KB',
			note: 'Framework, utility CSS, an icon package and a component library.',
			dots: 13,
			field: false
		},
		{
			label: 'MaterSV',
			figure: '18',
			unit: 'KB',
			note: 'The component CSS. Svelte was already in the project.',
			dots: 1,
			field: true
		}
	];
</script>

<section class="section">
	<div class="wrap">
		<SectionHeader
			title="What a page actually costs"
			lead="One dot per 32 KB of CSS and JavaScript on a cold load. Same page, same content, no build step either way."
		/>

		<div class="compare">
			{#each sides as side (side.label)}
				<article class="card side" class:field={side.field}>
					<p class="label">{side.label}</p>
					<p class="figure">{side.figure}<span>{side.unit}</span></p>
					<p class="note">{side.note}</p>
					<Dots count={16} value={side.dots} />
					<p class="legend">{side.dots} of 16</p>
				</article>
			{/each}
		</div>

		<p class="fine">
			Illustrative numbers: a component library plus its CSS, no application code.
		</p>
	</div>
</section>

<style>
	.compare {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: clamp(16px, 2vw, 28px);
	}

	.side {
		display: grid;
		align-content: start;
		gap: 10px;
		padding: clamp(28px, 2.8vw, 36px);
	}

	.label {
		margin: 0;
		color: var(--color-muted);
		font-size: 15px;
		font-weight: 600;
	}

	.figure {
		margin: 4px 0 0;
		color: var(--color-ink);
		font-size: clamp(44px, 5vw, 64px);
		font-weight: 600;
		line-height: 0.95;
		letter-spacing: -0.045em;
		font-variant-numeric: tabular-nums;
	}

	.figure span {
		margin-left: 6px;
		color: var(--color-muted);
		font-size: 18px;
		font-weight: 400;
		letter-spacing: 0;
	}

	.note {
		margin: 0 0 14px;
		max-width: 34ch;
		color: var(--color-muted);
		font-size: 16px;
		text-wrap: pretty;
	}

	.legend {
		margin: 4px 0 0;
		color: var(--color-muted);
		font-size: 14px;
		font-variant-numeric: tabular-nums;
	}

	.field {
		background: var(--color-field);
		color: var(--color-field-ink);
	}

	.field .label,
	.field .note,
	.field .legend,
	.field .figure span {
		color: inherit;
		opacity: 0.8;
	}

	.field .figure {
		color: inherit;
	}

	.fine {
		margin-top: clamp(24px, 3vw, 36px);
		color: var(--color-muted);
		font-size: 15px;
	}

	@media (max-width: 720px) {
		.compare {
			grid-template-columns: 1fr;
		}
	}
</style>
