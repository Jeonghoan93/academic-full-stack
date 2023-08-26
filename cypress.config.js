const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    apiUrl: "http://localhost:3000", // backend port
  },
  e2e: {
    baseUrl: "http://localhost:5173", // frontend port
    setupNodeEvents(on, config) {},
    supportFile: false,
  },
});
