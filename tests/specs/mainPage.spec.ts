import { test, expect } from '../fixtures/fixtures';
import { MainPage } from '../pages/MainPage';

test('Запись на продукт через регистрацию', async ({ mainPage }) => {
  await mainPage.CardProduct.hover();
  await expect(mainPage.ButtonZapisatsya).toBeVisible();
  await mainPage.ButtonZapisatsya.click();
  //await expect(mainPage.FormaRegistration).toBeVisible();
  await mainPage.FormaButtonZaregistrirovatsya.click();
  //Первый шаг формы
  //await expect(mainPage.FormaStepOne).toBeVisible();
  await mainPage.FormaPoleEmail.click();
  await mainPage.FormaPoleEmail.fill('test@test.ru');
  await mainPage.FormaPoleFamilia.click();
  await mainPage.FormaPoleFamilia.fill('тест');
  await mainPage.FormaPoleName.click();
  await mainPage.FormaPoleName.fill('тест');
  await mainPage.FormaPoleOtchestvo.click();
  await mainPage.FormaPoleOtchestvo.fill('тест');
  await mainPage.FormaCheckboxSoglasie.check();
  await mainPage.FormaButtonProdoljit.click();
  await mainPage.Yvedomlenie.click();
  //await expect(mainPage.FormaStepTwo).toBeVisible(); // падает Ошибкой именно эта проверка
  //await mainPage.FormaPoleDrugoe.click();
  await mainPage.FormaPoleSvoiVariant.fill('тест');
  await mainPage.FormaButtonProdoljit1.click();
  await mainPage.FormaPoleVvediteNazvanie.click();
  await mainPage.FormaPoleVvediteNazvanie.fill('тест');
  await mainPage.FormaPoleVvediteDolznost.click();
  await mainPage.FormaPoleVvediteDolznost.fill('тест');
  await mainPage.FormaButtonZavershit.click();
  await expect(mainPage.FormaEkranYspex).toBeVisible();
});

test('Проверка доступности элемента лого в Хидере', async ({ mainPage }) => {
  await mainPage.HeaderLogoHasCorrectAriaSnapshot();
});

test('Проверка доступности элемента кнопки "Войти" в Хидере', async ({ mainPage }) => {
  await mainPage.HeaderButtonVoitiHasCorrectAriaSnapshot();
});

test('Проверка доступности элементов меню в Хидере', async ({ mainPage }) => {
  await mainPage.HeaderMenuHasCorrectAriaSnapshot();
});
