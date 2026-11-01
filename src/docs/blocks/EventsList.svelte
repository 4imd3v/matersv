<script>
	import { Badge, Button, SectionHeader, Tooltip } from '#lib/index.js';

	const events = [
		{
			day: '14',
			month: 'Nov',
			title: 'One hue, four surfaces',
			lead: 'The colour engine, the two numbers behind it, and the third one that ruins it.',
			time: '18:00',
			zone: 'CET',
			note: 'Lisbon time. The replay is the same length as the session.',
			place: 'Online',
			entry: 'Free'
		},
		{
			day: '21',
			month: 'Nov',
			title: 'Shipping a block library',
			lead: 'How the twenty-six blocks are kept honest: raw imports, a registry, one axe run.',
			time: '17:30',
			zone: 'CET',
			note: 'Recording included, slides the next morning.',
			place: 'Online',
			entry: 'Free'
		},
		{
			day: '05',
			month: 'Dec',
			title: 'Dark theme clinic',
			lead: 'Bring a page that looks wrong at night. We fix three of them live.',
			time: '16:00',
			zone: 'CET',
			note: 'Members only, capped at forty seats.',
			place: 'Online',
			entry: 'Members'
		}
	];
</script>

<section class="section">
	<div class="wrap">
		<SectionHeader
			title="What is on"
			lead="Three sessions before the end of the year. All of them recorded, none of them longer than an hour."
		/>

		<ul class="list">
			{#each events as event (event.title)}
				<li class="row">
					<div class="date" aria-hidden="true">
						<span class="day">{event.day}</span>
						<span class="month">{event.month}</span>
					</div>
					<div class="body">
						<h3>{event.title}</h3>
						<p class="lead">{event.lead}</p>
						<p class="meta">
							<span>{event.time}</span>
							<Tooltip text={event.note}>
								<span class="zone">{event.zone}</span>
							</Tooltip>
							<span>{event.place}</span>
						</p>
					</div>
					<div class="end">
						<Badge tone={event.entry === 'Free' ? 'accent' : 'field'}>{event.entry}</Badge>
						<Button variant="ghost">Details</Button>
					</div>
				</li>
			{/each}
		</ul>

		<p class="past">
			Missed one? <a href="/blocks/blog">Read the recaps</a>, they go up within the week.
		</p>
	</div>
</section>

<style>
	.list {
		display: grid;
		gap: 4px;
		margin-top: clamp(24px, 3vw, 36px);
	}

	.row {
		display: grid;
		grid-template-columns: 84px minmax(0, 1fr) auto;
		gap: clamp(18px, 3vw, 40px);
		align-items: start;
		margin-inline: -20px;
		padding: clamp(20px, 2.4vw, 28px) 20px;
		border-radius: 24px;
		transition: background-color var(--dur-control) ease;
	}

	.row:hover {
		background: color-mix(in oklab, var(--color-bg-soft) 70%, transparent);
	}

	.date {
		display: grid;
		place-items: center;
		padding-block: 12px;
		border-radius: 20px;
		background: var(--color-field);
		color: var(--color-field-ink);
	}

	.day {
		font-size: 30px;
		font-weight: 600;
		line-height: 1;
		letter-spacing: -0.04em;
		font-variant-numeric: tabular-nums;
	}

	.month {
		margin-top: 2px;
		font-size: 12px;
		font-weight: 600;
		opacity: 0.8;
	}

	.body {
		display: grid;
		gap: 6px;
	}

	.body > h3 {
		font-size: clamp(20px, 2.2vw, 24px);
		font-weight: 600;
		line-height: 1.15;
		letter-spacing: -0.025em;
		text-wrap: balance;
	}

	.lead {
		max-width: 56ch;
		color: var(--color-muted);
		font-size: 16px;
		line-height: 1.5;
		text-wrap: pretty;
	}

	.meta {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 10px;
		margin-top: 2px;
		color: var(--color-muted);
		font-size: 14px;
	}

	/* The timezone is the one word worth a hover; it carries the caveat. */
	.zone {
		padding: 3px 10px;
		border-radius: var(--radius-pill);
		background: var(--color-field);
		color: var(--color-field-ink);
		font-size: 12px;
		font-weight: 600;
	}

	.end {
		display: grid;
		justify-items: end;
		gap: 12px;
	}

	.past {
		margin-top: clamp(24px, 3vw, 36px);
		color: var(--color-muted);
		font-size: 15px;
	}

	.past a {
		color: var(--color-ink);
		font-weight: 600;
	}

	@media (max-width: 800px) {
		.row {
			grid-template-columns: 64px minmax(0, 1fr);
			gap: 16px;
			/* The wrap only insets 16px here, so the hover bleed has to shrink too. */
			margin-inline: -8px;
			padding-inline: 8px;
		}

		.end {
			grid-column: 2;
			grid-auto-flow: column;
			justify-items: start;
			justify-content: start;
			align-items: center;
		}
	}
</style>
