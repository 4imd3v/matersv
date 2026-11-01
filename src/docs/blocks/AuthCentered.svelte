<script>
	import { Button, Checkbox, Input } from '#lib/index.js';

	let email = $state('');
	let password = $state('');
	let stay = $state(true);
</script>

<section class="section section--field">
	<div class="wrap center">
		<div class="card panel">
			<p class="eyebrow">MaterSV</p>
			<h1>Welcome back</h1>
			<p class="lead">Sign in to pick up the page where you left it.</p>

			<form onsubmit={(event) => event.preventDefault()}>
				<Input
					label="Email"
					type="email"
					autocomplete="email"
					placeholder="you@example.com"
					bind:value={email}
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

		<p class="fine">One card, three fields, no tracking script.</p>
	</div>
</section>

<style>
	.center {
		display: grid;
		justify-items: center;
	}

	.panel {
		width: min(440px, 100%);
		padding: clamp(28px, 4vw, 40px);
	}

	.eyebrow {
		color: var(--color-muted);
		font-size: 14px;
		font-weight: 600;
	}

	h1 {
		margin-top: 26px;
		font-size: clamp(30px, 3.4vw, 40px);
		font-weight: 600;
		line-height: 1;
		letter-spacing: -0.045em;
		text-wrap: balance;
	}

	.lead {
		margin-top: 12px;
		max-width: 34ch;
		color: var(--color-muted);
		text-wrap: pretty;
	}

	form {
		display: grid;
		gap: 18px;
		margin-top: 26px;
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
		margin-top: 22px;
		color: var(--color-muted);
		font-size: 15px;
	}

	.alt a {
		color: var(--color-ink);
		font-weight: 600;
	}

	.fine {
		margin-top: 24px;
		font-size: 15px;
		opacity: 0.8;
	}
</style>
