import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor"
import { commonMethods } from "../../support/pageObjects/commonMethods";
// const PageName = require('../../support/PageDirectory')
const pages = require('../../support/pages-enum');
import "../../support/parameter-types"

// beforeEach(()=>{
//     commonMethods.Login();
// })
Given('I am logged in as a mentor', () => {
    commonMethods.Login();
    
})

When('I click on "{pageName}"."{locator}"', (pageName, locator) => {
    const elementLocator = pages[pageName][locator];
    cy.get(elementLocator, { timeout: 15000 }).click({ force: true })
})

When('I enter "{pageName}"."{locator}"', function (pageName, locator) {
    const elementLocator = pages[pageName][locator];
    cy.get(elementLocator, { timeout: 15000 }).type(pages.templatepage.uniqueTemplateName)
})

When('I enter "{pageName}"."{locator}" {string}', function (pageName, locator, data) {
    const elementLocator = pages[pageName][locator];
    cy.get(elementLocator, { timeout: 15000 }).type(data)
})

Then('I get redirected to template creation page', () => {
    cy.contains("Day 1", { timeout: 8000 }).should('be.visible')
})

When('I drag "{pageName}"."{locator}" and drop at "{pageName2}"."{locator2}"', (pageName, locator, pageName2, locator2) => {
    const elementLocator = pages[pageName][locator];
    const elementLocator2 = pages[pageName2][locator2];
    const dataTransfer = new DataTransfer();

    cy.get(elementLocator).trigger('dragstart', {
        dataTransfer
    })
    cy.get(elementLocator2).trigger('drop', {
        dataTransfer
    })
})

When('I click on "{pageName}"."{locator}" and attach image {string}', function (pageName, locator, imageName) {
    const elementLocator = pages[pageName][locator];
    cy.get(elementLocator, { timeout: 15000 }).attachFile(imageName)
})

Then('I verify image is added', () => {
    pages.templatepage.imagesCount().should('have.length', '2')
})

When('I click on "{pageName}"."{locator}" and select {string}', function (pageName, locator, Selection) {
    const elementLocator = pages[pageName][locator];
    cy.get(elementLocator, { timeout: 15000 }).click()
    cy.contains(Selection).click();
})

Then('I see the same course is available on Day2 as well', () => {
    pages.templatepage.imagesCount().should('have.length', '4')
})

Then('I should see {string} message.', (sucessMsg) => {
    cy.contains(sucessMsg, { timeout: 5000 }).should('be.visible')
})

When('I select recently createdt template', () => {
    cy.contains(pages.templatepage.uniqueTemplateName).click()
})