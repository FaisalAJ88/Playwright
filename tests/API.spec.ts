import { test, expect } from '@playwright/test';

test('Attach multiple screenshots to Allure report', async ({ page }) => {
    await page.goto('https://google.com');

    // Take first screenshot
    const screenshot1 = await page.screenshot();
    test.info().attach('First Screenshot', { contentType: 'image/png', body: screenshot1 });

    // Perform some action
    await page.reload();

    // Take second screenshot
    const screenshot2 = await page.screenshot();
    test.info().attach('Second Screenshot', { contentType: 'image/png', body: screenshot2 });
});
