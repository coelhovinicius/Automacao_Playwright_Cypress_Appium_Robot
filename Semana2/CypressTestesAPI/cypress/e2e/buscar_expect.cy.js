/// <reference types="cypress"/>
describe('Buscar dispositivos', () => {
    it('Buscar dispositivo específico', () => {
        cy.request({
            method: 'GET',
            url: 'https://api.restful-api.dev/objects/3',
        })
        .then((resultado) => {
            expect(resultado.status).equal(200),
            expect(resultado.body.id).equal('3'),
            expect(resultado.body.id).not.empty
            expect(resultado.body.name).equals('Apple iPhone 12 Pro Max')
        })
    })
})    