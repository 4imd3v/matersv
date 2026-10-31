<script>
	import {
		Badge,
		Button,
		NavList,
		Progress,
		SearchField,
		StatusDot,
		Table
	} from '#lib/index.js';

	let query = $state('');

	const primary = [
		{ href: '/blocks/dashboard', label: 'Overview', current: true },
		{ href: '/components/table', label: 'Invoices', meta: '12' },
		{ href: '/components/progress', label: 'Reports' },
		{ href: '/components/statusdot', label: 'Customers' }
	];

	const secondary = [
		{ href: '/components/navlist', label: 'Settings' },
		{ href: '/blocks/auth', label: 'Sign out' }
	];

	const kpis = [
		{ label: 'Paid this month', value: '$48.2k', delta: '+12%', note: 'vs August' },
		{ label: 'Open invoices', value: '36', delta: '-4%', note: 'vs August' },
		{ label: 'Average days to pay', value: '11', delta: '-2', note: 'vs August' }
	];

	/** @type {{ id: string, client: string, amount: string, status: string, tone: 'ok' | 'danger' | 'muted' }[]} */
	const invoices = [
		{ id: 'INV-2041', client: 'Harbor Studio', amount: '$4,200', status: 'Paid', tone: 'ok' },
		{ id: 'INV-2040', client: 'Northwind', amount: '$1,850', status: 'Paid', tone: 'ok' },
		{ id: 'INV-2039', client: 'Bletchley', amount: '$980', status: 'Overdue', tone: 'danger' },
		{ id: 'INV-2038', client: 'Katherine Co.', amount: '$12,400', status: 'Draft', tone: 'muted' }
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
						<p class="crumb">Workspace / Overview</p>
						<h2>Overview</h2>
					</div>
					<div class="tools">
						<div class="search">
							<SearchField label="Search invoices" bind:value={query} placeholder="Search invoices" />
						</div>
						<Button>New invoice</Button>
					</div>
				</header>

				<div class="kpis">
					{#each kpis as kpi (kpi.label)}
						<article class="card kpi">
							<p class="kpi-label">{kpi.label}</p>
							<p class="kpi-value">{kpi.value}</p>
							<p class="kpi-note">
								<Badge tone="accent">{kpi.delta}</Badge>
								<span>{kpi.note}</span>
							</p>
						</article>
					{/each}
				</div>

				<div class="panels">
					<article class="card panel">
						<header class="panel-head">
							<h3>Recent invoices</h3>
							<Button href="/components/table" variant="text">View all</Button>
						</header>
						<Table caption="September, newest first">
							<thead>
								<tr>
									<th scope="col">Invoice</th>
									<th scope="col">Client</th>
									<th scope="col" class="num">Amount</th>
									<th scope="col">Status</th>
								</tr>
							</thead>
							<tbody>
								{#each invoices as invoice (invoice.id)}
									<tr>
										<th scope="row">{invoice.id}</th>
										<td>{invoice.client}</td>
										<td class="num">{invoice.amount}</td>
										<td>
											<StatusDot label={invoice.status} tone={invoice.tone} />
										</td>
									</tr>
								{/each}
							</tbody>
						</Table>
					</article>

					<article class="card panel">
						<h3>This month</h3>
						<div class="meters">
							<Progress label="Invoices sent" value={64} />
							<Progress label="Payments collected" value={89} />
						</div>
						<div class="status">
							<StatusDot label="All systems normal" />
						</div>
					</article>
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

	/* Pinned to the bottom of the rail, like an app sidebar. */
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
		gap: 20px;
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

	.tools {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 12px;
	}

	.search {
		flex: 1 1 200px;
		min-width: 0;
	}

	.kpis {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 12px;
		margin-top: clamp(24px, 3vw, 36px);
	}

	/* Inner surfaces are a smaller radius than the app frame that holds them. */
	.kpi,
	.panel {
		border-radius: 20px;
	}

	.kpi {
		display: grid;
		gap: 10px;
		padding: 22px;
	}

	.kpi-label {
		color: var(--color-muted);
		font-size: 14px;
		font-weight: 600;
	}

	.kpi-value {
		margin: 0;
		color: var(--color-ink);
		font-size: clamp(26px, 2.6vw, 34px);
		font-weight: 600;
		line-height: 1;
		letter-spacing: -0.04em;
		font-variant-numeric: tabular-nums;
	}

	.kpi-note {
		display: flex;
		align-items: center;
		gap: 8px;
		margin: 0;
		color: var(--color-muted);
		font-size: 13px;
	}

	.panels {
		display: grid;
		grid-template-columns: minmax(0, 1.65fr) minmax(0, 1fr);
		gap: 12px;
		margin-top: 12px;
	}

	.panel {
		display: flex;
		flex-direction: column;
		padding: 22px;
	}

	/* Pull the table cells back so the first column lines up with the panel title. */
	.panel :global(.table-wrap) {
		margin-inline: -16px;
	}

	.num {
		text-align: right;
	}

	.panel-head {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 16px;
		margin-bottom: 4px;
	}

	.panel h3 {
		font-size: 20px;
		line-height: 1.1;
		letter-spacing: -0.03em;
	}

	.meters {
		display: grid;
		gap: 20px;
		margin-top: 20px;
	}

	.status {
		margin-top: auto;
		padding-top: 24px;
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

		.kpis {
			grid-template-columns: 1fr;
		}

		.panels {
			grid-template-columns: 1fr;
		}

		.tools {
			width: 100%;
		}

		.search {
			flex-basis: 100%;
		}
	}
</style>
