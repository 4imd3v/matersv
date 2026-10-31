<script>
	import { SectionHeader, Timeline } from '#lib/index.js';

	const releases = [
		{
			date: 'March 2026',
			title: '0.3.0 — Blocks',
			body: 'Fifteen blocks in thirty-two layouts, a ghost button, and card type rules scoped to direct children.'
		},
		{
			date: 'February 2026',
			title: '0.2.0 — Forms',
			body: 'Combobox, Checkbox, RadioGroup, Slider and a fieldset that announces itself as a group.'
		},
		{
			date: 'January 2026',
			title: '0.1.2 — The first tag',
			body: 'The library published to npm with the token file, forty components and no runtime dependency.'
		},
		{
			date: 'December 2025',
			title: '0.1.0 — The system',
			body: 'Two colour numbers, four surfaces, capsule chrome. The page map in DESIGN.md was drawn here.'
		}
	];
</script>

<section class="section">
	<div class="wrap split">
		<div class="side">
			<SectionHeader
				title="What shipped"
				lead="Every release since the first tag, newest first. No roadmap, no countdown."
			/>
			<p class="note">Watch the repository for the next one.</p>
		</div>

		<Timeline label="Releases" items={releases} />
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
		margin-bottom: 24px;
	}

	.note {
		color: var(--color-muted);
		font-size: 15px;
	}

	@media (max-width: 900px) {
		.split {
			grid-template-columns: 1fr;
		}

		.side {
			position: static;
		}
	}
</style>
