<script>
	let { props = [] } = $props();
</script>

{#if props.length}
	<div class="scroll">
		<table>
			<thead>
				<tr>
					<th>Prop</th>
					<th>Type</th>
					<th>Default</th>
					<th>Description</th>
				</tr>
			</thead>
			<tbody>
				{#each props as prop (prop.name)}
					<tr>
						<td><code>{prop.name}</code></td>
						<td><code>{prop.type}</code></td>
						<td>{prop.default}</td>
						<td>{prop.description}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
{:else}
	<p class="none">This component takes no props.</p>
{/if}

<style>
	.scroll {
		overflow-x: auto;
	}

	table {
		width: 100%;
		border-collapse: collapse;
		text-align: left;
		font-size: 15px;
	}

	th {
		padding: 0 14px 12px;
		color: var(--color-muted);
		font-size: 13px;
		font-weight: 600;
		white-space: nowrap;
	}

	tbody tr {
		background: var(--color-bg-soft);
	}

	td {
		padding: 12px 14px;
		vertical-align: top;
	}

	td:first-child {
		border-radius: 14px 0 0 14px;
	}

	td:last-child {
		border-radius: 0 14px 14px 0;
		color: var(--color-muted);
	}

	tr + tr td {
		padding-top: 12px;
	}

	code {
		font: 500 13px/1.5 ui-monospace, 'SFMono-Regular', Menlo, Consolas, monospace;
		white-space: nowrap;
	}

	.none {
		color: var(--color-muted);
	}
</style>
