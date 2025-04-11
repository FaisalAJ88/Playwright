import { test, expect, chromium, firefox, webkit } from '@playwright/test'; 

test('TC 01: Handle Datepicker', async ({ page }) => {

  // this function to open web opensource demo orange HRM
  await page.goto('https://testautomationpractice.blogspot.com');
  await page.waitForTimeout(2000);
  await page.keyboard.press('PageDown');
  await page.waitForTimeout(2000);
  await page.keyboard.press('PageDown');
  // this function to find element field Username and fill the text box
  await page.fill('#datepicker','03/15/2024')
  
  while(true)
  {
    const currentYear=await page.locator()
  }
  // this function to make timeout in 2 second
  await page.waitForTimeout(2000);

  // take screenshot
  const screenshot = await page.screenshot()
  test.info().attach('login_page', {contentType: 'image/png', body: screenshot});
  
})