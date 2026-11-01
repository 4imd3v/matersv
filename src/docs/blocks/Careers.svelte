<script>
	import { Badge, SectionHeader } from '#lib/index.js';

	const roles = [
		{
			title: 'Component engineer',
			team: 'Components',
			location: 'Lisbon or remote',
			type: 'Full time',
			fresh: true
		},
		{
			title: 'Design engineer, contracts',
			team: 'Layout',
			location: 'Remote, WET ±2',
			type: 'Contract',
			fresh: false
		},
		{
			title: 'Technical writer',
			team: 'Documentation',
			location: 'Lisbon',
			type: 'Part time',
			fresh: false
		},
		{
			title: 'Accessibility reviewer',
			team: 'Quality',
			location: 'Remote',
			type: 'Contract',
			fresh: false
		}
	];
</script>

<section class="section">
	<div class="wrap">
		<SectionHeader
			title="Open roles"
			lead="Four jobs, all in the same repository. No design system team, no handoff between three departments."
		/>

		<ul class="roles">
			{#each roles as role (role.title)}
				<li>
					<a class="role" href="/blocks/careers">
						<div class="what">
							<h3>{role.title}</h3>
							<p class="meta">{role.team} · {role.location} · {role.type}</p>
						</div>
						{#if role.fresh}<Badge>New</Badge>{/if}
						<svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
							<path d="M9 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
						</svg>
					</a>
				</li>
			{/each}
		</ul>

		<p class="more">
			Nothing fits? <a href="/blocks/contact">Write anyway</a>, we keep the good ones.
		</p>
	</div>
</section>

<style>
	.roles {
		display: grid;
		gap: 2px;
	}

	.role {
		display: grid;
		grid-template-columns: minmax(0, 1fr) auto 20px;
		align-items: center;
		gap: 16px;
		margin-inline: -16px;
		padding: 20px 16px;
		border-radius: 20px;
		color: inherit;
		text-decoration: none;
		transition: background-color var(--dur-control) ease;
	}

	.role:hover {
		background: color-mix(in oklab, var(--color-field) 45%, transparent);
	}

	.role svg {
		color: var(--color-muted);
	}

	h3 {
		font-size: 22px;
		font-weight: 600;
		line-height: 1.15;
		letter-spacing: -0.03em;
	}

	.meta {
		margin-top: 6px;
		color: var(--color-muted);
		font-size: 15px;
	}

	.more {
		margin-top: clamp(32px, 4vw, 48px);
		color: var(--color-muted);
		font-size: 16px;
	}

	.more a {
		color: var(--color-ink);
		font-weight: 600;
	}

	@media (max-width: 560px) {
		h3 {
			font-size: 19px;
		}
	}
</style>
