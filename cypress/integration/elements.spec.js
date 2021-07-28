/// <reference types="cypress" />


describe('Elementos básicos', () => {
    beforeEach(()=>{
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })

    it('Textos', () => {
        cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...')

    });

    it('Links', () => {
        cy.get('a[href="#"]').click()
        cy.get('#resultado').should('have.text', 'Voltou!')

    });

    it('TextFields', () => {
        cy.get('#formNome').type('Cypress Test')
        cy.get('#formNome').should('have.value', 'Cypress Test')

        cy.get('#elementosForm\\:sugestoes')
            .type('textarea')
            .should('have.value', 'textarea')

        cy.get('#formSobrenome')
            .type('Teste13245{backspace}{backspace}')
            .should('have.value', 'Teste132')

        cy.get('#elementosForm\\:sugestoes')
            .clear()
            .type('Erro{selectall}acerto')
            .should('have.value', 'acerto')
    });

    it('RadioButtom', () => {
        cy.get('#formSexoFem')
            .click()
            .should('be.checked')

        cy.get('#formSexoMasc')
            .should('not.be.checked')

        cy.get('[name=formSexo]')
            .should('have.length', 2)

    });

    it('Checkbox', () => {
        cy.get('#formComidaPizza')
            .click()
            .should('be.checked')

        cy.get('[name=formComidaFavorita]')
            .click({multiple: true})

        cy.get('#formComidaPizza')
            .should('not.be.checked')
            
        cy.get('#formComidaVegetariana')
        .should('be.checked')
    });

    it('Combo', () => {
        cy.get('[data-test="dataEscolaridade"]')
            .select('2o grau completo')
            .should('have.value', '2graucomp')

            cy.get('[data-test="dataEscolaridade"]')
            .select('1graucomp')
            .should('have.value', '1graucomp')
    });

    it.only('Combo Múltipla', () => {
        cy.get('#formEsportes')
            .select(['natacao', 'Corrida', 'nada'])

    });
});