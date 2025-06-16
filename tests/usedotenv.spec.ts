import { expect, test } from '@playwright/test'
import dotenv from 'dotenv';
dotenv.config();
const baseURL = process.env.baseURL as string;
const username1 = process.env.username1 as string;
const password1 = process.env.password1 as string;

test('Orange HRM login', async ({ page }) => {

  await page.goto(baseURL);

  await page.waitForTimeout(5000);
  console.log(process.env.username1)
  console.log(process.env.password1)

  //await page.getByRole('textbox', {name : 'Username'}).fill(username1);
  //await page.getByRole('textbox', {name : 'Password'}).fill(password1);

  //await page.waitForTimeout(2000);

  //await page.getByRole('button', {name : 'Login'}).click()
    
    // this assertion Text Dashboard in dashboard_page
    //await expect(page.locator('.oxd-text--h6')).toBeVisible();
   
    //take timeout
    //await page.waitForTimeout(2000);

    //take screenshot
  const screenshot1 = await page.screenshot()
  test.info().attach('dashboard_page', {contentType: 'image/png', body: screenshot1});

})