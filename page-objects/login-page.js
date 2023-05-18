const BasePage = require("../page-objects/base-page")

// class LoginPage {
class LoginPage extends BasePage {
  async submitLoginFormWithParameters(username, password) {
    await page.fill("#user-name", username)
    await page.fill("#password", password)
    await page.click("#login-button")
  }
  // change from chai to playwright/test
  async assertLoginError(errorText) {
    const errorLocator = await page.locator("div.error h3").textContent()
    await expect(errorLocator).to.have.string(errorText)
  }

  async closeErrorMessage() {
    const closeErrorButton = await page.locator("div.error h3 button")
    await closeErrorButton.click()
  }
  async assertLoginPageIsOpen() {
    await expect(page.locator(".login_logo")).toContainText("Swag Labs")
    await expect(page.locator("#login_button_container")).toBeVisible()
  }
}

module.exports = { LoginPage }
