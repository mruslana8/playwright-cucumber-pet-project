class BasePage {
  constructor() {
    this.URL = "https://www.saucedemo.com"
  }
  async visit(path) {
    await page.goto(this.URL + path)

  }
}
module.exports = BasePage 
