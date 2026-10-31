<script>
	import { Accordion, AccordionItem, Button, SectionHeader } from '#lib/index.js';

	const questions = [
		{
			title: 'Do I need a build step?',
			body: 'No. The CSS is a single file and the components are plain Svelte 5. If your setup already compiles Svelte, you are done.'
		},
		{
			title: 'Can I use one block on its own?',
			body: 'Yes. Every block is a section: copy the markup and its style block, then delete what you do not need. Nothing refers to a route.'
		},
		{
			title: 'How do I change the colour?',
			body: 'Set --h and --c on the root element, or call setHue(h, c). Every surface, text and action token derives from those two numbers.'
		},
		{
			title: 'Does it work without JavaScript?',
			body: 'The static parts do. Accordions are native details, dialogs are native dialog, and the scroll reveals simply show their content.'
		},
		{
			title: 'Is there a Figma file?',
			body: 'No. The design is the CSS: tokens, surfaces and shape rules. A Figma file would be a copy that drifts.'
		}
	];
</script>

<section class="section">
	<div class="wrap split">
		<div class="side">
			<SectionHeader
				title="Questions, answered"
				lead="Five that arrive before the first email, and one row below for the ones that do not."
			/>
		</div>

		<div class="main">
			<Accordion>
				{#each questions as question (question.title)}
					<AccordionItem title={question.title}>
						{question.body}
					</AccordionItem>
				{/each}
			</Accordion>

			<div class="card contact">
				<div>
					<h3>Still stuck?</h3>
					<p>Send one page of markup and we will point at the token that is wrong.</p>
				</div>
				<div class="action">
					<Button href="/components" variant="ghost">Read the docs</Button>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.split {
		display: grid;
		grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
		gap: clamp(32px, 6vw, 96px);
		align-items: start;
	}

	.side {
		position: sticky;
		top: calc(var(--head) + 24px);
	}

	/* The header is the whole column, so it does not need its usual gap below. */
	.side :global(.section-head) {
		margin-bottom: 0;
	}

	.main {
		display: grid;
		gap: 10px;
	}

	.contact {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 24px;
		margin-top: 22px;
		padding: 26px 30px;
	}

	.contact h3 {
		font-size: 20px;
		line-height: 1.1;
		letter-spacing: -0.03em;
	}

	.contact p {
		margin-top: 8px;
		max-width: 46ch;
		color: var(--color-muted);
	}

	.action {
		flex: none;
	}

	@media (max-width: 900px) {
		.split {
			grid-template-columns: 1fr;
		}

		.side {
			position: static;
		}

		.contact {
			flex-direction: column;
			align-items: start;
		}
	}
</style>
