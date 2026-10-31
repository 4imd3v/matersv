<script>
	import {
		Button,
		Fieldset,
		Input,
		NavList,
		Progress,
		SegmentedControl,
		Switch
	} from '#lib/index.js';

	let name = $state('Ada Lovelace');
	let email = $state('ada@northwind.example');
	let releases = $state(true);
	let billing = $state(false);
	let digest = $state(true);
	let theme = $state('light');

	const primary = [
		{ href: '/blocks/dashboard', label: 'Overview' },
		{ href: '/components/table', label: 'Invoices', meta: '12' },
		{ href: '/components/progress', label: 'Reports' },
		{ href: '/components/statusdot', label: 'Customers' }
	];

	const secondary = [
		{ href: '/blocks/dashboard', label: 'Settings', current: true },
		{ href: '/blocks/auth', label: 'Sign out' }
	];

	const themes = [
		{ value: 'light', label: 'Light' },
		{ value: 'dark', label: 'Dark' },
		{ value: 'system', label: 'System' }
	];
</script>

<section class="section">
	<div class="wrap">
		<div class="app">
			<aside class="side">
				<p class="brand">Northwind</p>
				<NavList label="Workspace" items={primary} />
				<NavList label="Account" items={secondary} />
				<div class="storage">
					<Progress label="Storage" value={72} />
				</div>
			</aside>

			<div class="main">
				<header class="top">
					<div>
						<p class="crumb">Workspace / Account</p>
						<h2>Settings</h2>
					</div>
				</header>

				<div class="settings">
					<div class="card panel">
						<Fieldset legend="Profile" hint="Shown to everyone in the workspace.">
							<Input label="Name" bind:value={name} autocomplete="name" />
							<Input
								label="Email"
								type="email"
								bind:value={email}
								autocomplete="email"
								hint="Invoices and receipts go here."
							/>
						</Fieldset>
					</div>

					<div class="card panel">
						<Fieldset legend="Notifications" hint="Applies to this device.">
							<div class="pref">
								<span>Release notes</span>
								<Switch label="Release notes" bind:checked={releases} />
							</div>
							<div class="pref">
								<span>Billing receipts</span>
								<Switch label="Billing receipts" bind:checked={billing} />
							</div>
							<div class="pref">
								<span>Weekly digest</span>
								<Switch label="Weekly digest" bind:checked={digest} />
							</div>
						</Fieldset>
					</div>

					<div class="card panel">
						<Fieldset legend="Appearance" hint="Follows the system by default.">
							<SegmentedControl label="Theme" items={themes} bind:value={theme} />
						</Fieldset>
					</div>

					<div class="card save">
						<p>Changes stay on this device in the demo.</p>
						<div class="actions">
							<Button variant="ghost">Cancel</Button>
							<Button>Save changes</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.app {
		display: grid;
		grid-template-columns: 248px minmax(0, 1fr);
		gap: 12px;
		padding: 12px;
		border-radius: var(--radius-card);
		background: var(--color-bg-soft);
	}

	.side {
		display: flex;
		flex-direction: column;
		gap: 24px;
		padding: 16px 6px 12px;
	}

	.brand {
		padding-inline: 14px;
		font-size: 18px;
		font-weight: 600;
		letter-spacing: -0.03em;
	}

	.storage {
		margin-top: auto;
		padding: 4px 14px 0;
	}

	.main {
		min-width: 0;
		padding: clamp(20px, 3vw, 32px);
		border-radius: 20px;
		background: var(--color-bg);
	}

	.top {
		display: flex;
		flex-wrap: wrap;
		align-items: flex-end;
		justify-content: space-between;
		gap: 16px;
	}

	.crumb {
		color: var(--color-muted);
		font-size: 14px;
		font-weight: 600;
	}

	h2 {
		margin-top: 6px;
		font-size: clamp(28px, 3vw, 38px);
		font-weight: 600;
		line-height: 1.05;
		letter-spacing: -0.04em;
	}

	.settings {
		display: grid;
		gap: 12px;
		max-width: 720px;
		margin-top: clamp(24px, 3vw, 36px);
	}

	.panel {
		padding: 26px;
		border-radius: 20px;
	}

	/* A settings section title, not a field label. */
	.panel :global(legend) {
		font-size: 18px;
		letter-spacing: -0.02em;
	}

	.panel :global(.segmented) {
		max-width: 380px;
	}

	.pref {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 16px;
		font-size: 16px;
	}

	.save {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		gap: 12px 16px;
		padding: 20px 26px;
		border-radius: 20px;
	}

	.save p {
		color: var(--color-muted);
		font-size: 15px;
	}

	.actions {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
	}

	@media (max-width: 960px) {
		.app {
			grid-template-columns: 1fr;
		}

		.side {
			display: grid;
			grid-template-columns: repeat(2, minmax(0, 1fr));
			gap: 20px;
		}

		.brand,
		.storage {
			grid-column: 1 / -1;
		}

		.storage {
			margin-top: 0;
		}
	}
</style>
