import { BasePage } from "./BasePage.js";

export class WikiSearchPage extends BasePage {
  constructor(page) {
    super(page);

    // Locators
    this.searchInput = this.page.locator('#searchInput');
    this.topLanguageLabels = this.page.locator('[aria-label="Top Languages"] strong'); 
  }

  // Reusable methods

  async search(str) {
    await this.searchInput.fill(str);
    await this.page.keyboard.press('Enter');
  }
}