<script>
	/**
	 * @typedef {object} CodeBlockProps
	 * @property {string} code
	 * @property {string} [label]
	 * @property {string} [class]
	 */

	/** @type {CodeBlockProps & Record<string, any>} */
	let { code, label = undefined, class: className = '', ...rest } = $props();

	let status = $state('');

	async function copy() {
		try {
			await navigator.clipboard.writeText(code);
			status = 'Copied to clipboard';
		} catch {
			status = 'Copy failed';
		}
	}
</script>

<div class="code {className}" {...rest}>
	<div class="head">
		{#if label}
			<p class="label">{label}</p>
		{/if}
		<button type="button" onclick={copy} aria-label="Copy code">
			{status === 'Copied to clipboard' ? 'Copied' : 'Copy'}
		</button>
	</div>
	<pre><code>{code}</code></pre>
	<p class="sr-only" role="status" aria-live="polite">{status}</p>
</div>

<style>
	.code {
		display: grid;
		gap: 12px;
		margin: 0;
	}

	.head {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		gap: 12px;
		min-height: 34px;
	}

	.label {
		margin-right: auto;
		font-size: 14px;
		font-weight: 600;
		color: var(--color-muted);
	}

	button {
		height: 34px;
		padding-inline: 16px;
		border: 0;
		border-radius: var(--radius-pill);
		background: var(--color-field);
		color: var(--color-field-ink);
		font: 600 13px/1 var(--font-sans);
		cursor: pointer;
		transition: background-color var(--dur-control) ease;
	}

	button:hover {
		background: color-mix(in oklab, var(--color-field) 82%, var(--color-bg));
	}

	pre {
		margin: 0;
		padding: 20px 22px;
		border-radius: 22px;
		background: var(--color-field);
		color: var(--color-field-ink);
		overflow-x: auto;
		overscroll-behavior-x: contain;
		tab-size: 2;
	}

	code {
		font: 400 14px/1.6 var(--font-mono);
	}
</style>
