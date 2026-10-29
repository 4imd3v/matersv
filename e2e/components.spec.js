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

test('home nav links to the docs index', async ({ page }) => {
	await page.goto('/');

	await page
		.getByRole('navigation', { name: 'Sections' })
		.getByRole('link', { name: 'Docs' })
		.click();

	await expect(page).toHaveURL(/\/components$/);
	await expect(page.getByRole('heading', { level: 1 })).toContainText('Primitives');
});
