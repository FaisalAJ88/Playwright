import { test, expect, Page } from '@playwright/test';
import { PageLogin } from '../pages/LoginPage'; // Import the PageLogin class
import { PageCart } from '../pages/PageCart';   // Import the PageCart class

// Define a test suite with hooks (before and after)
test.describe('Add items to Cart and Checkout', () => {
  
  let page: Page;
  let loginPage: PageLogin;
  let cartPage: PageCart;

  // 'before' hook to login before running the tests
  test.beforeAll(async ({ browser }) => {
    // Launch a browser instance and open a new page
    page = await browser.newPage();
    
    // Initialize PageLogin and PageCart objects
    loginPage = new PageLogin(page);
    cartPage = new PageCart(page);
    
    // Go to the SauceDemo login page
    await page.goto('https://www.saucedemo.com/');
    await page.waitForTimeout(2000);
    await page.screenshot({ path: 'login_page1.png' });
    
    // Log in with valid credentials
    await loginPage.login('standard_user', 'secret_sauce');
    await page.waitForTimeout(2000);
    // Ensure we're on the inventory page after login
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await page.waitForTimeout(2000);
    await page.screenshot({ path: 'inventory_page.png' });
  });

  // Test to add an item to the cart and complete the checkout
  test('Add to Cart and Checkout', async () => {

    // Add the first item to the cart
    await cartPage.addItemToCart(0); 
    await page.waitForTimeout(2000);
    await page.screenshot({ path: 'add_item.png' });

    // Navigate to the cart
    await cartPage.goToCart();
    await page.waitForTimeout(2000);
    await page.screenshot({ path: 'goto_cart.png' });

    // Proceed to checkout
    await cartPage.proceedToCheckout();
    await page.waitForTimeout(2000);

    // Fill in checkout details
    await cartPage.fillCheckoutForm('John', 'Doe', '12345');
    await page.waitForTimeout(2000);
    await page.screenshot({ path: 'fill_checkout_form.png' });

    // Continue to the next checkout step
    await cartPage.continueCheckout();
    await page.waitForTimeout(2000);
    await page.screenshot({ path: 'continue_checkout.png' });

    // Complete the checkout
    await cartPage.finishCheckout();
    await page.waitForTimeout(2000);
    await page.screenshot({ path: 'finish_checkout.png' });
  });

  // 'after' hook to clean up after the test
  test.afterAll(async () => {
    
    // Close the page after the tests are done
    await page.close();
  });
});
