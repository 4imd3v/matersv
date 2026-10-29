<script>
	/**
	 * @typedef {object} CardProps
	 * @property {string} [title]
	 * @property {string} [lead]
	 * @property {string} [class]
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {CardProps & Record<string, any>} */
	let { title = undefined, lead = undefined, class: className = '', children = undefined, ...rest } =
		$props();
</script>

<!-- Surface, padding and type come from the global .card rules in matersv.css. -->
<div class="card {className}" {...rest}>
	{#if title}<h3>{title}</h3>{/if}
	{#if lead}<p>{lead}</p>{/if}
	{@render children?.()}
</div>
