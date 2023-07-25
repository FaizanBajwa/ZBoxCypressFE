export class AddLimitTransactionProfile {

  constructor() {
    this.Login_email_locator = ""
    this.url = "http://10.0.1.4/#/"
    this.Email_Locator = "#email"
    this.email_id = "employee@gmail.com"
    this.Password_Locator = '.mt-2 > .p-input-icon-left > .p-inputtext'
    this.password = "123456"
    this.submit_button_locator = ".mt-4>.p-button"
    this.dashboard_locator = ".p-menuitem-link>.p-menuitem-text"
    this.trans_limit_dashboard_locator = '.layout-main > :nth-child(2) > .layout-menu-container > .layout-menu > :nth-child(4) > .p-ripple'
    this.trans_page_locator = ':nth-child(4) > .p-menuitem-link > .p-menuitem-text'
    this.add_trans_limit_locator = ':nth-child(4) > .p-menuitem-link > .p-menuitem-text'
    this.add_new_limit_button_locator = '.Top__Btn > div > .p-button > .p-button-label'
    this.limit_profile_name_locator = '#limitProfileName'
    this.account_level_name_locator = "#lkpAccountLevelId"
    this.account_level_name_ul_locator = '.p-dropdown-items'
    this.account_level_name_field_locator = ".p-dropdown-label.p-inputtext"

    this.daily_amt_limit_count_checkbox_locator = '.Debit_card > .ca_rds > :nth-child(1) > .left_section__ > [style="display: flex;"] > .field-checkbox > .p-checkbox > .p-checkbox-box'
    this.daily_amt_limit_count_field_locator = '#dailyTransLimitDr'
    this.daily_amt_limit_amount_field_locator = '#dailyAmtLimitDr'
    this.monthly_amt_limit_count_checkbox_locator = '.Debit_card > .ca_rds > :nth-child(2) > .left_section__ > [style="display: flex;"] > .field-checkbox > .p-checkbox > .p-checkbox-box'
    this.monthly_amt_limit_count_field_locator = '#monthlyTransLimitDr'
    this.monthly_amt_limit_amount_field_locator = '#monthlyAmtLimitDr'
    this.yearly_amt_limit_count_checkbox_locator = '.Debit_card > .ca_rds > :nth-child(3) > .left_section__ > [style="display: flex;"] > .field-checkbox > .p-checkbox > .p-checkbox-box'
    this.yearly_amt_limit_count_field_locator = '#yearlyTransLimitDr'
    this.yearly_amt_limit_amount_field_locator = '#yearlyAmtLimitDr'

    this.daily_amt_limit_count_checkbox_credit_locator = '.credit_card > .ca_rds > :nth-child(1) > .left_section__ > [style="display: flex;"] > .field-checkbox > .p-checkbox > .p-checkbox-box'
    this.daily_amt_limit_count_field_credit_locator = '#dailyTransLimitCr'
    this.daily_amt_limit_amount_field_credit_locator = '#dailyAmtLimitCr'
    this.monthly_amt_limit_count_checkbox_credit_locator = '.credit_card > .ca_rds > :nth-child(2) > .left_section__ > [style="display: flex;"] > .field-checkbox > .p-checkbox > .p-checkbox-box'
    this.monthly_amt_limit_count_field_credit_locator = '#monthlyTransLimitCr'
    this.monthly_amt_limit_amount_field_credit_locator = '#monthlyAmtLimitCr'
    this.yearly_amt_limit_count_checkbox_credit_locator = '.credit_card > .ca_rds > :nth-child(3) > .left_section__ > [style="display: flex;"] > .field-checkbox > .p-checkbox > .p-checkbox-box'
    this.yearly_amt_limit_count_field_credit_locator = '#yearlyTransLimitCr'
    this.yearly_amt_limit_amount_field_credit_locator = '#yearlyAmtLimitCr'

    this.submit_button_add_limit = '.Down__Btn > .p-button > .p-button-label'

    this.ErrorOnMissingLimitProfileLocator = ':nth-child(1) > .p-field > small.p-error'
    this.ErrorOnMissingAccountLevelNameLocator = ':nth-child(2) > .p-field > small.p-error'
    this.LocatorForErrorOnDailyAmtLimitCount = '.Debit_card > .ca_rds > :nth-child(1) > .left_section__ > small.p-error'
    this.LocatorForErrorOnDailyAmtLimitAmount = '.Debit_card > .ca_rds > :nth-child(1) > .right_section__ > small.p-error'
    this.LocatorForErrorOnMonthlyAmtLimitCount = '.Debit_card > .ca_rds > :nth-child(2) > .left_section__ > small.p-error'
    this.LocatorForErrorOnMonthlyAmtLimitAmount = '.Debit_card > .ca_rds > :nth-child(2) > .right_section__ > small.p-error'
    this.LocatorForErrorOnYearlyAmtLimitCount = '.Debit_card > .ca_rds > :nth-child(3) > .left_section__ > small.p-error'
    this.LocatorForErrorOnYearlyAmtLimitAmount = '.Debit_card > .ca_rds > :nth-child(3) > .right_section__ > small.p-error'
    this.LocatorForErrorOnDailyAmtLimitCreditCount = '.credit_card > .ca_rds > :nth-child(1) > .left_section__ > small.p-error'
    this.LocatorForErrorOnDailyAmtLimitCreditAmount = '.credit_card > .ca_rds > :nth-child(1) > .right_section__ > small.p-error'
    this.LocatorForErrorOnMonthlyAmtLimitCreditCount = '.credit_card > .ca_rds > :nth-child(2) > .left_section__ > small.p-error'
    this.LocatorForErrorOnMonthlyAmtLimitCreditAmount = '.credit_card > .ca_rds > :nth-child(2) > .right_section__ > small.p-error'
    this.LocatorForErrorOnYearlyAmtLimitCreditCount = '.credit_card > .ca_rds > :nth-child(3) > .left_section__ > small.p-error'
    this.LocatorForErrorOnYearlyAmtLimitCreditAmount = '.credit_card > .ca_rds > :nth-child(3) > .right_section__ > small.p-error'


  }

  navigate_to_Dashboard() {
    cy.visit(this.url)
    cy.get(this.Email_Locator).type(this.email_id)
    cy.get(this.Password_Locator).type(this.password)
    cy.get(this.submit_button_locator).click()

  }

  validateTextInDashboardLocator(expectedText) {
    cy.get(this.dashboard_locator).invoke('text').then((text) => {
      expect(text).to.contain(expectedText);
    });
  }

  navigate_to_TransLimitDash() {
    cy.get(this.trans_limit_dashboard_locator).click()
  }

  validateTextInLimitTransactionPageLocator(expectedText) {
    cy.get(this.trans_page_locator).invoke('text').then((text) => {
      expect(text).to.contain(expectedText);
    });
  }

  validateTextInADDLimitTransactionPageLocator(expectedText) {
    cy.get(this.add_trans_limit_locator).invoke('text').then((text) => {
      expect(text).to.contain(expectedText);
    });
  }


  clickAddLimitBTN() {
    cy.get(this.add_new_limit_button_locator).click({ force: true });
  }

  AddLimitProfileName(text) {
    cy.get(this.limit_profile_name_locator).should('not.be.disabled').type(text, { force: true });
  }

  AddingDDValue(ddvalue) {
    cy.get(this.account_level_name_locator).should('not.be.disabled').click();
    cy.wait(3000);
    cy.get(this.account_level_name_ul_locator,{timeout:2000}).contains('li', ddvalue).click();
    //cy.get('.p-dropdown-items > :nth-child('+ddvalue+')').click();
    //cy.get('[aria-label="'+ddvalue+'"').click();
    cy.get(this.account_level_name_field_locator).should('have.text', ddvalue);
  }

  SelectingIandE(value, value1) {
    cy.get('.p-picklist-transfer-buttons > :nth-child(2)').click()
    cy.get('.p-picklist-target-wrapper > .p-picklist-filter-container > .p-picklist-filter > .p-picklist-filter-input').should('not.be.disabled').type(value, { force: true })
    cy.get('.p-picklist-target-wrapper > .p-picklist-list').contains('li', value).click();
    cy.get('.p-picklist-transfer-buttons > :nth-child(3)').click()
    cy.get('.p-picklist-target-wrapper > .p-picklist-filter-container > .p-picklist-filter > .p-picklist-filter-input').clear();
    cy.get('.p-picklist-target-wrapper > .p-picklist-filter-container > .p-picklist-filter > .p-picklist-filter-input').should('not.be.disabled').type(value1, { force: true })
    cy.get('.p-picklist-target-wrapper > .p-picklist-list').contains('li', value1).click();
    cy.get('.p-picklist-transfer-buttons > :nth-child(3)').click()
    cy.get('.p-picklist-source-wrapper > .p-picklist-list').contains('li', value).should('exist');
    cy.get('.p-picklist-source-wrapper > .p-picklist-list').contains('li', value1).should('exist');
  }

  CheckingDailyAmtDebitLimit2(txt,txt2) {
    cy.get(this.daily_amt_limit_count_checkbox_locator).should('not.be.checked');
    cy.get(this.daily_amt_limit_count_field_locator).should('not.be.disabled').type(txt);
    cy.get(this.daily_amt_limit_amount_field_locator).should('not.be.disabled').type(txt2);
  }

  CheckingDailyAmtDebitLimit() {
    cy.get(this.daily_amt_limit_count_checkbox_locator).click()
    cy.get(this.daily_amt_limit_count_field_locator).should('be.disabled');
    cy.get(this.daily_amt_limit_amount_field_locator).should('not.be.disabled').type("2000");
  }


  CheckingMonthlyAmtDebitLimit2(txt,txt2) {
    cy.get(this.monthly_amt_limit_count_checkbox_locator).should('not.be.checked');
    cy.get(this.monthly_amt_limit_count_field_locator).should('not.be.disabled').type(txt);
    cy.get(this.monthly_amt_limit_amount_field_locator).should('not.be.disabled').type(txt2);
  }
  CheckingMonthlyAmtDebitLimit() {
    cy.get(this.monthly_amt_limit_count_checkbox_locator).click();
    cy.get(this.monthly_amt_limit_count_field_locator).should('be.disabled');
    cy.get(this.monthly_amt_limit_amount_field_locator).should('not.be.disabled').type("2000");

  }

  CheckingYearlyAmtLimitDebit2(txt,txt2) {
    cy.get(this.yearly_amt_limit_count_checkbox_locator).should('not.be.checked');
    cy.get(this.yearly_amt_limit_count_field_locator).should('not.be.disabled').type(txt);
    cy.get(this.yearly_amt_limit_amount_field_locator).should('not.be.disabled').type(txt2);
  }
  CheckingYearlyAmtLimitDebit() {
    cy.get(this.yearly_amt_limit_count_checkbox_locator).click();
    cy.get(this.yearly_amt_limit_count_field_locator).should('be.disabled');
    cy.get(this.yearly_amt_limit_amount_field_locator).should('not.be.disabled').type("2000");

  }
  CheckingDailyAmtLimitCredit2(txt,txt2) {
    cy.get(this.daily_amt_limit_count_checkbox_credit_locator).should('not.be.checked');
    cy.get(this.daily_amt_limit_count_field_credit_locator).should('not.be.disabled').type(txt);
    cy.get(this.daily_amt_limit_amount_field_credit_locator).should('not.be.disabled').type(txt2);
  }
  CheckingDailyAmtLimitCredit() {
    cy.get(this.daily_amt_limit_count_checkbox_credit_locator).click();
    cy.get(this.daily_amt_limit_count_field_credit_locator).should('be.disabled');
    cy.get(this.daily_amt_limit_amount_field_credit_locator).should('not.be.disabled').type("2000");
  }

  CheckingMonthlyAmtLimitCredit2(txt,txt2) {
    cy.get(this.monthly_amt_limit_count_checkbox_credit_locator).should('not.be.checked');
    cy.get(this.monthly_amt_limit_count_field_credit_locator).should('not.be.disabled').type(txt);
    cy.get(this.monthly_amt_limit_amount_field_credit_locator).should('not.be.disabled').type(txt2);
  }

  CheckingMonthlyAmtLimitCredit() {
    cy.get(this.monthly_amt_limit_count_checkbox_credit_locator).click();
    cy.get(this.monthly_amt_limit_count_field_credit_locator).should('be.disabled')
    cy.get(this.monthly_amt_limit_amount_field_credit_locator).should('not.be.disabled').type("2000");
  }

  CheckingYearlyAmtLimitCredit2(txt,txt2) {
    cy.get(this.yearly_amt_limit_count_checkbox_credit_locator).should('not.be.checked');
    cy.get(this.yearly_amt_limit_count_field_credit_locator).should('not.be.disabled').type(txt);
    cy.get(this.yearly_amt_limit_amount_field_credit_locator).should('not.be.disabled').type(txt2);
  }
  CheckingYearlyAmtLimitCredit() {
    cy.get(this.yearly_amt_limit_count_checkbox_credit_locator).click()
    cy.get(this.yearly_amt_limit_count_field_credit_locator).should('be.disabled');
    cy.get(this.yearly_amt_limit_amount_field_credit_locator).should('not.be.disabled').type("2000");
  }

  ClickSubmit() {
    cy.get(this.submit_button_add_limit).should('be.visible').click();
  }

  VerifyLimitErrors(DailytranslimitDr,DailyAmtLimitDr,MonthlyTransLimitDr,MonthlyAmtLimitDr,YearlyTransLimitDr,YearlyAmtLimitDr){
    if(DailytranslimitDr>MonthlyTransLimitDr){
        cy.get(this.LocatorForErrorOnMonthlyAmtLimitCount).should("be.visible")
    }
    else if(MonthlyTransLimitDr>YearlyTransLimitDr){
        cy.get(this.LocatorForErrorOnYearlyAmtLimitCount).should("be.visible")
    }
    else if(DailyAmtLimitDr > MonthlyAmtLimitDr){
        cy.get(this.LocatorForErrorOnMonthlyAmtLimitAmount).should("be.visible")
    }
    else if(MonthlyAmtLimitDr > YearlyAmtLimitDr){
        cy.get(this.LocatorForErrorOnYearlyAmtLimitAmount).should("be.visible")
    }

}
VerifyCreditLimitErrors(DailytranslimitCr,DailyAmtLimitCr,MonthlyTransLimitCr,MonthlyAmtLimitCr,YearlyTransLimitCr,YearlyAmtLimitCr){
        if(DailytranslimitCr > MonthlyTransLimitCr){
            cy.get(this.LocatorForErrorOnMonthlyAmtLimitCreditAmount).should("be.visible")
        }
        else if(MonthlyTransLimitCr>YearlyTransLimitCr){
            cy.get(this.LocatorForErrorOnYearlyAmtLimitCreditAmount).should("be.visible")
        }
        else if(DailyAmtLimitCr > MonthlyAmtLimitCr){
            cy.get(this.LocatorForErrorOnMonthlyAmtLimitCreditCount).should("be.visible")
        }
        else if(MonthlyAmtLimitCr > YearlyAmtLimitCr){
            cy.get(this.LocatorForErrorOnYearlyAmtLimitCreditCount).should("be.visible")
        }

    }



}