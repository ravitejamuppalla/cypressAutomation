// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

///<reference types="Cypress"></reference>;

//creating the custom commands to click on links
Cypress.Commands.add("clickLink", (linkText) => {
  cy.get("a").contains(linkText).click();
});

//creating the custom login commands
Cypress.Commands.add("loginToNopCommerce", (email, password) => {
  cy.visit("https://demo.nopcommerce.com/");
  cy.get("[class='ico-login']").click();
  cy.get("input[name='Email']").type(email);
  cy.get("input[name='Password']").type(password);
  cy.xpath("//*[@class='buttons']//button[@type='submit']").click();
});

require("cypress-downloadfile/lib/downloadFileCommand");
