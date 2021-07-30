/// <reference types="cypress" />

describe('Esperas...', () => {
    beforeEach(()=>{
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })

    it('Aguardar elemento estar disponível', () => {
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay')
            .click()
        cy.get('#novoCampo')
            .type('Teste')
    });

    it('Deve fazer retries', () => {
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo')
            .should('not.exist')
            .should('exist')
        //cy.get('#novoCampo').type('Teste')
    });

    
    it('Uso do find', () => {
        cy.get('#buttonList').click()
        cy.get('#lista')
            .find('span')
            .should('contain', 'Item 1')
             
        cy.get('#lista span')
            .should('contain', 'Item 2')
    });

    it('Uso do timeout', () => {
/*         cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('exist') */

        cy.get('#buttonListDOM').click()
        cy.wait(5000)
        cy.get('#lista span')
            .should('contain', 'Item 2')
    });

    it.only('Should vs Then', () => {
            cy.get('#buttonListDOM').click()
            cy.get('#lista span').then($el =>{
                expect($el).to.have.length(1)
            })
        });
});