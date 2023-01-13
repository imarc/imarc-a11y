describe('Check for Skip Navigation Link', () => {
    let mainContentId

    before(() => {
        mainContentId = Cypress.env('MAIN_CONTENT_ID')
    })

    beforeEach(() => {
        cy.visit('/')
    })

    it('has skip navigation link and is visible on focus', () => {
        cy.get('body').tab() // tab to skip link
        cy.focused()
            .should('be.visible')
            .should('have.attr', 'href', mainContentId)
    })

    it('skip link jumps to main content on tab', () => {
        cy.get('body').tab() // tab to skip link
        cy.focused().as('skip-link')
        cy.tab() // tab to second focusable element
        cy.focused().as('second-focused-element') // store element
        cy.tab({ shift: true }) // tab back to skip link
        cy.wait(1500) // sometimes this errors if it runs right away
        cy.focused().click() // trigger skip link
        cy.url().should('contain', mainContentId) // make sure url updates
        cy.tab() // tab to next focusable element
        cy.focused().as('next-focus')
        cy.get('@next-focus').then((nextFocused) => {
            cy.get('@second-focused-element').then((secondFocused) => {
                // compare next focusable element to second focusable element to confirm they're not the same.
                expect(nextFocused[0]).not.to.eq(secondFocused[0])
            })
        })

    })
})