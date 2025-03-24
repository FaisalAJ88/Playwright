import { test, expect } from '@playwright/test'; 

test('Login OWS Staging', async ({ page }) => {

  // this function to open web saucedemo.com
  await page.goto('https://107d-sg-studio.teleows.com/');

  // this function to find element field Username and fill the text box
  await page.fill('//input[@id="username"]', 'test_helpdesk_sales');

  // this function to find element field Password and fill the text box
  await page.fill('//input[@id="password"]', 'qwerty12345!!');
  
  // this function to make timeout in 2 second
  await page.waitForTimeout(2000);

  // this function to find element field Login Button and click that button
  await page.click('#loginButton');
  
  // this assertion if user invalid credential will be get some failed respone
  await expect(page.locator('span[title="OWS"]')).toBeVisible();

});