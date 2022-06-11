
class AuthActions {

    constructor() {
        this.logoutButton = 'nav[class*="is-fixed-top"] a'
    }

    go() {
        cy.viewport(1920, 1080)
        cy.visit('https://parodify.herokuapp.com/users/sign_in')
        cy.get('#new_user').should('be.visible')
    }

    fillForm(email, password) {
        cy.get('#user_email').type(email)
        cy.get('#user_password').type(password)
    }

    submit() {
        cy.get('input[value="Log in"]').click()
    }

    cadastrarNewUser() {
        //Experimente agora
        cy.get('a[href="/users/sign_up"]').click()
    }
    
    fillFormNewUser(user) {
        cy.get('#user_email').type(user.email)
        cy.get('#user_password').type(user.password)
        cy.get('#user_password_confirmation').type(user.password)
    }

    submitNewUser() {
        cy.get('input[type="submit"][name="commit"]').click()
    
    }

    alert() {
        return cy.get('.message-body')
    }

    userShouldLoggedIn() {
        cy.get(this.logoutButton)
            .should('have.attr', 'href', '/users/sign_out');
    }

    doLogout() {
        cy.get(this.logoutButton).click()
    }
}

export default new AuthActions()