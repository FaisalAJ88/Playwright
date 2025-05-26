# Test info

- Name: TC 01: Login BIO STAR 2
- Location: D:\Playwright\tests\oddbit.spec.ts:3:5

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toBeVisible()

Locator: locator('.span[ng-label="common.dashboard"]')
Expected: visible
Received: <element(s) not found>
Call log:
  - expect.toBeVisible with timeout 5000ms
  - waiting for locator('.span[ng-label="common.dashboard"]')

    at D:\Playwright\tests\oddbit.spec.ts:25:68
```

# Page snapshot

```yaml
- link:
  - /url: "#/dashboard"
  - heading [level=1]
- list:
  - listitem:
    - button "Settings"
  - listitem:
    - button "Port"
  - listitem:
    - button "About"
  - listitem:
    - link "Help":
      - /url: /help/en/index.html
- list
- paragraph: Administrator
- paragraph:
  - button "Logout"
- navigation:
  - list:
    - listitem:
      - button "DASH BOARD"
    - listitem:
      - button "USER"
    - listitem:
      - button "DEVICE"
    - listitem:
      - button "DOOR"
    - listitem:
      - button "ACCESS CONTROL"
    - listitem:
      - button "MONITORING"
    - listitem:
      - button "TIME ATTENDANCE"
    - listitem:
      - button "REPORT"
- heading "Dashboard" [level=2]
- text: Launch New Dashboard
- list:
  - listitem:
    - text: Overview
    - list:
      - listitem: Week
      - listitem: Month
      - listitem: Year
- heading "16 May 2025 ~ 22 May 2025" [level=1]
- text: Total 0
- list
- heading "Usage" [level=1]
- list:
  - listitem:
    - term: User
    - definition: "1"
  - listitem:
    - term: Visual Face
    - definition: "0"
  - listitem:
    - term: Face
    - definition: "0"
  - listitem:
    - term: Fingerprint
    - definition: "0"
  - listitem:
    - term: Card
    - definition: "0"
  - listitem:
    - text: 0.0%
    - term: Device
    - definition: 0/1000
  - listitem:
    - text: 0.0%
    - term: Door
    - definition: 0/1000
  - listitem:
    - term: Access Group
    - definition: "0"
- heading "Notice" [level=1]
- list:
  - listitem: "- What's new with BioStar 2 v2.9.8"
- heading "Missed Alarm" [level=1]
- article:
  - table:
    - rowgroup
  - table:
    - rowgroup:
      - row "Date Device User Alarm":
        - cell "Date"
        - cell "Device"
        - cell "User"
        - cell "Alarm"
  - text: Not found
- link:
  - /url: javascript:void(null);
- img
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
>  25 |   await expect(page.locator('.span[ng-label="common.dashboard"]')).toBeVisible();
      |                                                                    ^ Error: Timed out 5000ms waiting for expect(locator).toBeVisible()
   26 |
   27 |   //take timeout
   28 |   await page.waitForTimeout(1000);
   29 |
   30 |   //take screenshot
   31 |   const screenshot1 = await page.screenshot()
   32 |   test.info().attach('dashboard_page', {contentType: 'image/png', body: screenshot1});
   33 |
   34 | })
   35 |
   36 | test.skip('TC 02: Forgot Password', async ({ page })=> {
   37 |   
   38 |   // this function to open web opensource demo orange HRM
   39 |   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
   40 |
   41 |   // click text button forgot email
   42 |   await page.click('.orangehrm-login-forgot-header')
   43 |   await page.waitForTimeout(2000);
   44 |
   45 |   await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode');
   46 |   await page.waitForTimeout(2000);
   47 |
   48 |   // input textbox username
   49 |   await page.getByRole('textbox', {name:'Username'}).fill('Test123')
   50 |   await page.waitForTimeout(2000);
   51 |
   52 |   // save screenshot
   53 |   const screenshot2 = await page.screenshot()
   54 |   test.info().attach('Reset_Password', {contentType: 'image/png', body: screenshot2});
   55 |
   56 |   // Click button Reset Password
   57 |   await page.getByRole('button', {name:'Reset Password'}).click()
   58 |
   59 | })
   60 |
   61 | test.skip('TC 03: Check Link', async ({ page })=> {
   62 |   //this script to create variable browser 
   63 |   const browser=await chromium.launch();
   64 |
   65 |   //this script to create variable context 
   66 |   const context=await browser.newContext();
   67 |
   68 |   //this script to create variable page1 that can become initial for newpage/new windows of browser
   69 |   const page1=await context.newPage();
   70 |   
   71 |   // this function to open web opensource demo orange HRM
   72 |   await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
   73 |   await page1.waitForTimeout(2000);
   74 |
   75 |   //this script to create variable pagepromise to waiting page per page 
   76 |   const pagePromise=context.waitForEvent('page')
   77 |
   78 |   // click Link Footer
   79 |   await page1.getByRole('link', {name: 'OrangeHRM, Inc'}).click()
   80 |   await page1.waitForTimeout(2000);
   81 |
   82 |   //this script to create variable newPage 
   83 |   const newPage=await pagePromise;
   84 |
   85 |   // assertion URL Link Youtube website
   86 |   await expect (newPage).toHaveURL('https://www.orangehrm.com/')
   87 |   await newPage.waitForTimeout(2000);
   88 |
   89 |   // save screenshot
   90 |   const screenshot3 = await newPage.screenshot()
   91 |   test.info().attach('Check_Link', {contentType: 'image/png', body: screenshot3});
   92 |   
   93 | })
   94 |
   95 | test.skip('TC 04: Check Link Youtube', async ({ page })=> {
   96 |   
   97 |   //this script to create variable browser 
   98 |   const browser=await chromium.launch();
   99 |
  100 |   //this script to create variable context 
  101 |   const context=await browser.newContext();
  102 |
  103 |   //this script to create variable page1 that can become initial for newpage/new windows of browser
  104 |   const page1=await context.newPage();
  105 |   
  106 |   // this function to open web opensource demo orange HRM
  107 |   await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  108 |   await page1.waitForTimeout(2000);
  109 |
  110 |   //this script to create variable pagepromise to waiting page per page 
  111 |   const pagePromise=context.waitForEvent('page')
  112 |
  113 |   // click Link Icon Youtube
  114 |   await page1.locator('[href="https://www.youtube.com/c/OrangeHRMInc"] > .oxd-icon').click();
  115 |   await page1.waitForTimeout(2000);
  116 |
  117 |   //this script to create variable newPage 
  118 |   const newPage2=await pagePromise;
  119 |
  120 |   // assertion URL Link Youtube website
  121 |   await expect (newPage2).toHaveURL('https://www.youtube.com/c/OrangeHRMInc')
  122 |   await newPage2.waitForTimeout(2000);
  123 |
  124 |   // save screenshot
  125 |   const screenshot4 = await newPage2.screenshot()
```