import { device, expect } from "detox";

describe('Home Screen', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have Home screen', async () => {
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

  it('should filter by text', async () => {
    const inputSearch = await element(by.id('input-search'));
    await inputSearch.tap();
    await inputSearch.typeText("Ab");

    await element(by.id('button-search')).tap();

    await expect(element(by.text('Ab'))).toBeVisible();
  });


  it('should handle click to open modal', async () => {
    await element(by.id('button-show-modal')).tap();
    await expect(element(by.text('Selecione a categoria'))).toBeVisible();
  });

});
