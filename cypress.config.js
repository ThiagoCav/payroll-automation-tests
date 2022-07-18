const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "rd34fi",
    chromeWebSecurity: false,
    baseUrl: 'http://127.0.0.1:4200/#/home'
    
  },
});
