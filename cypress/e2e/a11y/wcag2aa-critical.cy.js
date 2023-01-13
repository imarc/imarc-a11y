import { terminalLog } from "../../functions/terminalLog"

describe('WCAG 2AA - Critical Only', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.injectAxe()
    })

    it('Has no detectable a11y violations on load', () => {
        cy.checkA11y('body', {
            includedImpacts: ['critical'],

            runOnly: ['wcag2a','wcag2aa']

        }, (violations) => terminalLog(violations, false))
    })
})
