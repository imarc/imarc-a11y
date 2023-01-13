/**
 * TerminalLog - logs all violations to the Cypress and browser console.
 * @param  {Array} violations A11y violations from AXE.
 * @param  {Boolean} verbose {Default: false} - Toggle on verbose consoling to see ever node that threw an error.
 *                           Otherwise the console only displays the number of nodes associated with an error.
*/
function terminalLog(violations, verbose = false) {
    cy.task(
        'log',
        `${violations.length} accessibility violation${
            violations.length === 1 ? '' : 's'
        } ${violations.length === 1 ? 'was' : 'were'} detected`
    )

    if ( verbose ) {
        let violationData = []

        violations.forEach(({ id, impact, description, nodes, tags }) => {
            nodes.forEach(({ html, target }) => {
                violationData = [...violationData, {
                    id,
                    target: target[0],
                    html: `${html.slice(0, 90)}${html.length > 90 ? '...' : ''}` ,
                    impact,
                    description,
                    rules: tags.join(', ')
                }]
            })
        })

        console.warn('[A11y] Accessibility Violations')

        violationData.forEach(data => {
            console.table(data)
            cy.task('table', data)
        })

        console.warn(`${violations.length} accessibility violation${
            violations.length === 1 ? '' : 's'
        } ${violations.length === 1 ? 'was' : 'were'} detected`)

    } else {

        const violationData = violations.map(
            ({ id, impact, description, nodes }) => ({
                id,
                impact,
                description,
                nodes: nodes.length
            })
        )

        console.table(violationData)
        cy.task('table', violationData)
    }
}

export { terminalLog }