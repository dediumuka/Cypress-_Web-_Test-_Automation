describe('Login Test', () => {
  it('Success Login', () => {
    cy.visit('/')
    cy.get ('a.login').click()
    cy.get ('#email').type('bolangwijaya82@gmail.com')
    cy.get ('#passwd').type('12345')
    cy.get ('#SubmitLogin').click()
    cy.get ('h1.page-heading').should ('contain','My account')
  })

  it('Failed Login', () => {
    cy.visit('/')
    cy.get ('a.login').click()
    cy.get ('#email').type('bolangwijaya82@gmail.com')
    cy.get ('#passwd').type('1234567')
    cy.get ('#SubmitLogin').click()
    cy.get ('div.alert-danger').should('contain', 'Authentication failed.')

  })
})