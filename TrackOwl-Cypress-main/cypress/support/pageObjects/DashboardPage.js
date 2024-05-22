const mentorsTab = "div[role='tablist'] div div:nth-child(2)"
const addBtn = ".styles_search__NRXcX > .ant-btn > span"
const mobileField = "#phoneNumber"
const sendInviteBtn = "button[type='submit'] span"

class DashboardPage{
    mentorsTab(){
        return cy.get(mentorsTab, {timeout : 3000})
    }
    addBtn(){
        return cy.get(addBtn, {timeout : 3000})
    }
    mobileField(){
        return cy.get(mobileField, {timeout : 3000})
    }
    sendInviteBtn(){
        return cy.get(sendInviteBtn, {timeout : 3000})
    }
}
export const dashboardPage = new DashboardPage()