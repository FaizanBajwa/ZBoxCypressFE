import { ViewTransLimit } from "../PageObject/View_Limit"
const ViewLimit = new ViewTransLimit();
const VerifydashboardTxt="Dashboard"
const verifyTransactionWiseTxt="Transaction Wise Limit"
const LimProName='FT12'
const DateFrom="2023-07-18"
const DateTo="2023-07-18"
const SuccessMsgToast='Success'
const LimStatus='LEVEL 0'
const P1='Askari'
const P2='TRANSWORLD'
const DailyTransDr='401'
const DailyAmtDr='200'
const MonthlyTranDr='400'
const MonthlyAmtDr='101'
const YearlyTranDr='400'
const YearlyAmtDr='234'

const DailyTransCr='400'
const DailyAmtCr='543'
const MonthlyTranCr='400'
const MonthlyAmtCr='324'
const YearlyTranCr='56789'
const YearlyAmtCr='655'


describe("View transaction limit profile Screen Test Cases",()=>{
    beforeEach(()=>{
        ViewLimit.navigate_to_Dashboard()
    });

    it("Verify Login Dashboard,Transaction Limit first screen and View Limit Screen",()=>{
        ViewLimit.validateTextInDashboardLocator(VerifydashboardTxt)
        ViewLimit.navigate_to_TransLimitDash()
        ViewLimit.validateTextInLimitTransactionPageLocator(verifyTransactionWiseTxt)
        ViewLimit.NavigateToViewLimitTransactionScreen(LimProName,DateFrom,DateTo,SuccessMsgToast)
        ViewLimit.VerifyTextInViewLimitTransactionScreen()
    })
    it.only("POSITIVE FLOW-View Transaction Limit Screen",()=>{
        ViewLimit.navigate_to_TransLimitDash()
        ViewLimit.NavigateToViewLimitTransactionScreen(LimProName,DateFrom,DateTo,SuccessMsgToast)
        cy.wait(5000)
        ViewLimit.VerifyLimitProfileNameField(LimProName)
        ViewLimit.VerifyLimitStatusDD(LimStatus)
        ViewLimit.VerifyIandEButtons()
        ViewLimit.VerifyIncludeAndExcludeComponent(P1,P2)
        ViewLimit.VerifyDebitCards(DailyTransDr,DailyAmtDr,MonthlyTranDr,MonthlyAmtDr,YearlyTranDr,YearlyAmtDr)
        ViewLimit.VerifyCreditCards(DailyTransCr,DailyAmtCr,MonthlyTranCr,MonthlyAmtCr,YearlyTranCr,YearlyAmtCr)
        ViewLimit.VerifyOkButton()
    })

})