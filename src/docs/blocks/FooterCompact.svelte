<script>
	const links = [
		{ href: '/components', label: 'Components' },
		{ href: '/blocks', label: 'Blocks' },
		{ href: '/blocks/pricing', label: 'Pricing' },
		{ href: '/components', label: 'Docs' }
	];
</script>

<footer class="footer">
	<div class="wrap row">
		<a class="brand" href="/">Mater</a>

		<nav class="links" aria-label="Footer">
			{#each links as link (link.label)}
				<a href={link.href}>{link.label}</a>
			{/each}
		</nav>

		<p class="legal">&copy; 2026 MaterSV &middot; MIT</p>
	</div>
</footer>

<style>
	.footer {
		background: var(--color-bg-soft);
		padding-block: clamp(40px, 6vw, 64px);
	}

	.row {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 20px 32px;
	}

	.brand {
		font-size: 18px;
		font-weight: 600;
		letter-spacing: -0.03em;
		text-decoration: none;
	}

	.links {
		display: flex;
		flex-wrap: wrap;
		gap: 6px 22px;
		margin-inline: auto;
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
		text-decoration-thickness: 1.5px;
	}

	.legal {
		color: var(--color-muted);
		font-size: 14px;
	}

	@media (max-width: 640px) {
		.row {
			justify-content: space-between;
			gap: 18px 24px;
		}

		.links {
			order: 3;
			width: 100%;
			margin-inline: 0;
			gap: 10px 18px;
		}
	}
</style>
