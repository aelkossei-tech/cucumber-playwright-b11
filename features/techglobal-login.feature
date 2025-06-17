@TGLogin @Smoke
Feature: TechGlobal Login Verification 

Scenario: Validate successful login 
    Given I am on "https://www.techglobal-training.com/frontend/login"
    When I enter username "TechGlobal" on login page
    And I enter password "Test1234" on login page 
    And I click "LOGIN" button 
    Then I see "You are logged in" text 

Scenario Outline: Validate login for <username> <password>
    Given I am on "https://www.techglobal-training.com/frontend/login"
    When I enter username "<username>" on login page
    And I enter password "<password>" on login page 
    And I click "LOGIN" button 
    Then I see "<error>" text 

        Examples:
            | username   | password | error                     |
            | TechGlobal | 1234     | Invalid Password entered! |
            | Tech       | Test1234 | Invalid Username entered! |
            | Tech       | 1234     | Invalid Username entered! |
