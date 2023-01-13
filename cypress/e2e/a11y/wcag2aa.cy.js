import { terminalLog } from "../../functions/terminalLog"

// cy.checkA11y( context = null, options = {}, violationCallback: () => {}, skipFailures: false )
describe('General A11y Test', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.injectAxe()
    })

    it('Has no detectable a11y violations on load', () => {
        // Test the page at initial load (with context and options)
        cy.checkA11y('body', {
            runOnly: [
                'wcag2a', // Test against WCAG 2.0 Level A Standards
                'wcag2aa', // Test against WCAG 2.0 Level AA Standards
            ],
        }, (violations) => terminalLog(violations, false))
    })
})
