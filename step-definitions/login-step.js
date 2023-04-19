const { Given, When, Then, defineStep } = require("@cucumber/cucumber")
const { LoginPage } = require("../page-objects/login-page")
const { InventoryPage } = require("../page-objects/inventory-page")

const loginPage = new LoginPage()
const inventoryPage = new InventoryPage()

Given("I visit a login page", async function () {
  await loginPage.visit("")
})

Then("I should see Inventory page", async function () {
  await inventoryPage.assertInventoryPageIsOpen()
})

When(
  /^I fill the login form with "([^"]*)" and "([^"]*)"$/,
  async function (username, password) {
    await loginPage.submitLoginFormWithParameters(username, password)
  }
)

Then(/^I should see error: "([^"]*)"$/, async function (errorText) {
  await loginPage.assertLoginError(errorText)
})

Then("I should close error message", async function () {
  await loginPage.closeErrorMessage()
})
