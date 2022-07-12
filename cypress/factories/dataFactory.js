export default {

    holiday: function () {

        var holiday_atribute =
        {
            iata: 'TTT', //TODO -- Ajustar dateTime//date: dayjs().format('DD/MM/YYYY HH:MM:SS'), // Enviar a data atual - npm install dayjs
            date: '2022-06-22', //TODO -- Ajustar dateTime dayjs().format('DD/MM/YYYY HH:MM:SS'),
            create_date: '2022-06-22',
            description_post: 'TEST POST',
            description_put: 'TESTE PUT'
        }

        return holiday_atribute
    },

    mail: function () {

        var mail_atribute =
        {
            address_insert: 'teste@teste.com',
            address_send: 'teste@teste.com',
            body: 'Test send mail with Cypress',
            subject: 'Test - Subject'
        }

        return mail_atribute

    },

    allowedActivitie: function () {

        var allowed_activitie_atribute = 
        {
            column_name: 'TESTE ALLOWEDACTIVITIES',
            value_post: 'CAA',
            value_put: 'X21 |X23 |XD2 |XEA |XQ2 |XQ3 |TST'
        }

        return allowed_activitie_atribute

    },

    deniedActivitie: function () {

        var denied_activitie_atribute = 
        {
            
            name: 'TESTE POST',
            value_post: 'ABA |ADC',
            value_put: 'ABA |ADC |ADM |ADP |TST'
        }

        return denied_activitie_atribute
    },

    penaltyCode: function () {

        var penalty_code =
        {
            code: 'XYZ'
        }
        return penalty_code
    },

    scheduling: function () {

        var scheduling_atribute =
        {
            startDate: '2022-06-28T00:00:00', //Necessário este formato - TODO verificar alternativa
            endDate: '2022-06-28T00:00:00', //Necessário este formato - TODO verificar alternativa
            penalty: true,
            reasonCode: true,
            payrollStatus: 0,
            source: 'Teste'
        }

        return scheduling_atribute
    }
}
