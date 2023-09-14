class loginPage {
    constructor() {
        this.emailInput = '#Email'
        this.passwordInput = '#Password'
        this.remembermeCheck = '#RememberMe'
        this.loginButton = 'form > .buttons > .button-1'
        this.recoverButton = 'form > .buttons > .button-1'
        this.forgotButton = '.forgot-password > a'
      }
    
      login(email, password) {
        cy.get(this.emailInput).type(email)
        cy.get(this.passwordInput).type(password)
        cy.get(this.remembermeCheck).check()
        cy.get(this.loginButton).click()
      }

      forgotPassword(email){
        cy.get(this.forgotButton).click()
        cy.get(this.emailInput).type(email)
        cy.get(this.recoverButton).click()
      }
}

export default loginPage