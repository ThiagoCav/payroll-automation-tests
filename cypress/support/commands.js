// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import dataFactory from "../factories/dataFactory"
import data from "../fixtures/data.json"

var scheduling_atribute = dataFactory.scheduling()
var denied_activitie_atribute = dataFactory.deniedActivitie()
var allowed_activitie = dataFactory.allowedActivitie()
var holiday = dataFactory.holiday()

Cypress.Commands.add('getToken', (user, passwd) => {
    cy.request({
        method: 'POST',
        url: 'http://localhost:4200/#/home',
        body: {
            email: user,
            redirecionar: false,
            senha: passwd
        }

    }).its('body.token').should('not.be.empty') // Desta maneira, o token é localizado dentro de body da resposta da requisição. bodytoken
        .then(token => {
            Cypress.env('token', token) //Coloco o token dentro de uma variavel de ambiente para utilizar nos request
            return token
        })
})

Cypress.Commands.add('getHolidaysForId', () => {
    //cy.getToken('thiago@outlook.com', '123').then(token => {
    cy.request({
        method: 'GET',
        //headers: { Authorization: `JWT ${token}` },
        url: 'http://localhost:46096/api/v1/holiday',
    }).then(res => {
        const arr = res.body.data.holidays.data.find(o => o.iata === holiday.iata).holidays; // Obtenho dentro do array data, a iata de nome AAX e acesso os holidays
        const ids = arr.map(object => {
            return object.id; //Mapeio todos os ids
        });

        const max = Math.max(...ids)
        return max

    })
})

Cypress.Commands.add('getEmailForId', () => {
    //cy.getToken('thiago@outlook.com', '123').then(token => {
    cy.request({
        method: 'GET',
        //headers: { Authorization: `JWT ${token}` },
        url: 'http://localhost:46096/api/v1/mail',
    }).then(res => {
        const arr = res.body.data.mailAddresses
        const ids = arr.map(object => {
            return object.id; //Mapeio todos os ids 
        });

        const max = Math.max(...ids)
        return max


    })
})

Cypress.Commands.add('getAllowedActivitiesForId', () => {
    //cy.getToken('thiago@outlook.com', '123').then(token => {
    cy.request({
        method: 'GET',
        //headers: { Authorization: `JWT ${token}` },
        url: 'http://localhost:46096/api/v1/allowedActivities',
    }).then(res => {

        const arr = res.body.data.allowedActivities.find(o => o.columnName === allowed_activitie.column_name).id
        return arr

    })
})

Cypress.Commands.add('getDeniedActivitiesForId', () => {
    //cy.getToken('thiago@outlook.com', '123').then(token => {
    cy.request({
        method: 'GET',
        //headers: { Authorization: `JWT ${token}` },
        url: 'http://localhost:46096/api/v1/deniedActivities',
    }).then(res => {
        //console.log(res)
        const arr = res.body.data.deniedActivities.find(o => o.name === denied_activitie_atribute.name).id
        return arr

    })
})

Cypress.Commands.add('getPayRollLogForId', () => {
    //cy.getToken('thiago@outlook.com', '123').then(token => {
    cy.request({
        method: 'GET',
        //headers: { Authorization: `JWT ${token}` },
        url: 'http://localhost:46096/api/v1/payrollLog',
    }).then(res => {
        // console.log(res)
        const scheduledId = res.body.data.payrollLogs.data.payrollLogs
            .find(o => o.startDate === scheduling_atribute.startDate && o.endDate === scheduling_atribute.endDate).id

            return scheduledId
    })
})

Cypress.Commands.add('putStatusPayroll', () =>{
    cy.request({
        method: 'GET',
        url: 'http://localhost:46096/api/v1/payrollLog',
    }).then(res => {
        const scheduledId = res.body.data.payrollLogs.data.payrollLogs
        .find(o => o.startDate === scheduling_atribute.startDate && o.endDate === scheduling_atribute.endDate).id
        
        cy.request({ //Método disposto apenas na payroll.api
            method: 'PUT',
            url: 'http://localhost:13596/api/v1/payrollLog', 
            body: {
                    payrollLog: {
                      id: scheduledId,
                      payrollStatus: 2,
                      source: 'null'
                 }  
            }
        }).then(res => {
            expect(res.status).be.eq(200)
        })
    })
})


