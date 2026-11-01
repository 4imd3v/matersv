<script>
	const marks = ['Northwind', 'Harbor', 'Bletchley Studio', 'Katherine Co.', 'Montevideo'];
</script>

<section class="section logos">
	<div class="wrap">
		<p class="k">Used by teams at</p>
		<ul class="marks">
			{#each marks as mark (mark)}
				<li>{mark}</li>
			{/each}
		</ul>
	</div>
</section>

<style>
	/* A strip, not a band: it sits between two sections without taking a breath. */
	.logos {
		padding-block: clamp(48px, 6vw, 80px);
		background: var(--color-bg-soft);
	}

	.k {
		color: var(--color-muted);
		font-size: 14px;
		font-weight: 600;
		text-align: center;
	}

	.marks {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		gap: 18px 48px;
		margin-top: 26px;
	}

	/* Text marks, not logos: nothing to ship, nothing to keep monochrome. */
	li {
		color: var(--color-ink);
		font-size: 20px;
		font-weight: 600;
		letter-spacing: -0.03em;
		/* 0.65 keeps 20px text above the 3:1 large-text floor on bg-soft. */
		opacity: 0.65;
	}

	@media (max-width: 720px) {
		.marks {
			gap: 14px 28px;
		}

		li {
			font-size: 17px;
		}
	}
</style>
