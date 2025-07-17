import { test, expect } from './fixtures.spec'; 
// this code is to import capability 
// from test in playwrigt and expect to import capability to assertion 

//this function to state 1 test case is independent and isolated from other test case 
// for javascript test run by asyncronus mode, 
// but in playwright capability feel free to make multiple case can be run in serial , 
// pararel or default by set in playwright.config.ts

test('Valid Login - Checkout', async ({ page }) => {
  
  // Valid Login Capabilities describes in fixture page

  // Select first product and add to cart
  await page.click('#add-to-cart-sauce-labs-backpack');
  
  // Go to cart
  await page.click('.shopping_cart_link');
  
  //take timeout
  await page.waitForTimeout(2000);
  const screenshot2 = await page.screenshot();
  test.info().attach('cart_page', { contentType: 'image/png', body: screenshot2 });

  // Proceed to checkout
  await page.click('#checkout');

  //take timeout
  await page.waitForTimeout(2000);
  const screenshot3 = await page.screenshot();
  test.info().attach('checkout_page', { contentType: 'image/png', body: screenshot3 });

  // Fill checkout information
  await page.fill('#first-name', 'John');
  await page.fill('#last-name', 'Doe');
  await page.fill('#postal-code', '12345');
  await page.click('#continue');
  
  //take timeout
  await page.waitForTimeout(2000);
  const screenshot4 = await page.screenshot();
  test.info().attach('fill_checkout_page', { contentType: 'image/png', body: screenshot4 });
  // Finish checkout
  await page.click('#finish');
  
  // Verify order completion
  await page.waitForSelector('.complete-header');
  console.log('Order completed successfully!');

  //take timeout
  await page.waitForTimeout(2000);
  const screenshot5 = await page.screenshot();
  test.info().attach('success_checkout_notif', { contentType: 'image/png', body: screenshot5 });
});

test('Login Saucedemo with invalid username', async ({ page }) => {

  // this function to open web saucedemo.com
  await page.goto('https://www.saucedemo.com');

  // this function to find element field Username and fill the text box
  await page.getByRole('textbox', {name:'Username'}).fill('visual_user123');

  // this function to find element field Password and fill the text box
  await page.getByRole('textbox', {name:'Password'}).fill('secret_sauce');
  
  // take timeout and screenshoot
  await page.waitForTimeout(2000);
  const screenshot6 = await page.screenshot();
  test.info().attach('success_checkout_notif', { contentType: 'image/png', body: screenshot6 });

  // this function to find element field Login Button and click that button
  await page.getByRole('button', {name:'Login'}).click();
  
  // this assertion if user invalid credential will be get some failed respone
  await expect(page.getByText('Epic sadface: Username and password do not match any user in this service')).toBeVisible();

  // take timeout and screenshoot
  await page.waitForTimeout(2000);
  const screenshot7 = await page.screenshot();
  test.info().attach('success_checkout_notif', { contentType: 'image/png', body: screenshot7 });

});