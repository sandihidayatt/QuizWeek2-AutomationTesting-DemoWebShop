import registerPage from "../support/PageObject/registerPage.cy"
const registerData = require("../fixtures/register/register.json")

// Generate a random email address
  function generateRandomEmail() {
    const randomString = Math.random().toString(36).substring(2, 10);
    return `testuser${randomString}@gmail.com`;
}

const register = new registerPage
describe('Test Register Functionality', () => {
  const randomEmail = generateRandomEmail()

  beforeEach(() => {
    cy.menuRegister() // Navigate to the register page
  })

  it('Success Register', () => {
    register.register(registerData.firstName,registerData.lastName,randomEmail,registerData.validPassword,registerData.validPassword) // input register (first name, last name, email, password, confirm password)
    // Assertions
    cy.get('.result').should('be.visible')
    cy.url().should('include','/registerresult/1')
  })

  it('Failed Register - Invalid Format Email', () => {
    register.register(registerData.firstName,registerData.lastName,registerData.invalidFormatEmail,registerData.validPassword,registerData.validPassword) // input register (first name, last name, email, password, confirm password)
    // Assertions
    cy.get('.field-validation-error > span').should('contain.text','Wrong email')
  })

  it('Failed Register - Invalid Format Password', () => {
    register.register(registerData.firstName,registerData.lastName,randomEmail,registerData.invalidFormatPassword,registerData.invalidFormatPassword) // input register (first name, last name, email, password, confirm password)
    // Assertions
    cy.get('.field-validation-error > span').should('contain.text','The password should have at least 6 characters.')
  })

  it('Failed Register - Empty First Name, Last Name, Email & Password', () => {
    register.register(' ',' ',' ',' ',' ') // input register (first name, last name, email, password, confirm password)
    // Assertions
    cy.get(':nth-child(2) > .form-fields > :nth-child(2) > .field-validation-error > span').should('contain.text','First name is required.')
    cy.get(':nth-child(3) > .field-validation-error > span').should('contain.text','Last name is required.')
    cy.get(':nth-child(4) > .field-validation-error > span').should('contain.text','Email is required.')
    cy.get(':nth-child(1) > .field-validation-error > span').should('contain.text','Password is required.')
    cy.get(':nth-child(3) > .form-fields > :nth-child(2) > .field-validation-error > span').should('contain.text','Password is required.')
  })

  it('Failed Register - Empty First Name', () => {
    register.register(' ',registerData.lastName,randomEmail,registerData.validPassword,registerData.validPassword) // input register (first name, last name, email, password, confirm password)
    // Assertions
    cy.get(':nth-child(2) > .form-fields > :nth-child(2) > .field-validation-error > span').should('contain.text','First name is required.')
  })

  it('Failed Register - Empty Last Name', () => {
    register.register(registerData.firstName,' ',randomEmail,registerData.validPassword,registerData.validPassword) // input register (first name, last name, email, password, confirm password)
    // Assertions
    cy.get(':nth-child(3) > .field-validation-error > span').should('contain.text','Last name is required.')
  })

  
  it('Failed Register - Empty Email', () => {
    register.register(registerData.firstName,registerData.lastName,' ',registerData.validPassword,registerData.validPassword) // input register (first name, last name, email, password, confirm password)
    // Assertions
    cy.get(':nth-child(4) > .field-validation-error > span').should('contain.text','Email is required.')
  })

  it('Failed Register - Empty Password', () => {
    register.register(registerData.firstName,registerData.lastName,randomEmail,' ',registerData.validPassword) // input register (first name, last name, email, password, confirm password)
    // Assertions
    cy.get(':nth-child(1) > .field-validation-error > span').should('contain.text','Password is required.')
  })

  it('Failed Register - Empty Confirm Password', () => {
    register.register(registerData.firstName,registerData.lastName,randomEmail,registerData.validPassword,' ') // input register (first name, last name, email, password, confirm password)
    // Assertions
    cy.get(':nth-child(3) > .form-fields > :nth-child(2) > .field-validation-error > span').should('contain.text','Password is required.')
  })

  it('Failed Register - Password and Confirmation Password do not match', () => {
    register.register(registerData.firstName,registerData.lastName,randomEmail,registerData.validPassword,registerData.invalidPassword) // input register (first name, last name, email, password, confirm password)
    // Assertions
    cy.get('.field-validation-error > span').should('contain.text','The password and confirmation password do not match.')
  })

})