import { test as base } from '@playwright/test';

// Extend the base test with a login fixture
export const test = base.extend<{}>({
  page: async ({ page }, use) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    
    //take screenshot
    await page.waitForTimeout(2000);

    //take screenshot
    const screenshot1 = await page.screenshot();
    test.info().attach('login_page', { contentType: 'image/png', body: screenshot1 });

    await page.click('#login-button');
    await use(page); // Provide the logged-in session to tests
  },
});

export { expect } from '@playwright/test';