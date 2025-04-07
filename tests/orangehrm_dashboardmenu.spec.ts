import { test, expect, chromium, firefox, webkit } from '@playwright/test';

test.skip('TC 01: Dashboard_Check_Menu_Admin', async ({ page }) => {

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

  //take screenshot Dashboard_Menu
  const screenshot1 = await page.screenshot()
  test.info().attach('Dashboard_Page', {contentType: 'image/png', body: screenshot1});

  // this function to find element field Menu Admin
  await page.getByRole('link', {name : 'Admin'}).click()
  //take timeout
  await page.waitForTimeout(2000);

  // this assertion URL Menu Admin
  await expect (page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers')
  await page.waitForTimeout(2000);

  //take screenshot Menu Admin
  const screenshot2 = await page.screenshot()
  test.info().attach('Menu_Admin Page', {contentType: 'image/png', body: screenshot2});

})

test.only('TC 02: Dashboard_Check_Menu_PIM', async ({ page }) => {

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

  //take screenshot Dashboard_Menu
  const screenshot1 = await page.screenshot()
  test.info().attach('Dashboard_Page', {contentType: 'image/png', body: screenshot1});

  // this function to find element field Menu Admin
  await page.getByRole('link', {name : 'PIM'}).click()
  //take timeout
  await page.waitForTimeout(2000);

  // this assertion URL Menu Admin
  await expect (page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList')
  await page.waitForTimeout(2000);

  //take screenshot Menu Admin
  const screenshot3 = await page.screenshot()
  test.info().attach('Menu_PIM Page', {contentType: 'image/png', body: screenshot3});

})