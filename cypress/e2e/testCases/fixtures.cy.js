import promisify from "cypress-promise";
describe("Fixtures Values to get the data ", async () => {
  it("login to organge HRM by using fixtures ", async () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    let data = await promisify(cy.fixture("orangehrm1.json"));

    cy.get("[name='username']").type(await data.username);
    cy.get("[name='password']").type(await data.password);
    cy.get("[type='submit']").click();
    cy.get(".oxd-topbar-header-breadcrumb").contains(
      await data.dashboardHeading
    );
  });
});
