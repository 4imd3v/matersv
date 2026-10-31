<script>
	import { Button, Input } from '#lib/index.js';

	let email = $state('');

	const links = [
		{ href: '/components', label: 'Components' },
		{ href: '/blocks', label: 'Blocks' },
		{ href: '/blocks/pricing', label: 'Pricing' }
	];
</script>

<footer class="footer">
	<div class="wrap top">
		<div class="brand">
			<p class="name">Mater</p>
			<p class="blurb">
				A Svelte 5 and pure CSS design system for wide, quiet pages. One hue, four surfaces,
				capsule chrome.
			</p>
			<nav class="links" aria-label="Footer">
				{#each links as link (link.label)}
					<a href={link.href}>{link.label}</a>
				{/each}
			</nav>
		</div>

		<div class="signup">
			<h2>Field notes, once a month.</h2>
			<p class="lead">One email about tokens, CSS, and the parts we deleted.</p>

			<form onsubmit={(event) => event.preventDefault()}>
				<div class="field">
					<Input
						label="Email"
						type="email"
						autocomplete="email"
						placeholder="you@example.com"
						bind:value={email}
					/>
				</div>
				<Button type="submit">Subscribe</Button>
			</form>

			<p class="fine">No spam. One click to leave.</p>
		</div>
	</div>

	<div class="wrap legal">
		<p>&copy; 2026 MaterSV. Built with Svelte 5.</p>
		<p>No cookies, no analytics, no banner.</p>
	</div>
</footer>

<style>
	.footer {
		background: var(--color-bg-soft);
		padding-block: var(--gap) 32px;
	}

	.top {
		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
		gap: clamp(40px, 6vw, 96px);
		align-items: start;
	}

	.brand {
		display: grid;
		justify-items: start;
		gap: 14px;
		max-width: 38ch;
	}

	.name {
		font-size: 22px;
		font-weight: 600;
		letter-spacing: -0.03em;
	}

	.blurb {
		color: var(--color-muted);
		text-wrap: pretty;
	}

	.links {
		display: flex;
		flex-wrap: wrap;
		gap: 8px 22px;
		margin-top: 6px;
	}

	.links a {
		color: var(--color-muted);
		font-size: 15px;
		text-decoration: none;
		transition: color var(--dur-control) ease;
	}

	.links a:hover {
		color: var(--color-ink);
		text-decoration: underline;
		text-underline-offset: 4px;
	}

	.signup h2 {
		max-width: 18ch;
		font-size: clamp(26px, 2.6vw, 34px);
		font-weight: 600;
		line-height: 1.08;
		letter-spacing: -0.035em;
		text-wrap: balance;
	}

	.lead {
		margin-top: 12px;
		max-width: 42ch;
		color: var(--color-muted);
		text-wrap: pretty;
	}

	form {
		display: flex;
		align-items: end;
		gap: 12px;
		margin-top: 24px;
	}

	.field {
		flex: 1;
		min-width: 0;
	}

	.fine {
		margin-top: 14px;
		color: var(--color-muted);
		font-size: 14px;
	}

	.legal {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		gap: 8px 24px;
		margin-top: clamp(48px, 6vw, 88px);
		color: var(--color-muted);
		font-size: 14px;
	}

	@media (max-width: 900px) {
		.top {
			grid-template-columns: 1fr;
		}

		form {
			flex-direction: column;
			align-items: stretch;
		}
	}
</style>
