import { device, expect } from "detox";

describe('SignIn Screen', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have signIn screen', async () => {
    await expect(element(by.text('Books'))).toBeVisible();
  });

  it('should signIn with valid credentials', async () => {

    const inputEmail = await element(by.id('input-email'));
    const inputPassword = await element(by.id('input-password'));

    await inputEmail.tap();
    await inputEmail.typeText("desafio@ioasys.com.br");

    await inputPassword.tap();
    await inputPassword.typeText("12341234");

    await inputPassword.tapReturnKey();
    await element(by.id('input-button')).tap();

    await expect(element(by.text('Books'))).toBeVisible();
  });

  it('should handle logout', async () => {
    await element(by.id('button-logout')).tap();
    await expect(element(by.id('input-email'))).toBeVisible();
  });

  it('should signIn with invalid credentials', async () => {

    const inputEmail = await element(by.id('input-email'));
    const inputPassword = await element(by.id('input-password'));

    await inputEmail.tap();
    await inputEmail.typeText("desafio@ioasys.com.br");

    await inputPassword.tap();
    await inputPassword.typeText("invalid-credentials");

    await inputPassword.tapReturnKey();
    await element(by.id('input-button')).tap();

    await expect(element(by.text('Falha na autenticação'))).toBeVisible();
  });

});


