const locator = require('../locators/homePageLocator')

class homepage {

    async visitHomePage() {
        cy.visit('https://kasirdemo.belajarqa.com')
    }

    async verifyHomePage() {
        cy.xpath(locator.datatestid.title_text).should('exist')
    }
}

module.exports = new homepage()