import 'cypress-mochawesome-reporter/register';
import loginPage from "../support/PageObject/loginPage.cy"
const loginData = require("../fixtures/login/login.json")

describe('Test Login Functionality', () => {
  const login = new loginPage

  beforeEach(() => {
    cy.menuLogin() // Navigate to the login page
  })

  it('Success Login', () => {
    login.login(loginData.validEmail, loginData.validPassword) // login page - form login
    // Assertions
    cy.get('.header-links > ul > :nth-child(1) > .account').should('have.text',loginData.validEmail) 
    cy.get('.ico-logout').should('be.visible') 
  })

  it('Failed Login - Invalid Email & Password', () => {
    login.login(loginData.invalidEmail,loginData.invalidPassword) // login page - form login
    // Assertions
    cy.get('.validation-summary-errors').should('be.visible')
    cy.get('.validation-summary-errors > ul > li').should('have.text','The credentials provided are incorrect')
  })

  it('Failed Login - Invalid Email', () => {
    login.login(loginData.invalidEmail,loginData.validPassword) // login page - form login
    // Assertions
    cy.get('.validation-summary-errors').should('be.visible')
    cy.get('.validation-summary-errors > ul > li').should('have.text','The credentials provided are incorrect')
  })

  it('Failed Login - Invalid Password', () => {
    login.login(loginData.validEmail,loginData.invalidPassword) // login page - form login
    // Assertions
    cy.get('.validation-summary-errors').should('be.visible')
    cy.get('.validation-summary-errors > ul > li').should('have.text','The credentials provided are incorrect')
  })

  it('Failed Login - Empty Email & Password', () => {
    login.login(' ', ' ') // login page - form login
    // Assertions
    cy.get('.validation-summary-errors').should('be.visible')
    cy.get('.validation-summary-errors > ul > li').should('have.text','No customer account found')
  })

  it('Failed Login - Empty Email', () => {
    login.login(' ', loginData.validPassword) // login page - form login
    // Assertions
    cy.get('.validation-summary-errors').should('be.visible')
    cy.get('.validation-summary-errors > ul > li').should('have.text','No customer account found')
  })

  it('Failed Login - Empty Password', () => {
    login.login(loginData.validEmail, ' ') // login page - form login
    // Assertions
    cy.get('.validation-summary-errors').should('be.visible')
    cy.get('.validation-summary-errors > ul > li').should('have.text','The credentials provided are incorrect')
  })

  it('Failed Login - Invalid Format Email', () => {
    login.login(loginData.invalidFormatEmail, loginData.validPassword) // login page - form login
    // Assertions
    cy.get('.field-validation-error > span').should('have.text','Please enter a valid email address.')
  })

  it('Success Forgot Password', () => {
    login.forgotPassword(loginData.validEmail) // login page - form forgot password
    // Assertions
    cy.get('.result').should('contain.text', 'Email with instructions has been sent to you.')
  })

  it('Failed Forgot Password - Invalid Format Email', () => {
    login.forgotPassword(loginData.invalidFormatEmail) // login page - form forgot password
    // Assertions
    cy.get('.field-validation-error > span').should('have.text','Wrong email')
  })

  it('Failed Forgot Password - Empty Email', () => {
    login.forgotPassword(' ') // login page - form forgot password
    // Assertions
    cy.get('.field-validation-error > span').should('have.text','Enter your email')
  })
})