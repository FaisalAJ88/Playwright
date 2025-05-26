import { test, expect, chromium, firefox, webkit } from '@playwright/test'; 

test('TC 01: Login BIO STAR 2 with Valid Credential', async ({ page }) => {

  // this function to open web BIO STAR 2
  await page.goto('https://127.0.0.1/#/login');

  // this function to find element field Username and fill the text box
  await page.getByPlaceholder('ID').fill('admin')

  // this function to find element field Password and fill the text box
  await page.getByPlaceholder('Password').fill('admin1234!')
  
  // this function to make timeout in 2 second
  await page.waitForTimeout(2000);

  // take screenshot
  const screenshot = await page.screenshot()
  test.info().attach('login_page', {contentType: 'image/png', body: screenshot});

  // this function to find element field Login Button and click that button
  await page.getByRole('link', {name : 'Login'}).click()
  
  // this assertion Text Dashboard in dashboard_page
  expect(page.waitForURL('https://127.0.0.1/#/dashboard'))

  // this function to make timeout in 4 second
  await page.waitForTimeout(4000);

  // take screenshot Dashboard
  const screenshot1 = await page.screenshot()
  test.info().attach('Dashboard_page', {contentType: 'image/png', body: screenshot1});

})

test('TC 02: Login with Invalid Username', async ({ page })=> {
  
  // this function to open web BIO STAR 2
  await page.goto('https://127.0.0.1/#/login');

  // this function to find element field Username and fill the text box
  await page.getByPlaceholder('ID').fill('admin')

  // this function to find element field Password and fill the text box
  await page.getByPlaceholder('Password').fill('admin')

  // this function to find element field Login Button and click that button
  await page.getByRole('link', {name : 'Login'}).click()
  
  // this assertion Text Dashboard in dashboard_page
  await expect(page.getByText('ID or password is incorrect. ')).toBeVisible();
  // save screenshot
  const screenshot2 = await page.screenshot()
  test.info().attach('Invalid_Username', {contentType: 'image/png', body: screenshot2});

})

test('TC 03: Login Invalid Password', async ({ page })=> {
  
  // this function to open web BIO STAR 2
  await page.goto('https://127.0.0.1/#/login');

  // this function to find element field Username and fill the text box
  await page.getByPlaceholder('ID').fill('admin1234')

  // this function to find element field Password and fill the text box
  await page.getByPlaceholder('Password').fill('admin1234!')

  // this function to find element field Login Button and click that button
  await page.getByRole('link', {name : 'Login'}).click()
  
  // this assertion Text Dashboard in dashboard_page
  await expect(page.getByText('ID or password is incorrect. ')).toBeVisible();
  // save screenshot
  const screenshot2 = await page.screenshot()
  test.info().attach('Invalid_Password', {contentType: 'image/png', body: screenshot2});
  
})

test.skip('TC 04: Check Link Youtube', async ({ page })=> {
  
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