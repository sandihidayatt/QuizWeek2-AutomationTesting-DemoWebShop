const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    baseUrl: 'https://demowebshop.tricentis.com/',
    env: {
      staging_url: 'https://demowebshop.tricentis.com/',
      production_url: 'https://demowebshop.tricentis.com/'
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    defaultCommandTimeout: 5000
  },
});

