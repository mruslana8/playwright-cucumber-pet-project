const { expect } = require("@playwright/test")
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

  chooseSorting = (sortBy, typeOfSort) => {
    switch (true) {
      case sortBy == "name" && typeOfSort == "ascending":
        return "az"
      case sortBy == "name" && typeOfSort == "descending":
        return "za"
      case sortBy == "price" && typeOfSort == "ascending":
        return "lohi"
      case sortBy == "price" && typeOfSort == "descending":
        return "hilo"
    }
  }

  sortExpectedProductsList(productsList, typeOfSort) {
    let expectedProductsList = [...productsList]
    expectedProductsList.sort()
    if (typeOfSort == "ascending") {
      return expectedProductsList.sort()
      console.log("ascending")
    } else if (typeOfSort == "descending") {
      console.log("descending")
      return expectedProductsList.sort().reverse()
    }
  }

  async assertSortingIsCorrect(sortBy, typeOfSort) {
    let resultedProductsList = await this.createProductsList(sortBy)
    let expectedProductsList = this.sortExpectedProductsList(
      resultedProductsList,
      typeOfSort
    )
    console.log("RES ", resultedProductsList)
    console.log("EXP", expectedProductsList)
    expect(resultedProductsList).toMatchObject(expectedProductsList)
  }

  async createProductsList(sortBy) {
    let list = []
    for (const item of await page.locator(".inventory_item_" + sortBy).all())
      list.push(await item.textContent())

    return list
  }

  async sort(sortBy, typeOfSort) {
    await page.selectOption(
      "data-test=product_sort_container",
      this.chooseSorting(sortBy, typeOfSort)
    )
  }
}

module.exports = { InventoryPage }
