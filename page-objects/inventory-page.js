const BasePage = require("../page-objects/base-page")

class InventoryPage extends BasePage {
  async assertInventoryPageIsOpen() {
    await expect(page.locator("div.inventory_list")).toBeVisible()
  }

  async openFirstProductPageByClickingOnName() {
    await page.locator("div.inventory_item_name").first().click()
  }

  async openFirstProductPageByClickingOnPhoto() {
    await page.locator("div.inventory_item_img").first().click()
  }
}

module.exports = { InventoryPage }

/*
class InventoryPage {
  constructor(page) {
    // super(page)
    this.page = page
    this.productsInCart = this.page.locator("span.shopping_cart_badge")
    this.inventoryList = this.page.locator(".inventory_list")
    this.addToCartButton = this.page.locator(
      "data-test=add-to-cart-sauce-labs-backpack"
    )
    this.removeFromCartButton = this.page.locator(
      "data-test=remove-sauce-labs-backpack"
    )
  }

  async assertUserIsLoggedIn() {
    await this.inventoryList.waitFor()
  }

  async addProductToCart() {
    await this.addToCartButton.click()
  }
  async assertProductInCart() {
    let productsInCartTxt = await this.productsInCart.textContent()
    await expect(productsInCartTxt).to.equal("1")
  }

  async deleteProductFromCart() {
    if (this.removeFromCartButton.isVisible())
      await this.removeFromCartButton.click()
  }

  async assertCartIsEmpty() {
    await expect(this.productsInCart).not.toBeVisible()
  }
}

module.exports = { InventoryPage }

*/
