const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "rd34fi",
    baseUrl: 'http://localhost:4200/#/home'
    
  },
});
