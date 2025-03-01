import { test, expect } from '@playwright/test'; 
// this code is to import capability 
// from test in playwrigt and expect to import capability to assertion 

//this function to state 1 test case is independent and isolated from other test case 
// for javascript test run by asyncronus mode, 
// but in playwright capability feel free to make multiple case can be run in serial , 
// pararel or default by set in playwright.config.ts

test('Login Saucedemo with valid credential', async ({ page }) => {

  // this function to open web saucedemo.com
  await page.goto('https://www.saucedemo.com');

  // this function to find element field Username and fill the text box
  await page.getByRole('textbox', {name:'Username'}).fill('visual_user');

  // this function to find element field Password and fill the text box
  await page.getByRole('textbox', {name:'Password'}).fill('secret_sauce');
  
  // this function to make timeout in 3 second
  await page.waitForTimeout(3000);

  // this function to find element field Login Button and click that button
  await page.getByRole('button', {name:'Login'}).click();
  
  // this assertion if user valid credential will be get this URL
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html'); 

  // this function to make screenshot with name 
  await page.screenshot({ path: 'successlogin_saucedemo.png' });

  // this function to make timeout in 5 second
  await page.waitForTimeout(5000);
});
