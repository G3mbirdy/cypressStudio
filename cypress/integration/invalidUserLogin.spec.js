// invalidUserLogin.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
/* ==== Test Created with Cypress Studio ==== */
it('Login as problem user', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('https://www.saucedemo.com/');
  cy.get('[data-test="username"]').clear();
  cy.get('[data-test="username"]').type('problem_user');
  cy.get('[data-test="password"]').clear();
  cy.get('[data-test="password"]').type('secret_sauce');
  cy.get('[data-test="login-button"]').click();
  cy.get('#item_4_img_link > .inventory_item_img').should('have.attr', 'src', '/static/media/sl-404.168b1cce.jpg');
  cy.get('#item_4_img_link > .inventory_item_img').should('be.visible');
  cy.get('#item_0_img_link > .inventory_item_img').should('have.attr', 'src', '/static/media/sl-404.168b1cce.jpg');
  cy.get('#item_4_img_link > .inventory_item_img').should('have.attr', 'alt', 'Sauce Labs Backpack');
  cy.get('#item_0_img_link > .inventory_item_img').should('have.attr', 'alt', 'Sauce Labs Bike Light');
  cy.get('#react-burger-menu-btn').click();
  cy.get('#logout_sidebar_link').should('have.id', 'logout_sidebar_link');
  cy.get('#logout_sidebar_link').should('be.visible');
  cy.get('#logout_sidebar_link').should('have.text', 'Logout');
  cy.get('#logout_sidebar_link').click();
  cy.get('[data-test="username"]').should('be.visible');
  cy.get('[data-test="username"]').should('be.enabled');
  cy.get('[data-test="username"]').should('have.id', 'user-name');
  cy.get('[data-test="password"]').should('be.visible');
  cy.get('[data-test="password"]').should('be.enabled');
  cy.get('[data-test="login-button"]').should('have.class', 'submit-button');
  cy.get('[data-test="login-button"]').should('have.value', 'Login');
  cy.get('[data-test="login-button"]').should('be.visible');
  cy.get('[data-test="login-button"]').should('be.enabled');
  /* ==== End Cypress Studio ==== */
});
