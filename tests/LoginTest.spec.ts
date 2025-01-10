import { test, expect } from '@playwright/test';
import { PageLogin } from '../pages/LoginPage'; // Import the PageLogin class

// Define the test
test('Login to Saucedemo', async ({ page }) => {
  // Create an instance of PageLogin
  const loginPage = new PageLogin(page);

  // Go to the SauceDemo login page
  await page.goto('https://www.saucedemo.com/');
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'login_page.png' });

  // Perform login with valid credentials
  await loginPage.login('standard_user', 'secret_sauce');
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'success_login.png' });
});
