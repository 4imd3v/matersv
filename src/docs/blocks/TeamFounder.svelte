<script>
	import { Avatar, Button, SectionHeader } from '#lib/index.js';

	const others = [
		{ name: 'Grace Hopper', role: 'Components' },
		{ name: 'Alan Turing', role: 'Platform behaviour' },
		{ name: 'Katherine Johnson', role: 'Layout and rhythm' },
		{ name: 'Edsger Dijkstra', role: 'Documentation' },
		{ name: 'Barbara Liskov', role: 'Accessibility' }
	];
</script>

<section class="section">
	<div class="wrap split">
		<div class="who">
			<article class="card founder">
			<Avatar name="Ada Lovelace" size={96} />
			<h3>Ada Lovelace</h3>
			<p class="role">Founder, design systems</p>
				<p class="bio">Writes the tokens, deletes the rest, and answers the email in the footer.</p>
			</article>

			<div class="hiring">
				<Button href="/components" variant="ghost">Open roles</Button>
				<p>Hiring one component engineer, remote in WET.</p>
			</div>
		</div>

		<div class="rest">
			<SectionHeader title="The rest of the room" lead="Five more people, one shared stylesheet." />

			<ul class="rows">
				{#each others as person (person.name)}
					<li>
						<Avatar name={person.name} size={44} />
						<div>
							<p class="name">{person.name}</p>
							<p class="role">{person.role}</p>
						</div>
					</li>
				{/each}
			</ul>

			<p class="more">Twelve more across Lisbon and Kyoto.</p>
		</div>
	</div>
</section>

<style>
	.split {
		display: grid;
		grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
		gap: clamp(32px, 5vw, 80px);
		align-items: start;
	}

	.founder {
		display: grid;
		align-content: start;
		justify-items: start;
		gap: 8px;
		padding: clamp(28px, 3vw, 40px);
	}

	h3 {
		margin-top: 14px;
		font-size: 30px;
		line-height: 1.1;
		letter-spacing: -0.03em;
	}

	.role {
		color: var(--color-muted);
		font-size: 15px;
	}

	.bio {
		margin: 12px 0 0;
		max-width: 32ch;
		color: var(--color-muted);
		text-wrap: pretty;
	}

	.rest :global(.section-head) {
		margin-bottom: clamp(28px, 3vw, 40px);
	}

	.rest :global(h2) {
		font-size: clamp(28px, 3vw, 38px);
		letter-spacing: -0.04em;
	}

	.who {
		display: grid;
		gap: 20px;
		align-content: start;
	}

	.hiring {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 12px 16px;
		padding-left: 4px;
	}

	.hiring p {
		color: var(--color-muted);
		font-size: 15px;
	}

	.rows {
		display: grid;
	}

	.rows li {
		display: flex;
		align-items: center;
		gap: 16px;
		padding-block: 14px;
	}

	.rows .name {
		font-size: 16px;
		font-weight: 600;
	}

	.rows .role {
		margin-top: 2px;
	}

	.more {
		margin-top: 24px;
		color: var(--color-muted);
		font-size: 15px;
	}

	@media (max-width: 900px) {
		.split {
			grid-template-columns: 1fr;
		}
	}
</style>
