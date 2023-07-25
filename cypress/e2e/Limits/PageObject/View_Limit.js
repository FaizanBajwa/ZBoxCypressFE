export class ViewTransLimit{
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
        this.ViewDetailsLocator='.__heading_'
        this.ViewBTN='.col-12 > .card>.p-datatable>.p-datatable-wrapper>.p-datatable-table>.p-datatable-tbody>tr:nth-child(1)>td:nth-child(5)>.actions>.p-button-primary'

        this.AccLvlStatus='#lkpAccountLevelId'
        this.AccLevlStatusField='.p-dropdown-label'
        this.ArrowBtn1='.p-picklist>.p-picklist-transfer-buttons > :nth-child(1)'
        this.ArrowBTN2='.p-picklist>.p-picklist-transfer-buttons > :nth-child(2)'
        this.ArrowBTN3='.p-picklist>.p-picklist-transfer-buttons > :nth-child(3)'
        this.ArrowBTN4='.p-picklist>.p-picklist-transfer-buttons > :nth-child(4)'
        this.IncludeULValue='.p-picklist-source-wrapper > .p-picklist-list'
        this.IandEComponent='.p-picklist'
        this.daily_amt_limit_count_checkbox_locator='.Debit_card > .ca_rds > :nth-child(1) > .left_section__ > [style="display: flex;"] > .field-checkbox > .p-checkbox > .p-checkbox-box'
        this.daily_amt_limit_count_field_locator='#dailyTransLimitDr'
        this.daily_amt_limit_amount_field_locator='#dailyAmtLimitDr'
        this.monthly_amt_limit_count_checkbox_locator='.Debit_card > .ca_rds > :nth-child(2) > .left_section__ > [style="display: flex;"] > .field-checkbox > .p-checkbox > .p-checkbox-box'
        this.monthly_amt_limit_count_field_locator='#monthlyTransLimitDr'
        this.monthly_amt_limit_amount_field_locator='#monthlyAmtLimitDr'
        this.yearly_amt_limit_count_checkbox_locator='.Debit_card > .ca_rds > :nth-child(3) > .left_section__ > [style="display: flex;"] > .field-checkbox > .p-checkbox > .p-checkbox-box'
        this.yearly_amt_limit_count_field_locator='#yearlyTransLimitDr'
        this.yearly_amt_limit_amount_field_locator='#yearlyAmtLimitDr'

        this.daily_amt_limit_count_checkbox_credit_locator='.credit_card > .ca_rds > :nth-child(1) > .left_section__ > [style="display: flex;"] > .field-checkbox > .p-checkbox > .p-checkbox-box'
        this.daily_amt_limit_count_field_credit_locator='#dailyTransLimitCr'
        this.daily_amt_limit_amount_field_credit_locator='#dailyAmtLimitCr'
        this.monthly_amt_limit_count_checkbox_credit_locator='.credit_card > .ca_rds > :nth-child(2) > .left_section__ > [style="display: flex;"] > .field-checkbox > .p-checkbox > .p-checkbox-box'
        this.monthly_amt_limit_count_field_credit_locator='#monthlyTransLimitCr'
        this.monthly_amt_limit_amount_field_credit_locator='#monthlyAmtLimitCr'
        this.yearly_amt_limit_count_checkbox_credit_locator='.credit_card > .ca_rds > :nth-child(3) > .left_section__ > [style="display: flex;"] > .field-checkbox > .p-checkbox > .p-checkbox-box'
        this.yearly_amt_limit_count_field_credit_locator='#yearlyTransLimitCr'
        this.yearly_amt_limit_amount_field_credit_locator='#yearlyAmtLimitCr'
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
        cy.get(this.ViewBTN).should('be.visible').should('not.be.disabled').click()
    }

    VerifyTextInViewLimitTransactionScreen(){
        cy.get(this.ViewDetailsLocator).contains('VIEW DETAILS').should('be.visible')
    }
    VerifyLimitProfileNameField(txt){
        cy.get(this.LimitProfileName).should('have.value',txt).should('be.visible').should('be.disabled')
    }
    VerifyLimitStatusDD(txt){
        cy.get(this.AccLvlStatus).should('be.visible').should('have.class','p-disabled')
        cy.get(this.AccLevlStatusField).should('have.text',txt)
    }
    VerifyIandEButtons(){
        cy.get(this.ArrowBtn1).should('be.visible').should('have.class','p-disabled')
        cy.get(this.ArrowBTN2) .then(($element) => { const pointerEvents = Cypress.$($element).css('pointer-events'); expect(pointerEvents).to.equal('none'); });
        cy.get(this.ArrowBTN3) .then(($element) => { const pointerEvents = Cypress.$($element).css('pointer-events'); expect(pointerEvents).to.equal('none'); });
        cy.get(this.ArrowBTN4) .then(($element) => { const pointerEvents = Cypress.$($element).css('pointer-events'); expect(pointerEvents).to.equal('none'); });
    }

    VerifyIncludeAndExcludeComponent(value,value1){
        cy.get(this.IandEComponent).should('be.visible').should('have.class','picklist-disabled')
        cy.get(this.IncludeULValue).contains('li', value).should('exist');
        cy.get(this.IncludeULValue).contains('li', value1).should('exist');
    }

    VerifyDebitCards(dailyTransLimitDr,dailyAmtLimitDr,MonthlyTransLimitDr,MonthlyAmtLimitDr,YearlyTransLimitDr,YearlyAmtLimitDr){
        cy.get(this.daily_amt_limit_count_checkbox_locator).should('have.class','p-disabled').should('be.visible').should('not.be.checked');
        cy.get(this.daily_amt_limit_count_field_locator).should('be.disabled').should('have.value',dailyTransLimitDr).should('have.class','p-disabled').should('be.visible');
        cy.get(this.daily_amt_limit_amount_field_locator).should('be.disabled').should('have.value',dailyAmtLimitDr).should('have.class','p-disabled').should('be.visible');

        cy.get(this.monthly_amt_limit_count_checkbox_locator).should('have.class','p-disabled').should('be.visible').should('not.be.checked');
        cy.get(this.monthly_amt_limit_count_field_locator).should('be.disabled').should('have.value',MonthlyTransLimitDr).should('have.class','p-disabled').should('be.visible');
        cy.get(this.monthly_amt_limit_amount_field_locator).should('be.disabled').should('have.value',MonthlyAmtLimitDr).should('have.class','p-disabled').should('be.visible');

        cy.get(this.yearly_amt_limit_count_checkbox_locator).should('have.class','p-disabled').should('be.visible').should('not.be.checked');
        cy.get(this.yearly_amt_limit_count_field_locator).should('be.disabled').should('have.value',YearlyTransLimitDr).should('have.class','p-disabled').should('be.visible');
        cy.get(this.yearly_amt_limit_amount_field_locator).should('be.disabled').should('have.value',YearlyAmtLimitDr).should('have.class','p-disabled').should('be.visible');
    }

    VerifyCreditCards(dailyTransLimitCr,dailyAmtLimitCr,MonthlyTransLimitCr,MonthlyAmtLimitCr,YearlyTransLimitCr,YearlyAmtLimitCr){
        cy.get(this.daily_amt_limit_count_checkbox_credit_locator).should('have.class','p-disabled').should('be.visible').should('not.be.checked');
        cy.get(this.daily_amt_limit_count_field_credit_locator).should('have.value',dailyTransLimitCr).should('have.class','p-disabled').should('be.visible');
        cy.get(this.daily_amt_limit_amount_field_credit_locator).should('have.value',dailyAmtLimitCr).should('have.class','p-disabled').should('be.visible');

        cy.get(this.monthly_amt_limit_count_checkbox_credit_locator).should('have.class','p-disabled').should('be.visible').should('not.be.checked');
        cy.get(this.monthly_amt_limit_count_field_credit_locator).should('be.disabled').should('have.value',MonthlyTransLimitCr).should('have.class','p-disabled').should('be.visible');
        cy.get(this.monthly_amt_limit_amount_field_credit_locator).should('be.disabled').should('have.value',MonthlyAmtLimitCr).should('have.class','p-disabled').should('be.visible');

        cy.get(this.yearly_amt_limit_count_checkbox_credit_locator).should('have.class','p-disabled').should('be.visible').should('not.be.checked');
        cy.get(this.yearly_amt_limit_count_field_credit_locator).should('be.disabled').should('have.value',YearlyTransLimitCr).should('have.class','p-disabled').should('be.visible')
        cy.get(this.yearly_amt_limit_amount_field_credit_locator).should('be.disabled').should('have.value',YearlyAmtLimitCr).should('have.class','p-disabled').should('be.visible');

    }

    VerifyOkButton(){
        cy.get('.Down__Btn > .p-button > .p-button-label').should('be.visible').should('not.be.disabled').should('have.text','Okay')
    }




}