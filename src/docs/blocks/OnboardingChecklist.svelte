<script>
	import { Badge, Checkbox, FeatureList, Progress, Window } from '#lib/index.js';

	let tasks = $state([
		{
			id: 'invite',
			label: 'Invite one teammate',
			hint: 'Three seats are already paid for.',
			action: 'Invite',
			href: '/blocks/account',
			done: true
		},
		{
			id: 'connect',
			label: 'Connect the first source',
			hint: 'A spreadsheet, a repo or an API key.',
			action: 'Connect',
			href: '/blocks/integrations',
			done: false
		},
		{
			id: 'font',
			label: 'Point the tokens at your font',
			hint: 'One variable, in one file.',
			action: 'Read',
			href: '/components/codeblock',
			done: false
		},
		{
			id: 'theme',
			label: 'Try the dark theme',
			hint: 'The toggle above the nav does it live.',
			action: 'Toggle',
			href: '/components/themetoggle',
			done: false
		}
	]);

	const done = $derived(tasks.filter((task) => task.done).length);

	const ready = ['Email verified', 'Workspace created', 'Three seats reserved'];
</script>

{#snippet rail()}
	<span>Home</span>
	<span>Library</span>
	<span>Team</span>
{/snippet}

<section class="section section--field">
	<div class="wrap">
		<header class="head">
			<p class="eyebrow">Welcome, Ada</p>
			<h1>You are in.<br />Here is the short list.</h1>
			<p class="lead">
				Four things worth doing on day one. None of them takes a minute, and the rest of the
				app works without them.
			</p>
			<div class="meter">
				<Progress label="Setup" value={done} max={tasks.length} />
			</div>
		</header>

		<div class="cols">
			<div class="card tasks">
				<div class="tasks-head">
					<h3>Today</h3>
					<Badge>{done} of {tasks.length} done</Badge>
				</div>
				<ul>
					{#each tasks as task (task.id)}
						<li class="task">
							<Checkbox label={task.label} bind:checked={task.done} hint={task.hint} />
							<a class="go" href={task.href}>{task.action}</a>
						</li>
					{/each}
				</ul>
			</div>

			<div class="side">
				<Window {rail}>
					<p class="pane-title">Northwind</p>
					<p class="pane-note">Studio plan · 3 seats</p>
					<ul class="pane-rows">
						<li><span>Documents</span><span>0</span></li>
						<li><span>Sources</span><span>0</span></li>
						<li><span>Members</span><span>1</span></li>
					</ul>
				</Window>

				<FeatureList label="Already done" items={ready} />
			</div>
		</div>
	</div>
</section>

<style>
	.head {
		max-width: 720px;
	}

	.eyebrow {
		font-size: 14px;
		font-weight: 600;
		opacity: 0.8;
	}

	h1 {
		margin-top: 14px;
		font-size: clamp(36px, 5vw, 68px);
		font-weight: 600;
		line-height: 0.94;
		letter-spacing: -0.05em;
		text-wrap: balance;
	}

	.lead {
		margin-top: 22px;
		max-width: 48ch;
		font-size: 18px;
		line-height: 1.5;
		opacity: 0.8;
		text-wrap: pretty;
	}

	.meter {
		max-width: 380px;
		margin-top: 28px;
	}

	.cols {
		display: grid;
		grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);
		gap: clamp(20px, 3vw, 40px);
		margin-top: clamp(36px, 5vw, 64px);
		align-items: start;
	}

	.tasks {
		padding: clamp(26px, 3vw, 40px);
	}

	.tasks-head {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		gap: 12px;
	}

	.tasks > ul {
		display: grid;
		gap: 4px;
		margin-top: 10px;
	}

	.task {
		display: flex;
		align-items: start;
		justify-content: space-between;
		gap: 16px;
		margin-inline: -14px;
		padding: 14px;
		border-radius: 18px;
		transition: background-color var(--dur-control) ease;
	}

	.task:hover {
		background: color-mix(in oklab, var(--color-field) 45%, transparent);
	}

	.go {
		flex: none;
		padding: 6px 12px;
		border-radius: var(--radius-pill);
		background: var(--color-field);
		color: var(--color-field-ink);
		font-size: 13px;
		font-weight: 600;
		text-decoration: none;
	}

	.side {
		display: grid;
		gap: clamp(20px, 3vw, 32px);
	}

	.pane-title {
		font-size: 17px;
		font-weight: 600;
	}

	.pane-note {
		margin-top: 4px;
		color: var(--color-muted);
		font-size: 14px;
	}

	.pane-rows {
		display: grid;
		gap: 10px;
		margin-top: 22px;
		font-size: 14px;
	}

	.pane-rows li {
		display: flex;
		justify-content: space-between;
		gap: 16px;
		color: var(--color-muted);
	}

	.pane-rows li span:last-child {
		color: var(--color-ink);
		font-weight: 600;
		font-variant-numeric: tabular-nums;
	}

	@media (max-width: 900px) {
		.cols {
			grid-template-columns: 1fr;
		}
	}
</style>
