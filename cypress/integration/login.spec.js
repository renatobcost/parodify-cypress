
import auth from '../support/actions/AuthActions'
import header from '../support/components/Header'
import footer from '../support/components/Footer'

describe('Login', function () {
    
    it('login de usuário', function () {
        auth.go()
        auth.fillForm('testeapp@teste.com', 'teste123')
        auth.submit()
        
        //autenticação pela actions
        auth.userShouldLoggedIn()

        //autenticação pelo header 
        header.validandoUserLogado().should('have.attr', 'href', '/users/sign_out')

        //autenticação pelo footer
        footer.iconHome().should('be.visible')
        footer.iconSearch().should('be.visible')
        footer.iconFavorite().should('be.visible')
    })

    it('senha incorreta', function () {
        auth.go()
        auth.fillForm('testeapp@teste.com', '123456')
        auth.submit()
        auth.alert().should('contain', 'Oops! Email e/ou senha incorretos.')
    })

    it('usuário não encontrado', function () {
        auth.go()
        auth.fillForm('testeapp@404.com', '123456')
        auth.submit()
        auth.alert().should('contain', 'Oops! Email e/ou senha incorretos.')
    })
})