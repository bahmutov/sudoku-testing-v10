describe('Sudoku', () => {
  context('without time control', () => {
    beforeEach(() => {
      cy.visit('/')
    })

    it('plays a move', () => {
      cy.get('.game__cell:contains(0)').should('have.length.greaterThan', 20)
      cy.contains('.game__cell', '0')
        .click()
        .should('have.class', 'game__cell--highlightselected')
      cy.contains('.status__number', '1').click()
      cy.contains('.game__cell.game__cell--highlightselected', '1')
      cy.get('.game__cell--selected').should('have.length.greaterThan', 0)
      cy.get('.status__action-undo').click()
      cy.contains('.game__cell.game__cell--highlightselected', '0')
      cy.get('.game__cell--selected').should('have.length', 0)
    })
  })
})
