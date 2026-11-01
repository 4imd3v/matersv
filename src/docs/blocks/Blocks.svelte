<script>
	import Article from './Article.svelte';
	import ArticleToc from './ArticleToc.svelte';
	import Auth from './Auth.svelte';
	import AuthCentered from './AuthCentered.svelte';
	import Blog from './Blog.svelte';
	import BlogList from './BlogList.svelte';
	import Careers from './Careers.svelte';
	import CareersApply from './CareersApply.svelte';
	import Changelog from './Changelog.svelte';
	import ChangelogCards from './ChangelogCards.svelte';
	import Checkout from './Checkout.svelte';
	import CheckoutCart from './CheckoutCart.svelte';
	import Contact from './Contact.svelte';
	import ContactCentered from './ContactCentered.svelte';
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
	import Logos from './Logos.svelte';
	import LogosStatement from './LogosStatement.svelte';
	import NotFound from './NotFound.svelte';
	import NotFoundSearch from './NotFoundSearch.svelte';
	import Pricing from './Pricing.svelte';
	import PricingCompare from './PricingCompare.svelte';
	import Search from './Search.svelte';
	import SearchEmpty from './SearchEmpty.svelte';
	import Stats from './Stats.svelte';
	import StatsCompare from './StatsCompare.svelte';
	import Team from './Team.svelte';
	import TeamFounder from './TeamFounder.svelte';
	import Testimonials from './Testimonials.svelte';
	import TestimonialsSpotlight from './TestimonialsSpotlight.svelte';

	/** @type {Record<string, import('svelte').Component>} */
	const map = {
		'article/reading': Article,
		'article/toc': ArticleToc,
		'auth/split': Auth,
		'auth/centered': AuthCentered,
		'blog/featured': Blog,
		'blog/list': BlogList,
		'changelog/timeline': Changelog,
		'careers/roles': Careers,
		'careers/apply': CareersApply,
		'changelog/cards': ChangelogCards,
		'contact/split': Contact,
		'checkout/steps': Checkout,
		'checkout/cart': CheckoutCart,
		'contact/centered': ContactCentered,
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
		'logos/row': Logos,
		'logos/statement': LogosStatement,
		'not-found/centered': NotFound,
		'not-found/search': NotFoundSearch,
		'pricing/plans': Pricing,
		'pricing/compare': PricingCompare,
		'search/results': Search,
		'search/empty': SearchEmpty,
		'stats/figures': Stats,
		'stats/compare': StatsCompare,
		'team/grid': Team,
		'team/founder': TeamFounder,
		'testimonials/cards': Testimonials,
		'testimonials/spotlight': TestimonialsSpotlight
	};

	let { slug, variant } = $props();

	const Block = $derived(map[slug + '/' + variant]);
</script>

{#if Block}
	<Block />
{/if}
