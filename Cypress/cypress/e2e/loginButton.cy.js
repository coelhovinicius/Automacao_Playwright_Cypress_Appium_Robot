describe('LoginButton', () => {

    const tela = ['iphone-6'/*, 'macbook-15', 'iphone-x'*/]
    const user = 'vinicius@vinicius.com'

    // Permite testar a responsividade: Faz todos os testes para cada aparelho
    tela.forEach(element => {
        // Antes de cada teste
        beforeEach(() => {
            cy.viewport(element) // Responsividade em cada aparelho
            cy.visit('https://automationpratice.com.br/')
        })

        // Cenários de Testes
        it('Entrar na tela de login', () => {
            cy.get('.right_list_fix > :nth-child(1) > a').click()
            cy.get('.account_form > h3')
                .contains('Login')
                .should('be.visible')
        })
    });
})