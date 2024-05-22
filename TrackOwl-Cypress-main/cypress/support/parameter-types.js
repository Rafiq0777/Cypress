const { defineParameterType } = require('@badeball/cypress-cucumber-preprocessor');
const pages = require('../support/pages-enum');




/**
 * Used for Page Object to define Page Name.
 * Should obligatory be a page name from pages-enum.js.
 *
 * @return {string} page name as it was passed
 */
 defineParameterType({
  regexp: /[^"]*/,
  name: 'pageName',
  useForSnippets: false,
  transformer: (pageName) => {
    const knownPages = Object.keys(pages);
    if (!knownPages.includes(pageName)) {
      throw new Error(`Unknown Page: "${pageName}". Please make sure page is added in pages-enum.js file`);
    }

    return pageName;
  }
});

defineParameterType({
  regexp: /[^"]*/,
  name: 'pageName2',
  useForSnippets: false,
  transformer: (pageName2) => {
    const knownPages = Object.keys(pages);
    if (!knownPages.includes(pageName2)) {
      throw new Error(`Unknown Page: "${pageName2}". Please make sure page is added in pages-enum.js file`);
    }

    return pageName2;
  }
});

/**
 * Used for CSS and XPATH locators
 *
 * @return {string} locator name as it was passed
 */
defineParameterType({
  regexp: /[^"]*/,
  name: 'locator',
  useForSnippets: false,
  transformer: (string) => {

    return string;
  }
});

defineParameterType({
  regexp: /[^"]*/,
  name: 'locator2',
  useForSnippets: false,
  transformer: (string) => {

    return string;
  }
});