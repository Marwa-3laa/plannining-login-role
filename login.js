exports.LoginPage = class LoginPage {
   constructor(page) {
     this.page = page;
     this.username_textbox = page.getByPlaceholder('User name or email');
     this.password_textbox = page.getByPlaceholder('Password');
     this.login_button = page.getByRole('button', { name: 'Log in' });
   }
 
   async gotoLoginPage(){
      await this.page.goto('http://10.24.105.84:4200/account/login');
   }
 
   async login(username, password) {
     await page.getByPlaceholder('User name or email').click();
     await this.username_textbox.fill(username);
     await page.getByPlaceholder('Password').click();
     await this.password_textbox.fill(password);
     await this.login_button.click();

   }
 };
