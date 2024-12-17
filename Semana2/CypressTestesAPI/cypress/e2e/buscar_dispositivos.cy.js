describe('Buscar dispositivos', () => {
    it('Buscar dispositivo específico', () => {
        cy.request({
            method: 'GET',
            url: 'https://api.restful-api.dev/objects/3',

        })

        .then((resultado) => {
            console.log('Resultado do Vinícius: ', resultado)
            console.log('Resultado do Vinícius: ', resultado.body)
            console.log('Erro do Código: ', resultado.status)
        })
    })
})    