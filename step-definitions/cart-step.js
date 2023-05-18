const { Given, When, Then } = require("@cucumber/cucumber")
const { InventoryPage } = require("../page-objects/inventory-page")
const { CartComponent } = require("../page-objects/components/cart-component")
const { NavbarComponent } = require("../page-objects/components/navbar-component")

const inventoryPage = new InventoryPage()
const cartComponent = new CartComponent()
const navbarComponent = new NavbarComponent()

When("I add a product to a cart", async function () {
  await cartComponent.addProductToCart()
})

Then("I see a product in a cart", async function () {
  await cartComponent.assertProductInCart()
})

When("I delete a product from a cart", async function () {
  await cartComponent.deleteProductFromCart()
})

Then("Cart is empty", async function () {
  await cartComponent.assertCartIsEmpty()
})

Given("I open Product Page", async function () {
  await inventoryPage.openFirstProductPageByClickingOnName()
})

Given("I open Inventory page", async function () {
  await inventoryPage.visit("/inventory.html")
})

When("I reset App state", async function(){
  await navbarComponent.openNavbar()
  await navbarComponent.clickOnTab("Reset App State")
})

Then("Add to Cart Button is available", async function(){
  await cartComponent.addToCartButtonIsVisible()
})

Then("Remove From Cart Button is available", async function(){
  await cartComponent.removeFromCartButtonIsVisible()
})

