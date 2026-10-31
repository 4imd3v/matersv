// Block metadata for /blocks. Blocks are page sections composed from the
// library, not components: they stay out of src/lib so they are never packaged.
// Each source is imported raw, so the code shown on the page is the code that
// runs; only the import path is rewritten to what a user would write.
import authSource from './Auth.svelte?raw';
import authCenteredSource from './AuthCentered.svelte?raw';
import blogSource from './Blog.svelte?raw';
import blogListSource from './BlogList.svelte?raw';
import ctaSource from './Cta.svelte?raw';
import ctaSplitSource from './CtaSplit.svelte?raw';
import dashboardSource from './Dashboard.svelte?raw';
import dashboardSettingsSource from './DashboardSettings.svelte?raw';
import faqSource from './Faq.svelte?raw';
import faqGridSource from './FaqGrid.svelte?raw';
import featuresSource from './Features.svelte?raw';
import featuresBentoSource from './FeaturesBento.svelte?raw';
import featuresRowsSource from './FeaturesRows.svelte?raw';
import footerSource from './Footer.svelte?raw';
import footerCompactSource from './FooterCompact.svelte?raw';
import footerNewsletterSource from './FooterNewsletter.svelte?raw';
import heroSource from './Hero.svelte?raw';
import heroSplitSource from './HeroSplit.svelte?raw';
import pricingSource from './Pricing.svelte?raw';
import pricingCompareSource from './PricingCompare.svelte?raw';
import testimonialsSource from './Testimonials.svelte?raw';
import testimonialsSpotlightSource from './TestimonialsSpotlight.svelte?raw';

/** @param {string} raw */
const published = (raw) => raw.replaceAll("from '#lib/index.js'", "from 'matersv'");

/**
 * @param {string} id
 * @param {string} label
 * @param {string} lead
 * @param {string} file
 * @param {string} raw
 */
const variant = (id, label, lead, file, raw) => ({
	id,
	label,
	lead,
	file: 'src/docs/blocks/' + file,
	source: published(raw)
});

