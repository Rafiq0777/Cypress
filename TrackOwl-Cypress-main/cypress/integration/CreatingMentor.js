/// <reference types = "cypress"/>

import { loginPage } from "../support/pageObjects/LoginPage"
import {dashboardPage} from "../support/pageObjects/DashboardPage"
const phonenumber = Math.floor(Math.random() * 9000000000) + 1000000000;

describe("Login as admin", ()=> {
    it("verifying login as admin", ()=>{
        cy.visit("/adminLogin")
        loginPage.username().type("SuperAdmin")
        loginPage.password().type("123")
        loginPage.continueBtn().click()
        dashboardPage.mentorsTab().click()
        dashboardPage.addBtn().click()
        dashboardPage.mobileField().type("91" + phonenumber)
        dashboardPage.sendInviteBtn().click()
        cy.writeFile('cypress/fixtures/credentials.json', {mobilenumber: phonenumber})
    })
})
