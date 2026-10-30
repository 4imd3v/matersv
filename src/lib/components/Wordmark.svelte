<script>
	/**
	 * @typedef {object} WordmarkProps
	 * @property {string} text
	 * @property {string} [class]
	 */

	/** @type {WordmarkProps & Record<string, any>} */
	let { text, class: className = '', ...rest } = $props();
</script>

<p class="mark {className}" aria-hidden="true" {...rest}>{text}</p>

<style>
	.mark {
		max-height: clamp(130px, 27vw, 380px);
		overflow: hidden;
		mask-image: linear-gradient(to bottom, #000 0%, rgb(0 0 0 / 0.55) 45%, transparent 92%);
		color: var(--color-ink);
		font-size: clamp(96px, 22vw, 320px);
		font-weight: 600;
		line-height: 0.78;
		letter-spacing: -0.06em;
		white-space: nowrap;
		opacity: 0.4;
		user-select: none;
	}
</style>
