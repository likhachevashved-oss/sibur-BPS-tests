import { test, expect } from '../fixtures/fixtures';
import { MainPage } from '../pages/MainPage';

test('Проверка доступности элемента лого в Хидере', async ({ mainPage }) => {
  await mainPage.HeaderLogoHasCorrectAriaSnapshot();
});

test('Проверка доступности элемента кнопки "Войти" в Хидере', async ({ mainPage }) => {
  await mainPage.HeaderButtonVoitiHasCorrectAriaSnapshot();
});

test('Проверка доступности элементов меню в Хидере', async ({ mainPage }) => {
  await mainPage.HeaderMenuHasCorrectAriaSnapshot();
});
