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

test.skip('TC 02: Dashboard_Check_Menu_PIM', async ({ page }) => {

  // this function to open web opensource demo orange HRM
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // this function to find element field Username and fill the text box
  await page.getByRole('textbox', {name : 'Username'}).fill('Admin')

  // this function to find element field Password and fill the text box
  await page.getByRole('textbox', {name : 'Password'}).fill('admin123')
  
  // this function to make timeout in 2 second
  await page.waitForTimeout(2000);

  // take screenshot
  const screenshot3 = await page.screenshot()
  test.info().attach('login_page', {contentType: 'image/png', body: screenshot3});

  // this function to find element field Login Button and click that button
  await page.getByRole('button', {name : 'Login'}).click()
  
  // this assertion Text Dashboard in dashboard_page
  await expect(page.locator('.oxd-text--h6')).toBeVisible();
  //take timeout
  await page.waitForTimeout(2000);

  //take screenshot Dashboard_Menu
  const screenshot4 = await page.screenshot()
  test.info().attach('Dashboard_Page', {contentType: 'image/png', body: screenshot4});

  // this function to find element field Menu PIM
  await page.getByRole('link', {name : 'PIM'}).click()
  //take timeout
  await page.waitForTimeout(2000);

  // this assertion URL Menu PIM
  await expect (page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList')
  await page.waitForTimeout(2000);

  //take screenshot Menu PIM
  const screenshot5 = await page.screenshot()
  test.info().attach('Menu_PIM Page', {contentType: 'image/png', body: screenshot5 });

})

test.skip('TC 03: Dashboard_Check_Menu_Leave', async ({ page }) => {

  // this function to open web opensource demo orange HRM
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // this function to find element field Username and fill the text box
  await page.getByRole('textbox', {name : 'Username'}).fill('Admin')

  // this function to find element field Password and fill the text box
  await page.getByRole('textbox', {name : 'Password'}).fill('admin123')
  
  // this function to make timeout in 2 second
  await page.waitForTimeout(2000);

  // take screenshot
  const screenshot6 = await page.screenshot()
  test.info().attach('login_page', {contentType: 'image/png', body: screenshot6 });

  // this function to find element field Login Button and click that button
  await page.getByRole('button', {name : 'Login'}).click()
  
  // this assertion Text Dashboard in dashboard_page
  await expect(page.locator('.oxd-text--h6')).toBeVisible();
  //take timeout
  await page.waitForTimeout(2000);

  //take screenshot Dashboard_Menu
  const screenshot7 = await page.screenshot()
  test.info().attach('Dashboard_Page', {contentType: 'image/png', body: screenshot7 });

  // this function to find element field Menu Leave
  await page.getByRole('link', {name : 'Leave'}).click()
  //take timeout
  await page.waitForTimeout(2000);

  // this assertion URL Menu Leave
  await expect (page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/leave/viewLeaveList')
  await page.waitForTimeout(2000);

  //take screenshot Menu Leave
  const screenshot8 = await page.screenshot()
  test.info().attach('Menu_Leave Page', {contentType: 'image/png', body: screenshot8 });

})

test.skip('TC 04: Dashboard_Check_Menu_Time', async ({ page }) => {

  // this function to open web opensource demo orange HRM
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // this function to find element field Username and fill the text box
  await page.getByRole('textbox', {name : 'Username'}).fill('Admin')

  // this function to find element field Password and fill the text box
  await page.getByRole('textbox', {name : 'Password'}).fill('admin123')
  
  // this function to make timeout in 2 second
  await page.waitForTimeout(2000);

  // take screenshot
  const screenshot9 = await page.screenshot()
  test.info().attach('login_page', {contentType: 'image/png', body: screenshot9 });

  // this function to find element field Login Button and click that button
  await page.getByRole('button', {name : 'Login'}).click()
  
  // this assertion Text Dashboard in dashboard_page
  await expect(page.locator('.oxd-text--h6')).toBeVisible();
  //take timeout
  await page.waitForTimeout(2000);

  //take screenshot Dashboard_Menu
  const screenshot10 = await page.screenshot()
  test.info().attach('Dashboard_Page', {contentType: 'image/png', body: screenshot10 });

  // this function to find element field Menu Time
  await page.getByRole('link', {name : 'Time'}).click()
  //take timeout
  await page.waitForTimeout(2000);

  // this assertion URL Menu Time
  await expect (page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/time/viewEmployeeTimesheet')
  await page.waitForTimeout(2000);

  //take screenshot Menu Time
  const screenshot11 = await page.screenshot()
  test.info().attach('Menu_Time Page', {contentType: 'image/png', body: screenshot11 });

})

test.skip('TC 05: Dashboard_Check_Menu_Recruitment', async ({ page }) => {

  // this function to open web opensource demo orange HRM
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // this function to find element field Username and fill the text box
  await page.getByRole('textbox', {name : 'Username'}).fill('Admin')

  // this function to find element field Password and fill the text box
  await page.getByRole('textbox', {name : 'Password'}).fill('admin123')
  
  // this function to make timeout in 2 second
  await page.waitForTimeout(2000);

  // take screenshot
  const screenshot12 = await page.screenshot()
  test.info().attach('login_page', {contentType: 'image/png', body: screenshot12 });

  // this function to find element field Login Button and click that button
  await page.getByRole('button', {name : 'Login'}).click()
  
  // this assertion Text Dashboard in dashboard_page
  await expect(page.locator('.oxd-text--h6')).toBeVisible();
  //take timeout
  await page.waitForTimeout(2000);

  //take screenshot Dashboard_Menu
  const screenshot13 = await page.screenshot()
  test.info().attach('Dashboard_Page', {contentType: 'image/png', body: screenshot13 });

  // this function to find element field Menu Time
  await page.getByRole('link', {name : 'Recruitment'}).click()
  //take timeout
  await page.waitForTimeout(2000);

  // this assertion URL Menu Time
  await expect (page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/viewCandidates')
  await page.waitForTimeout(2000);

  //take screenshot Menu Time
  const screenshot14 = await page.screenshot()
  test.info().attach('Menu_Recruiter Page', {contentType: 'image/png', body: screenshot14 });

})

test.skip('TC 06: Dashboard_Check_Menu_My Info', async ({ page }) => {

  // this function to open web opensource demo orange HRM
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // this function to find element field Username and fill the text box
  await page.getByRole('textbox', {name : 'Username'}).fill('Admin')

  // this function to find element field Password and fill the text box
  await page.getByRole('textbox', {name : 'Password'}).fill('admin123')
  
  // this function to make timeout in 2 second
  await page.waitForTimeout(2000);

  // take screenshot
  const screenshot15 = await page.screenshot()
  test.info().attach('login_page', {contentType: 'image/png', body: screenshot15 });

  // this function to find element field Login Button and click that button
  await page.getByRole('button', {name : 'Login'}).click()
  
  // this assertion Text Dashboard in dashboard_page
  await expect(page.locator('.oxd-text--h6')).toBeVisible();
  //take timeout
  await page.waitForTimeout(2000);

  //take screenshot Dashboard_Menu
  const screenshot16 = await page.screenshot()
  test.info().attach('Dashboard_Page', {contentType: 'image/png', body: screenshot16 });

  // this function to find element field Menu My Info
  await page.getByRole('link', {name : 'My Info'}).click()
  //take timeout
  await page.waitForTimeout(2000);

  // this assertion URL Menu Time
  await expect (page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/7')
  await page.waitForTimeout(2000);

  //take screenshot Menu Time
  const screenshot17 = await page.screenshot()
  test.info().attach('Menu_My Info Page', {contentType: 'image/png', body: screenshot17 });

})

test.only('TC 07: Dashboard_Check_Menu_Performance', async ({ page }) => {

  // this function to open web opensource demo orange HRM
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // this function to find element field Username and fill the text box
  await page.getByRole('textbox', {name : 'Username'}).fill('Admin')

  // this function to find element field Password and fill the text box
  await page.getByRole('textbox', {name : 'Password'}).fill('admin123')
  
  // this function to make timeout in 2 second
  await page.waitForTimeout(2000);

  // take screenshot
  const screenshot18 = await page.screenshot()
  test.info().attach('login_page', {contentType: 'image/png', body: screenshot18 });

  // this function to find element field Login Button and click that button
  await page.getByRole('button', {name : 'Login'}).click()
  
  // this assertion Text Dashboard in dashboard_page
  await expect(page.locator('.oxd-text--h6')).toBeVisible();
  //take timeout
  await page.waitForTimeout(2000);

  //take screenshot Dashboard_Menu
  const screenshot19 = await page.screenshot()
  test.info().attach('Dashboard_Page', {contentType: 'image/png', body: screenshot19 });

  // this function to find element field Menu Performance
  await page.getByRole('link', {name : 'Performance'}).click()
  //take timeout
  await page.waitForTimeout(2000);

  // this assertion URL Menu Time
  await expect (page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/performance/searchEvaluatePerformanceReview')
  await page.waitForTimeout(2000);

  //take screenshot Menu Time
  const screenshot20 = await page.screenshot()
  test.info().attach('Menu_My Performance Page', {contentType: 'image/png', body: screenshot20 });

})