<script>
	import { components } from '../../docs/registry.js';
</script>

<svelte:head>
	<title>Components — MaterSV</title>
	<meta
		name="description"
		content="Every MaterSV component with a live example, usage snippet and props table."
	/>
</svelte:head>

<main class="page">
	<div class="wrap">
		<header class="intro">
			<p class="count">{components.length} components</p>
			<h1>Primitives for wide, quiet pages.</h1>
			<p class="lead">
				Pure Svelte 5 and CSS. Each page has a live example, the usage snippet and the
				full prop list.
			</p>
		</header>

		<ul class="grid">
			{#each components as component (component.slug)}
				<li>
					<a class="card item" href="/components/{component.slug}">
						<h2>{component.name}</h2>
						<p>{component.lead}</p>
						<span class="more">View</span>
					</a>
				</li>
			{/each}
		</ul>
	</div>
</main>

<style>
	.page {
		padding-block: clamp(32px, 5vw, 64px) clamp(80px, 10vw, 140px);
	}

	.intro {
		max-width: 760px;
	}

	.count {
		color: var(--color-muted);
		font-size: 14px;
		font-weight: 600;
	}

	h1 {
		margin-top: 10px;
		font-size: var(--text-h2);
		line-height: 0.98;
		letter-spacing: -0.045em;
		font-weight: 600;
		text-wrap: balance;
	}

	.lead {
		margin-top: 24px;
		max-width: 52ch;
		font-size: var(--text-lead);
		line-height: 1.4;
		color: var(--color-muted);
		text-wrap: pretty;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr));
		gap: clamp(16px, 2vw, 28px);
		margin-top: clamp(40px, 6vw, 72px);
	}

	.item {
		display: flex;
		height: 100%;
		flex-direction: column;
		gap: 10px;
		text-decoration: none;
		transition:
			background-color var(--dur-surface) ease,
			translate var(--dur-control) var(--ease-glide);
	}

	.item:hover {
		translate: 0 -2px;
		background: var(--color-field);
		color: var(--color-field-ink);
	}

	.item h2 {
		font-size: var(--text-h3);
		line-height: 1.05;
		letter-spacing: -0.035em;
		font-weight: 600;
	}

	.item p {
		color: var(--color-muted);
		text-wrap: pretty;
	}

	.item:hover p {
		color: inherit;
		opacity: 0.8;
	}

	.more {
		margin-top: auto;
		padding-top: 18px;
		font-size: 14px;
		font-weight: 600;
	}
</style>
