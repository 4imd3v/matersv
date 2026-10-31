<script>
	import Auth from './Auth.svelte';
	import Blog from './Blog.svelte';
	import Cta from './Cta.svelte';
	import Dashboard from './Dashboard.svelte';
	import Faq from './Faq.svelte';
	import Features from './Features.svelte';
	import Footer from './Footer.svelte';
	import Hero from './Hero.svelte';
	import Pricing from './Pricing.svelte';
	import Testimonials from './Testimonials.svelte';

	/** @type {Record<string, import('svelte').Component>} */
	const map = {
		auth: Auth,
		blog: Blog,
		cta: Cta,
		dashboard: Dashboard,
		faq: Faq,
		features: Features,
		footer: Footer,
		hero: Hero,
		pricing: Pricing,
		testimonials: Testimonials
	};

	let { slug } = $props();

	const Block = $derived(map[slug]);
</script>

{#if Block}
	<Block />
{/if}
