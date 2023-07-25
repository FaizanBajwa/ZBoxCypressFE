export class UpdateLimit{
    constructor(){
        this.url="http://10.0.1.4/#/"
        this.Email_Locator="#email"
        this.email_id="employee@gmail.com"
        this.Password_Locator='.mt-2 > .p-input-icon-left > .p-inputtext'
        this.password="123456"
        this.submit_button_locator=".mt-4>.p-button"
        this.dashboard_locator=".p-menuitem-link>.p-menuitem-text"
        this.trans_limit_dashboard_locator='.layout-main > :nth-child(2) > .layout-menu-container > .layout-menu > :nth-child(4) > .p-ripple'
        this.trans_page_locator=':nth-child(4) > .p-menuitem-link > .p-menuitem-text'
        this.dateFrom='#dateFrom'
        this.dateTo='#dateTo'
        this.LimitProfileName='#limitProfileName'
        this.verifySearchButtonLocator='[aria-label="Search"]'
        this.successMSG='.Toastify__toast-body'
        this.EditBTN='.col-12 > .card>.p-datatable>.p-datatable-wrapper>.p-datatable-table>.p-datatable-tbody>tr:nth-child(1)>td:nth-child(5)>.actions>.p-button-warning'
        this.SubmitBTN='.Down__Btn > .p-button'

        this.limit_profile_name_locator='#limitProfileName'
        this.account_level_name_locator="#lkpAccountLevelId"
        this.account_level_name_ul_locator='.p-dropdown-items'
        this.account_level_name_field_locator=".p-dropdown-label.p-inputtext"

        this.daily_amt_limit_count_checkbox_locator='.Debit_card > .ca_rds > :nth-child(1) > .left_section__ > [style="display: flex;"] > .field-checkbox > .p-checkbox > .p-checkbox-box'
        this.daily_amt_limit_count_field_locator='#dailyTransLimitDr'
        this.daily_amt_limit_amount_field_locator='#dailyAmtLimitDr'
        this.monthly_amt_limit_count_checkbox_locator='.Debit_card > .ca_rds > :nth-child(2) > .left_section__ > [style="display: flex;"] > .field-checkbox > .p-checkbox > .p-checkbox-box'
        this.monthly_amt_limit_count_field_locator='#monthlyTransLimitDr'
        this.monthly_amt_limit_amount_field_locator='#monthlyAmtLimitDr'
        this.yearly_amt_limit_count_checkbox_locator='.Debit_card > .ca_rds > :nth-child(3) > .left_section__ > [style="display: flex;"] > .field-checkbox > .p-checkbox > .p-checkbox-box'
        this.yearly_amt_limit_count_field_locator='#yearlyTransLimitDr'
        this.yearly_amt_limit_amount_field_locator='#yearlyAmtLimitDr'
        this.headingEditLocator='.__heading_' 
        this.accountLevelfieldLocator=".p-dropdown-label.p-inputtext"
        
        this.daily_amt_limit_count_checkbox_credit_locator='.credit_card > .ca_rds > :nth-child(1) > .left_section__ > [style="display: flex;"] > .field-checkbox > .p-checkbox > .p-checkbox-box'
        this.daily_amt_limit_count_field_credit_locator='#dailyTransLimitCr'
        this.daily_amt_limit_amount_field_credit_locator='#dailyAmtLimitCr'
        this.monthly_amt_limit_count_checkbox_credit_locator='.credit_card > .ca_rds > :nth-child(2) > .left_section__ > [style="display: flex;"] > .field-checkbox > .p-checkbox > .p-checkbox-box'
        this.monthly_amt_limit_count_field_credit_locator='#monthlyTransLimitCr'
        this.monthly_amt_limit_amount_field_credit_locator='#monthlyAmtLimitCr'
        this.yearly_amt_limit_count_checkbox_credit_locator='.credit_card > .ca_rds > :nth-child(3) > .left_section__ > [style="display: flex;"] > .field-checkbox > .p-checkbox > .p-checkbox-box'
        this.yearly_amt_limit_count_field_credit_locator='#yearlyTransLimitCr'
        this.yearly_amt_limit_amount_field_credit_locator='#yearlyAmtLimitCr'

        this.ErrorOnMissingLimitProfileLocator=':nth-child(1) > .p-field > small.p-error'
        this.LocatorForErrorOnDailyAmtLimitCount='.Debit_card > .ca_rds > :nth-child(1) > .left_section__ > small.p-error'
        this.LocatorForErrorOnDailyAmtLimitAmount='.Debit_card > .ca_rds > :nth-child(1) > .right_section__ > small.p-error'
        this.LocatorForErrorOnMonthlyAmtLimitCount ='.Debit_card > .ca_rds > :nth-child(2) > .left_section__ > small.p-error'
        this.LocatorForErrorOnMonthlyAmtLimitAmount='.Debit_card > .ca_rds > :nth-child(2) > .right_section__ > small.p-error'
        this.LocatorForErrorOnYearlyAmtLimitCount ='.Debit_card > .ca_rds > :nth-child(3) > .left_section__ > small.p-error'
        this.LocatorForErrorOnYearlyAmtLimitAmount='.Debit_card > .ca_rds > :nth-child(3) > .right_section__ > small.p-error'


        this.LocatorForErrorOnDailyAmtLimitCreditCount='.credit_card > .ca_rds > :nth-child(1) > .left_section__ > small.p-error'
        this.LocatorForErrorOnDailyAmtLimitCreditAmount='.credit_card > .ca_rds > :nth-child(1) > .right_section__ > small.p-error'
        this.LocatorForErrorOnMonthlyAmtLimitCreditCount ='.credit_card > .ca_rds > :nth-child(2) > .left_section__ > small.p-error'
        this.LocatorForErrorOnMonthlyAmtLimitCreditAmount='.credit_card > .ca_rds > :nth-child(2) > .right_section__ > small.p-error'
        this.LocatorForErrorOnYearlyAmtLimitCreditCount ='.credit_card > .ca_rds > :nth-child(3) > .left_section__ > small.p-error'
        this.LocatorForErrorOnYearlyAmtLimitCreditAmount='.credit_card > .ca_rds > :nth-child(3) > .right_section__ > small.p-error'
    
    }

    navigate_to_Dashboard(){
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

    navigate_to_TransLimitDash(){
        cy.get(this.trans_limit_dashboard_locator).click()
    }
    validateTextInLimitTransactionPageLocator(expectedText) {
        cy.get(this.trans_page_locator).invoke('text').then((text) => {
            expect(text).to.contain(expectedText); 
          });
    }

    NavigateToViewLimitTransactionScreen(LPName,Datefrom,DateTo,txt){
        cy.get(this.LimitProfileName).should('be.visible').should('not.be.disabled').type(LPName,{force: true})
        cy.get(this.dateFrom).should('be.visible').should('not.be.disabled').type(Datefrom,{force: true})
        cy.get(this.dateTo).should('be.visible').should('not.be.disabled').type(DateTo,{force: true})
        cy.get(this.verifySearchButtonLocator).should('be.visible').should('not.be.disabled').should('have.text','Search').click()
        cy.get(this.successMSG).should(($message) => {
            const messageText = $message.text();
            expect(messageText).to.include(txt)
        })
        cy.get(this.EditBTN).should('be.visible').should('not.be.disabled').click()
    }
    VerifyTxtOnEditScreen(){
        cy.get(this.headingEditLocator).contains('EDIT DETAILS').should('be.visible')
    }
    VerifyLimitProfileName(txtPresent){
        cy.get(this.limit_profile_name_locator).should('not.be.disabled').should('be.visible').should('have.value',txtPresent);
    }
    FillAddLimitProName(text){
        cy.get(this.limit_profile_name_locator).click().clear().type(text,{force:true});
    }
    VerifyEmptyAddLimitProName(){
        cy.get(this.limit_profile_name_locator,{timeout:2000}).clear()
    }
    VerifyAccountStatusDD(txtPresent){
        cy.get(this.accountLevelfieldLocator).should('not.be.disabled').should('be.visible').should('have.text',txtPresent);
    }
    AddingDDValue(ddvalue){
        cy.get(this.account_level_name_field_locator).should('have.text',ddvalue);
        cy.get(this.account_level_name_locator).should('not.be.disabled').click();
        cy.wait(3000);
        cy.get(this.account_level_name_ul_locator).contains('li', ddvalue) .click();
        cy.get(this.account_level_name_field_locator).should('have.text',ddvalue);
    }

    VerifyIncludeComponent(value,value1){
        cy.get('.p-picklist-source-wrapper > .p-picklist-list').contains('li', value).should('exist');
        cy.get('.p-picklist-source-wrapper > .p-picklist-list').contains('li', value1).should('exist');
    }
    VerifyDoubleArrowButtons(){
        cy.get('.p-picklist-transfer-buttons > :nth-child(2)').should('be.visible').should('not.be.disabled')
        cy.get('.p-picklist-transfer-buttons > :nth-child(4)').should('be.visible').should('not.be.disabled')
    }
    VerifySingleArrowButtons(value){
        cy.get('.p-picklist-transfer-buttons > :nth-child(1)').should('be.visible').should('be.disabled')
        cy.get('.p-picklist-transfer-buttons > :nth-child(3)').should('be.visible').should('be.disabled')
        cy.get('.p-picklist-target-wrapper > .p-picklist-filter-container > .p-picklist-filter > .p-picklist-filter-input').should('not.be.disabled').type(value ,{force: true})
        cy.get('.p-picklist-target-wrapper > .p-picklist-list').contains('li', value) .click();
        cy.get('.p-picklist-transfer-buttons > :nth-child(3)').should('be.visible').should('not.be.disabled')
        cy.get('.p-picklist-source-wrapper > .p-picklist-list > :nth-child(1)').click()
        cy.get('.p-picklist-transfer-buttons > :nth-child(1)').should('be.visible').should('not.be.disabled')
    }

    VerifyDebitCardTransaction(dailyTransLimitDr,dailyAmtLimitDr,MonthlyTransLimitDr,MonthlyAmtLimitDr,YearlyTransLimitDr,YearlyAmtLimitDr){
        cy.get(this.daily_amt_limit_count_checkbox_locator).should('be.visible').should('not.be.checked').should('not.be.disabled');
        cy.get(this.daily_amt_limit_count_field_locator).should('not.be.disabled').should('have.value',dailyTransLimitDr).should('be.visible');
        cy.get(this.daily_amt_limit_amount_field_locator).should('not.be.disabled').should('have.value',dailyAmtLimitDr).should('be.visible');

        cy.get(this.monthly_amt_limit_count_checkbox_locator).should('be.visible').should('not.be.checked').should('not.be.disabled');
        cy.get(this.monthly_amt_limit_count_field_locator).should('not.be.disabled').should('have.value',MonthlyTransLimitDr).should('be.visible');
        cy.get(this.monthly_amt_limit_amount_field_locator).should('not.be.disabled').should('have.value',MonthlyAmtLimitDr).should('be.visible');

        cy.get(this.yearly_amt_limit_count_checkbox_locator).should('be.visible').should('not.be.checked').should('not.be.disabled');
        cy.get(this.yearly_amt_limit_count_field_locator).should('not.be.disabled').should('have.value',YearlyTransLimitDr).should('be.visible');
        cy.get(this.yearly_amt_limit_amount_field_locator).should('not.be.disabled').should('have.value',YearlyAmtLimitDr).should('be.visible');
    }
    AddDailyDebitCardTransac(DailyTransUpdated,DailyAmtUpdated){
        cy.get(this.daily_amt_limit_count_field_locator).should('not.be.disabled').should('be.visible').click().clear().type(DailyTransUpdated);
        cy.get(this.daily_amt_limit_amount_field_locator).should('not.be.disabled').should('be.visible').click().clear().type(DailyAmtUpdated);;
    }

    AddMonthlyDebitCardTransac(MonthlyTransUpdated,MonthlyAmtUpdated){
        cy.get(this.monthly_amt_limit_count_field_locator).should('not.be.disabled').should('be.visible').click().clear().type(MonthlyTransUpdated);
        cy.get(this.monthly_amt_limit_amount_field_locator).should('not.be.disabled').should('be.visible').click().clear().type(MonthlyAmtUpdated);;
    }
    AddYearlyDebitCardTransac(YearlyTransUpdated,YearlyAmtUpdated){
        cy.get(this.yearly_amt_limit_count_field_locator).should('not.be.disabled').should('be.visible').click().clear().type(YearlyTransUpdated);
        cy.get(this.yearly_amt_limit_amount_field_locator).should('not.be.disabled').should('be.visible').click().clear().type(YearlyAmtUpdated);;
    }

    VerifyEmptyAddDailyDebitCardTransac(){
        cy.get(this.daily_amt_limit_count_field_locator).should('not.be.disabled').should('be.visible').clear();
        cy.get(this.daily_amt_limit_amount_field_locator).should('not.be.disabled').should('be.visible').clear();
    }

    VerifyEmptyAddMonthlyDebitCardTransac(){
        cy.get(this.monthly_amt_limit_count_field_locator).should('not.be.disabled').should('be.visible').clear();
        cy.get(this.monthly_amt_limit_amount_field_locator).should('not.be.disabled').should('be.visible').clear();
    }
    VerifyEmptyAddYearlyDebitCardTransac(){
        cy.get(this.yearly_amt_limit_count_field_locator).should('not.be.disabled').should('be.visible').clear();
        cy.get(this.yearly_amt_limit_amount_field_locator).should('not.be.disabled').should('be.visible').clear();
    }

    VerifyCreditCardTransaction(dailyTransLimitCr,dailyAmtLimitCr,MonthlyTransLimitCr,MonthlyAmtLimitCr,YearlyTransLimitCr,YearlyAmtLimitCr){
        cy.get(this.daily_amt_limit_count_checkbox_credit_locator).should('be.visible').should('not.be.checked').should('not.be.disabled');
        cy.get(this.daily_amt_limit_count_field_credit_locator).should('not.be.disabled').should('have.value',dailyTransLimitCr).should('be.visible');
        cy.get(this.daily_amt_limit_amount_field_credit_locator).should('not.be.disabled').should('have.value',dailyAmtLimitCr).should('be.visible');

        cy.get(this.monthly_amt_limit_count_checkbox_credit_locator).should('be.visible').should('not.be.checked').should('not.be.disabled');
        cy.get(this.monthly_amt_limit_count_field_credit_locator).should('not.be.disabled').should('have.value',MonthlyTransLimitCr).should('be.visible');
        cy.get(this.monthly_amt_limit_amount_field_credit_locator).should('not.be.disabled').should('have.value',MonthlyAmtLimitCr).should('be.visible');

        cy.get(this.yearly_amt_limit_count_checkbox_credit_locator).should('be.visible').should('not.be.checked').should('not.be.disabled');
        cy.get(this.yearly_amt_limit_count_field_credit_locator).should('not.be.disabled').should('have.value',YearlyTransLimitCr).should('be.visible');
        cy.get(this.yearly_amt_limit_amount_field_credit_locator).should('not.be.disabled').should('have.value',YearlyAmtLimitCr).should('be.visible');
    }
    AddDailyCreditCardTransac(DailyCreditTransUpdated,DailyCreditAmtUpdated){
        cy.get(this.daily_amt_limit_count_field_credit_locator).should('not.be.disabled').should('be.visible').click().clear().type(DailyCreditTransUpdated);
        cy.get(this.daily_amt_limit_amount_field_credit_locator).should('not.be.disabled').should('be.visible').click().clear().type(DailyCreditAmtUpdated);;
    }

    AddMonthlyCreditCardTransac(MonthlyCreditTransUpdated,MonthlyCreditAmtUpdated){
        cy.get(this.monthly_amt_limit_count_field_credit_locator).should('not.be.disabled').should('be.visible').click().clear().type(MonthlyCreditTransUpdated);
        cy.get(this.monthly_amt_limit_amount_field_credit_locator).should('not.be.disabled').should('be.visible').click().clear().type(MonthlyCreditAmtUpdated);;
    }
    AddYearlyCreditCardTransac(YearlyCreditTransUpdated,YearlyCreditAmtUpdated){
        cy.get(this.yearly_amt_limit_count_field_credit_locator).should('not.be.disabled').should('be.visible').click().clear().type(YearlyCreditTransUpdated);
        cy.get(this.yearly_amt_limit_amount_field_credit_locator).should('not.be.disabled').should('be.visible').click().clear().type(YearlyCreditAmtUpdated);;
    }

    VerifyEmptyAddDailyCreditCardTransac(){
        cy.get(this.daily_amt_limit_count_field_credit_locator).should('not.be.disabled').should('be.visible').clear()
        cy.get(this.daily_amt_limit_amount_field_credit_locator).should('not.be.disabled').should('be.visible').clear()
    }

    VerifyEmptyAddMonthlyCreditCardTransac(){
        cy.get(this.monthly_amt_limit_count_field_credit_locator).should('not.be.disabled').should('be.visible').clear()
        cy.get(this.monthly_amt_limit_amount_field_credit_locator).should('not.be.disabled').should('be.visible').clear()
    }
    VerifyEmptyAddYearlyCreditCardTransac(){
        cy.get(this.yearly_amt_limit_count_field_credit_locator).should('not.be.disabled').should('be.visible').clear()
        cy.get(this.yearly_amt_limit_amount_field_credit_locator).should('not.be.disabled').should('be.visible').clear()
    }

    VerifySubmitButton(){
        cy.get(this.SubmitBTN).should('be.visible').should('not.be.disabled').should('have.text','Submit').click()
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