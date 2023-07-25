describe("Handling the tabs in parent and child", () => {
  it("Approch 1 Handleing the child tab by removing the target element from that", () => {
    cy.visit("https://the-internet.herokuapp.com/windows");
    cy.get(".example a").invoke("removeAttr", "target").click();
    cy.url().should("equal", "https://the-internet.herokuapp.com/windows/new");
    cy.wait(5000);
    cy.go("back");
  });

  it("Approch 2 Extracting the href element from the attrubuite", () => {
    cy.visit("https://the-internet.herokuapp.com/windows");
    cy.get(".example a").then((a) => {
      let href = a.prop("href");
      cy.visit(href);
    });
    cy.url().should("equal", "https://the-internet.herokuapp.com/windows/new");
    cy.wait(5000);
    cy.go("back");
  });
});

//In Second approch it will not work if we are moving to different main server
//but it will work if we add the cypress.json file and add the security something object as false
