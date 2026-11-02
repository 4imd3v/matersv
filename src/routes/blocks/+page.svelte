<script>
	import { blocks } from '../../docs/blocks/registry.js';

	const variants = blocks.reduce((total, block) => total + block.variants.length, 0);
</script>

<svelte:head>
	<title>Blocks — MaterSV</title>
	<meta
		name="description"
		content="Copy-paste page sections built from MaterSV: hero, features, pricing, footer, dashboard, sign in."
	/>
</svelte:head>

<main class="page" id="main">
	<div class="wrap">
		<header class="intro">
			<p class="count">{blocks.length} blocks, {variants} variants</p>
			<h1>Sections, not screenshots.</h1>
			<p class="lead">
				Each block is a real page section, composed from the library and the global
				classes. Open one, copy the markup and its style, and delete what you do not need.
			</p>
			<p class="cross"><a href="/components">Looking for a single component?</a></p>
		</header>

		<ul class="grid">
			{#each blocks as block (block.slug)}
				<li>
					<a class="card item" href="/blocks/{block.slug}">
						<p class="kind">{block.category}</p>
						<h2>{block.name}</h2>
						<p>{block.lead}</p>
						<p class="variants">
							{#each block.variants as variant, i (variant.id)}
								{#if i > 0}<span aria-hidden="true">·</span>{/if}
								<span>{variant.label}</span>
							{/each}
						</p>
						<span class="more">Preview and code</span>
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
		max-width: 720px;
	}

	.count {
		color: var(--color-muted);
		font-size: 14px;
		font-weight: 600;
	}

	h1 {
		margin-top: 10px;
		font-size: var(--text-h2);
		font-weight: 600;
		line-height: 0.98;
		letter-spacing: -0.045em;
		text-wrap: balance;
	}

	.lead {
		margin-top: 24px;
		max-width: 52ch;
		color: var(--color-muted);
		font-size: var(--text-lead);
		line-height: 1.4;
		text-wrap: pretty;
	}

	.cross {
		margin-top: 16px;
		font-size: 15px;
		font-weight: 600;
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
			background-color var(--dur-surface) var(--ease-effects),
			translate var(--dur-control) var(--ease-glide);
	}

	.item:hover {
		translate: 0 -2px;
		background: var(--color-field);
		color: var(--color-field-ink);
	}

	.kind {
		color: var(--color-muted);
		font-size: 13px;
		font-weight: 600;
	}

	.item:hover .kind {
		color: inherit;
		opacity: 0.7;
	}

	.item h2 {
		font-size: var(--text-h3);
		font-weight: 600;
		line-height: 1.05;
		letter-spacing: -0.035em;
	}

	.item p {
		color: var(--color-muted);
		text-wrap: pretty;
	}

	.item:hover p {
		color: inherit;
		opacity: 0.8;
	}

	.variants {
		display: flex;
		flex-wrap: wrap;
		gap: 4px 8px;
		margin-top: 2px;
		color: var(--color-muted);
		font-size: 14px;
	}

	.item:hover .variants {
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
