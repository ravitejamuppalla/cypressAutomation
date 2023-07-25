describe("Checking the different types of locator that we can write ", () => {
  before(() => {
    cy.visit("http://www.automationpractice.pl/index.php");
  });

  it("Searching for the T-Shirts ", () => {
    cy.get("#search_query_top").type("{shift}T-Shirts", { release: true });
    cy.get("[name='submit_search']").click();
    cy.pause();
    cy.get("h1[class='page-heading  product-listing']").contains("T-Shirts");
  });
});
