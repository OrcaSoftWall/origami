describe('Pages scenarios', () => {
  
  it('Home page', () => {
    cy.visit('http://localhost:3006')
    cy.get('h1').contains('Publications')
  })
  
  it('Should render Home page and navigate to Login page', () => {
    cy.visit('http://localhost:3006')
    cy.get('header').contains('Login').click()
    
  })
  
  it('Login page', () => {
    cy.visit('http://localhost:3006/login')
    cy.get('h1').contains('Login')
    cy.get('header [data-test-id="link-Login"]').click()
    cy.get('h1').contains('Login')
  })

  it('Login user', () => {
    cy.visit('http://localhost:3006/login')
    cy.get('h1').contains('Login')
    cy.get('#username').type('n1')
    cy.get('#password').type('123')
    cy.get('form [data-test-id="button-Login"]').click()
    cy.wait(2500)
    cy.get('header [data-test-id="link-Profile"]').click()
    cy.wait(2500)
    cy.get('div p').contains('User:')
    cy.get('button').contains('Logout')
  })
})