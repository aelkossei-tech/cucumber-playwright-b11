import { BasePage } from "../BasePage.js";

export class TGDynamicTablesPage extends BasePage {
    constructor(page) {
        super(page); 

        // Locators 
        this.inventoryHeading = this.page.locator('.is-size-3'); 
        this.tableHeaders = this.page.locator('.header'); 
        this.tableRows = this.page.locator('tbody tr'); 
        this.tableCells = this.page.locator('tbody td'); 
        this.addProductBtn = this.page.locator('#add_product_btn'); 
        this.totalAmount = this.page.locator('#total_amount'); 

        this.modalTitle = this.page.locator('#modal_title'); 
        this.exitBtn = this.page.locator('.delete'); 
        this.inputBoxes = {
            quantity: this.page.locator('#quantity'), 
            productName: this.page.locator('#product'), 
            productPrice: this.page.locator('#price')
        }
        
        this.submitBtn = this.page.locator('#submit'); 
        this.modalCard = this.page.locator('.modal-card'); 
    }

    // Reusable Methods 
    getHeadingByName(heading) {
        return this.page.getByRole('heading', { name: heading }); 
    }
    
    getButtonByName(buttonName) {
        return this.page.getByRole('button', { name: buttonName}); 
    }
    
    getLabel(labelText) {
        return this.page.getByText(labelText); 
    }

    getInputBox(inputName) {
        return this.page.locator(`#${inputName.toLowerCase()}`); 
    }
    

    async fillInputBox(inputName, inputData) {
        await this.getInputBox(inputName).fill(inputData); 
    }


    async addNewProduct(quantity, productName, productPrice) {
        await this.quantityInputBox.fill(quantity); 
        await this.productNameInputBox.fill(productName); 
        await this.productPriceInputBox.fill(productPrice); 
        await this.submitBtn.click(); 
    }

}