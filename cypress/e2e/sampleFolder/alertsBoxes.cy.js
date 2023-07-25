describe("Alert Features functionality", () => {
  it("Java Script First Alert ", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.get("[onclick='jsAlert()']").click();
    cy.on("window:alert", (e) => {
      expect(e).contain("I am a JS Alert");
    });
    cy.get("[id='result']").should(
      "have.text",
      "You successfully clicked an alert"
    );
  });

  it("Java Script Confirm ok Button Alert ", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.get("[onclick='jsConfirm()']").click();
    cy.on("window:confirm", (e) => {
      expect(e).contain("I am a JS Confirm");
    });
    cy.get("[id='result']").should("have.text", "You clicked: Ok");
  });

  it("Java Script Confirm cancel Button Alert ", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.get("[onclick='jsConfirm()']").click();
    cy.on("window:confirm", (e) => {
      expect(e).contain("I am a JS Confirm");
    });
    cy.on("window:confirm", (e) => false);
    cy.get("[id='result']").should("have.text", "You clicked: Cancel");
  });

  it("Java Script Prompt ok Button Alert ", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");

    cy.window().then((win) => {
      cy.stub(win, "prompt").returns("Welcome");
    });
    cy.get("[onclick='jsPrompt()']").click();
    cy.get("[id='result']").should("have.text", "You entered: Welcome");
  });
  it("Java Script Auth  Approch 1 Alert ", () => {
    //Approch 1
    cy.visit("https://the-internet.herokuapp.com/basic_auth", {
      auth: { username: "admin", password: "admin" },
    });
    cy.get("[id='content']").should("have.contain", "Congratulations!");
  });
  it("Java Script Auth Approch 2 Alert ", () => {
    //Approch 1
    cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth");
    cy.get("[id='content']").should("have.contain", "Congratulations!");
  });
});
