<script>
	import { SectionHeader, Stat } from '#lib/index.js';

	const figures = [
		{ value: 68, label: 'Components, no runtime dependency' },
		{ value: 42, label: 'Page layouts across twenty blocks' },
		{ value: 4, label: 'Surfaces, one hue' },
		{ value: 0, label: 'Cookies, web fonts or telemetry' }
	];
</script>

<section class="section section--night">
	<div class="wrap">
		<SectionHeader
			title="Small numbers, by design"
			lead="The library is a stylesheet and a folder of components. Nothing is fetched at runtime, so these do not move."
		/>

		<div class="figures">
			{#each figures as figure (figure.label)}
				<Stat value={figure.value} label={figure.label} />
			{/each}
		</div>

		<p class="cap">Counted at the 0.3 release, on the package, not in a marketing deck.</p>
	</div>
</section>

<style>
	.figures {
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		gap: clamp(24px, 4vw, 56px);
	}

	.cap {
		margin-top: clamp(40px, 5vw, 64px);
		font-size: 15px;
		opacity: 0.7;
	}

	@media (max-width: 900px) {
		.figures {
			grid-template-columns: repeat(2, minmax(0, 1fr));
			gap: 28px;
		}
	}
</style>
