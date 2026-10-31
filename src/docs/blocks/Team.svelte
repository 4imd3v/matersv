<script>
	import { Avatar, SectionHeader } from '#lib/index.js';

	const people = [
		{ name: 'Ada Lovelace', role: 'Tokens and type' },
		{ name: 'Grace Hopper', role: 'Components' },
		{ name: 'Alan Turing', role: 'Platform behaviour' },
		{ name: 'Katherine Johnson', role: 'Layout and rhythm' },
		{ name: 'Edsger Dijkstra', role: 'Documentation' },
		{ name: 'Barbara Liskov', role: 'Accessibility' }
	];
</script>

<section class="section">
	<div class="wrap">
		<SectionHeader
			title="Six people, one repo"
			lead="No design system team, no handoff. The same people write the tokens, the components and the page."
		/>

		<ul class="people">
			{#each people as person (person.name)}
				<li>
					<Avatar name={person.name} size={72} />
					<p class="name">{person.name}</p>
					<p class="role">{person.role}</p>
				</li>
			{/each}
		</ul>
	</div>
</section>

<style>
	.people {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: clamp(32px, 4vw, 56px) clamp(16px, 3vw, 40px);
	}

	li {
		display: grid;
		justify-items: start;
		gap: 4px;
	}

	.name {
		margin-top: 14px;
		font-size: 18px;
		font-weight: 600;
	}

	.role {
		color: var(--color-muted);
		font-size: 15px;
	}

	@media (max-width: 720px) {
		.people {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
</style>
