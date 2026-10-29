<script>
	let { class: className = '', children, ...rest } = $props();
</script>

<div class="accordion {className}" {...rest}>
	{@render children()}
</div>

<style>
	.accordion {
		display: grid;
		gap: 10px;
		width: 100%;
	}
</style>
