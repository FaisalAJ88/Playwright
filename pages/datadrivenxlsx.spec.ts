import { test, expect } from '@playwright/test';
import * as XLSX from 'xlsx';
import * as path from 'path';

// Read data from the Excel file
function getLoginData(): { username: string; password: string }[] {
  const filePath = path.resolve(__dirname, 'loginData.xlsx');
  const workbook = XLSX.readFile(filePath);
  const sheetName = workbook.SheetNames[0]; // Assuming the data is in the first sheet
  const sheet = workbook.Sheets[sheetName];
  
  // Convert sheet data to JSON format
  const data = XLSX.utils.sheet_to_json(sheet);
  return data as { username: string; password: string }[];
}

// Data-driven tests
test.describe('OrangeHRM Login - Excel Data Driven Tests', () => {
  const loginData = getLoginData();

  for (const data of loginData) {
    test(`Login test with username: ${data.username}`, async ({ page }) => {
      await page.goto('https://opensource-demo.orangehrmlive.com/');

      // Fill in login details and submit
      await page.fill('input[name="username"]', data.username);
      await page.fill('input[name="password"]', data.password);
      await page.click('button[type="submit"]');

      // Assert based on credentials
      if (data.username === 'Admin' && data.password === 'admin123') {
        // Check if the login was successful and we are redirected to the dashboard
        await expect(page.locator('h6')).toHaveText('Dashboard');
        //take timeout
        await page.waitForTimeout(2000);
        const screenshot1 = await page.screenshot();
        test.info().attach('Valid Login', { contentType: 'image/png', body: screenshot1 });
      } else {
        // Check if we got the invalid credentials alert
        await expect(page.locator('.oxd-alert-content-text')).toContainText('Invalid credentials');
        //take timeout
        await page.waitForTimeout(2000);
        const screenshot2 = await page.screenshot();
        test.info().attach('Invalid Login', { contentType: 'image/png', body: screenshot2 });
      }
    });
  }
});
