import { UpdateLimit } from "../PageObject/Update_Limit"
const UpdateLimitTransaction = new UpdateLimit();
const VerifydashboardTxt="Dashboard"
const verifyTransactionWiseTxt="Transaction Wise Limit"
const LimProName='FT12'
const DateFrom="2023-07-18"
const DateTo="2023-07-18"
const SuccessMsgToast='Success'
const text='FT12Updated'
const AccountLevelDDValuePresent='LEVEL 0'
const value="Askari"
const value1="TRANSWORLD"
const P1='JAZZ CASH'
const dailyTransLimitDr='401'
const dailyAmtLimitDr='200'
const MonthlyTransLimitDr='400'
const MonthlyAmtLimitDr='101'
const YearlyTransLimitDr='400'
const YearlyAmtLimitDr='234'
const dailyTransLimitCr='400'
const dailyAmtLimitCr= '543'
const MonthlyTransLimitCr='400'
const MonthlyAmtLimitCr='324'
const YearlyTransLimitCr='56789'
const YearlyAmtLimitCr='655'
const DailyTransUpdated= '5'
const DailyAmtUpdated= '700'
const MonthlyTransUpdated='4'
const MonthlyAmtUpdated='600'
const YearlyTransUpdated='3'
const YearlyAmtUpdated='500'
const DailyCreditTransUpdated='5'
const DailyCreditAmtUpdated='700'
const MonthlyCreditTransUpdated='4'
const MonthlyCreditAmtUpdated='500'
const YearlyCreditTransUpdated='3'
const YearlyCreditAmtUpdated='400'

