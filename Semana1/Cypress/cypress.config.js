const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // URL base do site a ser testado
    //baseUrl: "https://automationpratice.com.br",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
