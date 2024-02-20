    describe('Login Test' , () => {
        it('Login Asertions', () => {
          cy.visit('/')
        
          cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
      
          cy.get('[data-qa="login-email"]').type('jsolange.gil@gmail.com')
          cy.get('[data-qa="login-password"]').type('1234')
          cy.get('[data-qa="login-button"]').click()
          cy.url().should('contains', '/')
      
        })
      })