import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class MainPage extends BasePage {
  private readonly HeaderLogo: Locator;
  private readonly HeaderButtonVoiti: Locator;
  private readonly HeaderMenu: Locator;

  constructor(page: Page) {
    super(page);
    this.HeaderLogo = this.page.getByRole('link', { name: 'Образовательный портал' });
    this.HeaderButtonVoiti = this.page.getByRole('button', { name: 'Войти' });
    this.HeaderMenu = this.page.locator('.NavigationMenu__List__GS3QgCh8');
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
