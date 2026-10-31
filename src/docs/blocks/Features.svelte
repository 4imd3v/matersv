<script>
	import { FeatureList, SectionHeader } from '#lib/index.js';

	const principles = [
		{
			title: 'One hue',
			lead: 'Every colour is oklch with the same hue angle. Two numbers repaint the page, and nothing can clash.'
		},
		{
			title: 'Four surfaces',
			lead: 'bg, bg-soft, field and night. Separation is a colour step, never a 1px border, so nothing looks boxed in.'
		},
		{
			title: 'Capsule chrome',
			lead: 'Controls are pills and circles. Floating chrome gets a hairline ring and one soft shadow; the rest stays flat.'
		}
	];

	const platform = [
		'Native buttons, details and dialog',
		'Arrow keys come from the browser',
		'No focus trap to maintain',
		'No icon package to ship'
	];
</script>

<section class="section">
	<div class="wrap">
		<SectionHeader
			title="The page does the work"
			lead="Three ideas cover the whole system: one hue, four surfaces, capsule chrome. Everything else is the platform."
		/>

		<div class="grid">
			{#each principles as principle, i (principle.title)}
				<article class="card principle">
					<p class="index" aria-hidden="true">{String(i + 1).padStart(2, '0')}</p>
					<h3>{principle.title}</h3>
					<p>{principle.lead}</p>
				</article>
			{/each}

			<article class="card wide">
				<div class="copy">
					<h3>Nothing to install twice</h3>
					<p>
						No UI framework, no Tailwind, no CSS-in-JS, no icon dependency. If the platform
						already does it, the library does not.
					</p>
				</div>
				<FeatureList label="Left to the browser" items={platform} />
			</article>
		</div>
	</div>
</section>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: clamp(16px, 2vw, 28px);
	}

	.principle {
		display: grid;
		align-content: start;
		gap: 12px;
		padding: 32px;
	}

	.index {
		margin: 0;
		color: var(--color-muted);
		font-size: 13px;
		font-weight: 600;
		font-variant-numeric: tabular-nums;
	}

	.principle h3 {
		font-size: 26px;
		line-height: 1.1;
	}

	.principle p {
		margin: 0;
	}

	/* Copy on the left, the checked list on the right, both starting at the top. */
	.wide {
		grid-column: 1 / -1;
		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
		gap: clamp(24px, 4vw, 72px);
		align-items: start;
		padding: clamp(32px, 3.4vw, 48px);
	}

	.copy {
		display: grid;
		gap: 14px;
	}

	.copy h3 {
		font-size: var(--text-h3);
		line-height: 1.08;
		letter-spacing: -0.03em;
		text-wrap: balance;
	}

	.copy p {
		max-width: 36ch;
		color: var(--color-muted);
		text-wrap: pretty;
	}

	@media (max-width: 900px) {
		.grid,
		.wide {
			grid-template-columns: 1fr;
		}

		.wide {
			gap: 28px;
		}
	}
</style>
