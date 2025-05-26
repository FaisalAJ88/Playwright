import { test, expect, chromium, firefox, webkit } from '@playwright/test';

test('TC 01: Handle Datepicker', async ({ page }) => {
  // Navigate to the test site
  await page.goto('https://testautomationpractice.blogspot.com');
  await page.waitForTimeout(2000);

  // Scroll down to the date picker
  await page.keyboard.press('PageDown');
  await page.waitForTimeout(2000);
  await page.keyboard.press('PageDown');

  // Click the datepicker input to open the date picker
  await page.click('#datepicker');

  const targetYear = '2024';
  const targetMonth = 'March';
  const targetDay = '20';

  // Loop until the correct month and year are visible
  while (true) {
    const currentYear = await page.locator('.ui-datepicker-year').textContent();
    const currentMonth = await page.locator('.ui-datepicker-month').textContent();

    if (currentYear === targetYear && currentMonth === targetMonth) {
      break;
    }

    // Click next to navigate to the next month
    await page.click('.ui-datepicker-next');
    await page.waitForTimeout(500);
  }

  // Click the specific day
  await page.click(`//a[text()='${targetDay}']`);

  // Take a screenshot for debugging
  const screenshot = await page.screenshot();
  test.info().attach('datepicker_selection', {
    contentType: 'image/png',
    body: screenshot
  });
});
