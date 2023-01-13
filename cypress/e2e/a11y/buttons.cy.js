describe('Check all Anchor Links', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('has buttons without a href attr', () => {
        cy.get('body').within(() => {
            cy.get('button').each(($button) => {
                expect($button).to.not.have.attr('href')
            })
        })
    })
})