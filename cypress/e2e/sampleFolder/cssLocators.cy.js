describe("Checking the different types of locator that we can write ", () => {
  before(() => {
    cy.visit("http://www.automationpractice.pl/index.php");
  });

  it("Searching for the T-Shirts ", () => {
    cy.get("#search_query_top").type("T-Shirts");
    cy.get("[name='submit_search']").click();
    cy.get("h1[class='page-heading  product-listin']").contains("T-Shirts");
  });
});
