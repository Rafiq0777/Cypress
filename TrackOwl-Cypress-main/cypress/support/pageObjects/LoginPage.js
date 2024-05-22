const logo = "img[alt='Tracking Owl']";
const username = "#username"
const password = "#password"
const mobileField = "#phoneNumber";
const continueBtn = "button[type='submit']"
const otpTextField = "//div[@class='react-code-input']/input"
const submitBtn = ".ant-btn-primary"

class LoginPage {
    trackingOwlLogo(){
        return cy.get(logo, {timeout : 3000})
    }
    username(){
        return cy.get(username, {timeout : 3000})
    }
    password(){
        return cy.get(password, {timeout : 3000})
    }
    mobileField(){
        return cy.get(mobileField , {timeout : 3000})
    }
    continueBtn(){
        return cy.get(continueBtn, {timeout : 3000})
        
    }
    otpTextField(){
        return cy.xpath(otpTextField, {timeout : 3000})
    }
    submitBtn(){
        return cy.get(submitBtn, {timeout : 3000})
    }
}
export const loginPage = new LoginPage();