describe("Test Cases for updating/editing Limit Transaction Profile",()=>{

    beforeEach(()=>{
        UpdateLimitTransaction.navigate_to_Dashboard()
    });

    it("Verify Login Dashboard,Transaction Limit first screen and Edit Limit Screen",()=>{
        UpdateLimitTransaction.validateTextInDashboardLocator(VerifydashboardTxt)
        UpdateLimitTransaction.navigate_to_TransLimitDash()
        UpdateLimitTransaction.validateTextInLimitTransactionPageLocator(verifyTransactionWiseTxt)
        UpdateLimitTransaction.NavigateToViewLimitTransactionScreen(LimProName,DateFrom,DateTo,SuccessMsgToast)
        UpdateLimitTransaction.VerifyTxtOnEditScreen()
    })

    it("POSITIVE FLOW-Verifying Update data pre-populated",()=>{
        UpdateLimitTransaction.navigate_to_TransLimitDash()
        UpdateLimitTransaction.NavigateToViewLimitTransactionScreen(LimProName,DateFrom,DateTo,SuccessMsgToast)
        UpdateLimitTransaction.VerifyTxtOnEditScreen()
        cy.wait(2000)
        UpdateLimitTransaction.VerifyLimitProfileName(LimProName)
        UpdateLimitTransaction.VerifyAccountStatusDD(AccountLevelDDValuePresent)
        UpdateLimitTransaction.VerifyIncludeComponent(value,value1)
        UpdateLimitTransaction.VerifyDoubleArrowButtons()
        UpdateLimitTransaction.VerifySingleArrowButtons(P1)
        UpdateLimitTransaction.VerifyDebitCardTransaction(dailyTransLimitDr,dailyAmtLimitDr,MonthlyTransLimitDr,MonthlyAmtLimitDr,YearlyTransLimitDr,YearlyAmtLimitDr)
        UpdateLimitTransaction.VerifyCreditCardTransaction(dailyTransLimitCr,dailyAmtLimitCr,MonthlyTransLimitCr,MonthlyAmtLimitCr,YearlyTransLimitCr,YearlyAmtLimitCr)
        UpdateLimitTransaction.VerifySubmitButton()
    })

    it("POSITIVE FLOW-Update limit transaction limit profile with valid values",()=>{
        UpdateLimitTransaction.navigate_to_TransLimitDash()
        UpdateLimitTransaction.NavigateToViewLimitTransactionScreen(LimProName,DateFrom,DateTo,SuccessMsgToast)
        UpdateLimitTransaction.VerifyTxtOnEditScreen()
        cy.wait(2000)
        UpdateLimitTransaction.FillAddLimitProName(text)
        UpdateLimitTransaction.AddingDDValue(AccountLevelDDValuePresent)
        UpdateLimitTransaction.VerifyIncludeComponent(value,value1)
        UpdateLimitTransaction.VerifyDoubleArrowButtons()
        UpdateLimitTransaction.VerifySingleArrowButtons(P1)
       UpdateLimitTransaction.AddDailyDebitCardTransac(DailyTransUpdated,DailyAmtUpdated)
        UpdateLimitTransaction.AddMonthlyDebitCardTransac(MonthlyTransUpdated,MonthlyAmtUpdated)
        UpdateLimitTransaction.AddYearlyDebitCardTransac(YearlyTransUpdated,YearlyAmtUpdated)
        UpdateLimitTransaction.AddDailyCreditCardTransac(DailyCreditTransUpdated,DailyCreditAmtUpdated)
        UpdateLimitTransaction.AddMonthlyCreditCardTransac(MonthlyCreditTransUpdated,MonthlyCreditAmtUpdated)
        UpdateLimitTransaction.AddYearlyCreditCardTransac(YearlyCreditTransUpdated,YearlyCreditAmtUpdated)
        UpdateLimitTransaction.VerifySubmitButton()
    })

    it.only("NEGETIVE FLOW-Update limit transaction limit profile with missing profile name values",()=>{
        UpdateLimitTransaction.navigate_to_TransLimitDash()
        UpdateLimitTransaction.NavigateToViewLimitTransactionScreen(LimProName,DateFrom,DateTo,SuccessMsgToast)
        UpdateLimitTransaction.VerifyTxtOnEditScreen()
        cy.wait(2000)
        UpdateLimitTransaction.VerifyEmptyAddLimitProName()
        UpdateLimitTransaction.AddingDDValue(AccountLevelDDValuePresent)
        UpdateLimitTransaction.VerifyIncludeComponent(value,value1)
        UpdateLimitTransaction.VerifyDoubleArrowButtons()
        UpdateLimitTransaction.VerifySingleArrowButtons(P1)
        UpdateLimitTransaction.AddDailyDebitCardTransac(DailyTransUpdated,DailyAmtUpdated)
        UpdateLimitTransaction.AddMonthlyDebitCardTransac(MonthlyTransUpdated,MonthlyAmtUpdated)
        UpdateLimitTransaction.AddYearlyDebitCardTransac(YearlyTransUpdated,YearlyAmtUpdated)
        UpdateLimitTransaction.AddDailyCreditCardTransac(DailyCreditTransUpdated,DailyCreditAmtUpdated)
        UpdateLimitTransaction.AddMonthlyCreditCardTransac(MonthlyCreditTransUpdated,MonthlyCreditAmtUpdated)
        UpdateLimitTransaction.AddYearlyCreditCardTransac(YearlyCreditTransUpdated,YearlyCreditAmtUpdated)
        UpdateLimitTransaction.VerifySubmitButton()
        cy.get(UpdateLimitTransaction.ErrorOnMissingLimitProfileLocator).should('be.visible') //verifying error on missing limit profile name
    })

    it("NEGETIVE FLOW-Update limit transaction limit profile with missing Debit Daily values",()=>{
        UpdateLimitTransaction.navigate_to_TransLimitDash()
        UpdateLimitTransaction.NavigateToViewLimitTransactionScreen(LimProName,DateFrom,DateTo,SuccessMsgToast)
        UpdateLimitTransaction.VerifyTxtOnEditScreen()
        cy.wait(2000)
        UpdateLimitTransaction.FillAddLimitProName(text)
        UpdateLimitTransaction.AddingDDValue(AccountLevelDDValuePresent)
        UpdateLimitTransaction.VerifyIncludeComponent(value,value1)
        UpdateLimitTransaction.VerifyDoubleArrowButtons()
        UpdateLimitTransaction.VerifySingleArrowButtons(P1)
        UpdateLimitTransaction.VerifyEmptyAddDailyDebitCardTransac()
        UpdateLimitTransaction.AddMonthlyDebitCardTransac(MonthlyTransUpdated,MonthlyAmtUpdated)
        UpdateLimitTransaction.AddYearlyDebitCardTransac(YearlyTransUpdated,YearlyAmtUpdated)
        UpdateLimitTransaction.AddDailyCreditCardTransac(DailyCreditTransUpdated,DailyCreditAmtUpdated)
        UpdateLimitTransaction.AddMonthlyCreditCardTransac(MonthlyCreditTransUpdated,MonthlyCreditAmtUpdated)
        UpdateLimitTransaction.AddYearlyCreditCardTransac(YearlyCreditTransUpdated,YearlyCreditAmtUpdated)
        UpdateLimitTransaction.VerifySubmitButton()
        cy.get(UpdateLimitTransaction.LocatorForErrorOnDailyAmtLimitCount).should('be.visible') //verifying error on missing daily debit transac
        cy.get(UpdateLimitTransaction.LocatorForErrorOnDailyAmtLimitAmount).should('be.visible')
    })

    it("NEGETIVE FLOW-Update limit transaction limit profile with missing Debit MONTHLY values",()=>{
        UpdateLimitTransaction.navigate_to_TransLimitDash()
        UpdateLimitTransaction.NavigateToViewLimitTransactionScreen(LimProName,DateFrom,DateTo,SuccessMsgToast)
        UpdateLimitTransaction.VerifyTxtOnEditScreen()
        cy.wait(2000)
        UpdateLimitTransaction.FillAddLimitProName(text)
        UpdateLimitTransaction.AddingDDValue(AccountLevelDDValuePresent)
        UpdateLimitTransaction.VerifyIncludeComponent(value,value1)
        UpdateLimitTransaction.VerifyDoubleArrowButtons()
        UpdateLimitTransaction.VerifySingleArrowButtons(P1)
        UpdateLimitTransaction.AddDailyDebitCardTransac(DailyTransUpdated,DailyAmtUpdated)
        UpdateLimitTransaction.VerifyEmptyAddMonthlyDebitCardTransac()
        UpdateLimitTransaction.AddYearlyDebitCardTransac(YearlyTransUpdated,YearlyAmtUpdated)
        UpdateLimitTransaction.AddDailyCreditCardTransac(DailyCreditTransUpdated,DailyCreditAmtUpdated)
        UpdateLimitTransaction.AddMonthlyCreditCardTransac(MonthlyCreditTransUpdated,MonthlyCreditAmtUpdated)
        UpdateLimitTransaction.AddYearlyCreditCardTransac(YearlyCreditTransUpdated,YearlyCreditAmtUpdated)
        UpdateLimitTransaction.VerifySubmitButton()
        cy.get(UpdateLimitTransaction.LocatorForErrorOnMonthlyAmtLimitCount).should('be.visible') //verifying error on missing monthly debit transac
        cy.get(UpdateLimitTransaction.LocatorForErrorOnMonthlyAmtLimitAmount).should('be.visible')
    })

    it("NEGETIVE FLOW-Update limit transaction limit profile with missing Debit Yearly values",()=>{
        UpdateLimitTransaction.navigate_to_TransLimitDash()
        UpdateLimitTransaction.NavigateToViewLimitTransactionScreen(LimProName,DateFrom,DateTo,SuccessMsgToast)
        UpdateLimitTransaction.VerifyTxtOnEditScreen()
        cy.wait(2000)
        UpdateLimitTransaction.FillAddLimitProName(text)
        UpdateLimitTransaction.AddingDDValue(AccountLevelDDValuePresent)
        UpdateLimitTransaction.VerifyIncludeComponent(value,value1)
        UpdateLimitTransaction.VerifyDoubleArrowButtons()
        UpdateLimitTransaction.VerifySingleArrowButtons(P1)
        UpdateLimitTransaction.AddDailyDebitCardTransac(DailyTransUpdated,DailyAmtUpdated)
        UpdateLimitTransaction.AddMonthlyDebitCardTransac(MonthlyTransUpdated,MonthlyAmtUpdated)
        UpdateLimitTransaction. VerifyEmptyAddYearlyDebitCardTransac()
        UpdateLimitTransaction.AddDailyCreditCardTransac(DailyCreditTransUpdated,DailyCreditAmtUpdated)
        UpdateLimitTransaction.AddMonthlyCreditCardTransac(MonthlyCreditTransUpdated,MonthlyCreditAmtUpdated)
        UpdateLimitTransaction.AddYearlyCreditCardTransac(YearlyCreditTransUpdated,YearlyCreditAmtUpdated)
        UpdateLimitTransaction.VerifySubmitButton()
        cy.get(UpdateLimitTransaction.LocatorForErrorOnYearlyAmtLimitCount).should('be.visible') //verifying error on missing yearly debit transac
        cy.get(UpdateLimitTransaction.LocatorForErrorOnYearlyAmtLimitAmount).should('be.visible')
    })

    it("NEGETIVE FLOW-Update limit transaction limit profile with missing Credit Daily values",()=>{
        UpdateLimitTransaction.navigate_to_TransLimitDash()
        UpdateLimitTransaction.NavigateToViewLimitTransactionScreen(LimProName,DateFrom,DateTo,SuccessMsgToast)
        UpdateLimitTransaction.VerifyTxtOnEditScreen()
        cy.wait(2000)
        UpdateLimitTransaction.FillAddLimitProName(text)
        UpdateLimitTransaction.AddingDDValue(AccountLevelDDValuePresent)
        UpdateLimitTransaction.VerifyIncludeComponent(value,value1)
        UpdateLimitTransaction.VerifyDoubleArrowButtons()
        UpdateLimitTransaction.VerifySingleArrowButtons(P1)
        UpdateLimitTransaction.AddDailyDebitCardTransac(DailyTransUpdated,DailyAmtUpdated)
        UpdateLimitTransaction.AddMonthlyDebitCardTransac(MonthlyTransUpdated,MonthlyAmtUpdated)
        UpdateLimitTransaction.AddYearlyDebitCardTransac(YearlyTransUpdated,YearlyAmtUpdated)
        UpdateLimitTransaction.VerifyEmptyAddDailyCreditCardTransac()
        UpdateLimitTransaction.AddMonthlyCreditCardTransac(MonthlyCreditTransUpdated,MonthlyCreditAmtUpdated)
        UpdateLimitTransaction.AddYearlyCreditCardTransac(YearlyCreditTransUpdated,YearlyCreditAmtUpdated)
        UpdateLimitTransaction.VerifySubmitButton()
        cy.get(UpdateLimitTransaction.LocatorForErrorOnDailyAmtLimitCreditCount).should('be.visible') //verifying error on missing daily credit transac
        cy.get(UpdateLimitTransaction.LocatorForErrorOnDailyAmtLimitCreditAmount).should('be.visible')
    })

    it("NEGETIVE FLOW-Update limit transaction limit profile with missing Credit monthly values",()=>{
        UpdateLimitTransaction.navigate_to_TransLimitDash()
        UpdateLimitTransaction.NavigateToViewLimitTransactionScreen(LimProName,DateFrom,DateTo,SuccessMsgToast)
        UpdateLimitTransaction.VerifyTxtOnEditScreen()
        cy.wait(2000)
        UpdateLimitTransaction.FillAddLimitProName(text)
        UpdateLimitTransaction.AddingDDValue(AccountLevelDDValuePresent)
        UpdateLimitTransaction.VerifyIncludeComponent(value,value1)
        UpdateLimitTransaction.VerifyDoubleArrowButtons()
        UpdateLimitTransaction.VerifySingleArrowButtons(P1)
        UpdateLimitTransaction.AddDailyDebitCardTransac(DailyTransUpdated,DailyAmtUpdated)
        UpdateLimitTransaction.AddMonthlyDebitCardTransac(MonthlyTransUpdated,MonthlyAmtUpdated)
        UpdateLimitTransaction.AddYearlyDebitCardTransac(YearlyTransUpdated,YearlyAmtUpdated)
        UpdateLimitTransaction.AddDailyCreditCardTransac(DailyCreditTransUpdated,DailyCreditAmtUpdated)
        UpdateLimitTransaction.VerifyEmptyAddMonthlyCreditCardTransac()
        UpdateLimitTransaction.AddYearlyCreditCardTransac(YearlyCreditTransUpdated,YearlyCreditAmtUpdated)
        UpdateLimitTransaction.VerifySubmitButton()
        cy.get(UpdateLimitTransaction.LocatorForErrorOnMonthlyAmtLimitCreditCount).should('be.visible') //verifying error on missing monthly credit transac
        cy.get(UpdateLimitTransaction.LocatorForErrorOnMonthlyAmtLimitCreditAmount).should('be.visible')
    })

    it("NEGETIVE FLOW-Update limit transaction limit profile with missing Credit yearly values",()=>{
        UpdateLimitTransaction.navigate_to_TransLimitDash()
        UpdateLimitTransaction.NavigateToViewLimitTransactionScreen(LimProName,DateFrom,DateTo,SuccessMsgToast)
        UpdateLimitTransaction.VerifyTxtOnEditScreen()
        cy.wait(2000)
        UpdateLimitTransaction.FillAddLimitProName(text)
        UpdateLimitTransaction.AddingDDValue(AccountLevelDDValuePresent)
        UpdateLimitTransaction.VerifyIncludeComponent(value,value1)
        UpdateLimitTransaction.VerifyDoubleArrowButtons()
        UpdateLimitTransaction.VerifySingleArrowButtons(P1)
        UpdateLimitTransaction.AddDailyDebitCardTransac(DailyTransUpdated,DailyAmtUpdated)
        UpdateLimitTransaction.AddMonthlyDebitCardTransac(MonthlyTransUpdated,MonthlyAmtUpdated)
        UpdateLimitTransaction.AddYearlyDebitCardTransac(YearlyTransUpdated,YearlyAmtUpdated)
        UpdateLimitTransaction.AddDailyCreditCardTransac(DailyCreditTransUpdated,DailyCreditAmtUpdated)
        UpdateLimitTransaction.AddMonthlyCreditCardTransac(MonthlyCreditTransUpdated,MonthlyCreditAmtUpdated)
        UpdateLimitTransaction.VerifyEmptyAddYearlyCreditCardTransac()
        UpdateLimitTransaction.VerifySubmitButton()
        cy.get(UpdateLimitTransaction.LocatorForErrorOnYearlyAmtLimitCreditCount).should('be.visible') //verifying error on missing yearly credit transac
        cy.get(UpdateLimitTransaction.LocatorForErrorOnYearlyAmtLimitCreditAmount).should('be.visible')
    })
    it("NEGETIVE FLOW-Verifying Daily trans limit should be less then monthly trans limit and monthly trans limit should be less then yearly trans limit.",()=>{
        UpdateLimitTransaction.navigate_to_TransLimitDash()
        UpdateLimitTransaction.NavigateToViewLimitTransactionScreen(LimProName,DateFrom,DateTo,SuccessMsgToast)
        UpdateLimitTransaction.VerifyTxtOnEditScreen()
        cy.wait(2000)
        UpdateLimitTransaction.FillAddLimitProName(text)
        UpdateLimitTransaction.AddingDDValue(AccountLevelDDValuePresent)
        UpdateLimitTransaction.VerifyIncludeComponent(value,value1)
        UpdateLimitTransaction.VerifyDoubleArrowButtons()
        UpdateLimitTransaction.VerifySingleArrowButtons(P1)

        UpdateLimitTransaction.AddDailyDebitCardTransac(DailyTransUpdated,DailyAmtUpdated)
        UpdateLimitTransaction.AddMonthlyDebitCardTransac(MonthlyTransUpdated,MonthlyAmtUpdated)
        UpdateLimitTransaction.AddYearlyDebitCardTransac(YearlyTransUpdated,YearlyAmtUpdated)


        UpdateLimitTransaction.AddDailyCreditCardTransac(DailyCreditTransUpdated,DailyCreditAmtUpdated)
        UpdateLimitTransaction.AddMonthlyCreditCardTransac(MonthlyCreditTransUpdated,MonthlyCreditAmtUpdated)
        UpdateLimitTransaction.AddYearlyCreditCardTransac(YearlyCreditTransUpdated,YearlyCreditAmtUpdated)
        UpdateLimitTransaction.VerifySubmitButton()
        UpdateLimitTransaction.VerifyLimitErrors(DailyTransUpdated,DailyAmtUpdated,MonthlyTransUpdated,MonthlyAmtUpdated,YearlyTransUpdated,YearlyAmtUpdated)
        UpdateLimitTransaction.VerifyCreditLimitErrors(DailyCreditTransUpdated,DailyCreditAmtUpdated,MonthlyCreditTransUpdated,MonthlyCreditAmtUpdated,YearlyCreditTransUpdated,YearlyCreditAmtUpdated)
    })
})