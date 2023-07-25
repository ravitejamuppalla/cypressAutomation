import "@4tw/cypress-drag-drop";

describe("Mouse Event Handling the events ", () => {
  it.skip("Simple Mouse Move", () => {
    cy.visit("https://demo.opencart.com/");
    cy.get("[class='nav-link dropdown-toggle']")
      .first()
      .trigger("mouseover")
      .click();
    cy.xpath("//a[@class='nav-link' and contains(.,'Mac')]").first().click();
    cy.get("[id='content']>h2").contains("Mac");
  });
  it.skip("Approch 1 Right Click with Mouse move ", () => {
    cy.visit("https://demo.guru99.com/test/simple_context_menu.html");
    cy.get("[class='context-menu-one btn btn-neutral']").trigger("contextmenu");
    cy.get(
      "[class='context-menu-item context-menu-icon context-menu-icon-cut']"
    ).should("be.visible");
    cy.get(
      "[class='context-menu-item context-menu-icon context-menu-icon-copy']"
    ).should("be.visible");
    cy.get(
      "[class='context-menu-item context-menu-icon context-menu-icon-paste']"
    ).should("be.visible");
    cy.get(
      "[class='context-menu-item context-menu-icon context-menu-icon-delete']"
    ).should("be.visible");
  });
  it.skip("Approch 2 Right Click with Mouse move ", () => {
    cy.visit("https://demo.guru99.com/test/simple_context_menu.html");
    cy.get("[class='context-menu-one btn btn-neutral']").rightclick();
    cy.get(
      "[class='context-menu-item context-menu-icon context-menu-icon-cut']"
    ).should("be.visible");
    cy.get(
      "[class='context-menu-item context-menu-icon context-menu-icon-copy']"
    ).should("be.visible");
    cy.get(
      "[class='context-menu-item context-menu-icon context-menu-icon-paste']"
    ).should("be.visible");
    cy.get(
      "[class='context-menu-item context-menu-icon context-menu-icon-delete']"
    ).should("be.visible");
  });
  it.skip("Approch 1 Double Click with Mouse move ", () => {
    cy.visit("https://demo.guru99.com/test/simple_context_menu.html");
    cy.get("[ondblclick='myFunction()']").trigger("dblclick");
    cy.on("window:alert", (e) => {
      expect(e).to.equal("You double clicked me.. Thank You..");
    });
  });
  it.skip("Approch 2 Double Click with Mouse move ", () => {
    cy.visit("https://demo.guru99.com/test/simple_context_menu.html");
    cy.get("[ondblclick='myFunction()']").dblclick();
    cy.on("window:alert", (e) => {
      expect(e).to.equal("You double clicked me.. Thank You..");
    });
  });
  it.skip("Drag And Drop Value ", () => {
    cy.visit(
      "http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html"
    );
    cy.get("#box3").drag("#box106", { force: true });
    cy.wait(1000);
    // cy.xpath("//div[@id='box106']/div").should("be.visible");
  });
  it("Scroll To view", () => {
    cy.visit(
      "https://www.worldometers.info/geography/how-many-countries-are-there-in-the-world/"
    );
    cy.get("[href='/world-population/iceland-population/']").scrollIntoView({
      duration: 2000,
    });
    cy.get("[href='/world-population/iceland-population/']").should(
      "be.visible"
    );

    // cy.xpath("//div[@id='box106']/div").should("be.visible");
  });
});
