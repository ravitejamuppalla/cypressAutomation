describe("Xpath Locator running one test case", () => {
  it("taking the count of the women details", () => {
    cy.visit(
      "http://www.automationpractice.pl/index.php?id_category=3&controller=category"
    );
    cy.xpath(
      "//ul[@class='product_list grid row']//*[contains(@class,'ajax_block_product')]"
    ).should("have.length", 7);
  });
});
1;
