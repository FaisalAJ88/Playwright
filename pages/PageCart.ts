import { Page } from 'playwright';

export class PageCart {
  page: Page;

  // Selectors for cart page and elements
  addToCartButton: string = '.btn_inventory';        // Button to add items to the cart
  cartLink: string = '.shopping_cart_link';          // Link to open the cart
  checkoutButton: string = '#checkout';             // Button to proceed to checkout
  firstNameInput: string = '#first-name';           // First name input on checkout
  lastNameInput: string = '#last-name';             // Last name input on checkout
  postalCodeInput: string = '#postal-code';         // Postal code input on checkout
  continueButton: string = '#continue';             // Continue button on checkout
  finishButton: string = '#finish';                 // Finish button to complete the checkout
  checkoutSummary: string = '.complete-header';     // Element that indicates successful checkout
  
  constructor(page: Page) {
    this.page = page;
  }

  // Method to add an item to the cart by clicking the 'Add to Cart' button
  async addItemToCart(itemIndex: number = 0) {
    const addToCartButtons = await this.page.$$(this.addToCartButton);
    if (addToCartButtons.length > itemIndex) {
      await addToCartButtons[itemIndex].click();  // Click on the 'Add to Cart' button of the item at the given index
    }
  }

  // Method to go to the cart
  async goToCart() {
    await this.page.click(this.cartLink);  // Click the cart link to navigate to the cart
  }

  // Method to proceed to checkout
  async proceedToCheckout() {
    await this.page.click(this.checkoutButton);  // Click the 'Checkout' button
  }

  // Method to fill the checkout form with the user's details
  async fillCheckoutForm(firstName: string, lastName: string, postalCode: string) {
    await this.page.fill(this.firstNameInput, firstName);  // Fill the first name field
    await this.page.fill(this.lastNameInput, lastName);    // Fill the last name field
    await this.page.fill(this.postalCodeInput, postalCode);  // Fill the postal code field
  }

  // Method to continue with the checkout process
  async continueCheckout() {
    await this.page.click(this.continueButton);  // Click the 'Continue' button after filling the form
  }

  // Method to complete the checkout
  async finishCheckout() {
    await this.page.click(this.finishButton);  // Click the 'Finish' button to complete the checkout
  }

  // Method to verify the checkout success message
  async verifyCheckoutSuccess() {
    const summary = await this.page.textContent(this.checkoutSummary);
    return summary?.includes('THANK YOU FOR YOUR ORDER');
  }
}
