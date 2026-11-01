<script>
	import { NavList, Wordmark } from '#lib/index.js';

	const columns = [
		{
			label: 'Product',
			items: [
				{ href: '/components', label: 'Components' },
				{ href: '/blocks', label: 'Blocks' },
				{ href: '/blocks/pricing', label: 'Pricing' }
			]
		},
		{
			label: 'Blocks',
			items: [
				{ href: '/blocks/hero', label: 'Hero' },
				{ href: '/blocks/dashboard', label: 'Dashboard' },
				{ href: '/blocks/auth', label: 'Sign in' }
			]
		},
		{
			label: 'About',
			items: [
				{ href: '/components', label: 'Documentation' },
				{ href: '/blocks', label: 'Gallery' },
				{ href: '/', label: 'Home' }
			]
		}
	];
</script>

<footer class="footer">
	<div class="wrap">
		<div class="top">
			<div class="brand">
				<p class="name">MaterSV</p>
				<p class="blurb">
					A Svelte 5 and pure CSS design system for wide, quiet pages. One hue, four
					surfaces, capsule chrome.
				</p>
				<p class="license">MIT licensed · no runtime dependencies</p>
			</div>

			{#each columns as column (column.label)}
				<NavList label={column.label} items={column.items} />
			{/each}
		</div>

		<div class="legal">
			<p>© 2026 MaterSV. Built with Svelte 5.</p>
			<p>No cookies, no analytics, no banner.</p>
		</div>
	</div>

	<div class="mark">
		<Wordmark text="MaterSV" />
	</div>
</footer>

<style>
	.footer {
		position: relative;
		overflow: hidden;
		padding-top: var(--gap);
		background: var(--color-bg-soft);
	}

	.top {
		display: grid;
		grid-template-columns: minmax(0, 1.6fr) repeat(3, minmax(0, 1fr));
		gap: clamp(32px, 4vw, 56px);
		align-items: start;
	}

	.brand {
		display: grid;
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

	.license {
		color: var(--color-muted);
		font-size: 14px;
	}

	.legal {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		gap: 12px 24px;
		margin-top: clamp(48px, 6vw, 88px);
		padding-top: 24px;
		color: var(--color-muted);
		font-size: 14px;
	}

	.mark {
		margin-top: clamp(24px, 4vw, 48px);
		margin-bottom: clamp(-40px, -3vw, -16px);
	}

	@media (max-width: 900px) {
		.top {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}

		.brand {
			grid-column: 1 / -1;
		}
	}

	@media (max-width: 560px) {
		.top {
			grid-template-columns: 1fr;
		}
	}
</style>
