import { test, expect } from '@playwright/test'; 

test.skip('TC 01: Login ORANGE HRM DEMO', async ({ page }) => {

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

test.skip('TC 02: Forgot Password', async ({ page })=> {
  
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

test.only('TC 03: Check Link', async ({ page })=> {
  
  // this function to open web opensource demo orange HRM
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.waitForTimeout(2000);
  // click Link Footer
  await page.getByRole('link', {name: 'OrangeHRM, Inc'}).click()
  await page.waitForTimeout(2000);
  // wait for NewPage Promise
  const newPage = await pagePromise;
  await page.waitForTimeout(2000);
  // Interrace with new page
  await expect (newPage).toHaveURL('https://www.orangehrm.com/')
  // save screenshot
  const screenshot3 = await newPage.screenshot()
  test.info().attach('Check_Link', {contentType: 'image/png', body: screenshot3});
  
})

test.skip('TC 04: Check Link Youtube', async ({ page })=> {
  
  // this function to open web opensource demo orange HRM
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.waitForTimeout(2000);

  // click Link Icon Youtube
  await page.locator('[href="https://www.youtube.com/c/OrangeHRMInc"] > .oxd-icon').click();
  await page.waitForTimeout(5000);
  // assertion URL Link Youtube website
  // save screenshot
  const screenshot4 = await page.screenshot()
  test.info().attach('Check_Youtube_Link', {contentType: 'image/png', body: screenshot4});
  
})