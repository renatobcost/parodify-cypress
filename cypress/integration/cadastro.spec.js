
import auth from '../support/actions/AuthActions'
import header from '../support/components/Header'
import signupFactory from '../factories/Signupfactory'

describe('Acessando a página do Parodify', function () {

    it('Validando a página inicial', function () {
        auth.go()
        auth.cadastrarNewUser()
    })

    it('Efetuando cadastro de usuário', function () {

        var user = signupFactory.user()

        auth.fillFormNewUser(user)
        auth.submitNewUser()
        header.validandoUserLogado().should('have.attr', 'href', '/users/sign_out')
    })

})