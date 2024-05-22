import { loginPage } from "./LoginPage";

class CommonMethods{
    Login(){
        cy.visit("/")
        loginPage.mobileField().type("917019807360");
        loginPage.continueBtn().click();
        cy.wait(3000)
        for (var i = 0; i < 6; i++) {
            loginPage.otpTextField().eq(i).type("1")
        }
        loginPage.submitBtn().click()
        cy.url().should("include", "/programs");

    }
}
export const commonMethods = new CommonMethods()