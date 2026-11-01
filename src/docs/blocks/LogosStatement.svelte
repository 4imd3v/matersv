<script>
	import { Quote } from '#lib/index.js';

	const marks = ['Northwind', 'Harbor', 'Bletchley Studio', 'Katherine Co.', 'Montevideo', 'Sable'];
</script>

<section class="section section--field">
	<div class="wrap split">
		<Quote cite="Ada Lovelace">
			We shipped the logo wall in an afternoon, in the same hue as the product.
		</Quote>

		<div class="side">
			<ul class="marks">
				{#each marks as mark (mark)}
					<li>{mark}</li>
				{/each}
			</ul>
			<p class="more">And 2,400 teams that never asked for a logo file.</p>
		</div>
	</div>
</section>

<style>
	.split {
		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
		gap: clamp(32px, 5vw, 80px);
		align-items: center;
	}

	.marks {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 20px 32px;
	}

	li {
		font-size: 19px;
		font-weight: 600;
		letter-spacing: -0.03em;
		opacity: 0.8;
	}

	.more {
		margin-top: 28px;
		font-size: 15px;
		opacity: 0.8;
	}

	@media (max-width: 900px) {
		.split {
			grid-template-columns: 1fr;
		}
	}
</style>
