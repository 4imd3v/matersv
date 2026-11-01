import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

const TAGS = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'];

async function expectNoViolations(page) {
	// .mark is the decorative footer wordmark and .watermark the 404 numeral: both are
	// aria-hidden decoration that WCAG 1.4.3 exempts, faded on purpose.
	const results = await new AxeBuilder({ page })
		.withTags(TAGS)
		.exclude('.mark')
		.exclude('.watermark')
		.analyze();

	expect(
		results.violations.map((violation) => ({
			id: violation.id,
			nodes: violation.nodes.map((node) => node.target)
		}))
	).toEqual([]);
}

for (const path of [
	'/',
	'/blocks',
	'/blocks/auth',
	'/blocks/blog',
	'/blocks/cta',
	'/blocks/dashboard',
	'/blocks/faq',
	'/blocks/features',
	'/blocks/footer',
	'/blocks/hero',
	'/blocks/pricing',
	'/blocks/testimonials',
	'/components',
	'/components/avatargroup',
	'/components/button',
	'/components/byline',
	'/components/carousel',
	'/components/combobox',
	'/components/dialog',
	'/components/codeblock',
	'/components/figure',
	'/components/filedrop',
	'/components/fileinput',
	'/components/menu',
	'/components/numberinput',
	'/components/pager',
	'/components/popover',
	'/components/prose',
	'/components/rating',
	'/components/steps',
	'/components/statusdot',
	'/components/taglist',
	'/components/toc',
	'/components/toolbar',
	'/components/timeline',
	'/components/radiogroup',
	'/components/scrollprogress',
	'/components/sheet',
	'/components/searchfield',
	'/components/sidenote',
	'/components/skiplink',
	'/components/toast'
]) {
	test(`no accessibility violations on ${path}`, async ({ page }) => {
		await page.goto(path);
		await expectNoViolations(page);
	});
}

const BLOCK_SLUGS = [
	'hero',
	'features',
	'logos',
	'stats',
	'team',
	'testimonials',
	'pricing',
	'faq',
	'contact',
	'cta',
	'integrations',
	'events',
	'footer',
	'article',
	'changelog',
	'blog',
	'careers',
	'press',
	'not-found',
	'search',
	'checkout',
	'dashboard',
	'auth',
	'onboarding',
	'account',
	'order'
];

for (const slug of BLOCK_SLUGS) {
	test(`no accessibility violations on any /blocks/${slug} variant`, async ({ page }) => {
		await page.goto('/blocks/' + slug);

		const labels = page.locator('.segmented label');
		const count = await labels.count();

		for (let i = 0; i < count; i += 1) {
			await labels.nth(i).click();
			await page.waitForTimeout(250);
			await expectNoViolations(page);
		}
	});
}

test('open dialog has no accessibility violations', async ({ page }) => {
	await page.goto('/components/dialog');
	await page.getByRole('button', { name: 'Open dialog' }).click();

	const dialog = page.getByRole('dialog');
	await expect(dialog).toBeVisible();

	// Scan the settled state: the entrance animation starts at opacity 0.
	await dialog.evaluate((element) =>
		Promise.all(
			element.getAnimations({ subtree: true }).map((animation) => animation.finished.catch(() => {}))
		)
	);

	await expectNoViolations(page);
});

test('dark theme has no accessibility violations', async ({ page }) => {
	await page.addInitScript(() => localStorage.setItem('matersv-theme', 'dark'));
	await page.goto('/');
	await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
	await expectNoViolations(page);
});
