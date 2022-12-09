const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "vhep5f",
    baseUrl: 'https://buger-eats-qa.vercel.app', 
    viewportWidth: 1440, 
    viewportHeight: 900,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
