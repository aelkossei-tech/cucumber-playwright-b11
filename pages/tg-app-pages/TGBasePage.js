import { BasePage } from "../BasePage.js";

export class TGBasePage extends BasePage {
  constructor(page) {
    super(page);

    // Locators
    this.testingDropdown = this.page.locator('#dropdown-testing');
    this.frontendOption = this.page.locator('#frontend-option');
    this.backendOption = this.page.locator('#backend-option');
  }

  // Reusable methods

  async selectTestingOption(optionName) {
    //await this.testingDropdown.hover();
    if(optionName === 'Frontend Testing') {
      await this.frontendOption.click();
    }
    else if(optionName === 'Backend Testing') {
      await this.backendOption.click();
    }
    else {
      throw new Error(`${optionName} cannot be found!!!`);
    }
  }
}