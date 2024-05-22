// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
import 'cypress-mochawesome-reporter/register';
// -- This is a parent command --
Cypress.Commands.add('DragAndDrop', (DragEle, DropEle) => {
    const dataTransfer = new DataTransfer();
    if (DragEle.startsWith('/') || DragEle.startsWith('(')) {
        return cy.xpath(DragEle).trigger('dragstart', {
            dataTransfer
        })
    }
    else {
        cy.get(DragEle).trigger('dragstart', {
            dataTransfer
        })
    }
    if (DropEle.startsWith('/') || DropEle.startsWith('(')) {
        return cy.xpath(DropEle).trigger('drop', {
            dataTransfer
        })
    }
    else {
        cy.get(DropEle).trigger('drop', {
            dataTransfer
        })
    }
})

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import './commands';
//import '@4tw/cypress-drag-drop'
import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')