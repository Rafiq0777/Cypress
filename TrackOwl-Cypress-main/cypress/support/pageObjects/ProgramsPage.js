
class ProgramsPage {
    constructor(){
        this.addNewProgramBtn = "main span:nth-child(2)"
        this.programNameField = "#program_name"
        this.goalField = "#program_goal"
        this.templateBtn = "//div[@class='ant-card-body']/div[3]/div/a/div"
        this.template = "//div[@class='styles_templateItem__3OnNd']"
        this.createProgramBtn = "button[type='submit']"
        this.programName = '[data-row-key="195"] > :nth-child(1) > .ant-space > :nth-child(2) > a'
        this.inviteTraineeBtn = "//*[text()=' Invite new trainee']"
        this.conmobileField = "#phoneNumber"
        this.sendInviteBtn = "//*[text()='Send invite']"
        this.successMsg = "//*[text()='Invite was sent successfully ']"
        this.switchPublicorPrivate = 'button[class="ant-switch"]'
        this.publicSwitch = 'button[class="ant-switch ant-switch-checked"]'
        this.publicKeyword = 'input[data-input-is-public="input-is-public"]'
        this.UploadPic = 'input[data-upload-picture="upload-picture"]'
        this.CreateProgramBtn = 'button[type="submit"]'
        this.Keyword = `Keyword${Cypress._.random(1e5)}`
        this.programNameText = `Program${Cypress._.random(1e5)}`
      
    }

    addNewProgramBtn() {
        return cy.get(addNewProgramBtn, { timeout: 3000 });
    }
    programNameField() {
        return cy.get(programNameField, { timeout: 3000 });
    }
    goalField() {
        return cy.get(goalField, { timeout: 3000 });
    }
    templateBtn() {
        return cy.xpath(templateBtn, { timeout: 3000 });
    }
    templateSelection() {
        return cy.xpath(template, { timeout: 3000 });
    }
    createProgramBtn() {
        return cy.get(createProgramBtn, { timeout: 3000 })
    }
    selectProgram() {
        return cy.get(programName, { timeout: 3000 })
    }
    inviteTrainee() {
        return cy.xpath(inviteTraineeBtn, { timeout: 3000 })
    }
    mobileField() {
        return cy.get(mobileField, { timeout: 3000 })
    }
    sendInviteBtn() {
        return cy.xpath(sendInviteBtn, { timeout: 3000 })
    }
    successMsg() {
        return cy.xpath(successMsg, { timeout: 3000 })
    }
    switchPublicorPrivate() {
        return cy.get(switchPublicorPrivate, { timeout: 3000 })

    }
    publicSwitch() {
        return cy.get(publicSwitch);
    }
    publicKeywordText() {
        return cy.get(publicKeyword)
    }
    UploadAPicture() {
        return cy.get(UploadPic)
    }
    createProgram() {
        return cy.get(createProgramBtn)
    }
    Keyword() {
        return Keyword
    }
    programName() {
        return programNameText
    }
}
module.exports = ProgramsPage