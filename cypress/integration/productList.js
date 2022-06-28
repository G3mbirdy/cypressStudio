// productList.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
it('Verify Sortings', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('https://www.saucedemo.com/');
  cy.get('[data-test="username"]').clear();
  cy.get('[data-test="username"]').type('standard_user');
  cy.get('[data-test="password"]').clear();
  cy.get('[data-test="password"]').type('secret_sauce{enter}');
  cy.get('[data-test="product_sort_container"]').select('hilo');
  cy.get(':nth-child(1) > .inventory_item_description > .pricebar > .inventory_item_price').should('have.text', '$49.99');
  cy.get(':nth-child(2) > .inventory_item_description > .pricebar > .inventory_item_price').should('have.text', '$29.99');
  cy.get('[data-test="product_sort_container"]').select('lohi');
  cy.get(':nth-child(1) > .inventory_item_description > .pricebar > .inventory_item_price').should('have.text', '$7.99');
  cy.get(':nth-child(2) > .inventory_item_description > .pricebar > .inventory_item_price').should('have.text', '$9.99');
  /* ==== End Cypress Studio ==== */
});
  it('Verify product view', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.get('#item_2_img_link > .inventory_item_img').should('have.class', 'inventory_item_img');
  cy.get('#item_2_title_link > .inventory_item_name').should('have.class', 'inventory_item_name');
  cy.get('#item_2_img_link > .inventory_item_img').should('be.visible');
  cy.get('#item_2_title_link > .inventory_item_name').should('be.visible');
  cy.get(':nth-child(1) > .inventory_item_description > .inventory_item_label > .inventory_item_desc').should('have.class', 'inventory_item_desc');
  cy.get(':nth-child(1) > .inventory_item_description > .inventory_item_label > .inventory_item_desc').should('be.visible');
  cy.get(':nth-child(1) > .inventory_item_description > .pricebar > .inventory_item_price').should('be.visible');
  cy.get(':nth-child(1) > .inventory_item_description > .pricebar > .inventory_item_price').should('have.class', 'inventory_item_price');
  cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').should('be.visible');
  cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').should('have.text', 'Add to cart');
  /* ==== End Cypress Studio ==== */
});