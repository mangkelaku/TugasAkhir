const locator = require('../locators/loginPageLocator')
const data = require('../data/datatest')


class loginpage {
    async visitLoginPage() {
        cy.visit('https://kasirdemo.belajarqa.com/')
    }

    async verifyLoginPage() {
        cy.xpath(locator.datatestid.email_input).should('exist')
        cy.xpath(locator.datatestid.password_input).should('exist')
        cy.xpath(locator.datatestid.login_button).should('exist')
    }

    async inputEmail() {
        cy.xpath(locator.datatestid.email_input).type(data.user_email)
    }

    async inputPassword() {
        cy.xpath(locator.datatestid.password_input).type(data.user_password)
    }

    async clickLoginButton() {
        cy.xpath(locator.datatestid.login_button).click()
    }
}

module.exports = new loginpage()