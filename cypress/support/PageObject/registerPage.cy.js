class registerPage{

    constructor() {
        this.genderInput = '#gender-male'
        this.firstNameInput = '#FirstName'
        this.lastNameInput = '#LastName'
        this.emailInput = '#Email'
        this.passwordInput = '#Password'
        this.confirmPasswordInput = '#ConfirmPassword'
        this.registerButton = '#register-button'
      }
    
      register(firstName, lastName, email, password, confirmPassword) {
        cy.get(this.genderInput).click()
        cy.get(this.firstNameInput).type(firstName)
        cy.get(this.lastNameInput).type(lastName)
        cy.get(this.emailInput).type(email)
        cy.get(this.passwordInput).type(password)
        cy.get(this.confirmPasswordInput).type(confirmPassword)
        cy.get(this.registerButton).click()
      }

}

export default registerPage