describe("Creating the custom commands", () => {
  it.skip("creating the custom clicklink ", () => {
    cy.visit("https://demo.nopcommerce.com/");
    cy.clickLink("Apple MacBook Pro 13-inch");
    cy.get("[class='product-name']").contains("Apple MacBook Pro 13-inch");
  });
  it("creating the custom login ", () => {
    cy.loginToNopCommerce("ravi@gmail.com", "Raviteja@1");
    cy.get(".ico-account").should("have.text", "My accountelwieni");
  });
});
