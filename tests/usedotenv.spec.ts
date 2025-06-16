import { expect, test } from '@playwright/test'

const baseURL = process.env.baseURL as string;
const username = process.env.username as string;
const password = process.env.password as string;

test('Orange HRM login', async ({ page }) => {

  await page.goto(baseURL);

  await page.getByRole('textbox', {name : 'Username'}).fill(username);
  await page.getByRole('textbox', {name : 'Password'}).fill(password);

  await page.waitForTimeout(2000);

  await page.getByRole('button', {name : 'Login'}).click()
    
    // this assertion Text Dashboard in dashboard_page
    await expect(page.locator('.oxd-text--h6')).toBeVisible();
  
    //take timeout
    //await page.waitForTimeout(2000);

    //take screenshot
  const screenshot1 = await page.screenshot()
  test.info().attach('dashboard_page', {contentType: 'image/png', body: screenshot1});

})