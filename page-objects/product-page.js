const BasePage = require("../page-objects/base-page")

class ProductPage extends BasePage {
  async assertIsOpen() {
    await expect(page.locator(".inventory_details_name")).toBeVisible()
    await expect(page.locator(".inventory_details_img_container img")).toBeVisible()
    await expect(page.locator(".inventory_details_desc")).toBeVisible()
    await expect(page.locator(".inventory_item_container button")).toBeVisible()
  }
  async clickOnBackToProductsButton() {
    await page.click("data-test=back-to-products")
  }
}

module.exports = { ProductPage }
