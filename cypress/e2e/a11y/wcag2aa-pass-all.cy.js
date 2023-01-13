import { terminalLog } from "../../functions/terminalLog"

describe('WCAG 2AA - Pass All', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.injectAxe()
    })

    it('Only logs a11y violations while allowing the test to pass', () => {
        cy.checkA11y(
            'body', // context
            { runOnly: ['wcag2a','wcag2aa'] }, // options
            (violations) => terminalLog(violations, false), // violationsCallback
            true // skip failures
        )
    })
})
