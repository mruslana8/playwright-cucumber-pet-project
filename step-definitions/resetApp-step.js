const { When, Then } = require("@cucumber/cucumber")
const { NavbarComponent } = require("../page-objects/components/navbar-component")

const navbarComponent = new NavbarComponent()

When("I click on ResetApp Button", async function () {
    await navbarComponent.clickOnTab("Reset App State")
})