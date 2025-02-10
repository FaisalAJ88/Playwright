import { test, expect } from '@playwright/test'; 
// this code is to import capability 
// from test in playwrigt and expect to import capability to assertion 

//this function to state 1 test case is independent and isolated from other test case 
// for javascript/typescript test run by asyncronus mode, 
// but in playwright capability feel free to make multiple case can be run in serial , 
// pararel or default by set in playwright.config.ts
test('Login Web Lapor with Valid Credential', async ({ page }) => { 

  // this script to open page daftar in Lapor web
  await page.goto('https://lapor.folkatech.com/'); 

  // this script to get element by Placeholder from field Email and type on that textbox
  await page.getByPlaceholder('Email').fill('admin@example.com');

  // this script to get element by Id from field password and type on that textbox
  await page.locator('#password').fill('password');

  // this script to get element by role from field Button Sign In and click on that
  await page.getByRole('button', {name :'Sign in'}).click();

  //this script to assertion until get valid URL after success login
  await expect(page).toHaveURL('https://lapor.folkatech.com/admin/dashboard');

  // this script for make timeout in 2 second
  await page.waitForTimeout(2000); 

  // this script to save screenshot 
  await page.screenshot({ path: 'successLogin.png' }); 

});

test('Login Web Lapor with Invalid Credential', async ({ page }) => { 

    // this script to open page daftar in Lapor web
    await page.goto('https://lapor.folkatech.com/'); 
  
    // this script to get element by Placeholder from field Email and type on that textbox
    await page.getByPlaceholder('Email').fill('admin@example.com');
  
    // this script to get element by Id from field password and type on that textbox
    await page.locator('#password').fill('password123');
  
    // this script to get element by role from field Button Sign In and click on that
    await page.getByRole('button', {name :'Sign in'}).click();
    
    // this script for make timeout in 2 second
    await page.waitForTimeout(2000); 

    //this script to assertion until get rrror message
    await expect(page.getByText('Login Gagal! Kata sandi salah.')).toBeVisible();
  
    // this script to save screenshot 
    await page.screenshot({ path: 'FailedLogin.png' }); 
  
  });