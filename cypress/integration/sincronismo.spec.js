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

    
    it.only('Uso do find', () => {
        cy.get('#buttonList').click()
        cy.get('#lista')
            .find('span')
            .should('contain', 'Item 1')
            .should('contain', 'Item 2')
        //#lista span
    });
});