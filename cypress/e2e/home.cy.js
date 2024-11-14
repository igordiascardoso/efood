/// <reference types="cypress" />

describe('Tests for Home', () => {
  beforeEach(() => {
    cy.visit('https://new-efood.vercel.app/')
  })

  it('should render with 6 restaurants', () => {
    cy.get('.sc-hmdomO').should('have.length', 6)
  })
})
