import { TGBasePage } from "./TGBasePage.js";


export class TGFrontendTestingPage extends TGBasePage {
  constructor(page) {
    super(page);

    // Locators
    this.practiceCards = this.page.locator('[class^="Card_cards__"] a');
    this.projectCards = this.page.locator('[class^="CardGrids_projects"] a');
  }

  // Reusable method
  async clickPracticeCard(cardName) { 
    await this.practiceCards.filter({ hasText: cardName }).click();
  }

  async clickProjectCard(cardName) { 
    await this.projectCards.filter({ hasText: cardName }).click();
  }
}