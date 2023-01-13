const { defineConfig } = require('cypress')

module.exports = defineConfig({
    e2e: {
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
        excludeSpecPattern: [
            '/cypress/e2e/examples/*',
            '/web/cpresources/*',
        ],
    },
})
