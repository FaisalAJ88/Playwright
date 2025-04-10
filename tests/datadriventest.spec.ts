import { test, expect } from '@playwright/test';
import testData from './testData.json';

test.describe('OrangeHRM Login Tests - Data Driven', () => {
  for (const data of testData) {
    test(`Login Test with username: ${data.username}`, async ({ page }) => {
      await page.goto('https://opensource-demo.orangehrmlive.com/');

      await page.fill('input[name="username"]', data.username);
      await page.fill('input[name="password"]', data.password);
      await page.click('button[type="submit"]');

      if (data.username === 'Admin' && data.password === 'admin123') {
        await expect(page.locator('h6')).toHaveText('Dashboard');
      } else {
        await expect(page.locator('.oxd-alert-content-text')).toContainText('Invalid credentials');
      }
    });
  }
});
