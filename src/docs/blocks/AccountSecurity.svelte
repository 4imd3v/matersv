<script>
	import {
		Button,
		Dialog,
		Input,
		Notice,
		StatusDot,
		Switch,
		Table
	} from '#lib/index.js';

	let current = $state('');
	let next = $state('');
	let twoFactor = $state(true);
	let deviceMail = $state(false);
	let confirming = $state(false);
	let typed = $state('');

	/** @type {{ device: string, place: string, seen: string, tone: 'ok' | 'muted' }[]} */
	const sessions = [
		{ device: 'Firefox, macOS', place: 'Lisbon', seen: 'Active now', tone: 'ok' },
		{ device: 'Safari, iPhone', place: 'Lisbon', seen: '2 hours ago', tone: 'muted' },
		{ device: 'Chrome, Windows', place: 'Berlin', seen: '6 days ago', tone: 'muted' }
	];

	const canDelete = $derived(typed.trim().toLowerCase() === 'northwind');
</script>

<section class="section">
	<div class="wrap">
		<header class="head">
			<h1>Security</h1>
			<p class="lead">
				One password, one second factor, and a list of everywhere you are still signed in.
			</p>
		</header>

		<div class="cols">
			<form
				class="card block"
				onsubmit={(event) => {
					event.preventDefault();
					current = '';
					next = '';
				}}
			>
				<h3>Password</h3>
				<p class="note">Last changed four months ago, after the Lisbon offsite.</p>
				<Input label="Current password" type="password" bind:value={current} autocomplete="current-password" />
				<Input
					label="New password"
					type="password"
					bind:value={next}
					autocomplete="new-password"
					hint="Twelve characters or more. A phrase beats a puzzle."
				/>
				<div class="row">
					<Button type="submit">Update password</Button>
				</div>
			</form>

			<div class="card block">
				<h3>Two-factor</h3>
				<p class="note">A six-digit code from your phone, every thirty seconds.</p>
				<div class="switch-row">
					<div>
						<p class="switch-title">Require a code at sign-in</p>
						<p class="switch-note">Recovery codes are on file. You have 8 left.</p>
					</div>
					<Switch label="Require a code at sign-in" bind:checked={twoFactor} />
				</div>
				<div class="switch-row">
					<div>
						<p class="switch-title">Email on a new device</p>
						<p class="switch-note">One message, with the place and the browser.</p>
					</div>
					<Switch label="Email on a new device" bind:checked={deviceMail} />
				</div>
			</div>
		</div>

		<div class="card sessions">
			<h3>Signed-in devices</h3>
			<Table caption="Most recent first">
				<thead>
					<tr>
						<th scope="col">Device</th>
						<th scope="col">Place</th>
						<th scope="col">Last active</th>
					</tr>
				</thead>
				<tbody>
					{#each sessions as session (session.device)}
						<tr>
							<th scope="row">{session.device}</th>
							<td>{session.place}</td>
							<td><StatusDot label={session.seen} tone={session.tone} /></td>
						</tr>
					{/each}
				</tbody>
			</Table>
			<div class="row">
				<Button variant="ghost">Sign out everywhere else</Button>
			</div>
		</div>

		<div class="card danger">
			<h3>Close the workspace</h3>
			<p class="note">
				Deletes every document, source and invitation. Billing stops at the end of the month,
				and there is no restore after thirty days.
			</p>
			<Button variant="ghost" onclick={() => (confirming = true)}>Close workspace</Button>
		</div>
	</div>

	<Dialog bind:open={confirming} title="Close Northwind?">
		<form
			class="confirm"
			onsubmit={(event) => {
				event.preventDefault();
				confirming = false;
			}}
		>
			<p>Three people lose access today. The thirty-day window is the only undo.</p>
			<Notice tone="danger" title="This cannot be undone">
				Export anything you want to keep before you continue.
			</Notice>
			<Input
				label="Type northwind to confirm"
				bind:value={typed}
				autocomplete="off"
				spellcheck="false"
			/>
			<div class="row">
				<Button type="submit" disabled={!canDelete}>Close workspace</Button>
				<Button variant="text" onclick={() => (confirming = false)}>Keep it open</Button>
			</div>
		</form>
	</Dialog>
</section>

<style>
	.head {
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
		max-width: 48ch;
		color: var(--color-muted);
		text-wrap: pretty;
	}

	.cols {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: clamp(16px, 2vw, 24px);
		align-items: start;
		margin-top: clamp(28px, 4vw, 44px);
	}

	.block {
		display: grid;
		gap: 16px;
		align-content: start;
		padding: clamp(26px, 3vw, 36px);
	}

	.block > h3,
	.sessions > h3,
	.danger > h3 {
		font-size: 22px;
		line-height: 1.1;
		letter-spacing: -0.03em;
	}

	/* A muted line under the heading, not body copy. */
	.block > .note,
	.danger > .note {
		margin-top: -8px;
		max-width: 44ch;
		font-size: 15px;
		line-height: 1.5;
	}

	.switch-row {
		display: flex;
		align-items: start;
		justify-content: space-between;
		gap: 20px;
	}

	.switch-title {
		font-size: 16px;
		font-weight: 600;
	}

	.switch-note {
		margin-top: 2px;
		max-width: 36ch;
		color: var(--color-muted);
		font-size: 14px;
		line-height: 1.4;
		text-wrap: pretty;
	}

	.row {
		display: flex;
		flex-wrap: wrap;
		gap: 12px;
		margin-top: 6px;
	}

	.sessions {
		margin-top: clamp(16px, 2vw, 24px);
		padding: clamp(26px, 3vw, 36px);
	}

	.sessions :global(.table-wrap) {
		margin-top: 8px;
	}

	.danger {
		display: grid;
		justify-items: start;
		gap: 14px;
		margin-top: clamp(16px, 2vw, 24px);
		padding: clamp(26px, 3vw, 36px);
	}

	.confirm {
		display: grid;
		gap: 18px;
	}

	@media (max-width: 900px) {
		.cols {
			grid-template-columns: 1fr;
		}
	}
</style>
