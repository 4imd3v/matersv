// Block metadata for /blocks. Blocks are page sections composed from the
// library, not components: they stay out of src/lib so they are never packaged.
// Each source is imported raw, so the code shown on the page is the code that
// runs; only the import path is rewritten to what a user would write.
import authSource from './Auth.svelte?raw';
import blogSource from './Blog.svelte?raw';
import ctaSource from './Cta.svelte?raw';
import dashboardSource from './Dashboard.svelte?raw';
import faqSource from './Faq.svelte?raw';
import featuresSource from './Features.svelte?raw';
import footerSource from './Footer.svelte?raw';
import heroSource from './Hero.svelte?raw';
import pricingSource from './Pricing.svelte?raw';
import testimonialsSource from './Testimonials.svelte?raw';

/** @param {string} raw */
const published = (raw) => raw.replaceAll("from '#lib/index.js'", "from 'matersv'");

export const blocks = [
	{
		slug: 'hero',
		name: 'Hero',
		category: 'Marketing',
		lead: 'Field band, centred display type, one primary action and a handwritten margin note.',
		source: published(heroSource)
	},
	{
		slug: 'features',
		name: 'Features',
		category: 'Marketing',
		lead: 'Three numbered principle cards under a section header, and one wide card with a checked list.',
		source: published(featuresSource)
	},
	{
		slug: 'testimonials',
		name: 'Testimonials',
		category: 'Marketing',
		lead: 'Three quote cards on the field surface, each closing with a byline.',
		source: published(testimonialsSource)
	},
	{
		slug: 'pricing',
		name: 'Pricing',
		category: 'Marketing',
		lead: 'Three plans with aligned rows, the middle one on the field surface and a ghost action.',
		source: published(pricingSource)
	},
	{
		slug: 'faq',
		name: 'FAQ',
		category: 'Marketing',
		lead: 'A sticky question header beside a native details accordion, closing with a contact card.',
		source: published(faqSource)
	},
	{
		slug: 'cta',
		name: 'Call to action',
		category: 'Marketing',
		lead: 'One night band per page: a two-line promise, two actions and a line of small print.',
		source: published(ctaSource)
	},
	{
		slug: 'footer',
		name: 'Footer',
		category: 'Site',
		lead: 'Brand blurb, three NavList columns, a legal row and the giant cropped wordmark.',
		source: published(footerSource)
	},
	{
		slug: 'blog',
		name: 'Journal',
		category: 'Site',
		lead: 'A featured article with a token-drawn figure, three post cards and pagination.',
		source: published(blogSource)
	},
	{
		slug: 'dashboard',
		name: 'Dashboard',
		category: 'Application',
		lead: 'App frame: two NavLists and storage in the rail, KPI cards, an invoice table and meters.',
		source: published(dashboardSource)
	},
	{
		slug: 'auth',
		name: 'Sign in',
		category: 'Application',
		lead: 'A form card beside a field-surface card holding a quote, a byline and a feature list.',
		source: published(authSource)
	}
];
