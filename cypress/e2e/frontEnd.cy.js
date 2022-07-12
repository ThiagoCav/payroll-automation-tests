/// <reference types ="cypress"/>
import scheduling from '../pages/schedulingPage'
import holiday from '../pages/holidayPage'
import email from '../pages/emailPage'
import allowedActivitie from '../pages/allowedActivitiePage'
import deniedActivitie from '../pages/deniedActivitiePage'
import penalty from '../pages/penaltyPage'

describe('should test frontend from PayRoll', () => {

    before(() => {
        //TODO - Implementar autenticação pelo token
        //cy.getToken('thiago.cavallari@scanbrazilconsulting.com', 'Pot.cat-42##@')
    })

    describe('Scheduling', () => {

        it('should registration Scheduling', () => {
            scheduling.go()
            scheduling.schedulingRegistration()
            cy.putStatusPayroll()
            scheduling.deletePayroll()
        })

        it('should download payroll', () => {
            scheduling.go()
            scheduling.schedulingRegistration()
            cy.putStatusPayroll()
            scheduling.schedulingDownload()
            scheduling.deletePayroll()
            
        })

        it('should remove payroll', () => {
            scheduling.go()
            scheduling.schedulingRegistration()
            cy.putStatusPayroll()
            scheduling.deletePayroll()
        })
    })

    describe('Holiday', () => {

        it('should registration Holiday', () => {
            holiday.go()
            holiday.holidayRegistration()
            holiday.holidayRemove()
        })

        it('should remove Holiday', () => {
            holiday.go()
            holiday.holidayRegistration()
            holiday.holidayRemove()
        })

        it('should edit Holiday', () =>{
            holiday.go()
            holiday.holidayRegistration()
            holiday.holidayEdit()
            holiday.holidayRemoveEdit()
        })
    })

    describe('Email', () => {
        
        it('should registration Mail', () => {
            email.go()
            email.emailRegistration()
            email.emailRemove()

        })

        it('should edit Mail', () => {
            email.go()
            email.emailRegistration()
            email.emailEdit()
            email.emailRemoveEdit()
        })

        it('should remove Mail', () => {
            email.go()
            email.emailRegistration()
            email.emailRemove()

        })
    })

    describe('Allowed Activities', () => {
        
        it('should registration Allowed Activities', () => {
            allowedActivitie.go()
            allowedActivitie.allowedActivitieRegistration()
        })

        it('sohuld edit Allowed Activities', () => {
            allowedActivitie.go()
            allowedActivitie.editActivitie()
        })

        it('should remove Activitie', () =>{
            allowedActivitie.go()
            allowedActivitie.removeActivitie()
        })
    })
    
    describe('Denied Activities', () => {

        it('should registration Ignored Activities', () => {
            deniedActivitie.go()
            deniedActivitie.deniedActivitieRegistration()

        })

        it('should edit Activitie', () => {
            deniedActivitie.go()
            deniedActivitie.activitieEdit()
        })

        it('should remove Activitie', () => {
            deniedActivitie.go()
            deniedActivitie.activitieRemove()
        })
    })

    describe('Penalty', () => {

        it('should registration PenaltyCode', () =>{
            penalty.go()
            penalty.penaltyRegistration()

        })

        it('should remove PenaltyCode', () => {
            penalty.go()
            penalty.penaltyRemove()
        })
    })
})
