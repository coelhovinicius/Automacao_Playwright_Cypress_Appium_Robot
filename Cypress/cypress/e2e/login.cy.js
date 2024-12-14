// Funcionalidades
describe('Login', () => {

    const tela = ['iphone-6', 'macbook-15', 'iphone-x']
    const user = 'vinicius@vinicius.com'

    // Permite testar a responsividade: Faz todos os testes para cada aparelho
    tela.forEach(element => {
        
        // Antes de cada teste
        beforeEach(() => {
            cy.viewport(element) // Responsividade em cada aparelho
            //cy.viewport(1920, 1080) // Testa em uma resolução de 1920x1080
            //cy.visit('/login') // Entra na página "login" da URL configurada em cypress.config.js
            cy.visit('https://automationpratice.com.br/')
            cy.get('.right_list_fix > :nth-child(1) > a').click()
            cy.get('.account_form > h3')
                .contains('Login')
                .should('be.visible')
        })

        // Cenários de Testes
        it('Login com sucesso', () => {
            cy.get('#user').type(user)
            cy.get('#password').type('123456')
            cy.get('#btnLogin').click()
            cy.wait(1000)
            cy.get('.swal2-popup')
                .contains('Login realizado')
                .should('be.visible')
            cy.wait(1000)
            cy.get('button.swal2-confirm.swal2-styled').click()
            cy.wait(1000)
            cy.get('#userLogged')
                .contains(user)
                .should('be.visible')
        })

        it('Login com senha inválida', () => {
            // Preencher campo E-mail
            cy.get('#user').type(user)
            // Preencher campo Senha
            cy.get('#password').type('12345')
            // Clicar no botão "Login"
            cy.get('#btnLogin').click()
            // Validar o texto "Senha inválida."
            cy.get('.invalid_input')
                .should('have.text', 'Senha inválida.')
                .should('be.visible')
        })

        it('Login com e-mail inválido', () => {
            cy.get('#user').type('vinicius')
            cy.get('#password').type('12345')
            cy.get('#btnLogin').click()
            cy.get('.invalid_input')
                .should('have.text', 'E-mail inválido.')
                .should('be.visible')
        })

        it('Login com senha em branco', () => {
            cy.get('#user').type(user)
            cy.get('#btnLogin').click()
            cy.get('.invalid_input')
                .should('have.text', 'Senha inválida.')
                .should('be.visible')
        })

        it('Login com e-mail em branco', () => {
            cy.get('#password').type('123456')
            cy.get('#btnLogin').click()
            cy.get('.invalid_input')
                .should('have.text', 'E-mail inválido.')
                .should('be.visible')
        })

        it('Login com campos em branco', () => {
            cy.get('#btnLogin').click()
            cy.get('.invalid_input')
                .should('have.text', 'E-mail inválido.')
                .should('be.visible')
        })
    });
})