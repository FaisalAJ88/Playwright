import { test, expect } from '@playwright/test';

test('Login', async ({ page }) => {
  await page.goto('https://www.doitpay.co/en');
  await expect(page.locator('//nav[@class="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-8 py-4"]//img[@alt="Doitpay"]')).toBeVisible();
});

test('Register', async ({ page }) => {
  await page.goto('https://www.doitpay.co/en');
  await expect(page.locator('//nav[@class="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-8 py-4"]//img[@alt="Doitpay"]')).toBeVisible();
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'dashboard_page.png' });

  page.getByRole('link', { name: 'Get started free' }).click();
  await expect(page).toHaveURL('https://dashboard.doitpay.co/register');
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'register_page.png' });

});