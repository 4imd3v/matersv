<script>
	import Detail from '../../../docs/blocks/Detail.svelte';

	let { data } = $props();
	const block = $derived(data.block);
</script>

<svelte:head>
	<title>{block.name} block — MaterSV</title>
	<meta name="description" content={block.lead} />
</svelte:head>

<main class="page" id="main">
	<div class="wrap">
		<header class="intro">
			<a class="back" href="/blocks">All blocks</a>
			<p class="kind">{block.category}</p>
			<h1>{block.name}</h1>
			<p class="lead">{block.lead}</p>
		</header>

		<!-- Remounts on a new block, so the variant selection starts over. -->
		{#key block.slug}
			<Detail {block} />
		{/key}

		<nav class="pager" aria-label="Blocks">
			{#if data.prev}
				<a href="/blocks/{data.prev.slug}">
					<span>Previous block</span>
					{data.prev.name}
				</a>
			{:else}
				<span></span>
			{/if}
			{#if data.next}
				<a class="next" href="/blocks/{data.next.slug}">
					<span>Next block</span>
					{data.next.name}
				</a>
			{/if}
		</nav>
	</div>
</main>

<style>
	.page {
		padding-block: clamp(24px, 4vw, 48px) clamp(80px, 10vw, 140px);
	}

	.intro {
		max-width: 760px;
	}

	.back {
		display: inline-block;
		margin-bottom: 24px;
		color: var(--color-muted);
		font-size: 14px;
		font-weight: 600;
		text-decoration: none;
	}

	.back:hover {
		color: var(--color-ink);
	}

	.kind {
		color: var(--color-muted);
		font-size: 13px;
		font-weight: 600;
	}

	h1 {
		margin-top: 8px;
		font-size: var(--text-h2);
		font-weight: 600;
		line-height: 0.98;
		letter-spacing: -0.045em;
		text-wrap: balance;
	}

	.lead {
		margin-top: 20px;
		max-width: 56ch;
		color: var(--color-muted);
		font-size: var(--text-lead);
		line-height: 1.4;
		text-wrap: pretty;
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
</style>
