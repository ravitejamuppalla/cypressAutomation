describe("Browser Level commands ", () => {
  //   it("clear all cookies", () => {
  //     cy.clearAllCookies();
  //   });
  //   it("Clear all local storage", () => {
  //     cy.clearAllLocalStorage();
  //   });
  //   it("Clear all session storage", () => {
  //     cy.clearAllSessionStorage();
  //   });
  //   it("clear cookies", () => {
  //     cy.clearCookie("AuthID");
  //   });

  //   it("Clear all the cookies ", () => {
  //     cy.clearAllCookies();
  //     //ex:
  //     cy.visit("");
  //     cy.clearAllCookies();
  //     cy.get("username").type("Raviteja");
  //   });
  //   it("clear the local storage of specfied item", () => {
  //     cy.clearLocalStorage("AppItem");
  //   });
  //   it("each fucntion ", () => {
  //     cy.get("li").each((values) => {
  //       console.log(values);
  //     });
  //   });

  //   it("end the command to stop the command chaining", () => {
  //     cy.get("").focus().type("Raviteja").clear().blur().end();
  //     //simply it will return the null value to the next element
  //   });

  //   it("Exec run few of the command on the page and check the execution", () => {
  //     cy.exec("npm run biuld", {
  //       failOnNonZeroExit: false,
  //       timeout: 2000,
  //       log: false,
  //     }).then((result) => {
  //       console.log(result);
  //     });
  //   });

  //   it("Fixtures running the few of the commands", () => {
  //     cy.fixture("enviroment.json").then((value) => {
  //       console.log(value);
  //     });
  //   });
  //   it("get all cookies", () => {
  //     cy.getAllCookies();
  //   });
  //   it("Get all local storage ", () => {
  //     cy.getAllLocalStorage();
  //   });
  //   it("get all session storage", () => {
  //     cy.getAllSessionStorage();
  //   });
  //   it("get cookie", () => {
  //     cy.getCookie("AuthID");
  //   });

  //   it("Go fucntion which is used to go forward and backward", () => {
  //     cy.go("forward");
  //     cy.go("back");
  //     cy.go(1);
  //     cy.go(-1);
  //   });
  //   it("origin Function which we used when there is change in the domin name if you want to work on that like a login domain then we need to use the origin", () => {
  //     cy.visit("www.google.com");
  //     cy.get("loginapp").click();
  //     cy.origin(
  //       "www.newgoggle.com",
  //       { args: { userName: "UserName", password: "Password" } },
  //       ({ userName, password }) => {
  //         cy.get("input#username").type(userName);
  //         cy.get("input#password").type(password);
  //         cy.contains("button", "Login").click();
  //       }
  //     );
  //   });

  //   it("pause the execution by using Pause command", () => {
  //     cy.visit("/");
  //     cy.pause();
  //   });

  //   it("read file the ", () => {
  //     cy.readFile("package.json", { log: false }).then((value) => {
  //       console.log(value);
  //     });
  //   });
  //   it("relaod the fucntion", () => {
  //     cy.reload();
  //   });
  //   it("sample debugger mode to test how it is working", () => {
  //     cy.visit(
  //       "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  //     );
  //     cy.get("[name='username']").type("Admin").debug();
  //     cy.get("[name='password']").type("Admin123");
  //     cy.get("[type='submit']").click();
  //   });

  it("wrap the fucntion", () => {
    let obj = { foo: "bar" };

    cy.wrap(obj).its("foo").should("be.equal", "bar");

    const mypromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Entering message");
      }, 1000);
    });

    cy.wrap(mypromise).should("be.equal", "Entering message");
  });
});
