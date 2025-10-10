import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class MainPage extends BasePage {
  private readonly HeaderLogo: Locator;
  private readonly HeaderButtonVoiti: Locator;
  private readonly HeaderMenu: Locator;
  private readonly CardProduct: Locator;
  private readonly ButtonZapisatsya: Locator;
  private readonly FormaRegistration: Locator;
  private readonly FormaButtonZaregistrirovatsya: Locator;
  private readonly FormaStepOne: Locator;
  private readonly FormaPoleEmail: Locator;
  private readonly FormaPoleFamilia: Locator;
  private readonly FormaPoleName: Locator;
  private readonly FormaPoleOtchestvo: Locator;
  private readonly FormaCheckboxSoglasie: Locator;
  private readonly FormaButtonProdoljit: Locator;
  private readonly FormaPoleDrugoe: Locator;
  private readonly FormaPoleSvoiVariant: Locator;
  private readonly FormaButtonProdoljit1: Locator;
  private readonly FormaPoleVvediteNazvanie: Locator;
  private readonly FormaPoleVvediteDolznost: Locator;
  private readonly FormaButtonZavershit: Locator;
  private readonly FormaEkranYspex: Locator;

  constructor(page: Page) {
    super(page);
    this.HeaderLogo = this.page.getByRole('link', { name: 'Образовательный портал' });
    this.HeaderButtonVoiti = this.page.getByRole('button', { name: 'Войти' });
    this.HeaderMenu = this.page.locator('.NavigationMenu__List__GS3QgCh8');

    this.CardProduct = this.page.getByLabel(
      'Инженерия будущего: практические кейсы СИБУРа в композитах',
    );
    this.ButtonZapisatsya = this.page.getByRole('button', { name: 'Записаться' });
    this.FormaRegistration = this.page.getByRole('dialog', { name: 'Запишитесь на мероприятие' });
    this.FormaButtonZaregistrirovatsya = this.page.getByRole('button', {
      name: 'Зарегистрироваться',
    });
    this.FormaStepOne = this.page.locator('.FirstStepRegistration__container__plPN9wWd');
    this.FormaPoleEmail = this.page.getByRole('textbox', { name: 'Введите почту' });
    this.FormaPoleFamilia = this.page.getByRole('textbox', { name: 'Введите фамилию' });
    this.FormaPoleName = this.page.getByRole('textbox', { name: 'Введите имя' });
    this.FormaPoleOtchestvo = this.page.getByRole('textbox', { name: 'Введите отчество' });
    this.FormaCheckboxSoglasie = this.page.getByRole('checkbox', {
      name: 'Соглашаюсь на обработку персональных данных. Положение о конфиденциальности, Пол',
    });
    this.FormaButtonProdoljit = page.getByRole('button', { name: 'Продолжить' });
    this.FormaPoleDrugoe = page.getByText('Другое');
    this.FormaPoleSvoiVariant = page.getByRole('textbox', { name: 'Введите свой вариант' });
    this.FormaButtonProdoljit1 = page.getByRole('button', { name: 'Продолжить' });
    this.FormaPoleVvediteNazvanie = page.getByRole('textbox', { name: 'Введите название' });
    this.FormaPoleVvediteDolznost = page.getByRole('textbox', { name: 'Введите должность' });
    this.FormaButtonZavershit = page.getByRole('button', { name: 'Завершить' });
    this.FormaEkranYspex = page.getByRole('heading', { name: 'Вы зарегистрированы на портале' });
  }

  async open() {
    await this.page.goto('https://sibured.ru/businesspractices');
  }

  async HeaderLogoHasCorrectAriaSnapshot() {
    await expect(this.HeaderLogo).toMatchAriaSnapshot({ name: 'HeaderLogoSnapshot.yml' });
  }
  async HeaderButtonVoitiHasCorrectAriaSnapshot() {
    await expect(this.HeaderButtonVoiti).toMatchAriaSnapshot({
      name: 'HeaderButtonVoitiSnapshot.yml',
    });
  }
  async HeaderMenuHasCorrectAriaSnapshot() {
    await expect(this.HeaderMenu).toMatchAriaSnapshot({ name: 'HeaderMenuSnapshot.yml' });
  }
}
