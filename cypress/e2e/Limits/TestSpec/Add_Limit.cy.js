import { AddLimitTransactionProfile } from "../PageObject/Add_limit_Trans_Profile"
const limitTrans = new AddLimitTransactionProfile();

    const VerifydashboardTxt="Dashboard"
    const verifyTransactionWiseTxt="Transaction Wise Limit"
    const verifyAddTransactionScreenTxt="Add Transaction Wise Limit"
    const LimitProfileName="Automation"
    const AccountLevelDDValue="Test"
    const P1="JAZZ CASH"
    const P2="Amazon"
    const count="2"
    const count2='2500'

    const DailytranslimitDr='5'
    const DailyAmtLimitDr='800'
    const MonthlyTransLimitDr='4'
    const MonthlyAmtLimitDr='500'
    const YearlyTransLimitDr='3'
    const YearlyAmtLimitDr='300'

    const DailytranslimitCr='5'
    const DailyAmtLimitCr='800'
    const MonthlyTransLimitCr='4'
    const MonthlyAmtLimitCr='700'
    const YearlyTransLimitCr='3'
    const YearlyAmtLimitCr='600'


describe("Add Transaction limit Positive UI Testcases",()=>{
    
    beforeEach(()=>{
        limitTrans.navigate_to_Dashboard()
    });
    
    
    it("Verify Login Dashboard and Transaction Limit first screen",()=>{
        limitTrans.validateTextInDashboardLocator(VerifydashboardTxt)
        limitTrans.navigate_to_TransLimitDash()
        limitTrans.validateTextInLimitTransactionPageLocator(verifyTransactionWiseTxt)
        limitTrans.clickAddLimitBTN()
        limitTrans.validateTextInADDLimitTransactionPageLocator(verifyAddTransactionScreenTxt)
    })

    it("POSITIVE FLOW-Adding new limit(with count values)",()=>{
        limitTrans.navigate_to_TransLimitDash()
        limitTrans.clickAddLimitBTN()
        limitTrans.AddLimitProfileName(LimitProfileName)
        limitTrans.AddingDDValue(AccountLevelDDValue)
        limitTrans.SelectingIandE(P1,P2)
        limitTrans.CheckingDailyAmtDebitLimit2(count,count2)
        limitTrans.CheckingMonthlyAmtDebitLimit2(count,count2)
        limitTrans.CheckingYearlyAmtLimitDebit2(count,count2)

        limitTrans.CheckingDailyAmtLimitCredit2(count,count2)
        limitTrans.CheckingMonthlyAmtLimitCredit2(count,count2)
        limitTrans.CheckingYearlyAmtLimitCredit2(count,count2)
        limitTrans.ClickSubmit()
    })

    it("POSITIVE FLOW-Adding new limit(with unlimited count)",()=>{
        limitTrans.navigate_to_TransLimitDash()
        limitTrans.clickAddLimitBTN()
        limitTrans.AddLimitProfileName(LimitProfileName)
        limitTrans.AddingDDValue(AccountLevelDDValue)
        limitTrans.SelectingIandE(P1,P2)
        limitTrans.CheckingDailyAmtDebitLimit()
        limitTrans.CheckingMonthlyAmtDebitLimit()
        limitTrans.CheckingYearlyAmtLimitDebit()

        limitTrans.CheckingDailyAmtLimitCredit()
        limitTrans.CheckingMonthlyAmtLimitCredit()
        limitTrans.CheckingYearlyAmtLimitCredit()
        limitTrans.ClickSubmit()
    })

    it("NEGETIVE FLOW-Adding new limit(with missing Limit profile name)",()=>{
        limitTrans.navigate_to_TransLimitDash()
        limitTrans.clickAddLimitBTN()
        limitTrans.AddingDDValue(AccountLevelDDValue)
        limitTrans.SelectingIandE(P1,P2)
        limitTrans.CheckingDailyAmtDebitLimit2(count,count2)
        limitTrans.CheckingMonthlyAmtDebitLimit2(count,count2)
        limitTrans.CheckingYearlyAmtLimitDebit2(count,count2)

        limitTrans.CheckingDailyAmtLimitCredit2(count,count2)
        limitTrans.CheckingMonthlyAmtLimitCredit2(count,count2)
        limitTrans.CheckingYearlyAmtLimitCredit2(count,count2)
        limitTrans.ClickSubmit()
        cy.get(limitTrans.ErrorOnMissingLimitProfileLocator).should('be.visible') //error message on limit profile name
    })

    it("NEGETIVE FLOW-Adding new limit(with missing Account level)",()=>{
        limitTrans.navigate_to_TransLimitDash()
        limitTrans.clickAddLimitBTN()
        limitTrans.AddLimitProfileName(LimitProfileName)
        limitTrans.SelectingIandE(P1,P2)
        limitTrans.CheckingDailyAmtDebitLimit2(count,count2)
        limitTrans.CheckingMonthlyAmtDebitLimit2(count,count2)
        limitTrans.CheckingYearlyAmtLimitDebit2(count,count2)

        limitTrans.CheckingDailyAmtLimitCredit2(count,count2)
        limitTrans.CheckingMonthlyAmtLimitCredit2(count,count2)
        limitTrans.CheckingYearlyAmtLimitCredit2(count,count2)
        limitTrans.ClickSubmit()
        cy.get(limitTrans.ErrorOnMissingAccountLevelNameLocator).should('be.visible') //error message on account level name
    })

    it("NEGETIVE FLOW-Adding new limit(with missing Daily Amt limit debit)",()=>{
        limitTrans.navigate_to_TransLimitDash()
        limitTrans.clickAddLimitBTN()
        limitTrans.AddLimitProfileName(LimitProfileName)
        limitTrans.AddingDDValue(AccountLevelDDValue)
        limitTrans.SelectingIandE(P1,P2)
        limitTrans.CheckingMonthlyAmtDebitLimit2(count,count2)
        limitTrans.CheckingYearlyAmtLimitDebit2(count,count2)

        limitTrans.CheckingDailyAmtLimitCredit2(count,count2)
        limitTrans.CheckingMonthlyAmtLimitCredit2(count,count2)
        limitTrans.CheckingYearlyAmtLimitCredit2(count,count2)
        limitTrans.ClickSubmit()
        cy.get(limitTrans.LocatorForErrorOnDailyAmtLimitCount).should('be.visible') //error message on Daily Amt limit debit
        cy.get(limitTrans.LocatorForErrorOnDailyAmtLimitAmount).should('be.visible') //error message on Daily Amt limit debit
    })

    it("NEGETIVE FLOW-Adding new limit(with missing Monthly Amt limit debit)",()=>{
        limitTrans.navigate_to_TransLimitDash()
        limitTrans.clickAddLimitBTN()
        limitTrans.AddLimitProfileName(LimitProfileName)
        limitTrans.AddingDDValue(AccountLevelDDValue)
        limitTrans.SelectingIandE(P1,P2)
        limitTrans.CheckingDailyAmtDebitLimit2(count,count2)
        limitTrans.CheckingYearlyAmtLimitDebit2(count,count2)

        limitTrans.CheckingDailyAmtLimitCredit2(count,count2)
        limitTrans.CheckingMonthlyAmtLimitCredit2(count,count2)
        limitTrans.CheckingYearlyAmtLimitCredit2(count,count2)
        limitTrans.ClickSubmit()
        cy.get(limitTrans.LocatorForErrorOnMonthlyAmtLimitCount).should('be.visible') //error message on Monthly Amt limit debit
        cy.get(limitTrans.LocatorForErrorOnMonthlyAmtLimitAmount).should('be.visible') //error message on Monthly Amt limit debit
    })

    it("NEGETIVE FLOW-Adding new limit(with missing Yearly Amt limit debit)",()=>{
        limitTrans.navigate_to_TransLimitDash()
        limitTrans.clickAddLimitBTN()
        limitTrans.AddLimitProfileName(LimitProfileName)
        limitTrans.AddingDDValue(AccountLevelDDValue)
        limitTrans.SelectingIandE(P1,P2)
        limitTrans.CheckingDailyAmtDebitLimit2(count,count2)
        limitTrans.CheckingMonthlyAmtDebitLimit2(count,count2)

        limitTrans.CheckingDailyAmtLimitCredit2(count,count2)
        limitTrans.CheckingMonthlyAmtLimitCredit2(count,count2)
        limitTrans.CheckingYearlyAmtLimitCredit2(count,count2)
        limitTrans.ClickSubmit()
        cy.get(limitTrans.LocatorForErrorOnYearlyAmtLimitCount).should('be.visible') //error message on Yearly Amt limit debit
        cy.get(limitTrans.LocatorForErrorOnYearlyAmtLimitAmount).should('be.visible') //error message on Yearly Amt limit debit
    })

    it("NEGETIVE FLOW-Adding new limit(with missing daily Amt limit credit)",()=>{
        limitTrans.navigate_to_TransLimitDash()
        limitTrans.clickAddLimitBTN()
        limitTrans.AddLimitProfileName(LimitProfileName)
        limitTrans.AddingDDValue(AccountLevelDDValue)
        limitTrans.SelectingIandE(P1,P2)
        limitTrans.CheckingDailyAmtDebitLimit2(count,count2)
        limitTrans.CheckingMonthlyAmtDebitLimit2(count,count2)
        limitTrans.CheckingYearlyAmtLimitDebit2(count,count2)

        limitTrans.CheckingMonthlyAmtLimitCredit2(count,count2)
        limitTrans.CheckingYearlyAmtLimitCredit2(count,count2)
        limitTrans.ClickSubmit()
        cy.get(limitTrans.LocatorForErrorOnDailyAmtLimitCreditCount).should('be.visible') //error message on daily Amt limit credit
        cy.get(limitTrans.LocatorForErrorOnDailyAmtLimitCreditAmount).should('be.visible') //error message on daily Amt limit credit
    })


    it("NEGETIVE FLOW-Adding new limit(with missing monthly Amt limit credit)",()=>{
        limitTrans.navigate_to_TransLimitDash()
        limitTrans.clickAddLimitBTN()
        limitTrans.AddLimitProfileName(LimitProfileName)
        limitTrans.AddingDDValue(AccountLevelDDValue)
        limitTrans.SelectingIandE(P1,P2)
        limitTrans.CheckingDailyAmtDebitLimit2(count,count2)
        limitTrans.CheckingMonthlyAmtDebitLimit2(count,count2)
        limitTrans.CheckingYearlyAmtLimitDebit2(count,count2)

        limitTrans.CheckingDailyAmtLimitCredit2(count,count2)
        limitTrans.CheckingYearlyAmtLimitCredit2(count,count2)
        limitTrans.ClickSubmit()
        cy.get(limitTrans.LocatorForErrorOnMonthlyAmtLimitCreditCount).should('be.visible') //error message on monthly Amt limit credit
        cy.get(limitTrans.LocatorForErrorOnMonthlyAmtLimitCreditAmount).should('be.visible') //error message on monthly Amt limit credit
    })

    it("NEGETIVE FLOW-Adding new limit(with missing yearly Amt limit credit)",()=>{
        limitTrans.navigate_to_TransLimitDash()
        limitTrans.clickAddLimitBTN()
        limitTrans.AddLimitProfileName(LimitProfileName)
        limitTrans.AddingDDValue(AccountLevelDDValue)
        limitTrans.SelectingIandE(P1,P2)
        limitTrans.CheckingDailyAmtDebitLimit2(count,count2)
        limitTrans.CheckingMonthlyAmtDebitLimit2(count,count2)
        limitTrans.CheckingYearlyAmtLimitDebit2(count,count2)

        limitTrans.CheckingDailyAmtLimitCredit2(count,count2)
        limitTrans.CheckingMonthlyAmtLimitCredit2(count,count2)
        limitTrans.ClickSubmit()
        cy.get(limitTrans.LocatorForErrorOnYearlyAmtLimitCreditCount).should('be.visible') //error message on yearly Amt limit credit
        cy.get(limitTrans.LocatorForErrorOnYearlyAmtLimitCreditAmount).should('be.visible') //error message on yearly Amt limit credit
    })

    it("POSITIVE FLOW-Adding new limit(with count values)",()=>{

        limitTrans.navigate_to_TransLimitDash()
        limitTrans.clickAddLimitBTN()
        limitTrans.AddLimitProfileName(LimitProfileName)
        limitTrans.AddingDDValue(AccountLevelDDValue)
        limitTrans.SelectingIandE(P1,P2)
        limitTrans.CheckingDailyAmtDebitLimit2(DailytranslimitDr,DailyAmtLimitDr)
        limitTrans.CheckingMonthlyAmtDebitLimit2(MonthlyTransLimitDr,MonthlyAmtLimitDr)
        limitTrans.CheckingYearlyAmtLimitDebit2(YearlyTransLimitDr,YearlyAmtLimitDr)

        limitTrans.CheckingDailyAmtLimitCredit2(DailytranslimitCr,DailyAmtLimitCr)
        limitTrans.CheckingMonthlyAmtLimitCredit2(MonthlyTransLimitCr,MonthlyAmtLimitCr)
        limitTrans.CheckingYearlyAmtLimitCredit2(YearlyTransLimitCr,YearlyAmtLimitCr)
        limitTrans.ClickSubmit()
        limitTrans.VerifyLimitErrors(DailytranslimitDr,DailyAmtLimitDr,MonthlyTransLimitDr,MonthlyAmtLimitDr,YearlyTransLimitDr,YearlyAmtLimitDr)
        limitTrans.VerifyCreditLimitErrors(DailytranslimitCr,DailyAmtLimitCr,MonthlyTransLimitCr,MonthlyAmtLimitCr,YearlyTransLimitCr,YearlyAmtLimitCr)
    })
})