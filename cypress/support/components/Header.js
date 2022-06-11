
class Header {

    validandoUserLogado() {
        return cy.get('a[class="icon is-large"]')
    }
}

export default new Header()