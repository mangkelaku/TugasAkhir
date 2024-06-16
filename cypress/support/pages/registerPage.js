const locator = require('../locators/registerPageLocator')
const data = require('../data/datatest')

class registerpage {
    async visitregisterpage() {
        cy.visit('https://kasirdemo.belajarqa.com/')
        cy.xpath(locator.datatestid.gotoregister_button).click()
    }

    async verifyregisterpage() {
        cy.xpath(locator.datatestid.namaToko_input).should('exist')
        cy.xpath(locator.datatestid.email_input).should('exist')
        cy.xpath(locator.datatestid.password_input).should('exist')
        cy.xpath(locator.datatestid.register_button).should('exist')
    }

    async inputNamaToko() {
        cy.xpath(locator.datatestid.namaToko_input).type(data.user_namaToko)
    }

    async inputEmail() {
        cy.xpath(locator.datatestid.email_input).type(data.user_email2)
    }

    async inputPassword() {
        cy.xpath(locator.datatestid.password_input).type(data.user_password2)
    }

    async registerButtonClick() {
        cy.xpath(locator.datatestid.register_button).click()
    }
}

module.exports = new registerpage()