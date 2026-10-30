import { expect, test } from '@playwright/test';

test('dialog opens as a modal and closes on Escape', async ({ page }) => {
	await page.goto('/components/dialog');

	await page.getByRole('button', { name: 'Open dialog' }).click();
	const dialog = page.getByRole('dialog');
	await expect(dialog).toBeVisible();

	await page.keyboard.press('Escape');
	await expect(dialog).toBeHidden();
});

test('accordion uses native details', async ({ page }) => {
	await page.goto('/components/accordion');

	const details = page.locator('.preview details').first();
	await expect(details).not.toHaveAttribute('open', '');

	await details.locator('summary').click();
	await expect(details).toHaveAttribute('open', '');
});

test('theme toggle persists across reloads', async ({ page }) => {
	await page.goto('/');

	await page.getByRole('button', { name: 'Switch to dark theme' }).click();
	await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');

	await page.reload();
	await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
});

test('tabs move and select with the arrow keys', async ({ page }) => {
	await page.goto('/components/tabs');

	const tablist = page.getByRole('tablist', { name: 'Details' });
	const tabs = tablist.getByRole('tab');
	await tabs.nth(0).focus();

	await expect(tabs.nth(0)).toHaveAttribute('aria-selected', 'true');

	await page.keyboard.press('ArrowRight');
	await expect(tabs.nth(1)).toHaveAttribute('aria-selected', 'true');
	await expect(tabs.nth(1)).toBeFocused();
	await expect(page.getByRole('tabpanel')).toContainText('No runtime dependencies');

	await page.keyboard.press('Home');
	await expect(tabs.nth(0)).toHaveAttribute('aria-selected', 'true');
});

test('slider steps with the arrow keys', async ({ page }) => {
	await page.goto('/components/slider');

	const slider = page.getByRole('slider', { name: 'Volume' });
	await expect(slider).toHaveValue('64');

	await slider.focus();
	await page.keyboard.press('ArrowRight');
	await expect(slider).toHaveValue('65');

	await page.keyboard.press('ArrowLeft');
	await expect(slider).toHaveValue('64');
});

test('checkbox toggles from the keyboard', async ({ page }) => {
	await page.goto('/components/checkbox');

	const box = page.getByRole('checkbox', { name: 'Share anonymous usage' });
	await box.focus();
	await expect(box).not.toBeChecked();

	await page.keyboard.press('Space');
	await expect(box).toBeChecked();
});

test('home nav links to the docs index', async ({ page }) => {
	await page.goto('/');

	await page
		.getByRole('navigation', { name: 'Sections' })
		.getByRole('link', { name: 'Docs' })
		.click();

	await expect(page).toHaveURL(/\/components$/);
	await expect(page.getByRole('heading', { level: 1 })).toContainText('Primitives');
});
