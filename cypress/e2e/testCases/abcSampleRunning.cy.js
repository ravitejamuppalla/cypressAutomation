describe("Running different Secnariors Testcases", () => {
  it("Test case 1 for children ", () => {
    cy.visit("https://itera-qa.azurewebsites.net/home/automation");
    cy.get("[class='card-body']").eq(0).children();
    cy.get("[class='card-body']").eq(1).children("[class='form-check']");
  });
  it("Test case 2 For closet ", () => {
    cy.visit("https://itera-qa.azurewebsites.net/home/automation");
    cy.get("[class='card-body']").eq(0).closest(".form-check");
  });

  it("Tets case 3 Contains Fucntionlity", () => {
    cy.visit("https://itera-qa.azurewebsites.net/home/automation");
    cy.contains("Monday").should("be.visible");
  });

  it("Test case 4 document ", () => {
    // cy.visit("https://itera-qa.azurewebsites.net/home/automation");
    // cy.contains("Monday").should("be.visible");
    // cy.get("[class='card-body']")
    //   .eq(1)
    //   .filter(':contains("Monday")')
    //   .should("have.length", 1);
    // cy.contains("CheckBox & Radio Button practice")
    //   .parent("[class='card border-success mb-3']")
    //   .children()
    //   .find("div")
    //   .first()
    //   .click();
    // console.log(cy.hash());
    // let onject = {
    //   input1: "Ravi",
    //   fucntion1: function (inputValues1, inputValues2) {
    //     let value = inputValues1 + inputValues2;
    //     console.log("THe Input Values " + value);
    //     return value;
    //   },
    // };
    // cy.wrap(onject).invoke("fucntion1", 2, 3).should("have.eq", 5);
    // cy.wrap(onject).its("input1");
    // cy.visit("https://itera-qa.azurewebsites.net/home/automation");
    // cy.contains("Monday").invoke("text").should("have.contains", "Monday");
    // cy.get("[id='monday']").invoke("attr", "id").should("have.eq", "monday");
    // cy.get("[id='monday']").its("length");
    // cy.location().then((loc) => {
    //   console.log(loc);
    // });
    // cy.get("[id='monday']").parents("[class='form-check']").next();
    // cy.get("[id='myDIV']")
    //   .should("be.hidden")
    //   .invoke("show")
    //   .should("be.visible");
    // cy.document((doc) => {
    //   console.log(doc);
    // });
    // var test = "Ravi";
    // var sample = function (params) {
    //   return 2 + 9;
    // };
    // sample();
    // // cy.window().its("test");
    // cy.window().then((win) => {
    //   console.log(win);
    // });

    var object1 = {
      name: "Ravi",
      id: 123,
      skills: ["javascript", "Automation"],
      knownPersons: [
        {
          name: "Teja",
          id: 556,
        },
        {
          name: "muppalla",
          id: 764,
        },
      ],
      falsyValue: false,
      truthyValue: true,
      nullValue: null,
      undefinedValue: undefined,
    };

    var object2 = {
      name: "Ravi",
      age: 123,
      fucntion1: function () {
        return 100;
      },
    };

    var object3 = {
      name: "Ravi",
      age: 123,
    };

    cy.wrap(object3).should("deep.equal", {
      name: "Ravi",
      age: 123,
    });
    cy.wrap(object1).should("have.nested.property", "skills");
    cy.wrap(object1.skills).should("have.ordered.members", [
      "javascript",
      "Automation",
    ]);
    cy.wrap(object1).should("have.any.keys", "skills");
    cy.wrap(object3).should("have.all.keys", "name", "age");
    cy.wrap(object1).should("have.a", "Object");
    cy.wrap(object1.skills).should("include", "Automation");
    cy.wrap(object1.skills).should("be.ok");
    cy.wrap(object1.falsyValue).should("not.be.ok");
    cy.wrap(object1.truthyValue).should("be.ok");
    cy.wrap(object1.truthyValue).should("be.true");
    cy.wrap(object1.falsyValue).should("be.false");
    cy.wrap(object1.nullValue).should("be.null");
    cy.wrap(object1.undefinedValue).should("be.undefined");
    cy.wrap(object1.skills).should("exist");
    cy.wrap(object1.skills).should("not.be.empty");
    cy.wrap(object2.fucntion1()).should("eq", 100);
    cy.wrap(object2.fucntion1()).should("be.greaterThan", 90);
    cy.wrap(object2.fucntion1()).should("be.at.least", 90);
    cy.wrap(object2.fucntion1()).should("be.lessThan", 190);
    cy.wrap(object2.fucntion1()).should("be.within", 90, 190);
    cy.wrap(object1).should("be.instanceOf", Object);
  });

  it("Execete the details", () => {
    // cy.exec("npm run build").then((Value) => {
    //   console.log(Value);
    // });
    cy.exec("npm run build", { failOnNonZeroExit: false, timeout: 30000 })
      .its("stderr")
      .then((Value) => {
        console.log(Value);
      });
  });

  it.only("Clock Fucntion Data", () => {
    console.log(cy.clock());
  });
});
