// Funcionalidades
describe('Cadastro', () => {

    const tela = ['iphone-6', 'macbook-15', 'iphone-x']
    const user = 'vinicius@vinicius.com'
    const userName = 'Vinicius'

    // Permite testar a responsividade: Faz todos os testes para cada aparelho
    tela.forEach(element => {
        
        // Antes de cada teste
        beforeEach(() => {
            cy.viewport(element) // Responsividade em cada aparelho
            cy.visit('https://automationpratice.com.br/')
            cy.get('.right_list_fix > :nth-child(2) > a').click()
            cy.get('.account_form > h3')
                .contains('Cadastro de usuário')
                .should('be.visible')
        })

        // Cenários de Testes
        it('Cadastro com sucesso', () => {
            cy.get('#user').type(userName)
            cy.get('#email').type(user)
            cy.get('#password').type('123456')
            cy.get('#btnRegister').click()
            cy.wait(1000)
            cy.get('.swal2-popup')
                .contains('Cadastro realizado!')
                .should('be.visible')
            cy.wait(1000)
            cy.get('.swal2-confirm').click()
            cy.wait(1000)
            cy.get('#userLogged')
                .contains(userName)
                .should('be.visible')
        })

        it('Cadastro com senha inválida', () => {
            cy.get('#user').type(userName)
            cy.get('#email').type(user)
            cy.get('#password').type('12345')
            cy.get('#btnRegister').click()
            cy.get('#errorMessageFirstName')
                .contains('O campo senha deve ter pelo menos 6 dígitos')
                .should('be.visible')
        })

        it('Cadastro com e-mail inválido', () => {
            cy.get('#user').type(userName)
            cy.get('#email').type('xpto')
            cy.get('#password').type('123456')
            cy.get('#btnRegister').click()
            cy.get(':nth-child(3) > #errorMessageFirstName')
                .contains('O campo e-mail deve ser prenchido corretamente')
                .should('be.visible')
        })

        it('Cadastro com nome em branco', () => {
            cy.get('#email').type(user)
            cy.get('#password').type('123456')
            cy.get('#btnRegister').click()
            cy.get(':nth-child(2) > #errorMessageFirstName')
                .contains('O campo nome deve ser prenchido')
                .should('be.visible')
        })

        it('Cadastro com e-mail em branco', () => {
            cy.get('#user').type(userName)
            cy.get('#password').type('123456')
            cy.get('#btnRegister').click()
            cy.get('#errorMessageFirstName')
                .contains('O campo e-mail deve ser prenchido corretamente')
                .should('be.visible')
        })

        it('Cadastro com senha em branco', () => {
            cy.get('#user').type(userName)
            cy.get('#email').type(user)
            cy.get('#btnRegister').click()
            cy.get('#errorMessageFirstName')
                .contains('O campo senha deve ter pelo menos 6 dígitos')
                .should('be.visible')
        })
    });
})