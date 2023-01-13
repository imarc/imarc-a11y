import { terminalLog } from "../../functions/terminalLog"

describe('WCAG 2AA - Verbose Console', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.injectAxe()
    })

    it('Has no detectable a11y violations on load', () => {
        cy.checkA11y('body', {

            runOnly: ['wcag2a','wcag2aa']

        }, (violations) => terminalLog(violations, true))
    })
})
