<script>
	import {
		Avatar,
		Badge,
		Breadcrumbs,
		Button,
		FileDrop,
		Input,
		Select,
		Sheet,
		Switch
	} from '#lib/index.js';

	let editing = $state(false);
	let name = $state('Ada Lovelace');
	let role = $state('Design engineer');
	let timezone = $state('eu');
	let digest = $state(true);
	let mentions = $state(true);

	const crumbs = [
		{ href: '/blocks/dashboard', label: 'Workspace' },
		{ href: '/blocks/account', label: 'Account' },
		{ href: '/blocks/account', label: 'Profile' }
	];

	const zones = [
		{ value: 'eu', label: 'Europe/Lisbon (UTC+0)' },
		{ value: 'us', label: 'America/New York (UTC−5)' },
		{ value: 'jp', label: 'Asia/Tokyo (UTC+9)' }
	];
</script>

<section class="section">
	<div class="wrap">
		<Breadcrumbs items={crumbs} />

		<header class="head">
			<h1>Account</h1>
			<p class="lead">Who you are in this workspace, and how often it is allowed to interrupt.</p>
		</header>

		<div class="cols">
			<aside class="card who">
				<Avatar name={name} size={88} />
				<h3>{name}</h3>
				<p class="mail">ada@northwind.co</p>
				<p class="plan">
					<Badge tone="accent">Studio</Badge>
					<span>3 of 5 seats used</span>
				</p>
				<dl class="facts">
					<div><dt>Member since</dt><dd>March 2024</dd></div>
					<div><dt>Role</dt><dd>Owner</dd></div>
					<div><dt>Last sign-in</dt><dd>Today, 09:12</dd></div>
				</dl>
				<Button variant="ghost" onclick={() => (editing = true)}>Edit profile</Button>
			</aside>

			<div class="card prefs">
				<h3>Preferences</h3>
				<div class="fields">
					<Input label="Display name" bind:value={name} autocomplete="name" />
					<Input label="Role" bind:value={role} autocomplete="organization-title" />
					<div class="wide">
						<Select label="Time zone" items={zones} bind:value={timezone} />
					</div>
				</div>

				<div class="switches">
					<div class="switch-row">
						<div>
							<p class="switch-title">Weekly digest</p>
							<p class="switch-note">Monday morning, one email, every workspace.</p>
						</div>
						<Switch label="Weekly digest" bind:checked={digest} />
					</div>
					<div class="switch-row">
						<div>
							<p class="switch-title">Mentions</p>
							<p class="switch-note">Only when someone writes your name in a comment.</p>
						</div>
						<Switch label="Mentions" bind:checked={mentions} />
					</div>
				</div>

				<div class="save">
					<Button>Save changes</Button>
					<p>Last saved 12 minutes ago.</p>
				</div>
			</div>
		</div>
	</div>

	<Sheet bind:open={editing} title="Edit profile">
		<form
			class="editor"
			onsubmit={(event) => {
				event.preventDefault();
				editing = false;
			}}
		>
			<FileDrop
				label="New photo"
				accept="image/png,image/jpeg"
				hint="PNG or JPEG, square, at least 512 px."
			/>
			<Input label="Display name" bind:value={name} autocomplete="name" />
			<Input label="Role" bind:value={role} autocomplete="organization-title" />
			<div class="editor-actions">
				<Button type="submit">Save</Button>
				<Button variant="text" onclick={() => (editing = false)}>Cancel</Button>
			</div>
		</form>
	</Sheet>
</section>

<style>
	.head {
		margin-top: 24px;
		max-width: 620px;
	}

	h1 {
		font-size: clamp(34px, 4vw, 52px);
		font-weight: 600;
		line-height: 1;
		letter-spacing: -0.045em;
	}

	.lead {
		margin-top: 14px;
		max-width: 46ch;
		color: var(--color-muted);
		text-wrap: pretty;
	}

	.cols {
		display: grid;
		grid-template-columns: minmax(0, 0.75fr) minmax(0, 1.25fr);
		gap: clamp(16px, 2vw, 24px);
		align-items: start;
		margin-top: clamp(28px, 4vw, 44px);
	}

	.who {
		display: grid;
		justify-items: start;
		gap: 12px;
		padding: clamp(26px, 3vw, 36px);
	}

	.who > h3 {
		font-size: 24px;
		line-height: 1.1;
		letter-spacing: -0.03em;
	}

	/* The card's paragraph rule would mute both of these lines. */
	.who > .mail,
	.who > .plan {
		margin-top: -4px;
		max-width: none;
	}

	.who > .mail {
		font-size: 15px;
	}

	.plan {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 10px;
		font-size: 14px;
	}

	.facts {
		display: grid;
		gap: 8px;
		width: 100%;
		margin-block: 6px;
		font-size: 14px;
	}

	.facts div {
		display: flex;
		justify-content: space-between;
		gap: 16px;
	}

	.facts dt {
		color: var(--color-muted);
	}

	.facts dd {
		margin: 0;
		font-weight: 600;
		text-align: right;
	}

	.prefs {
		display: grid;
		gap: 26px;
		padding: clamp(26px, 3vw, 40px);
	}

	.fields {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 16px;
	}

	.wide {
		grid-column: 1 / -1;
	}

	.switches {
		display: grid;
		gap: 6px;
	}

	.switch-row {
		display: flex;
		align-items: start;
		justify-content: space-between;
		gap: 20px;
		padding-block: 12px;
	}

	.switch-title {
		font-size: 16px;
		font-weight: 600;
	}

	.switch-note {
		margin-top: 2px;
		max-width: 44ch;
		color: var(--color-muted);
		font-size: 14px;
		line-height: 1.4;
		text-wrap: pretty;
	}

	.save {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 12px 18px;
	}

	.save p {
		color: var(--color-muted);
		font-size: 14px;
	}

	.editor {
		display: grid;
		gap: 18px;
	}

	.editor-actions {
		display: flex;
		flex-wrap: wrap;
		gap: 12px;
		margin-top: 4px;
	}

	@media (max-width: 900px) {
		.cols {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 560px) {
		.fields {
			grid-template-columns: 1fr;
		}
	}
</style>
