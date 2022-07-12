/// <reference types ="cypress"/>

import data from '../fixtures/data.json'
import loc from '../support/locators'

class penalty {
    
    go() {
        cy.visit('http://localhost:4200/#/home')
        cy.get(loc.HOME.ASSERT_HOME_PAGE).should('be.visible')
    }

    penaltyRegistration (){
        cy.get(loc.MENU.OPTIONS).click()
        cy.get(loc.MENU.PENALTY_CODES).click()
        cy.xpath(loc.PENALTY.BTN_NEW_CODE_XP).click()
        cy.wait(1000)
        cy.get(loc.PENALTY.COMBO_CODE).click()
        cy.xpath(loc.PENALTY.CODE_XP(data.penalty.code)).click()
        cy.get(loc.PENALTY.CLICK_RANDOM).click({force: true})
        cy.xpath(loc.PENALTY.BTN_SAVE_XP).click()
        cy.get(loc.MESSAGE).invoke('text')
            .then((text) => {
                const toastText = text;
                expect(toastText).to.equal(" Código adicionado com sucesso! ");
        })
        cy.xpath(loc.PENALTY.ASSERT_INSERT_XP(data.penalty.code)).should('be.visible')
    }

    penaltyRemove () {
        cy.get(loc.MENU.OPTIONS).click()
        cy.get(loc.MENU.PENALTY_CODES).click()
        cy.xpath(loc.PENALTY.ASSERT_INSERT_XP(data.penalty.code)).should('be.visible')
        cy.xpath(loc.PENALTY.REMOVE_CODE_XP(data.penalty.code)).click()
        cy.xpath(loc.PENALTY.BTN_CONFIRME_REMOVE_XP).click()
        cy.get(loc.MESSAGE).invoke('text')
            .then((text) => {
                const toastText = text;
                expect(toastText).to.equal(" Código removido com sucesso! ");
        })
        cy.xpath(loc.PENALTY.ASSERT_INSERT_XP(data.penalty.code)).should('not.to.exist')
        
    }
}

export default new penalty;