export class BasePage {
  constructor(page) {
    this.page = page;

    this.mainHeading = this.page.locator('h1').first();
    this.header = this.page.locator('header').first();
    this.footer = this.page.locator('footer');
  }

  // Reusable methods
  async goto(url) {
    await this.page.goto(url);
  }

  async waitForUrlToContain(str) {
    await this.page.waitForURL(`**/${str}`);
  }

  async getTitle() {
    return await this.page.title();
  }
}