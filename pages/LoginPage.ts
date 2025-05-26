import { Page } from 'playwright';

export class PageLogin {
  page: Page;

  // Selectors for the login page
  usernameInput: string = '#user-name';
  passwordInput: string = '#password';
  loginButton: string = '#login-button';
  errorMessage: string = 'h3[data-test="error"]';

  constructor(page: Page) {
    this.page = page;
  }

  // Method to log in with username and password
  async login(username: string, password: string) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }

  // Method to check if error message exists (for failed login)
  async getErrorMessage() {
    return await this.page.textContent(this.errorMessage);
  }
}
