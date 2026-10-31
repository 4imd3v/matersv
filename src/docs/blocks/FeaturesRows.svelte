<script>
	import { SectionHeader } from '#lib/index.js';

	const principles = [
		{
			title: 'One hue',
			lead: 'Every colour is oklch with the same hue angle, so the page cannot clash with itself. Two numbers on the root element repaint all of it.'
		},
		{
			title: 'Four surfaces',
			lead: 'bg, bg-soft, field and night. Separation is a colour step rather than a line, which is why nothing on the page looks boxed in.'
		},
		{
			title: 'Capsule chrome',
			lead: 'Actions are pills and circles. Floating chrome gets a hairline ring and one soft shadow; everything else stays flat.'
		},
		{
			title: 'Platform first',
			lead: 'Details, dialog, popover and range inputs already work. The library styles them; it does not re-implement their behaviour.'
		}
	];
</script>

<section class="section">
	<div class="wrap split">
		<div class="side">
			<SectionHeader
				title="The page does the work"
				lead="Four ideas cover the system. The layout is just a list that keeps its numbers."
			/>
		</div>

		<ol class="rows">
			{#each principles as principle, i (principle.title)}
				<li>
					<span class="num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
					<div>
						<h3>{principle.title}</h3>
						<p>{principle.lead}</p>
					</div>
				</li>
			{/each}
		</ol>
	</div>
</section>

<style>
	.split {
		display: grid;
		grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
		gap: clamp(32px, 6vw, 96px);
		align-items: start;
	}

	.side {
		position: sticky;
		top: calc(var(--head) + 24px);
	}

	.side :global(.section-head) {
		margin-bottom: 0;
	}

	/* A sticky column is narrower than a full section, so the display size steps down. */
	.side :global(h2) {
		font-size: clamp(34px, 3.6vw, 54px);
		letter-spacing: -0.04em;
	}

	.rows {
		display: grid;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	li {
		display: grid;
		grid-template-columns: 56px minmax(0, 1fr);
		gap: clamp(16px, 2vw, 28px);
		padding-block: clamp(28px, 3.4vw, 40px);
	}

	li:first-child {
		padding-top: 0;
	}

	li:last-child {
		padding-bottom: 0;
	}

	.num {
		color: var(--color-muted);
		font-size: 14px;
		font-weight: 600;
		font-variant-numeric: tabular-nums;
	}

	h3 {
		font-size: 26px;
		font-weight: 600;
		line-height: 1.1;
		letter-spacing: -0.03em;
	}

	li p {
		margin-top: 12px;
		max-width: 52ch;
		color: var(--color-muted);
		text-wrap: pretty;
	}

	@media (max-width: 900px) {
		.split {
			grid-template-columns: 1fr;
		}

		.side {
			position: static;
		}

		li {
			grid-template-columns: 40px minmax(0, 1fr);
		}
	}
</style>
