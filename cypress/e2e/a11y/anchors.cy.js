describe('Check all Anchor Links', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('has anchors with a valid href', () => {
        cy.get('body').within(() => {
            cy.get('a').each(($anchor) => {
                expect($anchor)
                    .attr('href')
                    .to.not.eq('#')
                    .to.not.eq('#undefined')
                    .to.not.eq('')
            })
        })
    })
})