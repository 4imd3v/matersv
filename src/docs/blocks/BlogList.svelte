<script>
	import { Badge, Pagination, SectionHeader } from '#lib/index.js';

	const posts = [
		{
			date: '2026-03-12',
			label: '12 Mar 2026',
			tag: 'CSS',
			title: 'One hue is a constraint, not a colour',
			lead: 'Why every surface in the system is the same hue at a different lightness.'
		},
		{
			date: '2026-03-05',
			label: '5 Mar 2026',
			tag: 'Svelte',
			title: 'Use the platform, then delete the rest',
			lead: 'Details, dialog and popover already do the hard part. The component only styles them.'
		},
		{
			date: '2026-02-27',
			label: '27 Feb 2026',
			tag: 'Design',
			title: 'Separation without borders',
			lead: 'A colour step reads as an edge. A 1px line reads as a table from 2014.'
		},
		{
			date: '2026-02-14',
			label: '14 Feb 2026',
			tag: 'CSS',
			title: 'The two numbers that repaint a page',
			lead: 'How --h and --c reach every surface, text and action token without a theme object.'
		},
		{
			date: '2026-01-30',
			label: '30 Jan 2026',
			tag: 'Svelte',
			title: 'Native details beat a custom accordion',
			lead: 'What we stopped maintaining when the summary element did the work.'
		}
	];

	const pages = [
		{ href: '/blocks/blog', label: '1' },
		{ href: '/blocks/blog', label: '2' },
		{ href: '/blocks/blog', label: '3' }
	];
</script>

<section class="section">
	<div class="wrap">
		<SectionHeader
			title="Field notes"
			lead="A reading list without pictures: date, title, one line of argument, tag."
		/>

		<ul class="list">
			{#each posts as post (post.title)}
				<li>
					<article class="row">
						<time datetime={post.date}>{post.label}</time>
						<div class="body">
							<h3><a href="/blocks/blog">{post.title}</a></h3>
							<p>{post.lead}</p>
						</div>
						<Badge>{post.tag}</Badge>
					</article>
				</li>
			{/each}
		</ul>

		<div class="more">
			<Pagination items={pages} current={0} label="Journal pages" />
		</div>
	</div>
</section>

<style>
	.list {
		display: grid;
		margin-top: clamp(24px, 4vw, 40px);
	}

	.row {
		display: grid;
		grid-template-columns: 116px minmax(0, 1fr) auto;
		gap: clamp(16px, 2.4vw, 32px);
		align-items: start;
		margin-inline: -16px;
		padding: 22px 16px;
		border-radius: 20px;
		transition: background-color var(--dur-control) ease;
	}

	.row:hover {
		background: color-mix(in oklab, var(--color-field) 45%, transparent);
	}

	time {
		padding-top: 4px;
		color: var(--color-muted);
		font-size: 14px;
		font-variant-numeric: tabular-nums;
	}

	h3 {
		font-size: 24px;
		font-weight: 600;
		line-height: 1.15;
		letter-spacing: -0.03em;
	}

	h3 a {
		text-decoration: none;
	}

	h3 a:hover {
		text-decoration: underline;
		text-decoration-thickness: 2px;
		text-underline-offset: 5px;
		text-decoration-color: color-mix(in oklab, currentColor 30%, transparent);
	}

	.body p {
		margin-top: 8px;
		max-width: 60ch;
		color: var(--color-muted);
		text-wrap: pretty;
	}

	.row :global(.badge) {
		margin-top: 3px;
	}

	.more {
		display: flex;
		justify-content: center;
		margin-top: clamp(32px, 4vw, 56px);
	}

	@media (max-width: 720px) {
		.row {
			grid-template-columns: minmax(0, 1fr) auto;
			padding: 20px 12px;
		}

		time {
			grid-column: 1 / -1;
			padding-top: 0;
		}
	}
</style>
