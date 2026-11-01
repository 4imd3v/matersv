<script>
	import { Button, Byline, Checkbox, FeatureList, Input, Quote } from '#lib/index.js';

	let email = $state('');
	let password = $state('');
	let stay = $state(true);
</script>

<section class="section">
	<div class="wrap split">
		<div class="card form">
			<p class="brand">MaterSV</p>
			<h1>Welcome back</h1>
			<p class="lead">Sign in to pick up the page where you left it.</p>

			<form onsubmit={(event) => event.preventDefault()}>
				<Input
					label="Email"
					type="email"
					autocomplete="email"
					placeholder="you@example.com"
					bind:value={email}
					hint="The address on the account."
				/>
				<Input
					label="Password"
					type="password"
					autocomplete="current-password"
					bind:value={password}
				/>

				<div class="row">
					<Checkbox label="Stay signed in" bind:checked={stay} />
					<a class="quiet" href="/components">Forgot the password?</a>
				</div>

				<Button type="submit">Sign in</Button>
			</form>

			<p class="alt">New here? <a href="/blocks/pricing">Create an account</a></p>
		</div>

		<aside class="card proof">
			<div class="voice">
				<p class="eyebrow">Why teams switch</p>
				<Quote>The sign-in page finally looks like the product.</Quote>
				<Byline name="Ada Lovelace" meta="Staff engineer, Northwind" />
			</div>

			<FeatureList
				label="Every account includes"
				items={['All 68 components', 'Every block', 'No telemetry, ever']}
			/>
		</aside>
	</div>
</section>

<style>
	.split {
		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(0, 0.85fr);
		gap: clamp(16px, 2vw, 28px);
		max-width: 960px;
	}

	.form {
		display: grid;
		justify-items: start;
	}

	.brand {
		color: var(--color-muted);
		font-size: 14px;
		font-weight: 600;
	}

	h1 {
		margin-top: 28px;
		font-size: clamp(32px, 4vw, 46px);
		font-weight: 600;
		line-height: 1;
		letter-spacing: -0.045em;
		text-wrap: balance;
	}

	.lead {
		margin-top: 14px;
		max-width: 34ch;
		color: var(--color-muted);
		text-wrap: pretty;
	}

	form {
		display: grid;
		gap: 18px;
		width: 100%;
		margin-top: 28px;
	}

	.row {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		gap: 12px 20px;
	}

	.quiet {
		color: var(--color-muted);
		font-size: 15px;
	}

	.alt {
		margin-top: 24px;
		color: var(--color-muted);
		font-size: 15px;
	}

	.alt a {
		color: var(--color-ink);
		font-weight: 600;
	}

	/* Poster-ish: the two groups sit as one block in the middle of the panel. */
	.proof {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: clamp(40px, 5vw, 64px);
		background: var(--color-field);
		color: var(--color-field-ink);
	}

	.voice {
		display: grid;
		justify-items: start;
		gap: 22px;
	}

	.eyebrow {
		font-size: 14px;
		font-weight: 600;
		opacity: 0.8;
	}

	@media (max-width: 900px) {
		.split {
			grid-template-columns: 1fr;
		}
	}
</style>
