describe("Executing the Test cases for View ports", () => {
  before(() => {
    console.log("Started Running Test cases for View ports");
  });

  beforeEach(() => {
    cy.visit("https://www.google.com/");
  });
  after(() => {
    console.log("Closing the Test cases for View ports");
  });

  it("Running  in view port in iphone-7", () => {
    cy.viewport("iphone-7");
    cy.screenshot();
    cy.wait(200);
  });
  it("Running  in view port in iphone-8", () => {
    cy.viewport("iphone-8");
    cy.screenshot();
    cy.wait(200);
  });
  it("Running  in view port in iphone-x", () => {
    cy.viewport("iphone-x");
    cy.screenshot();
    cy.wait(200);
  });
  it("Running  in view port in iphone-xr", () => {
    cy.viewport("iphone-xr");
    cy.screenshot();
    cy.wait(200);
  });
  it("Running  in view port in iphone-se2", () => {
    cy.viewport("iphone-se2");
    cy.screenshot();
    cy.wait(200);
  });
  it("Running  in view port in macbook-11", () => {
    cy.viewport("macbook-11");
    cy.screenshot();
    cy.wait(200);
  });
  it("Running  in view port in macbook-13", () => {
    cy.viewport("macbook-13");
    cy.screenshot();
    cy.wait(200);
  });

  it("Running  in view port in widith of 1280, 720", () => {
    cy.viewport(1280, 720);
    cy.screenshot();
    cy.wait(200);
  });
});
