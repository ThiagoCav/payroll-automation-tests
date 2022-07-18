/// <reference types ="cypress"/>

import data from '../fixtures/data.json'
import loc from '../support/locators'

class allowedActivitie {

    go() {
        cy.visit('http://localhost:4200/#/home')
        cy.get(loc.HOME.ASSERT_HOME_PAGE).should('be.visible')
    }

    allowedActivitieRegistration() {
        cy.get(loc.MENU.OPTIONS).click()
        cy.get(loc.MENU.ALLOWED_ACTIVITIES).click()
        cy.get(loc.ALLOWED_ACTIVITIE.BTN_NEW_ACTIVITIE).click()
        cy.wait(2000)
        cy.get(loc.ALLOWED_ACTIVITIE.COMBO_COLUMN).click()
        cy.xpath(loc.ALLOWED_ACTIVITIE.COMBO_VALUE_XP(data.allowedActivitie.column)).click()
        cy.get(loc.ALLOWED_ACTIVITIE.COMBO_CODE).click()
        cy.xpath(loc.ALLOWED_ACTIVITIE.CODE_ONE_XP(data.allowedActivitie.codeOne)).click()
        cy.xpath(loc.ALLOWED_ACTIVITIE.CODE_TWO_XP(data.allowedActivitie.codeTwo)).click()
        cy.get(loc.ALLOWED_ACTIVITIE.CLICK_RANDOM).dblclick({ force: true })
        cy.xpath(loc.ALLOWED_ACTIVITIE.BTN_ADD_XP).click()
        cy.xpath(loc.ALLOWED_ACTIVITIE.BTN_SAVE_XP).click()
    }

    editActivitie() {
        cy.get(loc.MENU.OPTIONS).click()
        cy.get(loc.MENU.ALLOWED_ACTIVITIES).click()
        cy.get(loc.ALLOWED_ACTIVITIE.BTN_PAGES).click()
        cy.xpath(loc.ALLOWED_ACTIVITIE.PAGES_VISIBLE_XP(data.allowedActivitie.pages)).click()
        cy.xpath(loc.ALLOWED_ACTIVITIE.SEARCH_COLUMN_XP(data.allowedActivitie.column)).click()
        cy.xpath(loc.ALLOWED_ACTIVITIE.BTN_EDIT_XP(data.allowedActivitie.column, data.allowedActivitie.codeTwo)).click()
        cy.wait(1000)
        cy.get(loc.ALLOWED_ACTIVITIE.COMBO_EDIT_CODE).click()
        cy.xpath(loc.ALLOWED_ACTIVITIE.CODE_INCLUDE_XP(data.allowedActivitie.codeInclude)).click()
        cy.xpath(loc.ALLOWED_ACTIVITIE.BTN_SAVE_EDIT).dblclick({ force: true })
        cy.wait(1000)
        cy.xpath(loc.ALLOWED_ACTIVITIE.SEARCH_COLUMN_XP(data.allowedActivitie.column)).click()
        cy.xpath(loc.ALLOWED_ACTIVITIE.BTN_EDIT_XP(data.allowedActivitie.column, data.allowedActivitie.codeTwo))
            .should('be.visible', data.allowedActivitie.codeInclude)
    }

    removeActivitie() {
        cy.get(loc.MENU.OPTIONS).click()
        cy.get(loc.MENU.ALLOWED_ACTIVITIES).click()
        cy.get(loc.ALLOWED_ACTIVITIE.BTN_PAGES).click()
        cy.xpath(loc.ALLOWED_ACTIVITIE.PAGES_VISIBLE_XP(data.allowedActivitie.pages)).click()
        cy.xpath(loc.ALLOWED_ACTIVITIE.SEARCH_COLUMN_XP(data.allowedActivitie.column)).click()
        cy.xpath(loc.ALLOWED_ACTIVITIE.BTN_REMOVE_XP(data.allowedActivitie.column, data.allowedActivitie.codeOne))
            .click()
        cy.xpath(loc.ALLOWED_ACTIVITIE.CONFIRM_DELETE_XP).click()
        cy.get(loc.MESSAGE).invoke('text')
            .then((text) => {
                const toastText = text;
                expect(toastText).to.equal(" Atividade removida com sucesso! ");
        })
        cy.xpath(loc.ALLOWED_ACTIVITIE.SEARCH_COLUMN_XP(data.allowedActivitie.column))
            .should('not.to.exist')
        
        
        
    }

}

export default new allowedActivitie;