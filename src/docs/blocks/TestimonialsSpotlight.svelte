<script>
	const marks = ['Northwind', 'Harbor', 'Bletchley Studio'];
</script>

<section class="section section--field">
	<div class="wrap spotlight">
		<p class="eyebrow">What teams say</p>

		<figure>
			<blockquote>
				<p>&ldquo;We deleted four thousand lines of CSS and the page got calmer.&rdquo;</p>
			</blockquote>
			<figcaption>
				<span class="who">Ada Lovelace</span>
				<span class="role">Staff engineer, Northwind</span>
			</figcaption>
		</figure>

		<ul class="marks" aria-label="Customers">
			{#each marks as mark (mark)}
				<li>{mark}</li>
			{/each}
		</ul>
	</div>
</section>

<style>
	.spotlight {
		display: grid;
		justify-items: center;
		text-align: center;
	}

	.eyebrow {
		font-size: 14px;
		font-weight: 600;
		opacity: 0.8;
	}

	figure {
		display: grid;
		justify-items: center;
		margin: clamp(28px, 4vw, 48px) 0 0;
	}

	blockquote {
		max-width: 22ch;
		font-size: clamp(30px, 4vw, 54px);
		font-weight: 600;
		line-height: 1.06;
		letter-spacing: -0.04em;
		text-wrap: balance;
	}

	figcaption {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 4px 10px;
		margin-top: 28px;
		font-size: 15px;
	}

	.who {
		font-weight: 600;
	}

	.role {
		opacity: 0.8;
	}

	/* Text marks, not logos: no asset to ship and nothing to keep monochrome. */
	.marks {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 10px 40px;
		margin-top: clamp(40px, 6vw, 72px);
		font-size: 15px;
		font-weight: 600;
		opacity: 0.8;
	}
</style>
