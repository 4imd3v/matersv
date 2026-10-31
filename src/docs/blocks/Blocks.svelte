<script>
	import Auth from './Auth.svelte';
	import AuthCentered from './AuthCentered.svelte';
	import Blog from './Blog.svelte';
	import BlogList from './BlogList.svelte';
	import Cta from './Cta.svelte';
	import CtaSplit from './CtaSplit.svelte';
	import Dashboard from './Dashboard.svelte';
	import DashboardSettings from './DashboardSettings.svelte';
	import Faq from './Faq.svelte';
	import FaqGrid from './FaqGrid.svelte';
	import Features from './Features.svelte';
	import FeaturesBento from './FeaturesBento.svelte';
	import FeaturesRows from './FeaturesRows.svelte';
	import Footer from './Footer.svelte';
	import FooterCompact from './FooterCompact.svelte';
	import FooterNewsletter from './FooterNewsletter.svelte';
	import Hero from './Hero.svelte';
	import HeroSplit from './HeroSplit.svelte';
	import Pricing from './Pricing.svelte';
	import PricingCompare from './PricingCompare.svelte';
	import Testimonials from './Testimonials.svelte';
	import TestimonialsSpotlight from './TestimonialsSpotlight.svelte';

	/** @type {Record<string, import('svelte').Component>} */
	const map = {
		'auth/split': Auth,
		'auth/centered': AuthCentered,
		'blog/featured': Blog,
		'blog/list': BlogList,
		'cta/night': Cta,
		'cta/split': CtaSplit,
		'dashboard/overview': Dashboard,
		'dashboard/settings': DashboardSettings,
		'faq/accordion': Faq,
		'faq/grid': FaqGrid,
		'features/cards': Features,
		'features/bento': FeaturesBento,
		'features/rows': FeaturesRows,
		'footer/full': Footer,
		'footer/compact': FooterCompact,
		'footer/newsletter': FooterNewsletter,
		'hero/centered': Hero,
		'hero/split': HeroSplit,
		'pricing/plans': Pricing,
		'pricing/compare': PricingCompare,
		'testimonials/cards': Testimonials,
		'testimonials/spotlight': TestimonialsSpotlight
	};

	let { slug, variant } = $props();

	const Block = $derived(map[slug + '/' + variant]);
</script>

{#if Block}
	<Block />
{/if}
