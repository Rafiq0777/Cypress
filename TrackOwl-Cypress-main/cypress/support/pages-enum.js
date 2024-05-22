const ProgramsPage = require ('../support/pageObjects/ProgramsPage')
const Templatepage = require('../support/pageObjects/TemplatePage');

module.exports = {
    prgrmPage : new ProgramsPage(),
    templatepage: new Templatepage()
}