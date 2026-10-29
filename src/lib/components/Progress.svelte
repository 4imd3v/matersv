<script>
	const uid = $props.id();

	/**
	 * @typedef {object} ProgressProps
	 * @property {string} label
	 * @property {number} value
	 * @property {number} [max]
	 * @property {string} [id]
	 * @property {string} [class]
	 */

	/** @type {ProgressProps & Record<string, any>} */
	let { label, value, max = 100, id = uid, class: className = '', ...rest } = $props();
</script>

<div class="meter {className}">
	<div class="head">
		<label for={id}>{label}</label>
		<span class="value">{Math.round((value / max) * 100)}%</span>
	</div>
	<progress {id} {value} {max} {...rest}></progress>
</div>

<style>
	.meter {
		display: grid;
		gap: 10px;
		width: 100%;
	}

	.head {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		gap: 16px;
		font-size: 14px;
		font-weight: 600;
	}

	.value {
		color: var(--color-muted);
		font-variant-numeric: tabular-nums;
	}

	progress {
		width: 100%;
		height: 12px;
		border: 0;
		border-radius: var(--radius-pill);
		background: var(--color-field);
		appearance: none;
	}

	progress::-webkit-progress-bar {
		border-radius: var(--radius-pill);
		background: var(--color-field);
	}

	progress::-webkit-progress-value {
		border-radius: var(--radius-pill);
		background: var(--color-accent);
		transition: inline-size var(--dur-surface) var(--ease-glide);
	}

	progress::-moz-progress-bar {
		border-radius: var(--radius-pill);
		background: var(--color-accent);
	}
</style>
