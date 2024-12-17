import { test, expect } from '@playwright/test';

// Cenário de teste de Cadastro com Sucesso
test('Teste de Cadastro com Sucesso @cadastro @regressivo', async ({ page }) => {
  // Abrir o navegador no site
    await page.goto('https://automationpratice.com.br/');
    // Clicar em "Cadastro", para abrir a tela de cadastro - getByRole referencia o Tipo de Elemento
    await page.getByRole('link', { name: ' Cadastro' }).click();
    // Preencher o campo Nome - locator referencia o ID do Elemento
    await page.locator('#user').fill('Vinícius');
    // Preencher o campo E-mail
    await page.locator('#email').fill('vinicius@vinicius.com');
    // Preencher o campo Senha
    await page.locator('#password').fill('123456');
    // Clicar no botão "Cadastrar"
    await page.getByRole('button', { name: 'Cadastrar' }).click();
    // Validar se há o elemento Heading com nome "Cadastro realizado"
    await page.getByRole('heading', { name: 'Login realizado' });
    // Validar se há o texto de confirmação de cadastro: "Bem-vindo Vinícius"
    await expect (page.getByText('Bem-vindo Vinícius')).toBeVisible();
    // Clicar no botão "OK"
    await page.getByRole('button', { name: 'OK' }).click();
});

// Cenário de teste de Cadastro com com campo Nome em branco
test('Teste de Cadastro sem nome @cadastroSemNome @regressivo', async ({ page }) => {
    await page.goto('https://automationpratice.com.br/');
    await page.getByRole('link', { name: ' Cadastro' }).click();
    await page.locator('#email').fill('vinicius@vinicius.com');
    await page.locator('#password').fill('123456');
    await page.getByRole('button', { name: 'Cadastrar' }).click();
    await expect (page.getByText('O campo nome deve ser prenchido')).toBeVisible();
});

// Cenário de teste de Cadastro com com campo E-mail em branco
test('Teste de Cadastro sem e-mail @cadastroSemEmail @regressivo', async ({ page }) => {
    await page.goto('https://automationpratice.com.br/');
    await page.getByRole('link', { name: ' Cadastro' }).click();
    await page.locator('#user').fill('Vinícius');
    await page.locator('#password').fill('123456');
    await page.getByRole('button', { name: 'Cadastrar' }).click();
    await expect (page.getByText('O campo e-mail deve ser prenchido corretamente')).toBeVisible();
  });

  // Cenário de teste de Cadastro com com campo Senha em branco
test('Teste de Cadastro sem senha @cadastroSemSenha @regressivo', async ({ page }) => {
    await page.goto('https://automationpratice.com.br/');
    await page.getByRole('link', { name: ' Cadastro' }).click();
    await page.locator('#user').fill('Vinícius');
    await page.locator('#email').fill('vinicius@vinicius.com');
    await page.getByRole('button', { name: 'Cadastrar' }).click();
    await expect (page.getByText('O campo senha deve ter pelo menos 6 dígitos')).toBeVisible();
  });

  // Cenário de teste de Cadastro com com campo Senha menor que 6 dígitos
  test('Teste de Cadastro sem senha @cadastroSenhaMenor @regressivo', async ({ page }) => {
    await page.goto('https://automationpratice.com.br/');
    await page.getByRole('link', { name: ' Cadastro' }).click();
    await page.locator('#user').fill('Vinícius');
    await page.locator('#email').fill('vinicius@vinicius.com');
    await page.locator('#password').fill('12345');
    await page.getByRole('button', { name: 'Cadastrar' }).click();
    await expect (page.getByText('O campo senha deve ter pelo menos 6 dígitos')).toBeVisible();
  });