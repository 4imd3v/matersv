<script>
	import { Button, Checkbox, Input, SectionHeader, Select, Textarea } from '#lib/index.js';

	let name = $state('');
	let email = $state('');
	let topic = $state('bug');
	let message = $state('');
	let copy = $state(true);

	const topics = [
		{ value: 'bug', label: 'Something is broken' },
		{ value: 'help', label: 'A hand with a layout' },
		{ value: 'work', label: 'Working together' }
	];
</script>

<section class="section">
	<div class="wrap split">
		<div class="side">
			<SectionHeader
				title="Tell us what broke"
				lead="A link to the page and the browser is usually enough to go on."
			/>

			<dl class="details">
				<div>
					<dt>Email</dt>
					<dd>hello@mater.example</dd>
				</div>
				<div>
					<dt>Studio</dt>
					<dd>Rua da Boavista 12, Lisbon</dd>
				</div>
				<div>
					<dt>Hours</dt>
					<dd>Monday to Thursday, 9–17 WET</dd>
				</div>
			</dl>
		</div>

		<form class="card form" onsubmit={(event) => event.preventDefault()}>
			<div class="pair">
				<Input label="Name" bind:value={name} autocomplete="name" />
				<Input label="Email" type="email" bind:value={email} autocomplete="email" />
			</div>

			<Select label="Topic" items={topics} bind:value={topic} />

			<Textarea
				label="Message"
				rows={5}
				bind:value={message}
				hint="Markup and a link help most."
			/>

			<Checkbox label="Send me a copy" bind:checked={copy} />

			<div class="action">
				<Button type="submit">Send message</Button>
			</div>
		</form>
	</div>
</section>

<style>
	.split {
		display: grid;
		grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
		gap: clamp(32px, 5vw, 80px);
		align-items: start;
	}

	.side :global(.section-head) {
		margin-bottom: 0;
	}

	.details {
		display: grid;
		gap: 20px;
		margin-top: clamp(32px, 4vw, 48px);
	}

	dt {
		color: var(--color-muted);
		font-size: 14px;
		font-weight: 600;
	}

	dd {
		margin: 6px 0 0;
		font-size: 18px;
		text-wrap: pretty;
	}

	.form {
		display: grid;
		gap: 18px;
	}

	.pair {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 16px;
	}

	.action {
		display: flex;
		margin-top: 4px;
	}

	@media (max-width: 900px) {
		.split {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 560px) {
		.pair {
			grid-template-columns: 1fr;
		}
	}
</style>
