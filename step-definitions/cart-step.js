const { Given, When, Then } = require("@cucumber/cucumber")
const { ProductPage } = require("../page-objects/product-page")
const { LoginPage } = require("../page-objects/login-page")
const { InventoryPage } = require("../page-objects/inventory-page")
const { CartComponent } = require("../page-objects/components/cart-component")

const inventoryPage = new InventoryPage()
const cartComponent = new CartComponent()

  When("I add a product to a cart", async function () {
    await cartComponent.addProductToCart()
  })

  Then("I see a product in a cart", async function () {
    await cartComponent.assertProductInCart()
  })

  When("I delete a product from a cart", async function () {
    await cartComponent.deleteProductFromCart()
  })
  
  Then("A cart is empty", async function () {
    await cartComponent.assertCartIsEmpty()
  })

  Given("I open Product Page", async function(){
    await inventoryPage.openFirstProductPageByClickingOnName()
  })

  Given("I open Inventory page", async function(){
    inventoryPage.visit("/inventory.html")
  })




