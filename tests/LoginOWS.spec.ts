import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://107d-sg-studio.teleows.com/dspcas/login?request-source=portalWeb&service=https%3A%2F%2F107d-sg-studio.teleows.com%3A443%2Fportal%2Fweb%2Frest%2Fsso%2Findex%3Fori_url%3Dhttps%253A%252F%252F107d-sg-studio.teleows.com%252Fportal-web%252Fportal%252Fhomepage.html%2523Sales%252520Order');
  await page.locator('#username').fill('test_apartment_ae');
  await page.locator('#password').fill('qwerty12345@');
  await page.locator('#loginButton').click();
  await expect(page).toHaveTitle(/OWS/);
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'success_login_ows.png' });

});