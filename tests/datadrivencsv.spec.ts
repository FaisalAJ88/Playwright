import { test, expect } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';
import { parse } from 'csv-parse/sync';

interface LoginData {
  username: string;
  password: string;
}

// Read and parse CSV data
function getLoginData(): LoginData[] {
  const csvFilePath = path.resolve(__dirname, 'loginData.csv');
  const fileContent = fs.readFileSync(csvFilePath, { encoding: 'utf-8' });
  const records = parse(fileContent, {
    columns: true,
    skip_empty_lines: true
  });
  return records;
}

// Login tests using CSV data
test.describe('OrangeHRM Login - CSV Data Driven Tests', () => {
  const loginData = getLoginData();

  for (const data of loginData) {
    test(`Login test with username: ${data.username}`, async ({ page }) => {
      await page.goto('https://opensource-demo.orangehrmlive.com/');

      await page.fill('input[name="username"]', data.username);
      await page.fill('input[name="password"]', data.password);
      await page.click('button[type="submit"]');

      if (data.username === 'Admin' && data.password === 'admin123') {
        await expect(page.locator('h6')).toHaveText('Dashboard');
        //take timeout
        await page.waitForTimeout(2000);
        const screenshot1 = await page.screenshot();
        test.info().attach('Valid Login', { contentType: 'image/png', body: screenshot1 });

      } else {
        await expect(page.locator('.oxd-alert-content-text')).toContainText('Invalid credentials');
        //take timeout
        await page.waitForTimeout(2000);
        const screenshot2 = await page.screenshot();
        test.info().attach('Invalid Login', { contentType: 'image/png', body: screenshot2 });
      }
    });
  }
});