export const blocks = [
	{
		slug: 'hero',
		name: 'Hero',
		category: 'Marketing',
		lead: 'The promise, in display type. Centred for a statement, split when the product should be visible.',
		variants: [
			variant(
				'centered',
				'Centered',
				'A field band with the display headline, one accent action and a handwritten note.',
				'Hero.svelte',
				heroSource
			),
			variant(
				'split',
				'Split',
				'Copy on the left, a real UI mock in a Window on the right, with a proof line under the actions.',
				'HeroSplit.svelte',
				heroSplitSource
			)
		]
	},
	{
		slug: 'features',
		name: 'Features',
		category: 'Marketing',
		lead: 'How the system works, in three weights: cards, a numbered list, or a bento grid of proof.',
		variants: [
			variant(
				'cards',
				'Cards',
				'Three numbered principle cards and one wide card holding a checked list.',
				'Features.svelte',
				featuresSource
			),
			variant(
				'rows',
				'Rows',
				'A sticky header beside four numbered rows. No cards, only whitespace doing the separating.',
				'FeaturesRows.svelte',
				featuresRowsSource
			),
			variant(
				'bento',
				'Bento',
				'An asymmetric grid: swatches, chrome samples, a checked list and a code block.',
				'FeaturesBento.svelte',
				featuresBentoSource
			)
		]
	},
	{
		slug: 'testimonials',
		name: 'Testimonials',
		category: 'Marketing',
		lead: 'Three quotes for a grid, or one quote at display size when there is only one worth telling.',
		variants: [
			variant(
				'cards',
				'Cards',
				'Three quote cards on the field surface, each closing with a byline.',
				'Testimonials.svelte',
				testimonialsSource
			),
			variant(
				'spotlight',
				'Spotlight',
				'One quote set at display size, centred, with a byline and a row of customer names.',
				'TestimonialsSpotlight.svelte',
				testimonialsSpotlightSource
			)
		]
	},
	{
		slug: 'pricing',
		name: 'Pricing',
		category: 'Marketing',
		lead: 'Three plans for a landing page, or one table for the call where every line gets compared.',
		variants: [
			variant(
				'plans',
				'Plans',
				'Three plan cards with aligned rows, the middle one on the field surface.',
				'Pricing.svelte',
				pricingSource
			),
			variant(
				'compare',
				'Compare',
				'A single table, the recommended column tinted, with the actions in the footer row.',
				'PricingCompare.svelte',
				pricingCompareSource
			)
		]
	},
	{
		slug: 'faq',
		name: 'FAQ',
		category: 'Marketing',
		lead: 'An accordion when the answers are long, a grid when they are short enough to stay open.',
		variants: [
			variant(
				'accordion',
				'Accordion',
				'A sticky question header beside a native details accordion, closing with a contact card.',
				'Faq.svelte',
				faqSource
			),
			variant(
				'grid',
				'Grid',
				'Six static answers in two columns, plus one closing line with a quiet action.',
				'FaqGrid.svelte',
				faqGridSource
			)
		]
	},
	{
		slug: 'cta',
		name: 'Call to action',
		category: 'Marketing',
		lead: 'One dark interruption per page, or a coloured band that keeps the page light.',
		variants: [
			variant(
				'night',
				'Night band',
				'Centred on the night surface: a two-line promise, two actions and small print.',
				'Cta.svelte',
				ctaSource
			),
			variant(
				'split',
				'Split',
				'Copy on the left, actions on the right, both on the field surface.',
				'CtaSplit.svelte',
				ctaSplitSource
			)
		]
	},
	{
		slug: 'footer',
		name: 'Footer',
		category: 'Site',
		lead: 'Full, compact, or collecting email. Same surfaces, three amounts of furniture.',
		variants: [
			variant(
				'full',
				'Full',
				'Brand blurb, three NavList columns, a legal row and the giant cropped wordmark.',
				'Footer.svelte',
				footerSource
			),
			variant(
				'compact',
				'Compact',
				'One row: brand, inline links, legal. No wordmark, no columns.',
				'FooterCompact.svelte',
				footerCompactSource
			),
			variant(
				'newsletter',
				'Newsletter',
				'Brand and inline links on the left, a one-field signup on the right, legal underneath.',
				'FooterNewsletter.svelte',
				footerNewsletterSource
			)
		]
	},
	{
		slug: 'blog',
		name: 'Journal',
		category: 'Site',
		lead: 'A featured article with a figure, or a dense reading list with no images at all.',
		variants: [
			variant(
				'featured',
				'Featured',
				'A token-drawn figure and one article, then three post cards and pagination.',
				'Blog.svelte',
				blogSource
			),
			variant(
				'list',
				'List',
				'Date, title, one line of argument and a tag, in rows that lift on hover.',
				'BlogList.svelte',
				blogListSource
			)
		]
	},
	{
		slug: 'dashboard',
		name: 'Dashboard',
		category: 'Application',
		lead: 'The overview screen, or the settings screen that sits behind the same rail.',
		variants: [
			variant(
				'overview',
				'Overview',
				'Two NavLists and storage in the rail, KPI cards, an invoice table and meters.',
				'Dashboard.svelte',
				dashboardSource
			),
			variant(
				'settings',
				'Settings',
				'The same frame with a form of fieldsets, switches and a save row at the end.',
				'DashboardSettings.svelte',
				dashboardSettingsSource
			)
		]
	},
	{
		slug: 'auth',
		name: 'Sign in',
		category: 'Application',
		lead: 'Split for a product story, or one centred card when the form is the whole job.',
		variants: [
			variant(
				'split',
				'Split',
				'A form card beside a field-surface card with a quote, a byline and a feature list.',
				'Auth.svelte',
				authSource
			),
			variant(
				'centered',
				'Centered',
				'One card on the field surface, nothing beside it but a line of small print.',
				'AuthCentered.svelte',
				authCenteredSource
			)
		]
	}
];

/** Every block flattened to its variants, with the parent slug attached. */
export const blockVariants = blocks.flatMap((block) =>
	block.variants.map((entry) => ({ ...entry, slug: block.slug, block: block.name }))
);
