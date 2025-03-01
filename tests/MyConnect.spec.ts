import { test, expect } from '@playwright/test';

test('Login Saucedemo', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
  await page.getByRole('textbox', {name:'Username'}).fill('visual_user');
  await page.getByRole('textbox', {name:'Password'}).fill('secret_sauce');
  await page.screenshot({ path: 'login_page1.png' });
  await page.getByRole('button', {name:'Login'}).click();
  await page.waitForTimeout(2000);
  
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'dashboard_page1.png' });

  await page.keyboard.press('PageDown'); // Scroll turun 1 halaman
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'scrool_page1.png' });
});

test.skip('Register', async ({ page }) => {
  await page.goto('https://www.doitpay.co/en');
  await expect(page.locator('//nav[@class="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-8 py-4"]//img[@alt="Doitpay"]')).toBeVisible();
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'dashboard_page.png' });

  page.getByRole('link', { name: 'Get started free' }).click();
  await expect(page).toHaveURL('https://dashboard.doitpay.co/register');
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'register_page.png' });

});