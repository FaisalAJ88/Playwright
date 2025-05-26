import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://only-testing-blog.blogspot.com/2025/04/alert-dialogs.html');
  // Open the date picker
  await page.locator('#customDateInput').click();

  // Navigate to specific month
  while (await page.locator('#currentMonthYear').textContent() !== 'March 2025') {
  await page.locator('#prevMonthBtn').click();
  }

  // Select specific date
  await page.locator('.calendar-day:has-text("15")').click();
  await page.waitForTimeout(5000);

  // Verify date selection.
  const selectedDate = await page.locator('#customDateInput').inputValue();
  expect(selectedDate).toContain('3/15/2025');
});