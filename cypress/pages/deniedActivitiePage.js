/// <reference types ="cypress"/>

import data from '../fixtures/data.json'
import loc from '../support/locators'

class ignoredActivitie {

    go() {
        cy.visit('http://localhost:4200/#/home')
        cy.get(loc.HOME.ASSERT_HOME_PAGE).should('be.visible')
    }

    deniedActivitieRegistration() {
        cy.get(loc.MENU.OPTIONS).click()
        cy.get(loc.MENU.DENIED_ACTIVITIES).click()
        cy.get(loc.DENIED_ACTIVITIE.BTN_NEW_ACTIVITIE).click()
        cy.get(loc.DENIED_ACTIVITIE.COMBO_NAME).click()
        cy.xpath(loc.DENIED_ACTIVITIE.ACTIVITIE_NAME_XP(data.deniedActivitie.name)).click()
        cy.get(loc.DENIED_ACTIVITIE.COMBO_CODE).click()
        cy.xpath(loc.DENIED_ACTIVITIE.CODE_ONE_XP(data.deniedActivitie.codeOne)).click()
        cy.xpath(loc.DENIED_ACTIVITIE.CODE_ONE_XP(data.deniedActivitie.codeTwo)).click()
        cy.get(loc.DENIED_ACTIVITIE.CLICK_RANDOM).click()
        cy.xpath(loc.DENIED_ACTIVITIE.BTN_ADD_XP).click()
        cy.xpath(loc.DENIED_ACTIVITIE.BTN_REMOVE_INGRID_XP).click()
        cy.get(loc.DENIED_ACTIVITIE.COMBO_NAME).click()
        cy.xpath(loc.DENIED_ACTIVITIE.ACTIVITIE_NAME_XP(data.deniedActivitie.name)).click()
        cy.get(loc.DENIED_ACTIVITIE.COMBO_CODE).click()
        cy.xpath(loc.DENIED_ACTIVITIE.CODE_ONE_XP(data.deniedActivitie.codeOne)).click()
        cy.xpath(loc.DENIED_ACTIVITIE.CODE_ONE_XP(data.deniedActivitie.codeTwo)).click()
        cy.get(loc.DENIED_ACTIVITIE.CLICK_RANDOM).click()
        cy.xpath(loc.DENIED_ACTIVITIE.BTN_ADD_XP).click()
        cy.xpath(loc.DENIED_ACTIVITIE.BTN_SAVE_XP).click()
        cy.get(loc.MESSAGE).invoke('text')
            .then((text) => {
                const toastText = text;
                expect(toastText).to.equal(" Atividades cadastradas com sucesso! ");
            })

    }

    activitieEdit() {   
        cy.get(loc.MENU.OPTIONS).click()
        cy.get(loc.MENU.DENIED_ACTIVITIES).click()
        cy.xpath(loc.DENIED_ACTIVITIE.ACTIVITIE_SELECT_XP(data.deniedActivitie.name)).click()
        cy.xpath(loc.DENIED_ACTIVITIE.BTN_EDIT_XP(data.deniedActivitie.name, data.deniedActivitie.codeTwo)).click()
        cy.wait(1000)
        cy.get(loc.DENIED_ACTIVITIE.COMBO_EDIT).click()
        cy.xpath(loc.DENIED_ACTIVITIE.CODE_INCLUDE_XP(data.deniedActivitie.codeInclude)).click()
        cy.get(loc.DENIED_ACTIVITIE.CLICK_RANDOM).click({ force: true})
        cy.xpath(loc.DENIED_ACTIVITIE.BTN_SAVE_EDIT_XP).click()
        cy.get(loc.MESSAGE).invoke('text')
            .then((text) => {
                const toastText = text;
                expect(toastText).to.equal(" Atividade alterada com sucesso! ");
            })
        cy.wait(1500)
        cy.xpath(loc.DENIED_ACTIVITIE.ACTIVITIE_SELECT_XP(data.deniedActivitie.name)).click()
        cy.xpath(loc.DENIED_ACTIVITIE.ASSERT_CODE_CHANGED_XP(data.deniedActivitie.name, data.deniedActivitie.codeInclude))
            .should('be.visible')

    }

    activitieRemove() {
        cy.get(loc.MENU.OPTIONS).click()
        cy.get(loc.MENU.DENIED_ACTIVITIES).click()
        cy.xpath(loc.DENIED_ACTIVITIE.ACTIVITIE_SELECT_XP(data.deniedActivitie.name)).click()
        cy.xpath(loc.DENIED_ACTIVITIE.ASSERT_CODE_CHANGED_XP(data.deniedActivitie.name, data.deniedActivitie.codeInclude))
            .should('be.visible')
        cy.xpath(loc.DENIED_ACTIVITIE.BTN_REMOVE_XP(data.deniedActivitie.name, data.deniedActivitie.codeInclude)).click()
        cy.xpath(loc.DENIED_ACTIVITIE.CONFIRM_DELETE_XP).click()
        cy.get(loc.MESSAGE).invoke('text')
            .then((text) => {
                const toastText = text;
                expect(toastText).to.equal(" Atividade removida com sucesso! ");
            })
            cy.xpath(loc.DENIED_ACTIVITIE.ACTIVITIE_SELECT_XP(data.deniedActivitie.name))
            .should('not.to.exist')
    }

}

export default new ignoredActivitie;