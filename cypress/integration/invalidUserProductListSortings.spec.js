// invalidUserProductListSortings.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
/* ==== Test Created with Cypress Studio ==== */
it('problemUserSortings', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('https://www.saucedemo.com/');
  cy.get('[data-test="username"]').clear();
  cy.get('[data-test="username"]').type('problem_user');
  cy.get('[data-test="password"]').clear();
  cy.get('[data-test="password"]').type('secret_sauce');
  cy.get('[data-test="login-button"]').click();
  cy.get('#item_4_img_link > .inventory_item_img').should('have.class', 'inventory_item_img');
  cy.get('#item_4_title_link > .inventory_item_name').should('be.visible');
  cy.get('#item_4_title_link > .inventory_item_name').should('have.text', 'Sauce Labs Backpack');
  cy.get(':nth-child(1) > .inventory_item_description > .pricebar > .inventory_item_price').should('have.text', '$29.99');
  cy.get('#item_0_title_link > .inventory_item_name').should('have.text', 'Sauce Labs Bike Light');
  cy.get(':nth-child(2) > .inventory_item_description > .pricebar > .inventory_item_price').should('be.visible');
  cy.get(':nth-child(2) > .inventory_item_description > .pricebar > .inventory_item_price').should('have.text', '$9.99');
  cy.get('.select_container').click();
  cy.get('[data-test="product_sort_container"]').should('have.attr', 'data-test', 'product_sort_container');
  cy.get('[data-test="product_sort_container"]').select('za');
  cy.get('#item_4_title_link > .inventory_item_name').should('have.text', 'Sauce Labs Backpack');
  cy.get(':nth-child(1) > .inventory_item_description > .pricebar > .inventory_item_price').should('be.visible');
  cy.get('#item_4_title_link > .inventory_item_name').should('have.text', 'Sauce Labs Backpack');
  cy.get('#item_0_title_link > .inventory_item_name').should('have.text', 'Sauce Labs Bike Light');
  cy.get('[data-test="product_sort_container"]').select('lohi');
  cy.get('#item_4_title_link > .inventory_item_name').should('have.text', 'Sauce Labs Backpack');
  cy.get('#item_0_title_link > .inventory_item_name').should('have.text', 'Sauce Labs Bike Light');
  cy.get(':nth-child(1) > .inventory_item_description > .inventory_item_label > .inventory_item_desc').should('have.text', 'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.');
  cy.get(':nth-child(2) > .inventory_item_description > .inventory_item_label > .inventory_item_desc').should('have.text', 'A red light isn\'t the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.');
  cy.get(':nth-child(2) > .inventory_item_description > .inventory_item_label > .inventory_item_desc').should('have.class', 'inventory_item_desc');
  cy.get(':nth-child(1) > .inventory_item_description > .inventory_item_label > .inventory_item_desc').should('have.class', 'inventory_item_desc');
  /* ==== End Cypress Studio ==== */
});
