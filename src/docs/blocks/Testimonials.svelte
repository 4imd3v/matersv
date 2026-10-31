<script>
	import { Byline, Quote, SectionHeader } from '#lib/index.js';

	const voices = [
		{
			quote: 'We deleted four thousand lines of CSS and the page got calmer.',
			name: 'Ada Lovelace',
			meta: 'Staff engineer, Northwind'
		},
		{
			quote: 'One hue means nobody argues about a colour in review.',
			name: 'Grace Hopper',
			meta: 'Design lead, Harbor'
		},
		{
			quote: 'The blocks are real markup, not a screenshot of a layout.',
			name: 'Alan Turing',
			meta: 'Founder, Bletchley Studio'
		}
	];
</script>

<section class="section section--field">
	<div class="wrap">
		<SectionHeader
			title="Quiet pages, loud results"
			lead="The same three ideas, told by people who ship with them."
		/>

		<div class="voices">
			{#each voices as voice (voice.name)}
				<article class="card voice">
					<Quote>&ldquo;{voice.quote}&rdquo;</Quote>
					<Byline name={voice.name} meta={voice.meta} />
				</article>
			{/each}
		</div>
	</div>
</section>

<style>
	.voices {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: clamp(16px, 2vw, 28px);
	}

	.voice {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: clamp(28px, 3vw, 44px);
		padding: clamp(28px, 2.6vw, 36px);
	}

	.voice :global(.quote) {
		max-width: 24ch;
	}

	@media (max-width: 900px) {
		.voices {
			grid-template-columns: 1fr;
		}
	}
</style>
