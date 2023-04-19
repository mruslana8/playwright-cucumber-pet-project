const BasePage = require("../base-page")

class CartComponent extends BasePage {
  async addProductToCart() {
    await page.locator("data-test=add-to-cart-sauce-labs-backpack").click()
  }

  async assertProductInCart() {
    let productsInCartTxt = await page
      .locator("span.shopping_cart_badge")
      .textContent()
    expect(productsInCartTxt).toEqual("1")
  }

  async deleteProductFromCart() {
    let removeFromCartButton = page.locator(
      "data-test=remove-sauce-labs-backpack"
    ).first()
    await removeFromCartButton.click()
  }

  // мб добавить проверку что кнопка поменялась
  async assertCartIsEmpty() {
    await expect(page.locator("span.shopping_cart_badge")).toBeHidden()
  }
}

module.exports = { CartComponent }
