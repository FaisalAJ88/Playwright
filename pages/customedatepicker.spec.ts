import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://only-testing-blog.blogspot.com/2025/04/alert-dialogs.html');
  // Open the date picker
  await page.locator('#customDateInput').click();

  // Navigate to specific month
  while (await page.locator('#currentMonthYear').textContent() !== 'March 2025') {
  await page.locator('#prevMonthBtn').click();
  }

    //take screenshot
    const screenshot1 = await page.screenshot();
    test.info().attach('login_page', { contentType: 'image/png', body: screenshot1 });

  // Select specific date
  await page.locator('.calendar-day:has-text("15")').click();
  await page.waitForTimeout(5000);

  //take screenshot
    const screenshot2 = await page.screenshot();
    test.info().attach('login_page', { contentType: 'image/png', body: screenshot2 });

  // Verify date selection.
  const selectedDate = await page.locator('#customDateInput').inputValue();
  expect(selectedDate).toContain('3/15/2025');

  //take screenshot
    const screenshot3 = await page.screenshot();
    test.info().attach('login_page', { contentType: 'image/png', body: screenshot3 });

});