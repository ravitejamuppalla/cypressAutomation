// describe("Running ONe Test case", () => {
//   it("Running first Test case", () => {
//     // cy.visit("https://www.springermedizin.de");
//     // cy.get("[class='a-link__text o-main-header-menu-name']").click();
//     // cy.origin("https://signon.springer.com/login", [], () => {
//     //   cy.get("[id='username']").type("RaviTeja");
//     // });
//     // cy.visit("/");
//     // cy.get("[name='usernam']").type("Raviteja");

//     // cy.visit("http://autopract.com/selenium/download.html");
//     // cy.get("[class='mydownload']").click();
//     // cy.downloadFile(
//     //   "http://autopract.com/selenium/image.jpeg?",
//     //   "cypress/downloads",
//     //   "file.jpg"
//     // );

//     cy.task("log", { greeting: "Hello", name: "World" }).then((value) => {
//       cy.log(value);
//     });
//   });
// });

describe("Cypress Api commands", () => {
  it("All Cypress Commands", () => {
    cy.once("uncaught:exception", () => false);
    console.log(Cypress.arch); //Returns CPU Details X64
    console.log(Cypress.config()); //Returns All the configuration Details
    console.log(Cypress.browser); //Returns All the browser Details
    cy.setCookie("foo", "Foo");
    cy.setCookie("bar", "Bar");

    console.log(Cypress.Cookies.debug());
    // cy.clearAllCookies();
    console.log(Cypress.currentRetry);
    console.log(Cypress.currentTest.titlePath);
    console.log(Cypress.dom);
    console.log(Cypress.env());
    console.log(Cypress.isBrowser(["electron", "chrome"]));
    console.log(Cypress.isCy(cy.browser));
    console.log(Cypress.Keyboard.defaults({ keystrokeDelay: 20 }));
    console.log(Cypress.platform);
    console.log(
      Cypress.Screenshot.defaults({
        overwrite: true,
        scale: true,
      })
    );
    console.log(Cypress.session.clearAllSavedSessions()); //Return the clear all saved session
    console.log(Cypress.session.clearCurrentSessionData()); //Return the clear the current Session Data
    console.log(Cypress.session.getCurrentSessionData()); //Return  the current session data
    console.log(Cypress.spec); //Return the sepc file details
    console.log(Cypress.testingType); //Returns the testing type
    console.log(Cypress.version); //Get the Cypress version
  });
});
