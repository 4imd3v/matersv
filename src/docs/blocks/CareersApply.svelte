<script>
	import { Badge, Button, FeatureList, FileInput, Input, Quote, Textarea } from '#lib/index.js';

	const includes = [
		'One repository, from tokens to blocks',
		'Reviews that read the rendered page',
		'No meetings on Wednesdays',
		'Four days of focus a week'
	];
</script>

<section class="section">
	<div class="wrap split">
		<article class="copy">
			<Badge>Components</Badge>
			<h1>Component engineer</h1>
			<p class="lead">
				You would own the primitives: the markup, the CSS and the tests that keep them honest
				across two themes and one hue.
			</p>

			<FeatureList label="What the job includes" items={includes} />

			<Quote cite="Grace Hopper, components">
				The best review I got was a diff that removed a component.
			</Quote>
		</article>

		<form class="card apply" onsubmit={(event) => event.preventDefault()}>
			<h2>Apply</h2>
			<p class="note">No cover letter. One question answered and a CV is enough.</p>

			<Input label="Name" autocomplete="name" />
			<Input label="Email" type="email" autocomplete="email" />
			<FileInput label="CV" accept=".pdf,.md" hint="PDF or Markdown, under 2 MB." />
			<Textarea label="What would you fix first?" rows={4} />

			<div class="action">
				<Button type="submit">Send application</Button>
			</div>
		</form>
	</div>
</section>

<style>
	.split {
		display: grid;
		grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
		gap: clamp(32px, 5vw, 80px);
		align-items: start;
	}

	.copy {
		display: grid;
		justify-items: start;
		gap: 22px;
	}

	.copy :global(.quote) {
		margin-top: 10px;
	}

	h1 {
		margin-top: 4px;
		font-size: clamp(36px, 4.2vw, 56px);
		font-weight: 600;
		line-height: 1;
		letter-spacing: -0.045em;
		text-wrap: balance;
	}

	.lead {
		max-width: 44ch;
		color: var(--color-muted);
		font-size: var(--text-lead);
		line-height: 1.4;
		text-wrap: pretty;
	}

	.apply {
		display: grid;
		gap: 18px;
		padding: clamp(26px, 3vw, 36px);
	}

	h2 {
		font-size: 22px;
		font-weight: 600;
		letter-spacing: -0.02em;
	}

	.note {
		margin: -10px 0 4px;
		color: var(--color-muted);
		font-size: 15px;
		text-wrap: pretty;
	}

	.action {
		display: grid;
		margin-top: 4px;
	}

	@media (max-width: 900px) {
		.split {
			grid-template-columns: 1fr;
		}
	}

</style>
