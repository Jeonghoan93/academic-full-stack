const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    apiUrl: "http://localhost:3000",
  },
  e2e: {
    baseUrl: "http://192.168.5.71:5173",
    setupNodeEvents(on, config) {},
    supportFile: false,
  },
});
