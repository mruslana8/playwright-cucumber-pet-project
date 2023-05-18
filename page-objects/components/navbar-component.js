class NavbarComponent {
  async clickOnTab(tabName) {
    switch (tabName) {
      case "All Items":
        await page.click("#inventory_sidebar_link")
        break
      case "About":
        await page.click("#about_sidebar_link")
        break
      case "Reset App State":
        await page.click("#reset_sidebar_link")
        break
      case "Logout":
        await page.click("#logout_sidebar_link")
        break
      default:
        throw new Error("This tab does not exist")
    }
  }

  async openNavbar() {
    await page.click("#react-burger-menu-btn")
  }
  async closeNavbar() {
    await page.click("#react-burger-cross-btn")
  }
}

module.exports = { NavbarComponent }
