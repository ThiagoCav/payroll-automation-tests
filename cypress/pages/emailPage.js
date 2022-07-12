/// <reference types ="cypress"/>

import data from '../fixtures/data.json'
import loc from '../support/locators'

class emailPage {

    go() {
        cy.visit('http://localhost:4200/#/home')
        cy.get(loc.HOME.ASSERT_HOME_PAGE).should('be.visible')
    }

    emailRegistration() {
        cy.get(loc.MENU.OPTIONS).click()
        cy.get(loc.MENU.EMAILS).click()
        cy.get(loc.EMAIL.ASSERT_PAGE_VISIBLE).should('be.visible')
        cy.xpath(loc.EMAIL.BTN_NEW_MAIL_XP('Novo Email')).click()
        cy.get(loc.EMAIL.MAIL_INPUT).type(data.mail.description)
        cy.get(loc.EMAIL.BTN_SAVE).click()
        cy.get(loc.MESSAGE).invoke('text')
            .then((text) => {
                const toastText = text;
                expect(toastText).to.equal(" Destinatário adicionado com sucesso! ");
            })
    }

    emailRemove() {
        cy.xpath(loc.EMAIL.BTN_REMOVE_XP(data.mail.description)).click()
        cy.get(loc.EMAIL.BTN_CONFIRM_REMOVE).click()
        cy.wait(2000)
        cy.get(loc.MESSAGE).invoke('text')
        .then((text) => {
            const toastText = text;
            expect(toastText).to.equal(" Destinatario removido com sucesso! ");
        })
    }

    emailEdit() {
        cy.xpath(loc.EMAIL.BTN_EDIT_XP(data.mail.description)).click()
        cy.get(loc.EMAIL.DESCRIPTION_EDIT).click().clear().type(data.mail.descriptionChange)
        cy.get(loc.EMAIL.BTN_SAVE).click()
        cy.wait(2000)
        cy.get(loc.MESSAGE).invoke('text')
            .then((text) => {   
                const toastText = text;
                expect(toastText).to.equal(" Destinatário editado com sucesso! ");
        })
    }

    emailRemoveEdit() {
        cy.xpath(loc.EMAIL.BTN_REMOVE_XP(data.mail.descriptionChange)).click()
        cy.get(loc.EMAIL.BTN_CONFIRM_REMOVE).click()
        cy.wait(2000)
        cy.get(loc.MESSAGE).invoke('text')
        .then((text) => {
            const toastText = text;
            expect(toastText).to.equal(" Destinatario removido com sucesso! ");
        })
    }
}

export default new emailPage;