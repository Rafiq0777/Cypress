/// <reference types = "cypress"/>

import { loginPage } from "../support/pageObjects/LoginPage"
import { programsPage } from "../support/pageObjects/ProgramsPage"
const phonenumber = Math.floor(Math.random() * 9000000000) + 1000000000;

describe("Login as Mentor and create new program", () => {
  before(() => {
    cy.fixture('credentials').then(function (data) {
      this.data = data;
    });
  });
  it("verify logging as mentor", function () {
    cy.visit("/")
    loginPage.mobileField().type("917019807360");
    loginPage.continueBtn().click();
    cy.wait(3000)
    for (var i = 0; i < 6; i++) {
      loginPage.otpTextField().eq(i).type("1")
    }
    loginPage.submitBtn().click()
    cy.url().should("include", "/programs");
    programsPage.selectProgram().click()
    programsPage.inviteTrainee().click()
    programsPage.mobileField().type("91" + phonenumber)
    programsPage.sendInviteBtn().click()
    programsPage.successMsg().then(function(ele){
      expect("Invite was sent successfull").to.eq(ele.text().trim())
    })
  });
});