const { When, Then } = require("@cucumber/cucumber")
const { LoginPage } = require("../page-objects/login-page")
const { NavbarComponent } = require("../page-objects/components/navbar-component")

const loginPage = new LoginPage()
const navbarComponent = new NavbarComponent()

When("I open navbar", async function () {
    await navbarComponent.openNavbar()
})

When("I click on Logout Button", async function () {
    await navbarComponent.clickOnTab("Logout")
})

Then("I am logged out", async function () {
    await loginPage.assertLoginPageIsOpen()
})