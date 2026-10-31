<script>
	import { Button, Input, Textarea } from '#lib/index.js';

	let email = $state('');
	let message = $state('');

	const points = [
		{ k: 'Email', v: 'hello@mater.example' },
		{ k: 'Studio', v: 'Lisbon, Portugal' },
		{ k: 'Hours', v: 'Mon–Thu, 9–17 WET' }
	];
</script>

<section class="section section--field">
	<div class="wrap center">
		<div class="intro">
			<h2>Say hello</h2>
			<p class="lead">One email, one reply. There is no CRM behind this form.</p>
		</div>

		<form class="card form" onsubmit={(event) => event.preventDefault()}>
			<Input
				label="Email"
				type="email"
				autocomplete="email"
				placeholder="you@example.com"
				bind:value={email}
			/>
			<Textarea label="Message" rows={4} bind:value={message} />
			<div class="action">
				<Button type="submit">Send message</Button>
			</div>
		</form>

		<dl class="points">
			{#each points as point (point.k)}
				<div>
					<dt>{point.k}</dt>
					<dd>{point.v}</dd>
				</div>
			{/each}
		</dl>
	</div>
</section>

<style>
	.center {
		display: grid;
		justify-items: center;
		text-align: center;
	}

	h2 {
		max-width: 16ch;
		font-size: clamp(38px, 4.6vw, 64px);
		font-weight: 600;
		line-height: 0.98;
		letter-spacing: -0.045em;
		text-wrap: balance;
	}

	.lead {
		margin-top: 18px;
		max-width: 40ch;
		font-size: var(--text-lead);
		line-height: 1.35;
		opacity: 0.8;
		text-wrap: pretty;
	}

	.form {
		display: grid;
		gap: 18px;
		width: min(520px, 100%);
		margin-top: clamp(28px, 4vw, 40px);
		padding: clamp(26px, 3.4vw, 36px);
		text-align: left;
	}

	.action {
		display: grid;
	}

	.points {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 24px;
		width: min(720px, 100%);
		margin-top: clamp(32px, 4vw, 48px);
	}

	dt {
		font-size: 14px;
		font-weight: 600;
		opacity: 0.8;
	}

	dd {
		margin: 6px 0 0;
		font-size: 17px;
		text-wrap: pretty;
	}

	@media (max-width: 640px) {
		.points {
			grid-template-columns: 1fr;
			gap: 18px;
		}
	}
</style>
