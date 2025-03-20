import { test, expect } from '@playwright/test'; 

test('Login Comet Staging', async ({ page }) => {

  // this function to open web saucedemo.com
  await page.goto('https://ftth-sit-aws-comet.xl.co.id/login');

  // this function to find element field Username and fill the text box
  await page.getByRole('button', {name:'Login with O365'}).click();

  // this function to find element field Password and fill the text box
  //await page.getByRole('textbox', {name:'Password'}).fill('secret_sauce');
  
  // this function to make timeout in 2 second
  //await page.waitForTimeout(2000);

  // this function to find element field Login Button and click that button
  //await page.getByRole('button', {name:'Login'}).click();
  
  // this assertion if user invalid credential will be get some failed respone
  //await expect(page.getByText('Epic sadface: Username and password do not match any user in this service')).toBeVisible();

  // this function to make screenshot with name 
  //await page.screenshot({ path: 'failedlogin_username.png' });

  // this function to make timeout in 2 second
  //await page.waitForTimeout(2000);
});