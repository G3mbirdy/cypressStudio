// loginScreen.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
/* ==== Test Created with Cypress Studio ==== */
it('Verify Login Screen', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('https://www.saucedemo.com/');
  cy.get('.login_logo').should('be.visible');
  cy.get('.bot_column').should('be.visible');
  cy.get('.login_password').should('be.visible');
  cy.get('.login_password').should('have.text', 'Password for all users:secret_sauce');
  cy.get('#login_credentials').should('be.visible');
  cy.get('#login_credentials').should('have.text', 'Accepted usernames are:standard_userlocked_out_userproblem_userperformance_glitch_user');
  cy.get('[data-test="username"]').should('be.visible');
  cy.get('[data-test="username"]').should('be.enabled');
  cy.get('[data-test="username"]').should('have.id', 'user-name');
  cy.get('[data-test="password"]').should('have.id', 'password');
  cy.get('[data-test="password"]').should('be.visible');
  cy.get('[data-test="password"]').should('be.enabled');
  cy.get('[data-test="login-button"]').should('be.visible');
  cy.get('[data-test="login-button"]').should('be.enabled');
  cy.get('[data-test="login-button"]').should('have.id', 'login-button');
  cy.get('[data-test="login-button"]').should('have.value', 'Login');
  /* ==== End Cypress Studio ==== */
});
it('Login and Logout', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.get('[data-test="username"]').clear();
  cy.get('[data-test="username"]').type('standard_user');
  cy.get('[data-test="password"]').clear();
  cy.get('[data-test="password"]').type('secret_sauce');
  cy.get('[data-test="login-button"]').click();
  cy.get('.header_secondary_container').should('be.visible');
  cy.get('.title').should('have.class', 'title');
  cy.get('.title').should('be.visible');
  cy.get('#react-burger-menu-btn').click();
  cy.get('#logout_sidebar_link').click();
  cy.get('[data-test="login-button"]').should('have.id', 'login-button');
  /* ==== End Cypress Studio ==== */
});
