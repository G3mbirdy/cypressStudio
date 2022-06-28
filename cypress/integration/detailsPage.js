// detailsPage.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
/* ==== Test Created with Cypress Studio ==== */
it('Verify details page', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('https://www.saucedemo.com/');
  cy.get('[data-test="username"]').clear();
  cy.get('[data-test="username"]').type('standard_user');
  cy.get('[data-test="password"]').clear();
  cy.get('[data-test="password"]').type('secret_sauce');
  cy.get('[data-test="login-button"]').click();
  cy.get('#item_4_title_link > .inventory_item_name').click();
  cy.get('[data-test="back-to-products"]').should('be.visible');
  cy.get('[data-test="back-to-products"]').should('have.id', 'back-to-products');
  cy.get('.inventory_details_img').should('be.visible');
  cy.get('.inventory_details_img').should('have.class', 'inventory_details_img');
  cy.get('.inventory_details_name').should('have.class', 'inventory_details_name');
  cy.get('.inventory_details_desc').should('have.class', 'inventory_details_desc');
  cy.get('.inventory_details_price').should('have.class', 'inventory_details_price');
  cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').should('be.visible');
  cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').should('have.text', 'Add to cart');
  cy.get('[data-test="back-to-products"]').click();
  cy.get('.title').should('be.visible');
  cy.get('.title').should('have.text', 'Products');
  /* ==== End Cypress Studio ==== */
});
