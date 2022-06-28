// invalidUserProductDetails.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
/* ==== Test Created with Cypress Studio ==== */
it('problemUserDetailedView', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('https://www.saucedemo.com/');
  cy.get('[data-test="username"]').clear();
  cy.get('[data-test="username"]').type('problem_user');
  cy.get('[data-test="password"]').clear();
  cy.get('[data-test="password"]').type('secret_sauce');
  cy.get('[data-test="login-button"]').click();
  cy.get('#item_1_title_link > .inventory_item_name').should('have.text', 'Sauce Labs Bolt T-Shirt');
  cy.get(':nth-child(3) > .inventory_item_description > .pricebar > .inventory_item_price').should('have.text', '$15.99');
  cy.get('#item_1_img_link > .inventory_item_img').should('have.attr', 'src', '/static/media/sl-404.168b1cce.jpg');
  cy.get('#item_1_img_link > .inventory_item_img').should('be.visible');
  cy.get('#item_1_title_link > .inventory_item_name').click();
  cy.get('.inventory_details_img').should('have.attr', 'src', '/static/media/red-onesie-1200x1500.1b15e1fa.jpg');
  cy.get('.inventory_details_img').should('be.visible');
  cy.get('.inventory_details_price').should('have.text', '$7.99');
  cy.get('[data-test="back-to-products"]').click();
  cy.get('#item_0_title_link > .inventory_item_name').should('have.text', 'Sauce Labs Bike Light');
  cy.get(':nth-child(2) > .inventory_item_description > .pricebar > .inventory_item_price').should('have.text', '$9.99');
  cy.get('#item_0_img_link > .inventory_item_img').should('have.attr', 'src', '/static/media/sl-404.168b1cce.jpg');
  cy.get('#item_0_title_link > .inventory_item_name').click();
  cy.get('.inventory_details_img').should('have.attr', 'src', '/static/media/bolt-shirt-1200x1500.c0dae290.jpg');
  cy.get('.inventory_details_price').should('have.text', '$15.99');
  cy.get('.inventory_details_name').should('have.text', 'Sauce Labs Bolt T-Shirt');
  cy.get('.inventory_details_desc').should('have.text', 'Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.');
  cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').should('be.visible');
  cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').should('be.enabled');
  cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').should('have.text', 'Add to cart');
  /* ==== End Cypress Studio ==== */
});
