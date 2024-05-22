import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor"
const templatePage = require('../../support/pageObjects/TemplatePage')
import { commonMethods } from "../../support/pageObjects/commonMethods";
import { programsPage } from "../../support/pageObjects/ProgramsPage"

Given('I am logged in as a mentor', () => {
    commonMethods.Login();
})

When('I click on create a new template', () => {
    templatePage.SelectTemplateOption().click()
    templatePage.CreateNewTemplate().click()
})

And('I enter template name', () => {
    templatePage.TemplateName().type(templatePage.uniqueTemplateName()).should('have.text', 'hello');
})

And('I enter duration as {string} and click on create', (DurationOfTemplate) => {
    templatePage.Duration().type(DurationOfTemplate)
    templatePage.Create().click()
    cy.wait(5000)
})

And('I get redirected to template creation page', () => {
    cy.contains("Day 1").should('be.visible')
})

And('I enter Images to my Day1 course', () => {
    cy.DragAndDrop(templatePage.imageToolCss(), templatePage.DropDay1())
    templatePage.Choosefile().attachFile('Certificate.png')
    cy.wait(3000)
    templatePage.Choosefile().attachFile('photo1.jpg')
    templatePage.imagesCount().should('have.length', '2')
})

And('I select the frequency as daily', () => {
    templatePage.Selectfrequency().click()
    cy.contains('Daily').click()
})

And('I see the same course is available on Day2 as well', () => {
    templatePage.imagesCount().should('have.length', '4')
})

And('I enter question in my Day2 course as {string}', (question) => {
    templatePage.SaveImagesSec().click()
    templatePage.SelectOnlythisTool().click()
    cy.DragAndDrop(templatePage.QuestionsCSs(), templatePage.DropDay2())
    templatePage.QuestionstypeText().click({ force: true })
    templatePage.QuestionsTextbox().type(question)
    templatePage.QuestionsSave().click()
})

And('I save all the changes made', () => {
    templatePage.SaveFinalChanges().click()

})

Then('I should see {string} message.', (sucessMsg) => {
    cy.contains(sucessMsg, { timeout: 5000 }).should('be.visible')
})

When('I click on add new program button', () => {
    programsPage.addNewProgramBtn().click();
})
And('I enter program name', () => {
    programsPage.programNameField().type(programsPage.programName())
})
And('I enter goal as {string}', (goal) => {
    programsPage.goalField().type(goal)
})
And('I set program to public', () => {

    programsPage.switchPublicorPrivate().click()
    programsPage.publicSwitch().should('be.visible')
})
And('I add Keyword', () => {
    programsPage.publicKeywordText().type(programsPage.Keyword())
})
And('I add picture', () => {
    programsPage.UploadAPicture().eq(0).attachFile('photo1.jpg')
})
And('I select recently createdt template', () => {
    cy.contains(templatePage.uniqueTemplateName()).click()
})
And('I click on create program', () => {
    programsPage.createProgram().click({ force: true })
    cy.wait(2000)
})
Then('I should see a success message as {string}', (successmsg) => {
    cy.contains(successmsg, { timeout: 3000 }).should('be.visible')

})

