const { defineConfig } = require("cypress");

module.exports = defineConfig({
  experimentalStudio: true,
  chromeWebSecurity: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

