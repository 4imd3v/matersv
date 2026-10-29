<script>
	/**
	 * @typedef {object} SectionHeaderProps
	 * @property {string} title
	 * @property {string} [lead]
	 * @property {string} [id]
	 */

	/** @type {SectionHeaderProps} */
	let { title, lead = undefined, id = undefined } = $props();
</script>

<header class="section-head reveal">
	<h2 {id}>{title}</h2>
	{#if lead}<p class="section-lead">{lead}</p>{/if}
</header>

<style>
	.section-head {
		margin-bottom: clamp(48px, 6vw, 88px);
	}

	h2 {
		max-width: 17ch;
		font-size: var(--text-h2);
		line-height: 0.98;
		letter-spacing: -0.045em;
		font-weight: 600;
		text-wrap: balance;
	}

	.section-lead {
		margin-top: 28px;
		max-width: 46ch;
		font-size: var(--text-lead);
		line-height: 1.35;
		color: var(--color-muted);
		text-wrap: pretty;
	}

	:global(.section--field) .section-lead,
	:global(.section--night) .section-lead {
		color: inherit;
		opacity: 0.8;
	}
</style>
