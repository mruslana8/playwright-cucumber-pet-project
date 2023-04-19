const { Given, When, Then } = require("@cucumber/cucumber")
const { InventoryPage } = require("../page-objects/inventory-page")
const { LoginPage } = require("../page-objects/login-page")
const { ProductPage } = require("../page-objects/product-page")

const inventoryPage = new InventoryPage()
const loginPage = new LoginPage()
const productPage = new ProductPage()

When("I am logged in", async function () {
  await loginPage.visit("")
  // норм ли так оставлять тут креденшиалс
  await loginPage.submitLoginFormWithParameters("standard_user", "secret_sauce")
  await inventoryPage.assertInventoryPageIsOpen()
})

When("I click on product's name", async function () {
  await inventoryPage.openFirstProductPageByClickingOnName()
})

When("I click on product's photo", async function () {
  await inventoryPage.openFirstProductPageByClickingOnPhoto()
})

Then("Product page is open", async function () {
  await productPage.assertIsOpen()
})
