import { test, expect } from '@playwright/test';
import{LoginPage} from '../pages/login';


//valid login
test('valid login', async ({ page }) => {
    const login = new LoginPage(page)
    await login.gotoLoginPage()
    await login.Login('admin', '123qwe' )
  
//   await page.goto('http://10.24.105.84:4200/account/login');
//   await page.getByPlaceholder('User name or email').click();
//   await page.getByPlaceholder('User name or email').fill('admin');
//   await page.getByPlaceholder('Password').click();
//   await page.getByPlaceholder('Password').fill('123qwe');
//   await page.getByRole('button', { name: 'Log in' }).click();
await expect(page).toHaveURL(/.*business-form/)
});



// invalid login
test('invalid login', async ({ page }) => {
    const login = new LoginPage(page)
    await login.gotoLoginPage()
    await login.Login('admin', '12nnnn3qwe' )
  
//   await page.goto('http://10.24.105.84:4200/account/login');
//   await page.getByPlaceholder('User name or email').click();
//   await page.getByPlaceholder('User name or email').fill('admin');
//   await page.getByPlaceholder('Password').click();
//   await page.getByPlaceholder('Password').fill('123qwe');
//   await page.getByRole('button', { name: 'Log in' }).click();
  const locator = page.locator('.swal2-content');
  await expect(locator).toHaveText(/Invalid user name or password/);
  await page.getByRole('button', { name: 'Ok' }).click();
});




// invalid add repeated role
test('invalid add repeated role', async ({ page }) => {
    const login = new LoginPage(page)
    await login.gotoLoginPage()
    await login.Login('admin', '123qwe' )
  
//   await page.goto('http://10.24.105.84:4200/app/roles');
//   await page.waitForTimeout(4000); 
//   await page.getByPlaceholder('User name or email').click();
//   await page.getByPlaceholder('User name or email').fill('admin');
//   await page.getByPlaceholder('Password').click();
//   await page.getByPlaceholder('Password').fill('123qwe');
//   await page.getByRole('button', { name: 'Log in' }).click();
//   await page.getByRole('link', { name: ' Create New' }).click();
  await page.locator('#name').click();
  await page.locator('#name').fill('marwa11');
  await page.getByLabel('Display Name').click();
  await page.getByLabel('Display Name').fill('marwa22');
  await page.getByRole('button', { name: 'Save' }).click();
  const locator = page.locator('.swal2-title');
  await expect(locator).toHaveText(/Role name marwa11 is already taken./);
  await page.getByRole('button', { name: 'Ok' }).click();
  await page.waitForTimeout(2000);
  await page.getByLabel('Close').click();
});



// valid edit role
test('edit-role', async ({ page }) => {
    const login = new LoginPage(page)
    await login.gotoLoginPage()
    await login.Login('admin', '123qwe' )  

//   await page.goto('http://10.24.105.84:4200/app/roles');
//   await page.getByPlaceholder('User name or email').click();
//   await page.getByPlaceholder('User name or email').fill('admin');
//   await page.getByPlaceholder('Password').click();
//   await page.getByPlaceholder('Password').fill('123qwe');
//   await page.getByRole('button', { name: 'Log in' }).click();
  await page.waitForTimeout(2000);
  await page.locator('xpath=//html/body/app-root/ng-component/div/div[1]/ng-component/div/section[2]/div/div[2]/div[1]/table/tbody/tr[3]/td[3]/button[1]').click();
  await page.getByPlaceholder('Description').click();
  await page.getByPlaceholder('Description').fill('aa new role des1');
  await page.getByRole('button', { name: 'Save' }).click();
});