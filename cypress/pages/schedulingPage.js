/// <reference types ="cypress"/>

import data from '../fixtures/data.json'
import loc from '../support/locators'

class PayrollPage {

    go() {
        cy.visit('http://localhost:4200/#/home')
        cy.get(loc.HOME.ASSERT_HOME_PAGE).should('be.visible')
    }

    schedulingRegistration() { //With Penality and without Reason Code selected
        cy.wait(2000)
        cy.get(loc.SCHEDULING.BTN_INSERT).click()
        cy.get(loc.SCHEDULING.ASSERT_PAGE_REGISTRATION).should('be.visible')
        cy.get(loc.SCHEDULING.START_DATE).type(data.scheduling.startDate)
        cy.get(loc.SCHEDULING.END_DATE).type(data.scheduling.endDate)
        cy.get(loc.SCHEDULING.RADIO_BTN_PENALITY).first().check({ force: true })
        cy.get(loc.SCHEDULING.RADIO_BTN_REASON_CODE).first().check({ force: true })
        cy.get(loc.SCHEDULING.BTN_INSERT_SAVE).click()
        cy.wait(2000)
        cy.get(loc.MESSAGE).invoke('text')
            .then((text) => {
                const toastText = text;
                expect(toastText).to.equal(" Agendamento cadastrado com sucesso! ");
            })

    }

    schedulingDownload() {
        cy.get(loc.SCHEDULING.BTN_INSERT).click()
        cy.get(loc.SCHEDULING.BTN_BACK).click()
        cy.get(loc.SCHEDULING.BTN_DOWNLOAD).click()

    }

    deletePayroll() {
        cy.get(loc.SCHEDULING.BTN_INSERT).click()
        cy.get(loc.SCHEDULING.BTN_BACK).click()
        cy.get(loc.SCHEDULING.BTN_DELETE_PAYROLL).click()
        cy.get(loc.SCHEDULING.BTN_DELETE_PAYROLL_CONFIRM).click()
        cy.wait(2000)
        cy.get(loc.MESSAGE).invoke('text')
            .then((text) => {
                const toastText = text;
                expect(toastText).to.equal(" Feriado removido com sucesso! ");
            })
    }
}

export default new PayrollPage;