
import footer from '../support/components/Footer'
import auth from '../support/actions/AuthActions'

describe('Play Song', function() {

    it('Tocar uma música', function() {
        
        auth.go()
        auth.fillForm('testeapp@teste.com', 'teste123')
        auth.submit()
        
        footer.iconSearch().click()

        cy.contains('h2', 'Buscar').should('be.visible')
        cy.get('img[src*="rock.png"]').parent().click()
        cy.contains('h2', 'Rock').should('be.visible')
        cy.contains('a', 'NullVana').click()
        cy.contains('h2', 'Músicas').should('be.visible')

        cy.contains('.song-item', 'Windows My Ass')
            .get('.play-button a').click()
        
    })
})