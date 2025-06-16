import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';


Given(/^I am on "([^"]*)"$/, async function(url) {
  await this.basePage.goto(url);
});

When(/^I hover "([^"]*)" menu item$/, async function(itemText){
  await this.tgBasePage.testingDropdown.hover();
});

When('I click {string} header option', async function(elementText) {
  await this.tgBasePage.selectTestingOption(elementText);
});

Then(/^I see "([^"]*)" page$/, async function(pageName) {
  if(pageName === 'Frontend Testing') {
    await expect(this.page.getByRole('heading', { name: 'Frontend' })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Testing' })).toBeVisible();
  }
  else {
    await expect(this.page.getByRole('heading', { name: pageName })).toBeVisible();
  } 
});

Then(/^I see 10 practice cards$/, async function() {
  expect(await this.tgFrontendTestingPage.practiceCards.count()).toBe(10);
});

Then(/^I see 10 project cards$/, async function() {
  expect(await this.tgFrontendTestingPage.projectCards.count()).toBe(10);
});

When('I click {string} {word}', async function(elementText, elementRole) {
  await this.page.getByRole(elementRole, { name: elementText}).click();
});