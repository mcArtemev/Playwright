import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/');
  await expect(page.getByPlaceholder('What needs to be done?')).toBeEmpty();
  await page.getByPlaceholder('What needs to be done?').click();
  await page.getByPlaceholder('What needs to be done?').fill('hello');
  await page.getByPlaceholder('What needs to be done?').press('Enter');
  await expect(page.getByText('item leftAll Active Completed')).toBeVisible();
  await page.getByRole('link', { name: 'Completed' }).click();
  await page.getByText('item leftAll Active Completed').click();
  await expect(page.getByLabel('Toggle Todo')).toBeVisible();
});