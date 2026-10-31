<script>
	import { Byline, Figure, Pager, Prose, Sidenote, TagList } from '#lib/index.js';

	const topics = [
		{ href: '/components/taglist', label: 'CSS' },
		{ href: '/components/taglist', label: 'Design' }
	];
</script>

<section class="section">
	<div class="wrap reading">
		<header class="head">
			<TagList label="Topics" items={topics} />
			<h1>One hue, four surfaces, no borders</h1>
			<p class="lead">
				How a two-number colour engine keeps a wide page calm, and what we deleted to get
				there.
			</p>
			<Byline name="Ada Lovelace" meta="12 March 2026 · 6 min read" />
		</header>

		<Figure ratio="16 / 9" caption="Four bands, one hue" credit="MaterSV">
				<svg viewBox="0 0 720 405" aria-hidden="true">
					<rect width="720" height="405" fill="var(--color-field)" />
					<rect y="118" width="720" height="150" fill="var(--color-night)" />
					<rect y="268" width="720" height="137" fill="var(--color-bg-soft)" />
					<rect x="56" y="168" width="120" height="18" rx="9" fill="var(--color-bg)" opacity="0.92" />
					<rect x="56" y="200" width="220" height="10" rx="5" fill="var(--color-night-ink)" opacity="0.45" />
				</svg>
		</Figure>

		<Prose>
			<p>
				A page is a sequence of bands. The band is the unit of rhythm here: it sets the
				vertical air, the surface colour and the size of the heading that opens it. Once
				that is fixed, most layout decisions make themselves.
			</p>

			<h2>One hue</h2>
			<p>
				Every colour in the system is <code>oklch()</code> with the same hue angle. Two
				numbers on the root element, <code>--h</code> and <code>--c</code>, repaint the
				whole page. Nothing can clash because nothing is a different colour to begin with,
				only a lighter or darker version of the same one.
			</p>

			<Sidenote>
				Change <code>--h</code> from 225 to 12 and the page turns red without touching a
				class.
			</Sidenote>

			<p>
				The consequence is a palette you cannot get wrong. A card, a selected row and a
				coloured band are three steps on one ramp, so the page reads as one object rather
				than a collage.
			</p>

			<h2>Four surfaces</h2>
			<p>
				Separation comes from surface changes, not from lines. There are three semantic
				surfaces and one dark interruption:
			</p>
			<ul>
				<li><code>bg</code>, the canvas</li>
				<li><code>bg-soft</code>, a raised card or a footer</li>
				<li><code>field</code>, an inset control or a coloured band</li>
				<li><code>night</code>, always dark, used once per page</li>
			</ul>
			<blockquote>
				<p>If a layout needs a border to be understood, the surfaces are wrong.</p>
			</blockquote>
			<p>
				That rule is why the archive cards, the tables and the pricing grid all sit on
				colour steps instead of outlines, and why the only hairline on the page is the ring
				around floating chrome.
			</p>

			<h2>What we deleted</h2>
			<p>
				An icon package, a utility CSS layer, a theme context and two focus-trap
				implementations. The platform already had details, dialog, popover and range
				inputs; the library only styles them. The list of things that no longer need a
				dependency is longer than the list of things we added.
			</p>
		</Prose>

		<div class="foot">
			<Pager
				label="Articles"
				prev={{ href: '/blocks/blog', title: 'Field notes' }}
				next={{ href: '/blocks/article', title: 'Native first, CSS second' }}
			/>
		</div>
	</div>
</section>

<style>
	.reading {
		width: min(720px, 100%);
		margin-inline: auto;
	}

	.head {
		display: grid;
		justify-items: start;
		gap: 20px;
		margin-bottom: clamp(32px, 4vw, 48px);
	}

	h1 {
		max-width: 20ch;
		margin: 0;
		font-size: clamp(36px, 4.6vw, 56px);
		font-weight: 600;
		line-height: 1;
		letter-spacing: -0.045em;
		text-wrap: balance;
	}

	.lead {
		max-width: 46ch;
		color: var(--color-muted);
		font-size: var(--text-lead);
		line-height: 1.4;
		text-wrap: pretty;
	}

	.reading :global(.figure) {
		margin-bottom: clamp(32px, 4vw, 48px);
	}

	.foot {
		margin-top: clamp(40px, 5vw, 64px);
	}
</style>
