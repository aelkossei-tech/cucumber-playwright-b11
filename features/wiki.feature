@Wiki
Feature: Wikipedia App Verification

  Background:
    Given I am on "https://www.wikipedia.org/"

  Scenario Outline: Search verification for <query>
    When I search for "<query>"
    Then I see "<query>" in the url
    And I see "<query>" in the title
    And I see "<query>" in the main heading

    Examples:
      | query      |
      | Cucumber   |
      | TypeScript |
      | JavaScript |
      | Playwright |
      | Cypress    |


  Scenario: Verify top 10 languages are displayed
    Then I see following languages in order:
      | English | 日本語 | Русский | Deutsch | Español | Français | 中文 | Italiano | Português | فارسی |


  Scenario: Verify table below
    Then I verify below table
      | 1 | iPhone  | 1,000 | 1,000 |
      | 3 | Airpods | 100   | 300   |
      | 2 | iPad    | 500   | 1,000 |