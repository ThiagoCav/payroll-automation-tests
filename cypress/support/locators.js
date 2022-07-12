const locators = {

    MENU: {
        OPTIONS: 'button[class="mat-focus-indicator mat-menu-trigger mat-icon-button mat-button-base"]',
        HOLIDAYS: 'button[ng-reflect-router-link="/holidays"]',
        EMAILS: 'button[ng-reflect-router-link="/mails"]',
        ALLOWED_ACTIVITIES: '[ng-reflect-router-link="/configuration/allowedActiviti"]',
        DENIED_ACTIVITIES: 'button[ng-reflect-router-link="/configuration/deniedActivitie"]',
        PENALTY_CODES: 'button[ng-reflect-router-link="/configuration/penaltyCode"]'
    },

    HOME: {
        ASSERT_HOME_PAGE: 'body[class="mat-typography"]',
    },

    SCHEDULING: {
        BTN_INSERT: 'button[ng-reflect-router-link="/schedule"]',
        BTN_BACK: 'button[ng-reflect-router-link="/home"]',
        BTN_INSERT_SAVE: ':nth-child(3) > div > .mat-focus-indicator > .mat-button-wrapper',
        BTN_DOWNLOAD: 'button[class="mat-focus-indicator mat-tooltip-trigger mat-button mat-button-base mat-success"]',
        BTN_DELETE_PAYROLL: 'button[class="mat-focus-indicator mat-tooltip-trigger mat-button mat-button-base mat-warn"]',
        BTN_DELETE_PAYROLL_CONFIRM: 'button[class="mat-focus-indicator mat-raised-button mat-button-base mat-success"]',
        ASSERT_PAGE_REGISTRATION: '#page-wrap',
        START_DATE: '#mat-date-range-input-0',
        END_DATE: '.mat-end-date',
        RADIO_BTN_PENALITY: '#mat-radio-2-input',
        RADIO_BTN_REASON_CODE: '#mat-radio-5-input'
    },

    HOLIDAY: {
        ASSERT_NAME_PAGE: '.caixa-cabecalho-titulo',
        ASSERT_NAME_PAGE_REGISTRATION: '.caixa-cabecalho-titulo',
        ASSERT_GRID: '#caixaGrid',
        BTN_INSERT: 'button[ng-reflect-router-link="/holidays/inserir"]',
        DATE: '#mat-input-2',
        DATE_EDIT: '#mat-input-5',
        MENU_BASES: '.mat-select-placeholder',
        BASE_SELECT_ONE: 'mat-option[ng-reflect-value="AAG"]',
        BASE_SELECT_TWO: 'mat-option[ng-reflect-value="AAI"]',
        CLICK_PAGE: 'body[class="mat-typography"]',
        DESCRIPTION: '#mat-input-3',
        DESCRIPTION_EDIT: 'input[ng-reflect-name="description"]',
        BTN_ADD: 'md-grid-tile-footer > .mat-focus-indicator > .mat-button-wrapper',
        REMOVE_BASE_TWO: ':nth-child(2) > .cdk-column-acoes > .mat-focus-indicator > .mat-button-wrapper > .mat-icon',
        BTN_SAVE: 'button[class="mat-focus-indicator mat-raised-button mat-button-base mat-success"]',
        BTN_EDIT_XP: (description, date) => `//div[contains(text(), '${description}')]/..//div[contains(text(), '${date}')]/../div//button//span//mat-icon[contains(text(), 'edit')]`,
        BTN_REMOVE_XP: (description, date) => `//div[contains(text(), '${description}')]/..//div[contains(text(), '${date}')]/../div//button//span//mat-icon[contains(text(), 'delete_forever')]`,
        BTN_REMOVE_EDIT_XP: (descriptionChange, dateChange) => `//div[contains(text(), '${descriptionChange}')]/..//div[contains(text(), '${dateChange}')]/../div//button//span//mat-icon[contains(text(), 'delete_forever')]`,
        BTN_SAVE_EDIT: '.mat-success > .mat-button-wrapper',
        BTN_BACK_HOLIDAYPAGE: '.marginLeft > .mat-focus-indicator > .mat-button-wrapper',
        BTN_CONFIRM_REMOVE: '.mat-success',
        REGISTERED_XP: iata  => `//div[contains(text(),'${iata}')]`
    },

    EMAIL: {
        ASSERT_PAGE_VISIBLE: '#page-wrap',
        BTN_NEW_MAIL_XP: mail => `//div/div//div//button//span[contains(text(), '${mail}')]`,
        MAIL_INPUT: 'mat-form-field[ng-reflect-appearance="fill"]',
        BTN_SAVE: '.mat-success',
        BTN_REMOVE_XP: mail => `//div/div//div/div[contains(text(), '${mail}')]/../div/button/span/mat-icon[contains(text(), 'delete_forever')]`,
        BTN_CONFIRM_REMOVE: '.mat-success',
        BTN_EDIT_XP: mail => `//div/div//div/div[contains(text(), '${mail}')]/../div/button/span/mat-icon[contains(text(), 'edit')]`,
        DESCRIPTION_EDIT: 'input[email="true"]'
    },

    ALLOWED_ACTIVITIE: {
        BTN_NEW_ACTIVITIE: 'button[ng-reflect-router-link="/configuration/allowedActiviti"]',
        COMBO_COLUMN: '#mat-select-value-5 > .mat-select-placeholder',
        COMBO_VALUE_XP: value => `//span[contains(text(), '${value}')]`,
        COMBO_CODE: 'mat-select[ng-reflect-name="codes"]',
        CODE_ONE_XP: code => `//mat-option/span[contains(text(), '${code}')]`,
        CODE_TWO_XP: code => `//mat-option/span[contains(text(), '${code}')]`,
        BTN_ADD_XP: `//button/span[contains(text(), 'Adicionar')]`,
        CLICK_RANDOM: '.cdk-overlay-backdrop',
        BTN_SAVE_XP:  `//button/span[contains(text(), 'Salvar')]`,
        SEARCH_COLUMN_XP: column => `//div[contains(text(), '${column}')]`,
        BTN_PAGES: '#mat-select-value-3',
        PAGES_VISIBLE_XP: qtdPages => `//div/mat-option/span[contains(text(), '${qtdPages}')]`,
        BTN_EDIT_XP: (column, code) => `//div[contains(text(), '${column}')]/..//..//..//div/b[contains(text(), '${code}')]/../../div/button/span/mat-icon[contains(text(), 'edit')]`,
        COMBO_EDIT_CODE: 'mat-select[ng-reflect-name="codes"]',
        CODE_INCLUDE_XP: code => `//mat-option/span[contains(text(), '${code}')]`,
        BTN_SAVE_EDIT: `//span[contains(text(), 'Salvar')]`,
        BTN_REMOVE_XP: (column, code) => `//div[contains(text(), '${column}')]/..//..//..//div/b[contains(text(), '${code}')]/../../div/button/span/mat-icon[contains(text(), 'delete_forever')]`,
        CONFIRM_DELETE_XP: `//span[contains(text(), 'Sim')]`
        
    },

    DENIED_ACTIVITIE: {
        BTN_NEW_ACTIVITIE: 'button[ng-reflect-router-link="/configuration/deniedActivitie"]',
        COMBO_NAME: '#mat-select-value-5 > .mat-select-placeholder',
        ACTIVITIE_NAME_XP: name => `//span[contains(text(), '${name}')]`,
        COMBO_CODE: '.mat-select-placeholder',
        CODE_ONE_XP: code => `//span[contains(text(), '${code}')]`,
        CODE_TWO_XP: code => `//span[contains(text(), '${code}')]`,
        BTN_ADD_XP: `//span[contains(text(), 'Adicionar')]`,
        CLICK_RANDOM: '.cdk-overlay-backdrop',
        BTN_REMOVE_INGRID_XP: `//div//tbody//span//mat-icon[contains(text(), 'delete_forever')]`,
        BTN_SAVE_XP: `//span[contains(text(), 'Salvar')]`,
        ACTIVITIE_SELECT_XP: code => `//div//table//div[contains(text(), '${code}')]`,
        BTN_EDIT_XP: (name, code) => `//div[contains(text(), '${name}')]/..//..//..//div/b[contains(text(), '${code}')]/../../div/button/span/mat-icon[contains(text(), 'edit')]`,
        COMBO_EDIT: 'mat-select[formcontrolname="codes"]',
        CODE_INCLUDE_XP: code => `//mat-option/span[contains(text(), '${code}')]`,
        CLICK_RANDOM: 'div[class="cdk-overlay-backdrop cdk-overlay-transparent-backdrop cdk-overlay-backdrop-showing"]',
        BTN_SAVE_EDIT_XP: `//span[contains(text(), 'Salvar')]`,
        ASSERT_CODE_CHANGED_XP: (name, code) => `//div[contains(text(), '${name}')]/..//..//..//div/b[contains(text(), '${code}')]`,
        BTN_REMOVE_XP: (name, code) => `//div[contains(text(), '${name}')]/..//..//..//div/b[contains(text(), '${code}')]/../../div/button/span/mat-icon[contains(text(), 'delete_forever')]`,
        CONFIRM_DELETE_XP: `//span[contains(text(), 'Sim')]`
        
    },

    PENALTY: {
        BTN_NEW_CODE_XP: `//span[contains(text(), 'Novo Código')]`,
        COMBO_CODE: 'mat-select[formcontrolname="codes"]',
        CODE_XP: code => `//span[contains(text(), '${code}')]`,
        CLICK_RANDOM: 'div[class="cdk-overlay-backdrop cdk-overlay-transparent-backdrop cdk-overlay-backdrop-showing"]',
        BTN_SAVE_XP: `//span[contains(text(), 'Salvar')]`,
        ASSERT_INSERT_XP: code => `//div[contains(text(), '${code}')]`,
        REMOVE_CODE_XP: code => `//div/div//tbody//div[contains(text(), '${code}')]/..//button//mat-icon[contains(text(), 'delete_forever')]`,
        BTN_CONFIRME_REMOVE_XP: `//span[contains(text(), 'Sim')]`
        
    },

    MESSAGE: 'div[role="alertdialog"]',

}

export default locators;