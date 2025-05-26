# Test info

- Name: TC 01: Login BIO STAR 2 with Valid Credential
- Location: D:\Playwright\tests\oddbit.spec.ts:3:5

# Error details

```
Error: page.goto: net::ERR_CERT_COMMON_NAME_INVALID at https://127.0.0.1/#/login
Call log:
  - navigating to "https://127.0.0.1/#/login", waiting until "load"

    at D:\Playwright\tests\oddbit.spec.ts:6:14
```

# Page snapshot

```yaml
- heading "Your connection is not private" [level=1]
- paragraph:
  - text: Attackers might be trying to steal your information from
  - strong: 127.0.0.1
  - text: (for example, passwords, messages, or credit cards).
  - link "Learn more about this warning":
    - /url: "#"
- button "net::ERR_CERT_COMMON_NAME_INVALID"
- button "Back to safety"
- button "Advanced"
```

# Test source

```ts
   1 | import { test, expect, chromium, firefox, webkit } from '@playwright/test'; 
   2 |
   3 | test('TC 01: Login BIO STAR 2 with Valid Credential', async ({ page }) => {
   4 |
   5 |   // this function to open web BIO STAR 2
>  6 |   await page.goto('https://127.0.0.1/#/login');
     |              ^ Error: page.goto: net::ERR_CERT_COMMON_NAME_INVALID at https://127.0.0.1/#/login
   7 |
   8 |   // this function to find element field Username and fill the text box
   9 |   await page.getByPlaceholder('ID').fill('admin')
   10 |
   11 |   // this function to find element field Password and fill the text box
   12 |   await page.getByPlaceholder('Password').fill('admin1234!')
   13 |   
   14 |   // this function to make timeout in 2 second
   15 |   await page.waitForTimeout(2000);
   16 |
   17 |   // take screenshot
   18 |   const screenshot = await page.screenshot()
   19 |   test.info().attach('login_page', {contentType: 'image/png', body: screenshot});
   20 |
   21 |   // this function to find element field Login Button and click that button
   22 |   await page.getByRole('link', {name : 'Login'}).click()
   23 |   
   24 |   // this assertion Text Dashboard in dashboard_page
   25 |   expect(page.waitForURL('https://127.0.0.1/#/dashboard'))
   26 |
   27 |   // this function to make timeout in 4 second
   28 |   await page.waitForTimeout(4000);
   29 |
   30 |   // take screenshot Dashboard
   31 |   const screenshot1 = await page.screenshot()
   32 |   test.info().attach('Dashboard_page', {contentType: 'image/png', body: screenshot1});
   33 |
   34 | })
   35 |
   36 | test('TC 02: Login with Invalid Username', async ({ page })=> {
   37 |   
   38 |   // this function to open web BIO STAR 2
   39 |   await page.goto('https://127.0.0.1/#/login');
   40 |
   41 |   // this function to find element field Username and fill the text box
   42 |   await page.getByPlaceholder('ID').fill('admin')
   43 |
   44 |   // this function to find element field Password and fill the text box
   45 |   await page.getByPlaceholder('Password').fill('admin')
   46 |
   47 |   // this function to find element field Login Button and click that button
   48 |   await page.getByRole('link', {name : 'Login'}).click()
   49 |   
   50 |   // this assertion Text Dashboard in dashboard_page
   51 |   await expect(page.getByText('ID or password is incorrect. ')).toBeVisible();
   52 |   // save screenshot
   53 |   const screenshot2 = await page.screenshot()
   54 |   test.info().attach('Invalid_Username', {contentType: 'image/png', body: screenshot2});
   55 |
   56 | })
   57 |
   58 | test('TC 03: Login Invalid Password', async ({ page })=> {
   59 |   
   60 |   // this function to open web BIO STAR 2
   61 |   await page.goto('https://127.0.0.1/#/login');
   62 |
   63 |   // this function to find element field Username and fill the text box
   64 |   await page.getByPlaceholder('ID').fill('admin1234')
   65 |
   66 |   // this function to find element field Password and fill the text box
   67 |   await page.getByPlaceholder('Password').fill('admin1234!')
   68 |
   69 |   // this function to find element field Login Button and click that button
   70 |   await page.getByRole('link', {name : 'Login'}).click()
   71 |   
   72 |   // this assertion Text Dashboard in dashboard_page
   73 |   await expect(page.getByText('ID or password is incorrect. ')).toBeVisible();
   74 |   // save screenshot
   75 |   const screenshot2 = await page.screenshot()
   76 |   test.info().attach('Invalid_Password', {contentType: 'image/png', body: screenshot2});
   77 |   
   78 | })
   79 |
   80 | test.skip('TC 04: Check Link Youtube', async ({ page })=> {
   81 |   
   82 |   //this script to create variable browser 
   83 |   const browser=await chromium.launch();
   84 |
   85 |   //this script to create variable context 
   86 |   const context=await browser.newContext();
   87 |
   88 |   //this script to create variable page1 that can become initial for newpage/new windows of browser
   89 |   const page1=await context.newPage();
   90 |   
   91 |   // this function to open web opensource demo orange HRM
   92 |   await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
   93 |   await page1.waitForTimeout(2000);
   94 |
   95 |   //this script to create variable pagepromise to waiting page per page 
   96 |   const pagePromise=context.waitForEvent('page')
   97 |
   98 |   // click Link Icon Youtube
   99 |   await page1.locator('[href="https://www.youtube.com/c/OrangeHRMInc"] > .oxd-icon').click();
  100 |   await page1.waitForTimeout(2000);
  101 |
  102 |   //this script to create variable newPage 
  103 |   const newPage2=await pagePromise;
  104 |
  105 |   // assertion URL Link Youtube website
  106 |   await expect (newPage2).toHaveURL('https://www.youtube.com/c/OrangeHRMInc')
```