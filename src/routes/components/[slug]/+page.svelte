<script>
	import Code from '../../../docs/Code.svelte';
	import Example from '../../../docs/Example.svelte';
	import PropsTable from '../../../docs/PropsTable.svelte';
	import { components } from '../../../docs/registry.js';

	let { data } = $props();
	const component = $derived(data.component);
</script>

<svelte:head>
	<title>{component.name} — MaterSV</title>
	<meta name="description" content={component.lead} />
</svelte:head>

<main class="page" id="main">
	<div class="wrap docs">
		<aside class="sidebar">
			<a class="back" href="/components">All components</a>
			<nav aria-label="Components">
				{#each components as item (item.slug)}
					<a
						href="/components/{item.slug}"
						aria-current={item.slug === component.slug ? 'true' : undefined}
					>
						{item.name}
					</a>
				{/each}
			</nav>
		</aside>

		<article class="content">
			<header>
				<p class="kind">Component</p>
				<h1>{component.name}</h1>
				<p class="lead">{component.lead}</p>
			</header>

			<section>
				<h2>Example</h2>
				<div class="preview">
					<Example slug={component.slug} />
				</div>
			</section>

			<section>
				<h2>Usage</h2>
				<Code code={component.code} />
			</section>

			<section>
				<h2>Props</h2>
				<PropsTable props={component.props} />
			</section>

			<nav class="pager" aria-label="Components">
				{#if data.prev}
					<a href="/components/{data.prev.slug}">
						<span>Previous</span>
						{data.prev.name}
					</a>
				{:else}
					<span></span>
				{/if}
				{#if data.next}
					<a class="next" href="/components/{data.next.slug}">
						<span>Next</span>
						{data.next.name}
					</a>
				{/if}
			</nav>
		</article>
	</div>
</main>

<style>
	.page {
		padding-block: clamp(16px, 3vw, 32px) clamp(80px, 10vw, 140px);
	}

	.docs {
		display: grid;
		grid-template-columns: 200px minmax(0, 1fr);
		gap: clamp(32px, 5vw, 72px);
		align-items: start;
	}

	.docs > * {
		min-width: 0;
	}

	.sidebar {
		position: sticky;
		top: 24px;
		display: grid;
		gap: 18px;
	}

	.back {
		padding-left: 12px;
		color: var(--color-muted);
		font-size: 14px;
		font-weight: 600;
		text-decoration: none;
	}

	.back:hover {
		color: var(--color-ink);
	}

	.sidebar nav {
		display: grid;
		gap: 2px;
	}

	.sidebar nav a {
		padding: 8px 12px;
		border-radius: var(--radius-pill);
		color: var(--color-muted);
		font-size: 14px;
		text-decoration: none;
		transition:
			background-color var(--dur-control) ease,
			color var(--dur-control) ease;
	}

	.sidebar nav a:hover {
		background: var(--color-bg-soft);
		color: var(--color-ink);
	}

	.sidebar nav a[aria-current='true'] {
		background: var(--color-field);
		color: var(--color-field-ink);
		font-weight: 600;
	}

	.kind {
		color: var(--color-muted);
		font-size: 13px;
		font-weight: 600;
	}

	h1 {
		margin-top: 8px;
		font-size: var(--text-h2);
		line-height: 0.98;
		letter-spacing: -0.045em;
		font-weight: 600;
		text-wrap: balance;
	}

	.lead {
		margin-top: 20px;
		max-width: 52ch;
		font-size: var(--text-lead);
		line-height: 1.4;
		color: var(--color-muted);
		text-wrap: pretty;
	}

	section {
		margin-top: clamp(40px, 5vw, 64px);
	}

	h2 {
		margin-bottom: 16px;
		font-size: var(--text-h3);
		line-height: 1.1;
		letter-spacing: -0.03em;
		font-weight: 600;
	}

	.preview {
		padding: clamp(24px, 3vw, 40px);
		border-radius: var(--radius-card);
		background: var(--color-bg-soft);
	}

	.pager {
		display: flex;
		justify-content: space-between;
		gap: 16px;
		margin-top: clamp(48px, 6vw, 80px);
	}

	.pager a {
		display: grid;
		gap: 4px;
		font-weight: 600;
		text-decoration: none;
	}

	.pager a span {
		color: var(--color-muted);
		font-size: 13px;
		font-weight: 500;
	}

	.pager .next {
		margin-left: auto;
		text-align: right;
	}

	@media (max-width: 860px) {
		.docs {
			grid-template-columns: 1fr;
		}

		.sidebar {
			position: static;
		}

		.sidebar nav {
			display: flex;
			gap: 4px;
			overflow-x: auto;
			padding-bottom: 4px;
			scrollbar-width: none;
		}

		.sidebar nav::-webkit-scrollbar {
			display: none;
		}

		.sidebar nav a {
			white-space: nowrap;
		}
	}
</style>
