// Generate a random email address
  function generateRandomEmail() {
    const randomString = Math.random().toString(36).substring(2, 10);
    return `testuser${randomString}@gmail.com`;
}

describe('template spec', () => {
  const randomEmail = generateRandomEmail()
  it('Success Register', () => {
    cy.visit('https://demowebshop.tricentis.com/')
    cy.get('.ico-register').click()
    cy.get('#gender-male').click()
    cy.get('#FirstName').type('Sandi')
    cy.get('#LastName').type('Hidayat')
    cy.get('#Email').type(randomEmail)
    cy.get('#Password').type('12345S@ndi')
    cy.get('#ConfirmPassword').type('12345S@ndi')
    cy.get('#register-button').click()
    //validation
    cy.get('.result').should('be.visible')
    cy.url().should('include','/registerresult/1')
  })
})