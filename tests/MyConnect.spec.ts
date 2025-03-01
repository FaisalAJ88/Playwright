import { test, expect } from '@playwright/test';

test('Login Saucedemo with valid credential', async ({ page }) => {

  // this function to open web saucedemo.com
  await page.goto('https://www.saucedemo.com');

  // this function to find element field Username and fill the text box
  await page.getByRole('textbox', {name:'Username'}).fill('visual_user');

  // this function to find element field Password and fill the text box
  await page.getByRole('textbox', {name:'Password'}).fill('secret_sauce');
  
  // this function to find element field Login Button and click that button
  await page.getByRole('button', {name:'Login'}).click();
  
  // this function to make timeout in 2 second
  await page.waitForTimeout(2000);

  // this assertion if user valid credential will be get this URL
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html'); 

  // this function to make screenshot with name 
  await page.screenshot({ path: 'successlogin_saucedemo.png' });

});

test('Login Saucedemo with valid credential', async ({ page }) => {

  // this function to open web saucedemo.com
  await page.goto('https://www.saucedemo.com');

  // this function to find element field Username and fill the text box
  await page.getByRole('textbox', {name:'Username'}).fill('visual_user');

  // this function to find element field Password and fill the text box
  await page.getByRole('textbox', {name:'Password'}).fill('secret_sauce123');
  
  // this function to find element field Login Button and click that button
  await page.getByRole('button', {name:'Login'}).click();
  
  // this function to make timeout in 2 second
  await page.waitForTimeout(2000);

  // this assertion if user valid credential will be get this URL
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html'); 

  // this function to make screenshot with name 
  await page.screenshot({ path: 'successlogin_saucedemo.png' });

});