export class transactionLimit{
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
        this.addnewBTNLocator='.Top__Btn > div > .p-button'
        this.LimitProfileName='#limitProfileName'
        this.dateFrom='#dateFrom'
        this.dateTo='#dateTo'
        this.StatusFieldLocator='#statusId > .p-dropdown-label'
        this.StatusDD='.p-dropdown-items-wrapper>.p-dropdown-items'
        this.CreatedByFieldLocator='#createdBy > .p-dropdown-label'
        this.CreatedByDD='.p-dropdown-items'
        this.successMSG='.Toastify__toast-body'
        this.UpdatedByFieldLocator='#updatedBy > .p-dropdown-label'
        this.UpdatedByDD='.p-dropdown-items'
        this.verifySearchButtonLocator='[aria-label="Search"]'
        this.ResetBtnLocator='[aria-label="Reset"]'

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

    verifyAddNewButton(){
        cy.get(this.addnewBTNLocator).should('be.visible')
    }

    verifyLimitProfileName(LPName){
        cy.get(this.LimitProfileName).should('be.visible').should('not.be.disabled').type(LPName,{force: true})
    }

    verifyDateFrom(Datefrom){
        cy.get(this.dateFrom).should('be.visible').should('not.be.disabled').type(Datefrom,{force: true})
    }

    verifyDateTo(DateTo){
        cy.get(this.dateTo).should('be.visible').should('not.be.disabled').type(DateTo,{force: true})
    }

    verifyStatusDD(ddvalue){
        cy.get(this.StatusFieldLocator).should('not.be.disabled').click();
        cy.wait(3000);
        cy.get(this.StatusDD).contains('li', ddvalue) .click();
        cy.get(this.StatusFieldLocator).should('have.text',ddvalue);
    }

    verifyCreatedByDD(CreatedByValue){
        cy.get(this.CreatedByFieldLocator).should('not.be.disabled').click();
        cy.wait(3000);
        cy.get(this.CreatedByDD).contains('li', CreatedByValue) .click();
        cy.get(this.CreatedByFieldLocator).should('have.text',CreatedByValue);
    }

    verifyUpdatedByDD(UpdatedByValue){
        cy.get(this.UpdatedByFieldLocator).should('not.be.disabled').should('be.visible').click();
        cy.wait(3000);
        cy.get(this.UpdatedByDD).contains('li', UpdatedByValue) .click();
        cy.get(this.UpdatedByFieldLocator).should('have.text',UpdatedByValue);
    }

    verifySearchButton(){
        cy.get(this.verifySearchButtonLocator).should('be.visible').should('not.be.disabled').should('have.text','Search').click()
    }
    verifyResetButton(){
        cy.get(this.ResetBtnLocator).should('be.visible').should('not.be.disabled').should('have.text','Reset').click()
        //cy.get(this.LimitProfileName).invoke('val').should('be.empty');
        cy.get(this.dateFrom).invoke('val').should('be.empty');
        cy.get(this.dateTo).invoke('val').should('be.empty');
        cy.wait(2000)
        cy.get(this.StatusFieldLocator).should('have.text','Select status');
        cy.get(this.CreatedByFieldLocator).should('have.text','Select Created By');
        cy.get(this.UpdatedByFieldLocator).should('have.text','Select Updated By');
    }

    verify_success_dialog_isvisible(txt) {
        cy.get(this.successMSG).should(($message) => {
            const messageText = $message.text();
            expect(messageText).to.include(txt)
        });
    }
    verifyLimitsTable(a){
        cy.get('.col-12 > .card>.p-datatable>.p-datatable-wrapper>.p-datatable-table>.p-datatable-tbody>tr').its('length').should('be.lt',6) //no. of rows displaying
        cy.get('.col-12 > .card>.p-datatable>.p-datatable-wrapper>.p-datatable-table>.p-datatable-thead>tr>th').its('length').should('be.lt',6) //no. of columns displaying
        cy.get('.col-12 > .card>.p-datatable>.p-datatable-wrapper>.p-datatable-table>.p-datatable-tbody>tr:nth-child(1)>td:nth-child(4)').should("not.be.empty")
        cy.get('.col-12 > .card>.p-datatable>.p-datatable-wrapper>.p-datatable-table>.p-datatable-tbody>tr:nth-child(1)>td:nth-child(1)').contains(a)
        cy.get('.col-12 > .card>.p-datatable>.p-datatable-wrapper>.p-datatable-table>.p-datatable-tbody>tr:nth-child(1)>td:nth-child(5)>.actions>.p-inputswitch').should('be.visible')
        cy.get('.col-12 > .card>.p-datatable>.p-datatable-wrapper>.p-datatable-table>.p-datatable-tbody>tr:nth-child(1)>td:nth-child(5)>.actions>.p-button-primary').should('be.visible')
        cy.get('.col-12 > .card>.p-datatable>.p-datatable-wrapper>.p-datatable-table>.p-datatable-tbody>tr:nth-child(1)>td:nth-child(5)>.actions>.p-button-warning').should('be.visible')
        //.col-12 > .card>.p-datatable>.p-datatable-wrapper>.p-datatable-table>.p-datatable-tbody>tr:nth-child(1)>td:nth-child(4)
    }


}