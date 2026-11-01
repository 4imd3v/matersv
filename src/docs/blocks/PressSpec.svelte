<script>
	import { CodeBlock, SectionHeader, Strike, Table } from '#lib/index.js';

	const snippet = `:root {
  /* everything below is derived */
  --h: 225;
  --c: 0.1;
}

.card {
  background: var(--color-bg-soft);
}`;

	const tokens = [
		{ token: '--color-bg', derived: 'L 0.985 · c × 0.07', role: 'Page', color: 'var(--color-bg)' },
		{ token: '--color-bg-soft', derived: 'L 0.955 · c × 0.12', role: 'Cards', color: 'var(--color-bg-soft)' },
		{ token: '--color-field', derived: 'L 0.910 · c × 0.30', role: 'Insets and bands', color: 'var(--color-field)' },
		{ token: '--color-accent', derived: 'L 0.470 · c × 1.00', role: 'Actions', color: 'var(--color-accent)' },
		{ token: '--color-night', derived: 'L 0.170 · c × 0.20', role: 'One dark band', color: 'var(--color-night)' }
	];

	const never = [
		'Add a second hue for decoration.',
		'Hardcode an oklch value outside the token file.',
		'Separate two surfaces with a 1px border.'
	];
</script>

<section class="section">
	<div class="wrap">
		<SectionHeader
			title="The palette is two numbers"
			lead="Every surface, accent and focus ring is one oklch expression. Change the hue and chroma, and the whole library reskins without touching a component."
		/>

		<div class="cols">
			<div class="card tokens">
				<h3>Surfaces, light theme</h3>
				<p class="note">Five tokens at hue 225. The dark theme swaps the lightness, not the hue.</p>
				<Table caption="Derived from --h and --c">
					<thead>
						<tr>
							<th scope="col">Token</th>
							<th scope="col">Derived</th>
							<th scope="col">Colour</th>
							<th scope="col">Used for</th>
						</tr>
					</thead>
					<tbody>
						{#each tokens as item (item.token)}
							<tr>
								<th scope="row"><code>{item.token}</code></th>
								<td>{item.derived}</td>
								<td>
									<span class="swatch" style:background={item.color} aria-hidden="true"></span>
								</td>
								<td>{item.role}</td>
							</tr>
						{/each}
					</tbody>
				</Table>
			</div>

			<div class="card code">
				<h3>The whole reskin</h3>
				<p class="note">Two declarations, in the token layer. No build step, no theme file.</p>
				<CodeBlock label="src/lib/matersv.css" code={snippet} />
				<h3>Never</h3>
				<Strike items={never} />
			</div>
		</div>
	</div>
</section>

<style>
	.cols {
		display: grid;
		grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);
		gap: clamp(16px, 2vw, 24px);
		align-items: start;
		margin-top: clamp(28px, 4vw, 44px);
	}

	.tokens,
	.code {
		display: grid;
		gap: 14px;
		align-content: start;
		padding: clamp(26px, 3vw, 40px);
	}

	.tokens :global(.table-wrap) {
		margin-inline: -16px;
	}

	.tokens > h3,
	.code > h3 {
		font-size: 22px;
		line-height: 1.1;
		letter-spacing: -0.03em;
	}

	.note {
		margin-top: -6px;
		max-width: 46ch;
		color: var(--color-muted);
		font-size: 15px;
		line-height: 1.5;
		text-wrap: pretty;
	}

	code {
		font-family: var(--font-mono);
		font-size: 13px;
		font-weight: 500;
	}

	.swatch {
		display: block;
		width: 44px;
		height: 24px;
		border-radius: var(--radius-pill);
		box-shadow: var(--shadow-capsule);
	}

	@media (max-width: 900px) {
		.cols {
			grid-template-columns: 1fr;
		}
	}
</style>
