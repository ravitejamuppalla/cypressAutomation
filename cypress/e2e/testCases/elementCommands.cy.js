describe("element Level commands ", () => {
  it("click command and different types", () => {
    cy.get("").click();
    cy.get("").click(10, 12);
    cy.get("").click("bottomup");
    cy.get("").click({
      force: true,
      multiple: true,
      altKey: true,
      controlKey: true,
      metaKey: true,
      shiftKey: true,
      timeout: 5000,
      scrollBehavior: "center",
      waitForAnimations: true,
    });
    cy.get("").click("topright", 10, 12, {
      force: true,
      multiple: true,
      altKey: true,
      controlKey: true,
    });
  });

  it("Double Click Function", () => {
    cy.get("").dblclick();
    cy.get("").dblclick(10, 12);
    cy.get("").dblclick("TopBottom");
    cy.get("").dblclick({
      force: true,
      shiftKey: true,
      controlKey: true,
      metaKey: true,
      timeout: 5000,
      scrollBehavior: "center",
      waitForAnimations: true,
      multiple: true,
    });
  });

  it("Right Click Function", () => {
    cy.get("").rightclick();
    cy.get("").rightclick(10, 12);
    cy.get("").rightclick("BottomRight");
    cy.get("").rightclick({
      force: true,
      multiple: true,
      shiftKey: true,
      controlKey: true,
      metaKey: true,
      scrollBehavior: "Center",
      waitForAnimations: true,
      timeout: 5000,
      altKey: true,
    });
  });

  it("Type method", () => {
    cy.get("").type("Raviteja");

    //Select Drop down which has options dropdown menu
    //<div class="sample">
    // <Option value="Apple"></Option>
    // <Option value="Mango"></Option>
    // <Option value="PineApple"></Option>
    // </div>
    cy.get("").type("Apple");

    //Select Tabindex
    // <div id="el" tabindex="1">
    //   f;iwen;ineliwwe
    // </div>;
    cy.get("el").type("dileniewlenw", {
      release: true,
      delay: 5000,
      force: true,
      parseSpecialCharSequences: false,
      timeout: 5000,
      log: false,
      scrollBehavior: "Top",
    });

    // <input type="date"></input>;
    // <input type="month"></input>;
    // <input type="time"></input>;
    // <input type="week"></input>;
    //if you have a calendar like abve you can use type method directly on that

    cy.get("").type("09/12/2023");
    cy.get("").type("12/2023");
    cy.get("").type("09:12:2023");

    //keys

    cy.get("").type("{shift+alt+b} hello");
    cy.get("").type("{shift}{alt}hello");
  });

  it("Check methods in the fucntions", () => {
    cy.get("").check();
    cy.get("").check({
      force: true,
      timeout: 5000,
      interval: 1000,
      log: false,
      waitForAnimations: true,
    });
    cy.get("").check(["US", "EU"]);
  });

  it("Uncheck methods in the Function", () => {
    cy.get("").uncheck();
    cy.get("").uncheck(["EU", "US"]);
    cy.get("").uncheck(["RU", "OI"], {
      force: true,
      interval: 1000,
      log: false,
      timeout: 5000,
      waitForAnimations: true,
      scrollBehavior: "Top",
    });
  });

  it("Select Function", () => {
    <Select>
      <Option values="1">1</Option>
      <Option values="2">2</Option>
      <Option values="3">3</Option>
    </Select>;

    cy.get("").select(1); //By index
    cy.get("").select("1"); //By value
    cy.get("").select("2"); //By Text
  });

  it("Clear the input text", () => {
    cy.get("").type("").clear({ force: true });
  });
  it("Trigger the mouse events ", () => {
    cy.get("").trigger("mousemove");
    cy.get("").trigger("mouseup");
    cy.get("").trigger("mousedown");
    cy.get("").trigger("mouseup");
  });

  it("Select file upload the file", () => {
    cy.fixture("enviroment.json", { encoding: null }).as("MyFixtures");
    cy.get("").selectFile("@MyFixtures");

    cy.get("")
      .selectFile([
        { contents: "cypress/fixtures/example.json" },
        { contents: "cypress/fixtures/example.json" },
        {
          contents: "enviroment.json",
          fileName: "sample.png",
          lastModified: new Date().valueOf(),
          mimeType: "text/plain",
        },
      ])
      .then((input) => {
        console.log(input[0]);
        console.log(input[1]);
        console.log(input[2]);
      });
    cy.get("").selectFile("file.json", { action: "drag-drop" });
  });

  it("scroll to view fucntionlity", () => {
    cy.get("").scrollIntoView(); //Scroll to an element to view
    cy.get("").scrollIntoView({
      easing: "linear",
      duration: 2000,
      offset: { top: 150, bottom: 0 },
    });
  });

  it("Scroll to ", () => {
    cy.get("").scrollTo(0, 5000); //Scroll to a specific position.
    cy.get().scrollTo("Top");
  });

  it("Blur the inout tesxt", () => {
    cy.get("").type("InputText").blur();
    cy.get("").type("InputText").blur({ force: true });
  });

  it("focus the input Text", () => {
    cy.get("").focus({ timeout: 4000 }).type("INput Text").blur();
  });

  it("Submit the form", () => {
    cy.get().submit();
  });
});
