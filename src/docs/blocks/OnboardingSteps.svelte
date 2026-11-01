<script>
	import { Button, Input, Steps } from '#lib/index.js';

	const steps = [
		{ label: 'Workspace', hint: 'Name and URL' },
		{ label: 'Team', hint: 'Invites and roles' },
		{ label: 'Sources', hint: 'What to import' }
	];

	let name = $state('Northwind');
	let slug = $state('northwind');
</script>

<section class="section">
	<div class="wrap setup">
		<aside class="rail">
			<p class="eyebrow">Getting started</p>
			<Steps label="Workspace setup" current={2} items={steps} />
			<p class="rail-note">Two minutes. Every field here stays editable.</p>
		</aside>

		<div class="card panel">
			<p class="kicker">Step 2 of 3</p>
			<h1>Name the workspace<br />your team will share.</h1>
			<p class="lead">
				This is what shows up in the rail, on invoices and in every invitation. A short name
				beats a clever one.
			</p>

			<form class="form" onsubmit={(event) => event.preventDefault()}>
				<Input
					label="Workspace name"
					bind:value={name}
					autocomplete="organization"
					hint="Up to 40 characters. Rename it whenever you like."
				/>
				<Input
					label="Workspace URL"
					bind:value={slug}
					autocomplete="off"
					spellcheck="false"
					hint="Lowercase letters, numbers and hyphens."
				/>
				<div class="actions">
					<Button type="submit">Continue to invites</Button>
					<Button variant="text" href="/blocks/dashboard">Skip for now</Button>
				</div>
			</form>

			<p class="help">
				Moving from another tool? <a href="/blocks/integrations">Import in one step</a> once the
				workspace exists.
			</p>
		</div>
	</div>
</section>

<style>
	.setup {
		display: grid;
		grid-template-columns: 248px minmax(0, 1fr);
		gap: clamp(32px, 5vw, 72px);
		align-items: start;
	}

	.rail {
		position: sticky;
		top: calc(var(--head) + 32px);
		display: grid;
		gap: 22px;
	}

	.eyebrow {
		color: var(--color-muted);
		font-size: 14px;
		font-weight: 600;
	}

	.rail-note {
		color: var(--color-muted);
		font-size: 14px;
		line-height: 1.4;
		text-wrap: pretty;
	}

	.panel {
		padding: clamp(28px, 4vw, 52px);
	}

	.kicker {
		color: var(--color-muted);
		font-size: 14px;
		font-weight: 600;
	}

	h1 {
		margin-top: 14px;
		font-size: clamp(30px, 3.6vw, 46px);
		font-weight: 600;
		line-height: 1;
		letter-spacing: -0.045em;
		text-wrap: balance;
	}

	/* The card's own paragraph rule caps at 34ch; a lead wants more room. */
	.panel > .lead {
		margin-top: 18px;
		max-width: 46ch;
		font-size: 18px;
		line-height: 1.5;
	}

	.form {
		display: grid;
		gap: 18px;
		margin-top: clamp(28px, 3vw, 36px);
		max-width: 460px;
	}

	.actions {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 12px 20px;
		margin-top: 6px;
	}

	.panel > .help {
		margin-top: 28px;
		max-width: 52ch;
		font-size: 15px;
	}

	.help a {
		color: var(--color-ink);
		font-weight: 600;
	}

	@media (max-width: 860px) {
		.setup {
			grid-template-columns: 1fr;
		}

		.rail {
			position: static;
		}
	}
</style>
