import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://only-testing-blog.blogspot.com/2025/04/alert-dialogs.html');
  //Click on date input field to open date picker.
  await page.locator('.flatpickr-input').click();  
  
  // Navigate to specific year.
  while (await page.getByRole('spinbutton', { name: 'Year' }).inputValue() !== '2027') {
    await page.locator('.arrowUp').click();
    await page.waitForTimeout(1000);

    //take screenshot
    const screenshot1 = await page.screenshot();
    test.info().attach('login_page', { contentType: 'image/png', body: screenshot1 });
  }
  //Select specific month
  await page.getByLabel('Month').selectOption('September');
  await page.waitForTimeout(1000);

  //take screenshot
    const screenshot2 = await page.screenshot();
    test.info().attach('login_page', { contentType: 'image/png', body: screenshot2 });

})
