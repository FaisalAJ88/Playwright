import { test, expect } from '@playwright/test'; 
// this code is to import capability 
// from test in playwrigt and expect to import capability to assertion 

//this function to state 1 test case is independent and isolated from other test case 
// for javascript test run by asyncronus mode, 
// but in playwright capability feel free to make multiple case can be run in serial , 
// pararel or default by set in playwright.config.ts
test('Login', async ({ page }) => { 

  // this script to open page daftar in Cermati web
  await page.goto('https://www.cermati.com/gabung'); 

  // this script to get element by Id from field mobile phone and type on that textbox
  await page.locator('#mobilePhone').fill('08174114144');

  // this script to get element by Id from field email and type on that textbox
  await page.locator('#email').fill('faisaljayadi88@gmail.com');

  // this script to get element by id from field Fisrt Name and type on that textbox
  await page.locator('#firstName').fill('Faisal');

  // this script to get element by id from field Last Name and type on that textbox
  await page.locator('#lastName').fill('Jayadi');

  // this script to get element by Class from field Button Daftar and type on that textbox
  await page.locator('.RegistrationForm_form-container__button-text__G_fL8').click();

  await page.waitForTimeout(2000); // this script for make timeout in 2 second
  await page.screenshot({ path: 'success_Register.png' }); // this script to save screenshot 

});

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
