// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
Cypress.Commands.add('menuLogin', () => {
    cy.visit('/')
    cy.get('.ico-login').click()
})

Cypress.Commands.add('menuRegister', () => {
    cy.visit('/')
    cy.get('.ico-register').click()
})

Cypress.Commands.add('login', () => {
    cy.visit('/')
    cy.get('.ico-login').click()
    cy.get('#Email').type('sandihidayat175@gmail.com')
    cy.get('#Password').type('12345S@ndi')
    cy.get('#RememberMe').check()
    cy.get('form > .buttons > .button-1').click()
})
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