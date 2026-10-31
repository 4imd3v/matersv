<script>
	import { Badge, CodeBlock, FeatureList, Kbd, SectionHeader } from '#lib/index.js';

	const platform = [
		'Native buttons, details and dialog',
		'Arrow keys come from the browser',
		'No focus trap to maintain',
		'No icon package to ship'
	];

	const snippet = "import { Button } from 'matersv';\n\n<Button>Start a page</Button>";
</script>

<section class="section">
	<div class="wrap">
		<SectionHeader
			title="Four surfaces, endless layouts"
			lead="The same cards at four different weights. Nothing here is a special case."
		/>

		<div class="bento">
			<article class="card cell a">
				<div class="copy">
					<h3>One hue</h3>
					<p>Every surface is the same hue at a different lightness, which is why nothing clashes.</p>
				</div>
				<div class="visual">
					<div class="demo" aria-hidden="true">
						<div class="demo-card">
							<div class="demo-pills"><span></span><span></span></div>
							<div class="demo-night"></div>
						</div>
					</div>
					<p class="cap">bg · bg-soft · field · night</p>
				</div>
			</article>

			<article class="card cell b">
				<div class="copy">
					<h3>Capsule chrome</h3>
					<p>Controls are pills and circles. Only floating chrome lifts off the page.</p>
				</div>
				<div class="visual chips">
					<Badge>New</Badge>
					<Badge tone="accent">v0.3</Badge>
					<Kbd>⌘</Kbd>
					<Kbd>K</Kbd>
				</div>
			</article>

			<article class="card cell c">
				<div class="copy">
					<h3>Platform first</h3>
					<p>If the browser already does it, the library does not.</p>
				</div>
				<FeatureList label="Left to the browser" items={platform} />
			</article>

			<article class="card cell d">
				<div class="copy">
					<h3>Nothing to install</h3>
					<p>One import, no provider, no config file.</p>
				</div>
				<CodeBlock label="page.svelte" code={snippet} />
			</article>
		</div>
	</div>
</section>

<style>
	.bento {
		display: grid;
		grid-template-columns: repeat(12, minmax(0, 1fr));
		gap: clamp(16px, 2vw, 28px);
	}

	.cell {
		display: flex;
		flex-direction: column;
		gap: 18px;
		padding: clamp(26px, 2.6vw, 34px);
	}

	.a,
	.d {
		grid-column: span 7;
	}

	.b,
	.c {
		grid-column: span 5;
	}

	.copy {
		display: grid;
		gap: 12px;
	}

	h3 {
		font-size: 26px;
		line-height: 1.1;
	}

	.copy p {
		max-width: 42ch;
		color: var(--color-muted);
		text-wrap: pretty;
	}

	/* Visuals hang off the bottom, so cards in a row line up. */
	.visual {
		margin-top: auto;
	}

	.demo {
		padding: 12px;
		border-radius: 20px;
		background: var(--color-bg);
	}

	.demo-card {
		display: grid;
		gap: 10px;
		padding: 12px;
		border-radius: 16px;
		background: var(--color-bg-soft);
	}

	.demo-pills {
		display: flex;
		gap: 8px;
	}

	.demo-pills span {
		width: 40%;
		height: 26px;
		border-radius: var(--radius-pill);
		background: var(--color-field);
	}

	.demo-pills span:last-child {
		width: 24%;
	}

	.demo-night {
		height: 46px;
		border-radius: 12px;
		background: var(--color-night);
	}

	.cap {
		margin-top: 10px;
		color: var(--color-muted);
		font-size: 14px;
		font-variant-numeric: tabular-nums;
	}

	.chips {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 10px;
	}

	@media (max-width: 900px) {
		.a,
		.b,
		.c,
		.d {
			grid-column: 1 / -1;
		}
	}
</style>
