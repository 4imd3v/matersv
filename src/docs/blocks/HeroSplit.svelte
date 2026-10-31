<script>
	import { AvatarGroup, Badge, Button, Progress, Window } from '#lib/index.js';

	const people = [{ name: 'Ada Lovelace' }, { name: 'Grace Hopper' }, { name: 'Alan Turing' }];
</script>

{#snippet rail()}
	<span>Home</span>
	<span>Stats</span>
	<span>Library</span>
{/snippet}

<section class="section hero">
	<div class="wrap split">
		<div class="copy">
			<p class="eyebrow">Blocks, new in 0.3</p>
			<h1>Wide pages,<br />quiet details.</h1>
			<p class="lead">
				Copy on the left, a real UI mock on the right. Same tokens, same components, no
				screenshot to keep in sync.
			</p>
			<div class="actions">
				<Button href="/components" size="lg">Browse components</Button>
				<Button href="/blocks" variant="text">See every block</Button>
			</div>
			<div class="proof">
				<AvatarGroup label="Teams using MaterSV" people={people} size={36} />
				<p>2,400 teams ship wide pages with it.</p>
			</div>
		</div>

		<div class="visual">
			<Window {rail}>
				<div class="pane-head">
					<p class="pane-title">This week</p>
					<Badge>Live</Badge>
				</div>
				<div class="figures">
					<div>
						<p class="figure">98%</p>
						<p class="caption">Lighthouse</p>
					</div>
					<div>
						<p class="figure">0</p>
						<p class="caption">Dependencies</p>
					</div>
				</div>
				<Progress label="Storage" value={64} />

				<ul class="pane-rows">
					<li><span>Pages</span><span>12</span></li>
					<li><span>Components</span><span>68</span></li>
				</ul>
			</Window>
		</div>
	</div>
</section>

<style>
	.split {
		display: grid;
		grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
		gap: clamp(32px, 5vw, 80px);
		align-items: center;
	}

	.copy {
		display: grid;
		justify-items: start;
	}

	.eyebrow {
		color: var(--color-muted);
		font-size: 14px;
		font-weight: 600;
	}

	h1 {
		margin-top: 18px;
		font-size: clamp(40px, 4.4vw, 64px);
		font-weight: 600;
		line-height: 0.96;
		letter-spacing: -0.05em;
		text-wrap: balance;
	}

	.lead {
		margin-top: 22px;
		max-width: 40ch;
		color: var(--color-muted);
		text-wrap: pretty;
	}

	.actions {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 16px 24px;
		margin-top: 30px;
	}

	.proof {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 14px;
		margin-top: clamp(32px, 4vw, 48px);
	}

	.proof p {
		max-width: 26ch;
		color: var(--color-muted);
		font-size: 15px;
	}

	.visual {
		justify-self: end;
		width: 100%;
		max-width: 560px;
	}

	.pane-rows {
		display: grid;
		margin-top: 22px;
	}

	.pane-rows li {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		gap: 16px;
		padding-block: 11px;
		color: var(--color-muted);
		font-size: 14px;
	}

	.pane-rows li span:last-child {
		color: var(--color-ink);
		font-weight: 600;
		font-variant-numeric: tabular-nums;
	}

	.pane-head {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 16px;
	}

	.pane-title {
		font-size: 16px;
		font-weight: 600;
	}

	.figures {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 18px;
		margin-block: 26px;
	}

	.figure {
		font-size: 34px;
		font-weight: 600;
		line-height: 1;
		letter-spacing: -0.04em;
		font-variant-numeric: tabular-nums;
	}

	.caption {
		margin-top: 6px;
		color: var(--color-muted);
		font-size: 14px;
	}

	@media (max-width: 900px) {
		.split {
			grid-template-columns: 1fr;
		}

		.visual {
			justify-self: stretch;
		}
	}
</style>
