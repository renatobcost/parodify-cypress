
class Footer {

    iconHome() {
        return cy.get('a[href="/"]')
    }

    iconSearch() {
        return cy.get('a[href="/search/new"]')
    }

    iconFavorite() {
        return cy.get('a[href="/favorites"]')
    }

}

export default new Footer()