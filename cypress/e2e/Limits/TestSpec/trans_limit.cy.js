import { transactionLimit } from "../PageObject/Transaction_Limit"
const TransactionLimit = new transactionLimit();
const VerifydashboardTxt="Dashboard"
const verifyTransactionWiseTxt="Transaction Wise Limit"
const LimitPName="Automation"
const DateFrom="2023-07-01"
const DateTo="2023-07-18"
const Status="Pending"
const dateToError='small.p-error'


describe("Transaction Limit test cases",()=>{

    beforeEach(()=>{
        TransactionLimit.navigate_to_Dashboard()
    });

    it("Verify Login Dashboard and Transaction Limit first screen",()=>{
        TransactionLimit.validateTextInDashboardLocator(VerifydashboardTxt)
        TransactionLimit.navigate_to_TransLimitDash()
        TransactionLimit.validateTextInLimitTransactionPageLocator(verifyTransactionWiseTxt)
    })

    it("POSITIVE FLOW-Verify Transaction Limit Page with all filter values",()=>{
        TransactionLimit.navigate_to_TransLimitDash()
        TransactionLimit.verifyAddNewButton()
        TransactionLimit.verifyLimitProfileName(LimitPName)
        TransactionLimit.verifyDateFrom(DateFrom)
        TransactionLimit.verifyDateTo(DateTo)
        TransactionLimit.verifyStatusDD(Status)
        //TransactionLimit.verifyCreatedByDD("18")
        //TransactionLimit.verifyUpdatedByDD("np")
        TransactionLimit.verifySearchButton()
        TransactionLimit.verify_success_dialog_isvisible('Success')
        TransactionLimit.verifyLimitsTable(LimitPName)
        //TransactionLimit.verifyResetButton()
    })

    it("POSITIVE FLOW-Verify Transaction Limit Page without statusID",()=>{
        TransactionLimit.navigate_to_TransLimitDash()
        TransactionLimit.verifyAddNewButton()
        TransactionLimit.verifyLimitProfileName(LimitPName)
        TransactionLimit.verifyDateFrom(DateFrom)
        TransactionLimit.verifyDateTo(DateTo)
        TransactionLimit.verifySearchButton()
        TransactionLimit.verify_success_dialog_isvisible('Success')
        TransactionLimit.verifyLimitsTable(LimitPName)
    })

    it("POSITIVE FLOW-Verify Transaction Limit Page with LimitProfileName only",()=>{
        TransactionLimit.navigate_to_TransLimitDash()
        TransactionLimit.verifyAddNewButton()
        TransactionLimit.verifyLimitProfileName(LimitPName)
        TransactionLimit.verifySearchButton()
        TransactionLimit.verify_success_dialog_isvisible('Success')
        TransactionLimit.verifyLimitsTable(LimitPName)
        
    })

    it("NEGETIVE FLOW-Verify Transaction Limit Page with LimitProfileName and Datefrom only",()=>{
        TransactionLimit.navigate_to_TransLimitDash()
        TransactionLimit.verifyAddNewButton()
        TransactionLimit.verifyLimitProfileName(LimitPName)
        TransactionLimit.verifyDateFrom(DateFrom)
        TransactionLimit.verifyDateTo("2023-06-18")
        TransactionLimit.verifySearchButton()
        cy.get(dateToError).should('be.visible')
    })

    it("NEGETIVE FLOW-Verify Transaction Limit Page with Datefrom should be smaller then DateTOonly",()=>{
        TransactionLimit.navigate_to_TransLimitDash()
        TransactionLimit.verifyAddNewButton()
        TransactionLimit.verifyLimitProfileName(LimitPName)
        TransactionLimit.verifyDateFrom(DateFrom)
        TransactionLimit.verifySearchButton()
        cy.get(dateToError).should('be.visible')
    })

})