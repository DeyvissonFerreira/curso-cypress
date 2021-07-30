/// <reference types="cypress" />

describe('Cypress basic', () => {
    it('Deve abrir uma página e um assert', () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    
/*         cy.title().should('be.equal', 'Campo de Treinamento')
        cy.title().should('contain', 'Campo') */

        cy.pause()

        cy.title()
            .should('be.equal', 'Campo de Treinamento')
            .and('contain', 'Campo')
    })

    it('Interagir com elemento', () => {

        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
        
        cy.get('#buttonSimple')
            .click()
            .should('have.value', 'Obrigado!')
    });

    it.only('Imprimir Titulo', () => {

        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
        
        cy.title().then(title =>{
            console.log(title)
            cy.get('#formNome').type(title)
        })
    });

});