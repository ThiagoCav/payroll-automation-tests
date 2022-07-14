/// <reference types ="cypress"/>

import data from '../fixtures/data.json'
import loc from '../support/locators'

class holidayPage {

    go() {
        cy.visit('http://localhost:4200/#/home')
        cy.get(loc.HOME.ASSERT_HOME_PAGE).should('be.visible')
    }

    holidayRegistration() {
        cy.get(loc.MENU.OPTIONS).click()
        cy.get(loc.MENU.HOLIDAYS).click()
        cy.get(loc.HOLIDAY.ASSERT_NAME_PAGE).should('have.text', 'Feriados ')
        cy.get(loc.HOLIDAY.BTN_INSERT).click()
        cy.get(loc.HOLIDAY.ASSERT_NAME_PAGE_REGISTRATION).should('have.text', 'Cadastro de Feriados ')
        cy.get(loc.HOLIDAY.ASSERT_GRID).should('be.visible', true)
        cy.get(loc.HOLIDAY.DATE).type(data.holiday.date)
        cy.get(loc.HOLIDAY.MENU_BASES).click()
        cy.get(loc.HOLIDAY.BASE_SELECT_ONE).click()
        cy.get(loc.HOLIDAY.BASE_SELECT_TWO).click()
        cy.get(loc.HOLIDAY.CLICK_PAGE).dblclick()
        cy.get(loc.HOLIDAY.DESCRIPTION).type(data.holiday.description)
        cy.get(loc.HOLIDAY.BTN_ADD).click()
        cy.get(loc.HOLIDAY.REMOVE_BASE_TWO).click()
        cy.get(loc.HOLIDAY.BTN_SAVE).click()
        cy.get(loc.MESSAGE).invoke('text')
            .then((text) => {
                const toastText = text;
                expect(toastText).to.equal(" Feriado cadastrado com sucesso! ");
            })

    }

    holidayEdit() {
        cy.xpath(loc.HOLIDAY.REGISTERED_XP(data.holiday.baseOne)).click()
        cy.xpath(loc.HOLIDAY.BTN_EDIT_XP(data.holiday.description, data.holiday.date)).click()
        cy.get(loc.HOLIDAY.DATE_EDIT).click().clear().type(data.holiday.dateChange)
        cy.get(loc.HOLIDAY.DESCRIPTION_EDIT).click().clear().type(data.holiday.descriptionChange)
        cy.get(loc.HOLIDAY.BTN_SAVE_EDIT).click()
        cy.wait(2000)
        cy.get(loc.MESSAGE).invoke('text')
            .then((text) => {
                const toastText = text;
                expect(toastText).to.equal(" Feriado alterado com sucesso! ");
            })

        cy.get(loc.HOLIDAY.BTN_INSERT).click()
        cy.get(loc.HOLIDAY.BTN_BACK_HOLIDAYPAGE).click()
        //cy.xpath(`//div[contains(text(), 'AAG')]`).click()

    }

    holidayRemove() {
        cy.xpath(loc.HOLIDAY.REGISTERED_XP(data.holiday.baseOne)).click()
        cy.xpath(loc.HOLIDAY.BTN_REMOVE_XP(data.holiday.description, data.holiday.date)).click()
        cy.get(loc.HOLIDAY.BTN_CONFIRM_REMOVE).click()
        cy.wait(2000)
        cy.get(loc.MESSAGE).invoke('text')
            .then((text) => {
                const toastText = text;
                expect(toastText).to.equal(" Feriado removido com sucesso! ");
            })
    }

    holidayRemoveEdit() {
        cy.xpath(loc.HOLIDAY.REGISTERED_XP(data.holiday.baseOne)).click()
        cy.xpath(loc.HOLIDAY.BTN_REMOVE_EDIT_XP(data.holiday.descriptionChange, data.holiday.dateChange)).click()
        cy.get(loc.HOLIDAY.BTN_CONFIRM_REMOVE).click()
        cy.wait(2000)
        cy.get(loc.MESSAGE).invoke('text')
            .then((text) => {
                const toastText = text;
                expect(toastText).to.equal(" Feriado removido com sucesso! ");
            })
    }
}

export default new holidayPage;