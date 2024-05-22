class TemplatePage {

  uniqueTemplateName = `TempName${Cypress._.random(1e5)}`

    constructor(){
        this.templateName = "#name"
        this.duration = "#duration"
        this.createButn = "button[type='submit']"
        this.imageToolXpath = "//*[@class='ant-btn ant-btn-dashed']"
        this.imageToolLogoCss = "span[aria-label='file-image']"
        this.DroppointDay1 = "body > div:nth-child(1) > div:nth-child(1) > section:nth-child(1) > div:nth-child(2) > main:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(3)"
        this.saveChanges = "//*[text()='Save changes']"
        this.cancelBtn = "div[role='dialog'] button:nth-child(1)"
        this.CreateNewTemplateBtn = "a[data-link-create='link-create']"
        this.TemplateNameText = "#name"
        this.DurationText = "#duration"
        this.ChoosefileBtn = "input[type='file']"
        this.CreateBtn = ".ant-form-item-control-input-content > .ant-btn-primary > span"
        this.ImagesCount = 'div[class ="ant-upload-list-item-info"]'
        this.frequency = "div[class= 'ant-select styles_schedulerSelect__mI5YN ant-select-single ant-select-show-arrow']"
        this.SaveBtn = '[data-handlesaveclick="handleSaveClick"]'
        this.onlythisToolRB = ".ant-modal-footer > .ant-btn-primary"
        this.Questions = ":nth-child(5) > .ant-btn"
        this.Droppoint2 = ":nth-child(2) > .styles_dropContainer__1BmT4 > .styles_dropMarker__2R4c9"
        this.QuestiontypeText = 'input[value = "text"]'
        this.QuestiontypeTextTextbox = 'input[data-questionmessage-text-input= "questionMessage-text-input"]'
        this.questionSave = "button[data-selectquestiontype='selectQuestionType']"
        this.SavefinalChanges = 'button[data-handle-save-changes="handle-save-changes"]'
        this.TemplatesBtn = "div[data-nav-link='nav-link-2']"
        this.TemplateNameText = "#name"
        this.CreateNewTemplateBtn = "a[data-link-create='link-create']"
    }
    
   
    templateNameField() {
        return cy.get(templateName, { timeout: 3000 })
    }
    durationField() {
        return cy.get(duration, { timeout: 3000 })
    }
    createBtn() {
        return cy.get(createBtn, { timeout: 3000 })
    }
    imageTool() {
        return cy.xpath(imageTool, { timeout: 3000 })
    }
    saveChangesBtn() {
        return cy.xpath(saveChanges, { timeout: 3000 })
    }
    cancelBtn() {
        return cy.get(cancelBtn, { timeout: 3000 })
    }
    SelectTemplateOption() {
        return cy.get(TemplatesBtn, { timeout: 3000 })
    }
    CreateNewTemplate() {
        return cy.get(CreateNewTemplateBtn, { timeout: 3000 })
    }
    TemplateName() {
        return cy.get(TemplateNameText, { timeout: 3000 })
    }
    Duration() {
        return cy.get(DurationText, { timeout: 3000 })
    }
    Create() {
        return cy.get(createBtn, { timeout: 3000 })
    }
    Choosefile() {
        return cy.get(ChoosefileBtn, { timeout: 3000 })
    }
    imagesCount() {
        return cy.get(this.ImagesCount, { timeout: 3000 })
    }
    Selectfrequency() {
        return cy.get(frequency, { timeout: 3000 })
    }

    SaveImagesSec() {
        return cy.get(SaveBtn, { timeout: 3000 })

    }
    SelectOnlythisTool() {
        return cy.get(onlythisToolRB, { timeout: 3000 })
    }
    imageToolCss() {
        return imageToolLogoCss
    }
    QuestionstypeText() {
        return cy.get(QuestiontypeText, { timeout: 3000 })
    }
    QuestionsTextbox() {
        return cy.get(QuestiontypeTextTextbox, { timeout: 3000 })
    }
    QuestionsSave() {
        return cy.get(questionSave, { timeout: 3000 })
    }
    DropDay1() {
        return DroppointDay1
    }
    QuestionsCSs() {
        return Questions
    }
    DropDay2() {
        return Droppoint2
    }
    uniqueTemplateName() {
        return uniqueTemplateName
    }
    SaveFinalChanges() {
        return cy.get(SavefinalChanges)
    }
}
module.exports = TemplatePage