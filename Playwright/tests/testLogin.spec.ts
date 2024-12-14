import { test, expect } from '@playwright/test';

// Cenário de teste de Login com Sucesso - "@login" é uma Tag que permite rodar o teste usando-a: No terminal, npx playwright test --grep=@login
test('Teste de Login com Sucesso @login @regressivo', async ({ page }) => {
  // Abrir o navegador no site
  await page.goto('https://automationpratice.com.br/');
  // Clicar em "Login", para abrir a tela de login - getByRole referencia o Tipo de Elemento
  await page.getByRole('link', { name: ' Login' }).click();
  // Preencher o campo de e-mail - locator referencia o ID do Elemento
  await page.locator('#user').fill('teste@teste.com');
  // Preencher o campo de senha
  await page.locator('#password').fill('123456');
  // Clicar no botão "Login"
  await page.getByRole('button', { name: 'login' }).click();
  // Validar se há o elemento Heading com nome "Login realizado"
  await page.getByRole('heading', { name: 'Login realizado' });
  // Validar se há o texto de confirmação de login: "Olá, teste@teste.com"
  await expect (page.getByText('Olá, teste@teste.com')).toBeVisible();
  // Clicar no botão "OK"
  await page.getByRole('button', { name: 'OK' }).click();
});

// Cenário de teste de Login com com campo de e-mail em branco
test('Teste de Login sem e-mail @loginSemEmail @regressivo', async ({ page }) => {
  await page.goto('https://automationpratice.com.br/');
  await page.getByRole('link', { name: ' Login' }).click();
  //await page.locator('#user').fill('');
  await page.locator('#password').fill('123456');
  await page.getByRole('button', { name: 'login' }).click();
  await expect (page.getByText('E-mail inválido.')).toBeVisible();
});

// Cenário de teste de Login com com campo de senha em branco
test('Teste de Login sem senha @loginSemSenha @regressivo', async ({ page }) => {
  await page.goto('https://automationpratice.com.br/');
  await page.getByRole('link', { name: ' Login' }).click();
  await page.locator('#user').fill('teste@teste.com');
  //await page.locator('#password').fill('');
  await page.getByRole('button', { name: 'login' }).click();
  await expect (page.getByText('Senha inválida.')).toBeVisible();
});