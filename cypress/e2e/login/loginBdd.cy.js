import{And, Given, When,Then} from "cypress-cucumber-preprocessor/steps"

Given("ingreso a la pagina web",()=>{
    cy.visit("/")
    })
        When("doy clic en opcion login del menu",()=>{
            cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        })
        And("un usuario ingresa su correo", ()=>{
            cy.get('[data-qa="login-email"]').type("jsolange.gil@gmail.com")
          } )

        And("ingresa la clave",()=>{
            cy.get('[data-qa="login-password"]').type("1234")
          })

        And("ingresa la clave incorrecta",()=>{
            cy.get('[data-qa="login-password"]').type("12345")
          })

        And("le da clic en el boton login",()=>{
            cy.get('[data-qa="login-button"]').click()
          })
        
        Then("ingresa a la pagina web Automation exitosamente",()=>{
            cy.url().should('contains', "/")
        })
        
        Then("muestra mensaje de error ",() =>{
            cy.get('.login-form > form > p').should('have.value', 'Your email or password is incorrect!')

        })


        