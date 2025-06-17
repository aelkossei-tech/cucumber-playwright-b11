import { When, Then } from '@cucumber/cucumber'
import { expect } from "@playwright/test";

When('I enter username {string} on login page', async function(username) {
    await this.tgLoginPage.enterUsername(username);  
});

When('I enter password {string} on login page', async function(password) {
    await this.tgLoginPage.enterPassword(password);  
});

Then('I see {string} text', async function(elementText) {
    await expect(this.page.getByText(elementText)).toBeVisible(); 
});
