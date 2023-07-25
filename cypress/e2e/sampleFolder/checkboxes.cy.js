describe("Check box selection ", () => {
  it("Selecting one checkbox Details", () => {
    cy.visit("https://itera-qa.azurewebsites.net/home/automation");

    cy.get("[id='female']").should("be.visible");
    cy.get("[id='male']").should("be.visible");
    cy.get("[id='female']").check().should("be.checked");
    cy.get("[id='male']").check().should("be.checked");
    cy.get("[id='female']").should("not.be.checked");
    cy.get("[id='male']").should("be.checked");
  });
  it("Selecting Mutiple  checkbox Details", () => {
    cy.visit("https://itera-qa.azurewebsites.net/home/automation");

    cy.get("[id='monday']").should("be.visible");
    cy.get("[id='tuesday']").should("be.visible");
    cy.get("[id='wednesday']").should("be.visible");
    cy.get("[id='thursday']").should("be.visible");
    cy.get("[id='friday']").should("be.visible");
    cy.get("[id='saturday']").should("be.visible");
    cy.get("[id='sunday']").should("be.visible");

    cy.get("[id='monday']").check().should("be.checked");
    cy.get("[id='tuesday']").check().should("be.checked");
    cy.get("[id='wednesday']").should("not.be.checked");
    cy.get("[id='thursday']").should("not.be.checked");
    cy.get("[id='friday']").should("not.be.checked");

    cy.xpath("//*[@class='form-check-input' and @type='checkbox']")
      .check()
      .should("be.checked");

    cy.xpath("//*[@class='form-check-input' and @type='checkbox']")
      .uncheck()
      .should("not.be.checked");
    cy.xpath("//*[@class='form-check-input' and @type='checkbox']")
      .first()
      .check()
      .should("be.checked");
    cy.xpath("//*[@class='form-check-input' and @type='checkbox']")
      .last()
      .check()
      .should("be.checked");
  });
});
