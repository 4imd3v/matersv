<script>
	import { Badge, SectionHeader, StatusDot } from '#lib/index.js';

	/**
	 * @typedef {object} Change
	 * @property {string} kind
	 * @property {'ok' | 'muted'} tone
	 * @property {string} text
	 *
	 * @typedef {object} Release
	 * @property {string} version
	 * @property {string} date
	 * @property {boolean} [latest]
	 * @property {Change[]} changes
	 */

	/** @type {Release[]} */
	const releases = [
		{
			version: '0.3.0',
			date: 'March 2026',
			latest: true,
			changes: [
				{ kind: 'Added', tone: 'ok', text: 'Fifteen blocks in thirty-two layouts.' },
				{ kind: 'Added', tone: 'ok', text: 'A ghost button variant for second actions.' },
				{ kind: 'Fixed', tone: 'ok', text: 'Card type rules no longer restyle nested components.' }
			]
		},
		{
			version: '0.2.0',
			date: 'February 2026',
			changes: [
				{ kind: 'Added', tone: 'ok', text: 'Combobox, Carousel and Pager.' },
				{ kind: 'Changed', tone: 'muted', text: 'Progress and Dots share one surface token.' },
				{ kind: 'Fixed', tone: 'ok', text: 'Night-band focus rings use the night accent.' }
			]
		},
		{
			version: '0.1.2',
			date: 'January 2026',
			changes: [
				{ kind: 'Added', tone: 'ok', text: 'First tagged release on npm.' },
				{ kind: 'Changed', tone: 'muted', text: 'Package ships only dist, Svelte stays a peer.' }
			]
		},
		{
			version: '0.1.0',
			date: 'December 2025',
			changes: [
				{ kind: 'Added', tone: 'ok', text: 'Tokens, four surfaces and capsule chrome.' },
				{ kind: 'Added', tone: 'ok', text: 'Navigation, dialog, accordion and the form fields.' }
			]
		}
	];
</script>

<section class="section">
	<div class="wrap">
		<SectionHeader
			title="Release notes"
			lead="One card per version, with what changed and nothing about how excited we are."
		/>

		<div class="grid">
			{#each releases as release (release.version)}
				<article class="card release">
					<div class="top">
						<h3>{release.version}</h3>
						{#if release.latest}<Badge tone="accent">Latest</Badge>{/if}
					</div>
					<p class="date">{release.date}</p>

					<ul class="changes">
						{#each release.changes as change (change.text)}
							<li>
								<StatusDot label={change.kind} tone={change.tone} />
								<span>{change.text}</span>
							</li>
						{/each}
					</ul>
				</article>
			{/each}
		</div>
	</div>
</section>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: clamp(16px, 2vw, 28px);
	}

	.release {
		display: grid;
		align-content: start;
		gap: 4px;
		padding: clamp(26px, 2.6vw, 34px);
	}

	.top {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 12px;
	}

	h3 {
		font-size: 26px;
		line-height: 1.1;
		font-variant-numeric: tabular-nums;
	}

	.date {
		margin: 0;
		color: var(--color-muted);
		font-size: 14px;
	}

	.changes {
		display: grid;
		gap: 12px;
		margin-top: 18px;
	}

	li {
		display: flex;
		align-items: baseline;
		gap: 10px;
		font-size: 16px;
		text-wrap: pretty;
	}

	/* Dot stays accent, the tag goes quiet, the sentence stays ink. */
	li :global(.status) {
		flex: none;
		color: var(--color-muted);
	}

	@media (max-width: 720px) {
		.grid {
			grid-template-columns: 1fr;
		}
	}
</style>
