@FrontendTesting
Feature: TechGlobal Core Verification

  Feature Description: Anything you type here is not considered as gehrkin steps and will not be executed

  Background: 
    Given I am on "https://www.techglobal-training.com/"
    When I hover "Testing" menu item
    And I click "Frontend Testing" header option

  @Smoke
  Scenario: Fronted Testing verification
    Then I see "Frontend Testing" page
    And I see 10 practice cards
    And I see 10 project cards

  @Regression
  Scenario: Fronted Testing HTML Elements verification
    And I click "HTML Elements" link
    Then I see "HTML Elements" page

  @Regression
  Scenario: Fronted Testing Actions verification
    And I click "Actions" link
    Then I see "Actions" page

  @Regression
  Scenario: Fronted Testing Wait verification
    And I click "Waits" link
    Then I see "Waits" page