const { Given, When, Then } = require("@cucumber/cucumber")
const { ProductPage } = require("../page-objects/product-page")
const { LoginPage } = require("../page-objects/login-page")
const { InventoryPage } = require("../page-objects/inventory-page")

const productPage = new ProductPage()
const loginPage = new LoginPage()
const inventoryPage = new InventoryPage()


Given("I open Product page", async function () {
  await loginPage.visit("")
  // норм ли так оставлять тут креденшиалс
  await loginPage.submitLoginFormWithParameters("standard_user", "secret_sauce")
  await inventoryPage.openFirstProductPageByClickingOnName()
})

When("I click on a Back Button", async function () {
  await productPage.clickOnBackToProductsButton()
})

Then("I return to Inventory Page", async function () {
    await inventoryPage.assertInventoryPageIsOpen()
})
