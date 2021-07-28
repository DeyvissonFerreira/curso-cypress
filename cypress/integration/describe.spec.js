/// <reference types="cypress" />

it.skip('An external test...', () =>{

})

describe('Should group tests...', () => {

    it.skip('An internal test...', () => {
        
    });

    describe('Agrupar dentro de outro grupo...', () => {
        it('Teste sub-interno', () => {
            
        });
    });

    describe('Agrupar dentro de outro grupo 2...', () => {
        it('Teste sub-interno 2', () => {
            
        });
    });

});