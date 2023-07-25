describe("Handling the I frames using plugin to cypress-Iframe", () => {
  //   it.skip("Running single custom Iframe", () => {
  //     cy.visit("https://the-internet.herokuapp.com/iframe");
  //     cy.frameLoaded("[id='mce_0_ifr']");
  //     cy.iframe("[id='mce_0_ifr']")
  //       .clear()
  //       .type("Welcome Ravi{ctrl+a}{ctrl+b}")
  //       .click()
  //       .focus();
  //   });
  //   beforeEach(() => {
  //     cy.fixture("enviroment.json").as("admins");
  //   });
  //   it("Fixtures as alias ", function () {
  //     // cy.fixture("enviroment.json").as("admins");
  //     cy.get("@admins").then((Values) => {
  //       console.log(Values);
  //     });
  //     console.log(`The Fxtures Data ${this.admins.length} sample`);
  //     console.log(`There are ${this.admins.length} admins.`);
  //   });

  //   it("Invoke fucntion simple function", () => {
  //     const function1 = function (params) {
  //       return "bat";
  //     };

  //     cy.wrap({ foo: function1 })
  //       .invoke("foo", { log: false })
  //       .then((value) => {
  //         console.log(value);
  //       });
  //   });
  //   it("Invoke fucntion Arugument", () => {
  //     const function1 = function (a, b, c) {
  //       return a + b + c;
  //     };
  //     cy.wrap({ foo: function1 })
  //       .invoke("foo", 2, 3, 4)
  //       .then((value) => {
  //         console.log(value);
  //       });
  //   });

  //   it("the remove the target arribute on the window", () => {
  //     // cy.get("#elemnt").invoke("removeattr", "target");

  //     // cy.get("img").invoke("attr", "src").should("include", "Mylogo");

  //     // const reverse = (i) => Cypress._.reverse(i);
  //     // const double = (i) => i * i;
  //     // cy.wrap([reverse, double]).invoke(1, 4).should("eq", 16);

  //     // <div id="Input-Text">The Code example Data</div>;

  //     // cy.contains("The Code example Data")
  //     //   .invoke("attr", "id")
  //     //   .should("equal", "Input-Text");

  //     const message = "Input Value";
  //     const english = {
  //       greeting() {
  //         return message;
  //       },
  //       foo: "bar",
  //       firstName: "Ravi Teja",
  //     };

  //     console.log(english.greeting());
  //     console.log(english.foo);
  //   });

  //   it.only("wrap fucntion", () => {
  //     const fun = function () {
  //       return "bar";
  //     };

  //     cy.wrap({ foo: fun }).invoke("foo").should("eq", "bar");
  //     cy.get("form").then();
  //   });

  //   it("Running the Task method", () => {
  //     cy.task("log", "Running the final Test case");
  //     cy.task("hello", { greetings: "FUntion value", name: "Final Value" });
  //   });

  it.skip("sample debugger mode to test how it is working", () => {
    cy.visit("https://rahulshettyacademy.com/angularAppdemo/");
    cy.intercept(
      "GET",
      "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty"
    ).as("openCart");

    cy.get("[data-target='#exampleModal']").click();
    cy.wait("@openCart").then((Data) => {
      if (
        Data.request.url ==
        "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty"
      )
        console.log(Data);
    });
  });

  it.skip("sample debugger mode to test how it is working", () => {
    cy.visit("https://rahulshettyacademy.com/angularAppdemo/");
    cy.intercept(
      {
        method: "GET",
        url: "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty",
      },
      [
        {
          book_name: "RestAssured with Java",
          isbn: "RSU",
          aisle: "2301",
        },
      ]
    ).as("NewDataValue");
    cy.get("[data-target='#exampleModal']").click();

    // cy.wait("@newData").then((Data) => {
    //   console.log(Data);
    // });
    cy.wait("@NewDataValue").then((newData) => {
      console.log(newData);
    });
  });

  it("extracting the text ", () => {
    cy.visit("https://the-internet.herokuapp.com/login");
    // cy.get("*[class='heading']").then((Heading) => {
    //   console.log(Heading);
    // });
    cy.get("*[id='username']").type("Raviteja Muppalla");
    cy.get("*[id='username']").invoke("val").as("InputValue");

    cy.get("@InputValue").then((Values) => {
      console.log(Values);
    });
    console.log("THe final input value is " + cy.get("@InputValue"));
  });
  it.only("extracting the text ", () => {
    cy.visit("https://the-internet.herokuapp.com/");
    // cy.get("*[class='heading']").then(($Heading) => {
    //   const heading = $Heading.text();
    //   console.log($Heading.text().innerText());
    //   console.log(heading);
    // });

    cy.get("*[class='heading']").its("val").as("InputValue");
    cy.get("@InputValue").then((Values) => {
      console.log(Values);
    });
    console.log("THe final input value is " + cy.get("@InputValue"));
  });
});
