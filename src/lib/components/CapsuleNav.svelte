<script>
	import ThemeToggle from './ThemeToggle.svelte';

	let { brand = 'Mater', items = [], children } = $props();

	let active = $state('');

	// Scroll spy: the section crossing the 35% viewport line owns the nav highlight.
	// IntersectionObserver also fires on the initial scroll-to-hash, unlike a scroll listener.
	$effect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) active = entry.target.id;
				}
			},
			{ rootMargin: '-35% 0px -65% 0px' }
		);

		for (const item of items) {
			const section = document.querySelector(item.href);
			if (section) observer.observe(section);
		}

		return () => observer.disconnect();
	});
</script>

<header class="site-head">
	<div class="wrap site-head__row">
		<a class="capsule logo" href="#top" aria-label="Back to top">{brand}</a>

		<nav class="capsule nav" aria-label="Sections">
			{#each items as item (item.href)}
				<a href={item.href} aria-current={active === item.href.slice(1) ? 'true' : undefined}>
					{item.label}
				</a>
			{/each}
		</nav>

		<div class="capsule tools">
			{@render children?.()}
			<ThemeToggle />
		</div>
	</div>
</header>

<style>
	.site-head {
		position: sticky;
		top: 0;
		z-index: 40;
		height: 0;
		pointer-events: none;
	}

	.site-head__row {
		display: flex;
		align-items: center;
		gap: 16px;
		padding-top: 14px;
	}

	.site-head__row > * {
		pointer-events: auto;
	}

	.capsule {
		background: var(--color-capsule);
		border-radius: var(--radius-pill);
		box-shadow: var(--shadow-capsule);
		transition: background-color var(--dur-surface) ease;
	}

	.logo {
		display: flex;
		align-items: center;
		height: 52px;
		padding-inline: 22px;
		font-size: 18px;
		font-weight: 600;
		letter-spacing: -0.02em;
		text-decoration: none;
	}

	.nav {
		display: flex;
		gap: 2px;
		padding: 5px;
		margin-inline: auto;
	}

	.nav a {
		display: inline-flex;
		align-items: center;
		height: 42px;
		padding-inline: 18px;
		border-radius: var(--radius-pill);
		color: var(--color-muted);
		font-size: 15px;
		font-weight: 600;
		text-decoration: none;
		transition:
			background-color var(--dur-surface) ease,
			color var(--dur-control) ease;
	}

	.nav a:hover {
		color: var(--color-ink);
	}

	.nav a[aria-current='true'] {
		background: var(--color-field);
		color: var(--color-field-ink);
	}

	.tools {
		display: flex;
		align-items: center;
		gap: 6px;
		padding: 5px;
	}

	.tools :global(.icon-btn) {
		width: 42px;
		height: 42px;
	}

	@media (max-width: 1024px) {
		.nav a {
			padding-inline: 12px;
		}
	}

	@media (max-width: 640px) {
		.nav {
			display: none;
		}

		.tools :global(.btn) {
			display: none;
		}

		.logo {
			height: 46px;
			padding-inline: 18px;
		}

		.tools {
			margin-left: auto;
			padding: 2px;
		}
	}
</style>
