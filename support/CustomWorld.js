import { setWorldConstructor, World } from "@cucumber/cucumber";

class CustomWorld extends World{
  constructor(options) {
    super(options);

    // Declare fixtures
    this.browser = null;
    this.context = null;
    this.page = null;

    // Declare POM fixtures
    this.basePage = null;
    this.wikiSearchPage = null;
    this.tgBasePage = null;
    this.tgFrontendTestingPage = null;
    this.tgDynamicTablesPage = null; 
    this.tgLoginPage = null; 
  }
}

setWorldConstructor(CustomWorld);