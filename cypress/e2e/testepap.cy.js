describe('template spec', () => {
  beforeEach ( () => {
    cy.visit('https://beta-papmobile.before.com.br/_sys/index.php')
    .clock(900)
  })

  it(`Login`, () => {
    cy.get('.input-user').type(`75076435657`)
    cy.get('.input-password').type(`@Teste4048`)
    cy.get('.form-control').click();
    cy.wait(19000)
    cy.get('.login-button').click();
    cy.get('.opcoes-principais > :nth-child(2)').click();
      


  })

  



})