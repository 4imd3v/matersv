// Block metadata for /blocks. Blocks are page sections composed from the
// library, not components: they stay out of src/lib so they are never packaged.
// Each source is imported raw, so the code shown on the page is the code that
// runs; only the import path is rewritten to what a user would write.
import articleSource from './Article.svelte?raw';
import articleTocSource from './ArticleToc.svelte?raw';
import authSource from './Auth.svelte?raw';
import authCenteredSource from './AuthCentered.svelte?raw';
import blogSource from './Blog.svelte?raw';
import blogListSource from './BlogList.svelte?raw';
import careersSource from './Careers.svelte?raw';
import careersApplySource from './CareersApply.svelte?raw';
import changelogSource from './Changelog.svelte?raw';
import changelogCardsSource from './ChangelogCards.svelte?raw';
import checkoutSource from './Checkout.svelte?raw';
import checkoutCartSource from './CheckoutCart.svelte?raw';
import contactSource from './Contact.svelte?raw';
import contactCenteredSource from './ContactCentered.svelte?raw';
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
import logosSource from './Logos.svelte?raw';
import logosStatementSource from './LogosStatement.svelte?raw';
import notFoundSource from './NotFound.svelte?raw';
import notFoundSearchSource from './NotFoundSearch.svelte?raw';
import heroSplitSource from './HeroSplit.svelte?raw';
import pricingSource from './Pricing.svelte?raw';
import pricingCompareSource from './PricingCompare.svelte?raw';
import searchSource from './Search.svelte?raw';
import searchEmptySource from './SearchEmpty.svelte?raw';
import statsSource from './Stats.svelte?raw';
import statsCompareSource from './StatsCompare.svelte?raw';
import teamSource from './Team.svelte?raw';
import teamFounderSource from './TeamFounder.svelte?raw';
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
		slug: 'logos',
		name: 'Logos',
		category: 'Marketing',
		lead: 'Social proof without the logo files: a one-line strip, or a quote beside a wall of names.',
		variants: [
			variant(
				'row',
				'Row',
				'A quiet band with five text marks and one line above them.',
				'Logos.svelte',
				logosSource
			),
			variant(
				'statement',
				'Statement',
				'A Quote on the field surface beside six names in two columns.',
				'LogosStatement.svelte',
				logosStatementSource
			)
		]
	},
	{
		slug: 'stats',
		name: 'Stats',
		category: 'Marketing',
		lead: 'Numbers as proof: a dark figures band, or a two-sided comparison with one dot per unit.',
		variants: [
			variant(
				'figures',
				'Figures',
				'Four Stat components on the night band, with a line on how they were counted.',
				'Stats.svelte',
				statsSource
			),
			variant(
				'compare',
				'Compare',
				'Two cards, one per stack, with Dots counting sixteen units of 32 KB.',
				'StatsCompare.svelte',
				statsCompareSource
			)
		]
	},
	{
		slug: 'team',
		name: 'Team',
		category: 'Marketing',
		lead: 'People pages: a plain portrait grid, or a founder card beside the rest of the room.',
		variants: [
			variant('grid', 'Grid', 'Six people in three columns: avatar, name, focus.', 'Team.svelte', teamSource),
			variant(
				'founder',
				'Founder',
				'One large portrait and bio, then five compact rows and a line about the size of the team.',
				'TeamFounder.svelte',
				teamFounderSource
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
		slug: 'contact',
		name: 'Contact',
		category: 'Marketing',
		lead: 'A form with the studio details beside it, or a short centred form on a coloured band.',
		variants: [
			variant(
				'split',
				'Split',
				'Name, email, topic, message and consent in a card, with email, address and hours on the left.',
				'Contact.svelte',
				contactSource
			),
			variant(
				'centered',
				'Centered',
				'Email and message only, on the field surface, with three details underneath.',
				'ContactCentered.svelte',
				contactCenteredSource
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
		slug: 'article',
		name: 'Article',
		category: 'Site',
		lead: 'Long-form reading: a single column, or the same article with its contents pinned in a rail.',
		variants: [
			variant(
				'reading',
				'Reading',
				'Tag list, title, byline, a token-drawn figure, then Prose with a Sidenote and a Pager.',
				'Article.svelte',
				articleSource
			),
			variant(
				'toc',
				'With contents',
				'The same body in two columns, a sticky Toc and a short-version card.',
				'ArticleToc.svelte',
				articleTocSource
			)
		]
	},
	{
		slug: 'changelog',
		name: 'Changelog',
		category: 'Site',
		lead: 'Release history as a timeline, or as version cards with typed changes.',
		variants: [
			variant(
				'timeline',
				'Timeline',
				'The Timeline component beside a sticky header.',
				'Changelog.svelte',
				changelogSource
			),
			variant(
				'cards',
				'Cards',
				'One card per version, every change tagged with a StatusDot.',
				'ChangelogCards.svelte',
				changelogCardsSource
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
		slug: 'careers',
		name: 'Careers',
		category: 'Site',
		lead: 'A job list with the details inline, or a single role with its application form.',
		variants: [
			variant(
				'roles',
				'Roles',
				'Four rows with team, location and contract, and one quiet closing line.',
				'Careers.svelte',
				careersSource
			),
			variant(
				'apply',
				'Apply',
				'A role description with facts and a checked list, beside a four-field form with a CV upload.',
				'CareersApply.svelte',
				careersApplySource
			)
		]
	},
	{
		slug: 'not-found',
		name: 'Not found',
		category: 'Site',
		lead: 'The 404 page: a watermark number and three ways back, or a search card instead.',
		variants: [
			variant(
				'centered',
				'Centered',
				'A 404 watermark, one heading, two actions and three popular links.',
				'NotFound.svelte',
				notFoundSource
			),
			variant(
				'search',
				'With search',
				'Copy on the left, a search card with three suggested routes on the right.',
				'NotFoundSearch.svelte',
				notFoundSearchSource
			)
		]
	},
	{
		slug: 'search',
		name: 'Search',
		category: 'Application',
		lead: 'Results with tabs and a filter popover, or the empty state that follows a miss.',
		variants: [
			variant(
				'results',
				'Results',
				'Search field, tabs that really filter, a filter popover, result rows and pagination.',
				'Search.svelte',
				searchSource
			),
			variant(
				'empty',
				'Empty',
				'An EmptyState with the query in the title, an icon, one action and popular searches.',
				'SearchEmpty.svelte',
				searchEmptySource
			)
		]
	},
	{
		slug: 'checkout',
		name: 'Checkout',
		category: 'Application',
		lead: 'Two ways to sell the same licence: a stepped form with a sticky summary, or a cart.',
		variants: [
			variant(
				'steps',
				'Steps',
				'Steps, billing details, seats, delivery radios and a summary that follows the scroll.',
				'Checkout.svelte',
				checkoutSource
			),
			variant(
				'cart',
				'Cart',
				'A line-item table, a promo field, totals and one notice.',
				'CheckoutCart.svelte',
				checkoutCartSource
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
