const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    supportFile: __dirname + '/cypress/support/e2e.js',
    specPattern: __dirname + '/cypress/e2e/**/*.cy.js',
    baseUrl: 'https://www.imarc.com/',
    env: {
      MAIN_CONTENT_ID: '#main-content',
    },
    setupNodeEvents (on, config) {
      on('task', {
        log (message) {
          console.log(message)

          return null
        },
        table (message) {
          console.table(message)

          return null
        },
      })
    },
    viewportHeight: 900,
    viewportWidth: 1440,
  },
})
