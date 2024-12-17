/// <reference types="cypress"/>
describe('Buscar dispositivos', () => {
    var token = 321654987
    it('Buscar dispositivo específico', () => {
        const idVini = 'ksjdfhkjsd'
        cy.request({
            method: 'GET',
            url: 'https://api.restful-api.dev/objects/idVini',
            failOnStatusCode: false,
            headers: {
                Authorization: 'Bearer ${token}'
            }
        })
        .then((resultado) => {
            expect(resultado.status).equal(404)
            expect(resultado.body.error).equal('Oject with id=idVini was not found.')
            token = resultado.body.token
        })
    })
})  