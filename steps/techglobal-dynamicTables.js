import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

// Test Case 01 - Validate the default content of the inventory table
Then('the user should see the {string} heading', async function (expectedHeading) {
    await expect(this.tgDynamicTablesPage.getHeadingByName(expectedHeading)).toHaveText(expectedHeading);
});

Then('the user should see the table with the headers below', async function (dataTableHeader) {
    const expectedTableHeader = dataTableHeader.raw()[0];
    const actualTableHeader = await this.tgDynamicTablesPage.tableHeaders.allTextContents();
    expect(actualTableHeader).toEqual(expectedTableHeader);
});

Then('the user should see the table with the rows below', async function (tableData) {
    const expectedTableRows = tableData.rawTable;
    this.initialRowCount = await this.tgDynamicTablesPage.tableRows.count();

    const rowElements = await this.tgDynamicTablesPage.tableRows.elementHandles();
    expect(rowElements.length).toBe(expectedTableRows.length);

    for (let i = 0; i < expectedTableRows.length; i++) {
        const cellElements = await rowElements[i].$$('td');
        const actualRow = await Promise.all(
            cellElements.map(async (cell) => {
                const text = await cell.textContent();
                return text.trim();
            })
        );

        const expectedRow = expectedTableRows[i].map(cell => cell.trim());
        expect(actualRow).toEqual(expectedRow);
    }
});

Then('the user should see {string} button is enabled', async function (buttonName) {
    await expect(this.tgDynamicTablesPage.getButtonByName(buttonName)).toBeEnabled();
});

Then('the user should see the {string} text displayed', async function (expectedText) {
    const actualText = await this.tgDynamicTablesPage.totalAmount.textContent();
    expect(expectedText.trim()).toHaveText(actualText);
});


// Test Case 02 - Validate the Add New Product modal

When('the user clicks on the {string} button', async function (buttonName) {
    if (buttonName === "X") {
        await this.tgDynamicTablesPage.exitBtn.click();
    }

    else {
        await this.tgDynamicTablesPage.getButtonByName(buttonName).click();
    }
});

Then('the user should see the {string} modal with its heading', async function (modalTitle) {
    await expect(this.tgDynamicTablesPage.getHeadingByName(modalTitle)).toBeVisible();
});

Then('the user should see the {string} button is enabled', async function (buttonName) {
    if (buttonName === "X") {
        await expect(this.tgDynamicTablesPage.exitBtn).toBeVisible();
    }

    else {
        await expect(this.tgDynamicTablesPage.getButtonByName(buttonName)).toBeEnabled();
    }
});

Then('the user should see the {string} label', async function (label) {
    await expect(this.tgDynamicTablesPage.getLabel(label)).toBeVisible();
});

Then('the user should see the {string} input box is enabled', async function (inputBoxName) {
    await expect(this.tgDynamicTablesPage.getInputBox(inputBoxName)).toBeEnabled();
});


// Test Case 03 - Validate the Add New Product modal X button

Then('the user should not see the {string} modal', async function (modalCard) {
    await expect(this.tgDynamicTablesPage.modalCard).toBeHidden();
});

// Test Case 04 - Validate the new product added

When('the user enters the quantity as {string}', async function (quantity) {
    await this.tgDynamicTablesPage.fillInputBox('quantity', quantity);
});

When('the user enters the product as {string}', async function (productName) {
    await this.tgDynamicTablesPage.fillInputBox('product', productName);
});

When('the user enters the price as {string}', async function (productPrice) {
    await this.tgDynamicTablesPage.fillInputBox('price', productPrice);
});

Then('the user should see the table with the new row below:', async function (dataTable) {
    console.log(dataTable.raw());
});




