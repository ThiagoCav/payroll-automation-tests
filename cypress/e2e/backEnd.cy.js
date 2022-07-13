/// <reference types ="cypress"/>
import dataFactory from '../factories/dataFactory'

//import dayjs from 'dayjs'

describe('should test backend from PayRoll', () => {

    var holiday_atribute = dataFactory.holiday()
    var mail_atribute = dataFactory.mail()
    var allowed_activitie_atribute = dataFactory.allowedActivitie()
    var denied_activitie_atribute = dataFactory.deniedActivitie()
    var penalty_code = dataFactory.penaltyCode()
    var scheduling_atribute = dataFactory.scheduling()

    before(() => {
        //TODO - Implementar autenticação pelo token
        //cy.getToken('thiago.cavallari@scanbrazilconsulting.com', 'Pot.cat-42##@')
    })

    describe('Scheduling', () => {

        it('should test method POST', () => {
            cy.request({
                method: 'POST',
                url: 'http://localhost:46096/api/v1/payrollLog',
                body: {
                    payrollLog: {
                        startDate: scheduling_atribute.startDate,
                        endDate: scheduling_atribute.endDate,
                        penalty: scheduling_atribute.penalty,
                        reasonCode: scheduling_atribute.reasonCode,
                        payrollStatus: scheduling_atribute.payrollStatus,
                        //source: scheduling_atribute.source
                    }
                }
            }).then(res => {
                //console.log(res)
                expect(res.status).be.eq(201)
                expect(res.statusText).be.eq('Created')
            })
        })

        it('should test method GET', () => {
            cy.request({
                method: 'GET',
                url: 'http://localhost:46096/api/v1/payrollLog'
            }).then(res => {
                console.log(res)
                expect(res.status).be.eq(200)
                expect(res.statusText).be.eq('OK')
            })
        })

        it('should test method DELETE', () => { 
            cy.getPayRollLogForId().then(scheduledId => {
                console.log(scheduledId)
                cy.request({
                    method: 'DELETE',
                    url: `http://localhost:46096/api/v1/payrollLog/${scheduledId}`
                }).then(res =>{
                    expect(res.status).be.eq(200)
                })
            })
        })
    })

    describe('Holidays', () => {

        it('should test method POST', () => {

            cy.request({
                method: 'POST',
                url: 'http://localhost:46096/api/v1/holiday',

                body: {
                    holidays: [
                        {
                            iata: holiday_atribute.iata,
                            date: holiday_atribute.date,
                            createdDate: holiday_atribute.create_date,
                            description: holiday_atribute.description_post
                        }
                    ]
                },

            }).as('response')

            cy.get('@response').then(res => {
                console.log(res)
                expect(res.status).to.be.eq(201)
                expect(res.statusText).to.be.eq('Created')
            })
        })

        it('should test method GET', () => {
            cy.request({
                method: 'GET',
                url: 'http://localhost:46096/api/v1/holiday',

            }).as('response')

            cy.get('@response').then(res => {
                console.log(res)
                expect(res.status).to.be.eq(200)
                expect(res.statusText).to.be.eq('OK')
            })
        })

        it('should test method PUT', () => {
            cy.getHolidaysForId().then(getID => {
                //console.log(getID)
                cy.request({
                    method: 'PUT',
                    url: 'http://localhost:46096/api/v1/holiday', 
                    body: {
                        holidays: [
                            {
                                id: getID,
                                iata: holiday_atribute.iata,
                                date: holiday_atribute.date,
                                description: holiday_atribute.description_put
                            }
                        ]
                    },
                })
            }).as('response')
            cy.get('@response').then(res => {
                expect(res.status).be.eq(200)
                expect(res.statusText).be.eq('OK')
            })
        })

        it('should test method DELETE', () => {
            cy.getHolidaysForId().then(getID => {
                cy.request({
                    method: 'DELETE',
                    url: `http://localhost:46096/api/v1/holiday/${getID}`,
                })
            }).as('response')

            cy.get('@response').then(res => {
                expect(res.status).be.eq(200)
                expect(res.statusText).be.eq('OK')
            })
        })
    })

    describe('Emails', () => {

        it('should test method POST', () => {
            cy.request({
                method: 'POST',
                url: 'http://localhost:46096/api/v1/mail',
                body: {
                    mailAddress:
                    {
                        address: mail_atribute.address_insert
                    }
                }
            }).as('response').then(res => {
                expect(res.status).be.eq(201)
                expect(res.statusText).be.eq('Created')
            })
        })

        it('should test method GET', () => {
            cy.request({
                method: 'GET',
                url: 'http://localhost:46096/api/v1/mail'
            }).as('response').then(res => {
                //console.log(res)
                expect(res.status).be.eq(200)
                expect(res.statusText).be.eq('OK')
            })
        })

        it('should test method DELETE', () => {
            cy.getEmailForId().then(getIdEmail => {
                //console.log(getIdEmail)
                cy.request({
                    method: 'DELETE',
                    url: `http://localhost:46096/api/v1/mail/${getIdEmail}`,
                })
            }).as('response').then(res => {
                expect(res.status).be.eq(200)
                expect(res.statusText).be.eq('OK')
            })
        })

        it('should test method POST in route mail/send', () => {
            cy.request({
                method: 'POST',
                url: 'http://localhost:13596/api/v1/mail/send', // Método existente apenas na Payroll.api
                body: {
                    mail:
                    {
                        body: mail_atribute.body,
                        subject: mail_atribute.subject,
                        addresses: [
                            mail_atribute.address_send
                        ]
                    }
                }
            }).as('response').then(res => {
                //console.log(res)
                expect(res.status).be.eq(201)
                expect(res.statusText).be.eq('Created')
            })
        })
    })

    describe('AllowedActivities', () => {
        it('should test method POST', () => {
            cy.request({
                method: 'POST',
                url: 'http://localhost:46096/api/v1/allowedActivities',
                body: {
                    allowedActivities: [
                        {

                            columnName: allowed_activitie_atribute.column_name,
                            values: [
                                allowed_activitie_atribute.value_post
                            ]
                        }
                    ]
                }
            }).as('reponse').then(res => {
                console.log(res)
                expect(res.status).be.eq(201)
                expect(res.statusText).be.eq('Created')
            })
        })

        it('should test method GET', () => {
            cy.request({
                method: 'GET',
                url: 'http://localhost:46096/api/v1/allowedActivities',
            }).as('response')
            cy.get('@response').then(res => {
                //console.log(res)
                expect(res.status).be.eq(200)
                expect(res.statusText).be.eq('OK')

            })
        })

        it('should test method PUT', () => {
            cy.getAllowedActivitiesForId().then(AllowedActId => {
                //console.log(AllowedActId)
                cy.request({
                    method: 'PUT',
                    url: 'http://localhost:46096/api/v1/allowedActivities',
                    body: {
                        allowedActivity: {
                            id: AllowedActId,
                            values: [
                                allowed_activitie_atribute.value_put
                            ]
                        }
                    }
                }).as('response')
                cy.get('@response').then(res => {
                    expect(res.status).be.eq(200)
                    expect(res.statusText).be.eq('OK')
                })
            })
        })

        it('should test method DELETE', () => {
            cy.getAllowedActivitiesForId().then(AllowedActId => {
                cy.request({
                    method: 'DELETE',
                    url: `http://localhost:46096/api/v1/allowedActivities/${AllowedActId}`
                })
            }).as('response')
            cy.get('@response').then(res => {
                expect(res.status).be.eq(200)
                expect(res.statusText).be.eq('OK')
            })
        })

        it('should test method GET in route /payrollColumns', () => {
            cy.request({
                method: 'GET',
                url: 'http://localhost:46096/api/v1/allowedActivities/payrollColumns',
            }).as('response')
            cy.get('@response').then(res => {
                console.log(res)
                expect(res.status).be.eq(200)
                expect(res.statusText).be.eq('OK')
            })
        })
    })

    describe('DeniedActivities', () => {

        it('should test method POST', () => {
            cy.request({
                method: 'POST',
                url: 'http://localhost:46096/api/v1/deniedActivities',
                body: {
                    deniedActivities: [
                        {
                            name: denied_activitie_atribute.name,
                            values: [
                                denied_activitie_atribute.value_post
                            ]
                        }
                    ]
                }
            }).then(res => {
                expect(res.status).be.eq(201)
                expect(res.statusText).be.eq('Created')
            })
        })

        it('should test method GET', () => {
            cy.request({
                method: 'GET',
                url: 'http://localhost:46096/api/v1/deniedActivities'
            }).as('response')
            cy.get('@response').then(res => {
                console.log(res)
                expect(res.status).be.eq(200)
                expect(res.statusText).be.eq('OK')
            })
        })

        it('should test method GET in route /codes', () => {
            cy.request({
                method: 'GET',
                url: `http://localhost:46096/api/v1/deniedActivities/codes`
            }).as('response')
            cy.get('@response').then(res => {
                console.log(res)
                expect(res.status).be.eq(200)
                expect(res.statusText).be.eq('OK')
            })
        })

        it('should test method PUT', () => {
            cy.getDeniedActivitiesForId().then(deniedId => {
                console.log(deniedId)
                cy.request({
                    method: 'PUT',
                    url: 'http://localhost:46096/api/v1/deniedActivities',
                    body: {
                        deniedActivity: {
                            id: deniedId,
                            name: denied_activitie_atribute.name,
                            values: [
                                denied_activitie_atribute.value_put
                            ]
                        }
                    }
                }).as('response')
                cy.get('@response').then(res => {
                    expect(res.status).be.eq(200)
                    expect(res.statusText).be.eq('OK')
                })
            })
        })

        it('should test method DELETE', () => {
            cy.getDeniedActivitiesForId().then(deniedId => {
                cy.request({
                    method: 'DELETE',
                    url: `http://localhost:46096/api/v1/deniedActivities/${deniedId}`
                })
            }).as('response')
            cy.get('@response').then(res => {
                expect(res.status).be.eq(200)
                expect(res.statusText).be.eq('OK')
            })
        })
    })

    describe('PenaltyCode', () => {
        it('should test method POST', () => {
            cy.request({
                method: 'POST',
                url: `http://localhost:46096/api/v1/penalty/code/${penalty_code.code}`,
            }).then(res => {
                console.log(res)
                expect(res.status).be.eq(201)
                expect(res.statusText).be.eq('Created')
            })
        })

        it('should test method GET', () => {
            cy.request({
                method: 'GET',
                url: 'http://localhost:46096/api/v1/penalty/code'
            }).then(res => {
                expect(res.status).be.eq(200)
                expect(res.statusText).be.eq('OK')

            })
        })

        it('should test method DELETE', () => {
            cy.request({
                method: 'DELETE',
                url: `http://localhost:46096/api/v1/penalty/code/${penalty_code.code}`
            }).then(res => {
                expect(res.status).be.eq(200)
            })
        })
    })
})







