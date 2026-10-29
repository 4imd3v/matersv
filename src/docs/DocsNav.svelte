<script>
	import { ThemeToggle } from '#lib/index.js';
	import { page } from '$app/state';

	const here = $derived(page.url.pathname);
	const inDocs = $derived(here === '/components' || here.startsWith('/components/'));
</script>

<header class="head">
	<div class="wrap row">
		<a class="capsule brand" href="/" aria-label="MaterSV home">Mater</a>

		<nav class="capsule links" aria-label="Documentation">
			<a href="/" aria-current={here === '/' ? 'true' : undefined}>Home</a>
			<a href="/components" aria-current={inDocs ? 'true' : undefined}>Components</a>
			<a href="https://github.com/4imd3v/matersv" target="_blank" rel="noreferrer">GitHub</a>
		</nav>

		<div class="capsule tools">
			<ThemeToggle />
		</div>
	</div>
</header>

<style>
	.head {
		padding-block: 20px;
	}

	.row {
		display: flex;
		align-items: center;
		gap: 16px;
	}

	.capsule {
		background: var(--color-capsule);
		border-radius: var(--radius-pill);
		box-shadow: var(--shadow-capsule);
		transition: background-color var(--dur-surface) ease;
	}

	.brand {
		display: flex;
		align-items: center;
		height: 46px;
		padding-inline: 20px;
		font-weight: 600;
		letter-spacing: -0.02em;
		text-decoration: none;
	}

	.links {
		display: flex;
		gap: 2px;
		padding: 4px;
		margin-inline: auto;
	}

	.links a {
		display: inline-flex;
		align-items: center;
		height: 38px;
		padding-inline: 16px;
		border-radius: var(--radius-pill);
		color: var(--color-muted);
		font-size: 14px;
		font-weight: 600;
		text-decoration: none;
		transition:
			background-color var(--dur-surface) ease,
			color var(--dur-control) ease;
	}

	.links a:hover {
		color: var(--color-ink);
	}

	.links a[aria-current='true'] {
		background: var(--color-field);
		color: var(--color-field-ink);
	}

	.tools {
		display: flex;
		align-items: center;
		padding: 4px;
	}

	.tools :global(.icon-btn) {
		width: 38px;
		height: 38px;
	}

	@media (max-width: 640px) {
		.brand {
			height: 42px;
			padding-inline: 14px;
		}

		.links a {
			height: 34px;
			padding-inline: 10px;
			font-size: 13px;
		}

		.head {
			padding-block: 14px;
		}
	}
</style>
