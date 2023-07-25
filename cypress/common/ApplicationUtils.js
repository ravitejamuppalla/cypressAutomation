class applicationUtils {
  async click(exception, locator) {
    try {
      cy.get(locator).click({ force: true });
      return true;
    } catch (error) {
      console.log("Failed to Click on ", exception);
      return false;
    }
  }

  async clickByXpath(exception, locator) {
    try {
      console.log(locator);
      cy.xpath(locator).click({ force: true });
      return true;
    } catch (error) {
      console.log("Failed to Click By Xpath", exception);
      return false;
    }
  }

  async sendKeys(exception, locator, textData, clearText) {
    try {
      if (clearText) cy.get(locator).clear();
      await cy.get(locator).type(textData);
      return true;
    } catch (error) {
      console.log("Failed to send keys for " + exception + ": " + error);
      return false;
    }
  }
}

export default new applicationUtils();
