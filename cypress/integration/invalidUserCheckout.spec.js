// invalidUserCheckout.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
/* ==== Test Created with Cypress Studio ==== */
it('problemUserCheckout', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('https://www.saucedemo.com/');
  cy.get('[data-test="username"]').clear();
  cy.get('[data-test="username"]').type('problem_user');
  cy.get('[data-test="password"]').clear();
  cy.get('[data-test="password"]').type('secret_sauce');
  cy.get('[data-test="login-button"]').click();
  cy.get(':nth-child(1) > .inventory_item_description > .pricebar > .inventory_item_price').should('have.text', '$29.99');
  cy.get('#item_4_title_link > .inventory_item_name').should('have.text', 'Sauce Labs Backpack');
  cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').should('have.text', 'Add to cart');
  cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  cy.get('[data-test="remove-sauce-labs-backpack"]').should('have.text', 'Remove');
  cy.get('.shopping_cart_badge').should('have.text', '1');
  cy.get('#item_0_title_link > .inventory_item_name').should('have.text', 'Sauce Labs Bike Light');
  cy.get(':nth-child(2) > .inventory_item_description > .pricebar > .inventory_item_price').should('have.text', '$9.99');
  cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').should('have.text', 'Add to cart');
  cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  cy.get('[data-test="remove-sauce-labs-bike-light"]').should('have.text', 'Remove');
  cy.get('.shopping_cart_badge').should('have.text', '2');
  cy.get('.shopping_cart_link').click();
  cy.get(':nth-child(3) > .cart_item_label > .item_pricebar > .inventory_item_price').should('have.text', '$29.99');
  cy.get('#item_4_title_link > .inventory_item_name').should('have.text', 'Sauce Labs Backpack');
  cy.get(':nth-child(4) > .cart_item_label > .item_pricebar > .inventory_item_price').should('have.text', '$9.99');
  cy.get('#item_0_title_link > .inventory_item_name').should('have.text', 'Sauce Labs Bike Light');
  cy.get('[data-test="checkout"]').should('have.text', 'Checkout');
  cy.get('[data-test="checkout"]').click();
  cy.get('[data-test="firstName"]').clear();
  cy.get('[data-test="firstName"]').type('first name');
  cy.get('[data-test="postalCode"]').clear();
  cy.get('[data-test="postalCode"]').type('zip');
  cy.get('[data-test="lastName"]').click();
  cy.get('[data-test="continue"]').click();
  cy.get('[data-test="error"]').should('have.attr', 'data-test', 'error');
  cy.get('.error-message-container').should('have.text', 'Error: Last Name is required');
  /* ==== End Cypress Studio ==== */
});
