<script>
	import { Byline, Pager, Prose, TagList, Toc } from '#lib/index.js';

	const topics = [
		{ href: '/components/taglist', label: 'CSS' },
		{ href: '/components/taglist', label: 'Design' }
	];

	const contents = [
		{ href: '#article-hue', label: 'One hue' },
		{ href: '#article-surfaces', label: 'Four surfaces' },
		{ href: '#article-deleted', label: 'What we deleted' }
	];
</script>

<section class="section">
	<div class="wrap">
		<header class="head">
			<TagList label="Topics" items={topics} />
			<h1>One hue, four surfaces, no borders</h1>
			<p class="lead">
				A long read with its contents pinned beside it, for documentation that has to stay
				navigable.
			</p>
			<Byline name="Ada Lovelace" meta="12 March 2026 · 6 min read" />
		</header>

		<div class="docs">
			<article>
				<Prose>
					<p>
						A page is a sequence of bands. The band is the unit of rhythm here: it sets
						the vertical air, the surface colour and the size of the heading that opens
						it.
					</p>

					<h2 id="article-hue">One hue</h2>
					<p>
						Every colour is <code>oklch()</code> with the same hue angle. Two numbers on
						the root element, <code>--h</code> and <code>--c</code>, repaint the page,
						so a card, a selected row and a coloured band are three steps on one ramp.
					</p>
					<p>
						The consequence is a palette you cannot get wrong. Nothing clashes because
						nothing is a different colour to begin with.
					</p>

					<h2 id="article-surfaces">Four surfaces</h2>
					<p>Separation comes from surface changes, not from lines:</p>
					<ul>
						<li><code>bg</code>, the canvas</li>
						<li><code>bg-soft</code>, a raised card or a footer</li>
						<li><code>field</code>, an inset control or a coloured band</li>
						<li><code>night</code>, always dark, once per page</li>
					</ul>
					<blockquote>
						<p>If a layout needs a border to be understood, the surfaces are wrong.</p>
					</blockquote>

					<h2 id="article-deleted">What we deleted</h2>
					<p>
						An icon package, a utility CSS layer, a theme context and two focus-trap
						implementations. The platform already had details, dialog, popover and range
						inputs; the library only styles them.
					</p>
				</Prose>

				<div class="foot">
					<Pager
						label="Articles"
						prev={{ href: '/blocks/blog', title: 'Field notes' }}
						next={{ href: '/blocks/article', title: 'Native first, CSS second' }}
					/>
				</div>
			</article>

			<aside class="rail">
				<Toc current="#article-hue" items={contents} />

				<div class="card help">
					<p class="k">Short version</p>
					<p>Two numbers on the root element repaint every surface on the page.</p>
				</div>
			</aside>
		</div>
	</div>
</section>

<style>
	.head {
		display: grid;
		justify-items: start;
		gap: 18px;
		max-width: 760px;
		margin-bottom: clamp(40px, 5vw, 64px);
	}

	h1 {
		max-width: 20ch;
		font-size: clamp(36px, 4.6vw, 56px);
		font-weight: 600;
		line-height: 1;
		letter-spacing: -0.045em;
		text-wrap: balance;
	}

	.lead {
		max-width: 52ch;
		color: var(--color-muted);
		font-size: var(--text-lead);
		line-height: 1.4;
		text-wrap: pretty;
	}

	.docs {
		display: grid;
		grid-template-columns: minmax(0, 1fr) 220px;
		gap: clamp(32px, 5vw, 80px);
		align-items: start;
	}

	.rail {
		position: sticky;
		top: calc(var(--head) + 24px);
		display: grid;
		gap: 28px;
	}

	.help {
		display: grid;
		gap: 8px;
		padding: 24px;
	}

	.k {
		color: var(--color-muted);
		font-size: 14px;
		font-weight: 600;
	}

	.help p:last-child {
		margin: 0;
		color: var(--color-muted);
		font-size: 15px;
		text-wrap: pretty;
	}

	.foot {
		margin-top: clamp(40px, 5vw, 64px);
	}

	@media (max-width: 900px) {
		.docs {
			grid-template-columns: 1fr;
		}

		/* On a phone the contents belong above the article, not after the pager. */
		.rail {
			order: -1;
			position: static;
		}
	}
</style>
