<script>
	import { Badge, Byline, Figure, Pagination, SectionHeader, TagList } from '#lib/index.js';

	const posts = [
		{
			tag: 'CSS',
			title: 'One hue is a constraint, not a colour',
			lead: 'Why every surface in the system is the same hue at a different lightness.',
			name: 'Ada Lovelace',
			meta: '12 March 2026 · 6 min'
		},
		{
			tag: 'Svelte',
			title: 'Use the platform, then delete the rest',
			lead: 'Details, dialog and popover already do the hard part. The component only styles them.',
			name: 'Grace Hopper',
			meta: '5 March 2026 · 4 min'
		},
		{
			tag: 'Design',
			title: 'Separation without borders',
			lead: 'A colour step reads as an edge. A 1px line reads as a table from 2014.',
			name: 'Alan Turing',
			meta: '27 February 2026 · 8 min'
		}
	];

	const topics = [
		{ href: '/components/taglist', label: 'CSS' },
		{ href: '/components/taglist', label: 'Svelte' },
		{ href: '/components/taglist', label: 'Design' }
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
			lead="What we learn while keeping one page calm: the tokens, the platform, and the parts we deleted."
		/>

		<article class="featured">
			<Figure ratio="16 / 10" caption="Four surfaces, one hue" credit="MaterSV">
				<!-- Drawn from the tokens, so it follows the theme and the hue. -->
				<svg viewBox="0 0 720 450" aria-hidden="true">
					<rect width="720" height="450" fill="var(--color-bg-soft)" />
					<rect y="286" width="720" height="164" fill="var(--color-night)" />
					<circle cx="360" cy="286" r="112" fill="var(--color-field)" />
					<circle cx="360" cy="286" r="52" fill="var(--color-accent)" />
				</svg>
			</Figure>

			<div class="copy">
				<TagList label="Topics" items={topics} />
				<h3><a href="/blocks/blog">Four surfaces, alternating until the page feels banded</a></h3>
				<p>
					A page is a sequence of bands: field, bg, night, then quiet. The rhythm is the
					layout. Everything else is a token change.
				</p>
				<Byline name="Ada Lovelace" meta="12 March 2026 · 6 min read" />
			</div>
		</article>

		<ul class="posts">
			{#each posts as post (post.title)}
				<li>
					<article class="card post">
						<Badge>{post.tag}</Badge>
						<h3><a href="/blocks/blog">{post.title}</a></h3>
						<p>{post.lead}</p>
						<Byline name={post.name} meta={post.meta} />
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
	.featured {
		display: grid;
		grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr);
		gap: clamp(24px, 4vw, 64px);
		align-items: center;
	}

	.copy {
		display: grid;
		justify-items: start;
		gap: 18px;
	}

	.copy h3 {
		font-size: var(--text-h3);
		font-weight: 600;
		line-height: 1.08;
		letter-spacing: -0.03em;
		text-wrap: balance;
	}

	.copy p {
		max-width: 38ch;
		color: var(--color-muted);
		text-wrap: pretty;
	}

	.posts {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: clamp(16px, 2vw, 28px);
		margin-top: clamp(40px, 6vw, 88px);
	}

	.post {
		display: flex;
		height: 100%;
		flex-direction: column;
		align-items: start;
		gap: 12px;
		padding: clamp(26px, 2.4vw, 32px);
	}

	.post h3 {
		font-size: 22px;
	}

	/* The title carries the whole card, so it is the link. */
	h3 a {
		text-decoration: none;
		transition: text-decoration-color var(--dur-control) var(--ease-effects);
	}

	h3 a:hover {
		text-decoration: underline;
		text-decoration-thickness: 2px;
		text-underline-offset: 5px;
		text-decoration-color: color-mix(in oklab, currentColor 30%, transparent);
	}

	.post :global(.byline) {
		margin-top: auto;
		padding-top: 16px;
	}

	.more {
		display: flex;
		justify-content: center;
		margin-top: clamp(32px, 4vw, 56px);
	}

	@media (max-width: 900px) {
		.featured,
		.posts {
			grid-template-columns: 1fr;
		}
	}
</style>
