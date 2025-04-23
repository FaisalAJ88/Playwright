import { test, expect, chromium, firefox, webkit } from '@playwright/test'; 

test('TC 01: Login ORANGE HRM DEMO', async ({ page }) => {

  // this function to open web opensource demo orange HRM
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // this function to find element field Username and fill the text box
  await page.getByRole('textbox', {name : 'Username'}).fill('Admin')

  // this function to find element field Password and fill the text box
  await page.getByRole('textbox', {name : 'Password'}).fill('admin123')
  
  // this function to make timeout in 2 second
  await page.waitForTimeout(2000);

  // take screenshot
  const screenshot = await page.screenshot()
  test.info().attach('login_page', {contentType: 'image/png', body: screenshot});
  // this function to find element field Login Button and click that button
  await page.getByRole('button', {name : 'Login'}).click()
  
  // this assertion Text Dashboard in dashboard_page
  await expect(page.locator('.oxd-text--h6')).toBeVisible();

  //take timeout
  await page.waitForTimeout(2000);

  //take screenshot
  const screenshot1 = await page.screenshot()
  test.info().attach('dashboard_page', {contentType: 'image/png', body: screenshot1});

})

test('TC 02: Forgot Password', async ({ page })=> {
  
  // this function to open web opensource demo orange HRM
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // click text button forgot email
  await page.click('.orangehrm-login-forgot-header')
  await page.waitForTimeout(2000);

  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode');
  await page.waitForTimeout(2000);

  // input textbox username
  await page.getByRole('textbox', {name:'Username'}).fill('Test123')
  await page.waitForTimeout(2000);

  // save screenshot
  const screenshot2 = await page.screenshot()
  test.info().attach('Reset_Password', {contentType: 'image/png', body: screenshot2});

  // Click button Reset Password
  await page.getByRole('button', {name:'Reset Password'}).click()

})

test('TC 03: Check Link', async ({ page })=> {
  //this script to create variable browser 
  const browser=await chromium.launch();

  //this script to create variable context 
  const context=await browser.newContext();

  //this script to create variable page1 that can become initial for newpage/new windows of browser
  const page1=await context.newPage();
  
  // this function to open web opensource demo orange HRM
  await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page1.waitForTimeout(2000);

  //this script to create variable pagepromise to waiting page per page 
  const pagePromise=context.waitForEvent('page')

  // click Link Footer
  await page1.getByRole('link', {name: 'OrangeHRM, Inc'}).click()
  await page1.waitForTimeout(2000);

  //this script to create variable newPage 
  const newPage=await pagePromise;

  // assertion URL Link Youtube website
  await expect (newPage).toHaveURL('https://www.orangehrm.com/')
  await newPage.waitForTimeout(2000);

  // save screenshot
  const screenshot3 = await newPage.screenshot()
  test.info().attach('Check_Link', {contentType: 'image/png', body: screenshot3});
  
})

test('TC 04: Check Link Youtube', async ({ page })=> {
  
  //this script to create variable browser 
  const browser=await chromium.launch();

  //this script to create variable context 
  const context=await browser.newContext();

  //this script to create variable page1 that can become initial for newpage/new windows of browser
  const page1=await context.newPage();
  
  // this function to open web opensource demo orange HRM
  await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page1.waitForTimeout(2000);

  //this script to create variable pagepromise to waiting page per page 
  const pagePromise=context.waitForEvent('page')

  // click Link Icon Youtube
  await page1.locator('[href="https://www.youtube.com/c/OrangeHRMInc"] > .oxd-icon').click();
  await page1.waitForTimeout(2000);

  //this script to create variable newPage 
  const newPage2=await pagePromise;

  // assertion URL Link Youtube website
  await expect (newPage2).toHaveURL('https://www.youtube.com/c/OrangeHRMInc')
  await newPage2.waitForTimeout(2000);

  // save screenshot
  const screenshot4 = await newPage2.screenshot()
  test.info().attach('Check_Youtube_Link', {contentType: 'image/png', body: screenshot4});
  
})