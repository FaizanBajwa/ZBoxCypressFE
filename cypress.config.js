const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  pageLoadTimeout:120000,
  reporter: 'cypress-mochawesome-reporter',
  projectId: 'zj37xd',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      allureWriter(on, config);
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
  },
});
