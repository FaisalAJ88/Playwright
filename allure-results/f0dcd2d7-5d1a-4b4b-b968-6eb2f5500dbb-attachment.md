# Test info

- Name: TC 01: Login BIO STAR 2
- Location: D:\Playwright\tests\oddbit.spec.ts:3:5

# Error details

```
Error: page.waitForURL: Test ended.
=========================== logs ===========================
waiting for navigation to "https://10.16.115.168/#/dashboard" until "load"
============================================================
    at D:\Playwright\tests\oddbit.spec.ts:25:15
```

# Test source

```ts
   1 | import { test, expect, chromium, firefox, webkit } from '@playwright/test'; 
   2 |
   3 | test('TC 01: Login BIO STAR 2', async ({ page }) => {
   4 |
   5 |   // this function to open web BIO STAR 2
   6 |   await page.goto('https://10.16.115.168/#/login');
   7 |
   8 |   // this function to find element field Username and fill the text box
   9 |   await page.getByPlaceholder('ID').fill('admin')
   10 |
   11 |   // this function to find element field Password and fill the text box
   12 |   await page.getByPlaceholder('Password').fill('admin1234!')
   13 |   
   14 |   // this function to make timeout in 2 second
   15 |   await page.waitForTimeout(1000);
   16 |
   17 |   // take screenshot
   18 |   const screenshot = await page.screenshot()
   19 |   test.info().attach('login_page', {contentType: 'image/png', body: screenshot});
   20 |
   21 |   // this function to find element field Login Button and click that button
   22 |   await page.getByRole('link', {name : 'Login'}).click()
   23 |   
   24 |   // this assertion Text Dashboard in dashboard_page
>  25 |   expect(page.waitForURL('https://10.16.115.168/#/dashboard'))
      |               ^ Error: page.waitForURL: Test ended.
   26 |
   27 |   // take screenshot
   28 |   const screenshot1 = await page.screenshot()
   29 |   test.info().attach('login_page', {contentType: 'image/png', body: screenshot});
   30 |
   31 | })
   32 |
   33 | test.skip('TC 02: Forgot Password', async ({ page })=> {
   34 |   
   35 |   // this function to open web opensource demo orange HRM
   36 |   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
   37 |
   38 |   // click text button forgot email
   39 |   await page.click('.orangehrm-login-forgot-header')
   40 |   await page.waitForTimeout(2000);
   41 |
   42 |   await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode');
   43 |   await page.waitForTimeout(2000);
   44 |
   45 |   // input textbox username
   46 |   await page.getByRole('textbox', {name:'Username'}).fill('Test123')
   47 |   await page.waitForTimeout(2000);
   48 |
   49 |   // save screenshot
   50 |   const screenshot2 = await page.screenshot()
   51 |   test.info().attach('Reset_Password', {contentType: 'image/png', body: screenshot2});
   52 |
   53 |   // Click button Reset Password
   54 |   await page.getByRole('button', {name:'Reset Password'}).click()
   55 |
   56 | })
   57 |
   58 | test.skip('TC 03: Check Link', async ({ page })=> {
   59 |   //this script to create variable browser 
   60 |   const browser=await chromium.launch();
   61 |
   62 |   //this script to create variable context 
   63 |   const context=await browser.newContext();
   64 |
   65 |   //this script to create variable page1 that can become initial for newpage/new windows of browser
   66 |   const page1=await context.newPage();
   67 |   
   68 |   // this function to open web opensource demo orange HRM
   69 |   await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
   70 |   await page1.waitForTimeout(2000);
   71 |
   72 |   //this script to create variable pagepromise to waiting page per page 
   73 |   const pagePromise=context.waitForEvent('page')
   74 |
   75 |   // click Link Footer
   76 |   await page1.getByRole('link', {name: 'OrangeHRM, Inc'}).click()
   77 |   await page1.waitForTimeout(2000);
   78 |
   79 |   //this script to create variable newPage 
   80 |   const newPage=await pagePromise;
   81 |
   82 |   // assertion URL Link Youtube website
   83 |   await expect (newPage).toHaveURL('https://www.orangehrm.com/')
   84 |   await newPage.waitForTimeout(2000);
   85 |
   86 |   // save screenshot
   87 |   const screenshot3 = await newPage.screenshot()
   88 |   test.info().attach('Check_Link', {contentType: 'image/png', body: screenshot3});
   89 |   
   90 | })
   91 |
   92 | test.skip('TC 04: Check Link Youtube', async ({ page })=> {
   93 |   
   94 |   //this script to create variable browser 
   95 |   const browser=await chromium.launch();
   96 |
   97 |   //this script to create variable context 
   98 |   const context=await browser.newContext();
   99 |
  100 |   //this script to create variable page1 that can become initial for newpage/new windows of browser
  101 |   const page1=await context.newPage();
  102 |   
  103 |   // this function to open web opensource demo orange HRM
  104 |   await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  105 |   await page1.waitForTimeout(2000);
  106 |
  107 |   //this script to create variable pagepromise to waiting page per page 
  108 |   const pagePromise=context.waitForEvent('page')
  109 |
  110 |   // click Link Icon Youtube
  111 |   await page1.locator('[href="https://www.youtube.com/c/OrangeHRMInc"] > .oxd-icon').click();
  112 |   await page1.waitForTimeout(2000);
  113 |
  114 |   //this script to create variable newPage 
  115 |   const newPage2=await pagePromise;
  116 |
  117 |   // assertion URL Link Youtube website
  118 |   await expect (newPage2).toHaveURL('https://www.youtube.com/c/OrangeHRMInc')
  119 |   await newPage2.waitForTimeout(2000);
  120 |
  121 |   // save screenshot
  122 |   const screenshot4 = await newPage2.screenshot()
  123 |   test.info().attach('Check_Youtube_Link', {contentType: 'image/png', body: screenshot4});
  124 |   
  125 | })
```