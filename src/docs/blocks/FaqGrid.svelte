<script>
	import { Button, SectionHeader } from '#lib/index.js';

	const questions = [
		{
			title: 'Do I need a build step?',
			body: 'No. The CSS is one file and the components are plain Svelte 5, so an existing Svelte build is enough.'
		},
		{
			title: 'Can I use one block on its own?',
			body: 'Every block is a section: copy the markup and its style block, delete what you do not need. Nothing points at a route.'
		},
		{
			title: 'How do I change the colour?',
			body: 'Set --h and --c on the root element, or call setHue(h, c). Every surface and action token derives from those two numbers.'
		},
		{
			title: 'Does it work without JavaScript?',
			body: 'The static parts do. Details, dialog and popover are native, and scroll reveals simply show their content.'
		},
		{
			title: 'Is there a Figma file?',
			body: 'No. The design is the CSS: tokens, surfaces and shape rules. A Figma file would be a copy that drifts.'
		},
		{
			title: 'What do I get on npm?',
			body: 'The components, their types and matersv.css. No runtime dependency is added to your project.'
		}
	];
</script>

<section class="section">
	<div class="wrap">
		<SectionHeader
			title="Questions, answered"
			lead="Six answers that do not need a click. Use this layout when the answers are short enough to stay open."
		/>

		<div class="grid">
			{#each questions as question (question.title)}
				<article class="card qa">
					<h3>{question.title}</h3>
					<p>{question.body}</p>
				</article>
			{/each}
		</div>

		<div class="more">
			<p>Still stuck?</p>
			<Button href="/components" variant="ghost">Read the docs</Button>
		</div>
	</div>
</section>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: clamp(16px, 2vw, 28px);
	}

	.qa {
		display: grid;
		align-content: start;
		gap: 12px;
		padding: clamp(26px, 2.6vw, 34px);
	}

	h3 {
		font-size: 22px;
		line-height: 1.2;
	}

	.qa p {
		margin: 0;
		max-width: 46ch;
	}

	.more {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		gap: 16px 20px;
		margin-top: clamp(32px, 4vw, 48px);
	}

	.more p {
		color: var(--color-muted);
		font-size: 15px;
	}

	@media (max-width: 720px) {
		.grid {
			grid-template-columns: 1fr;
		}
	}
</style>
