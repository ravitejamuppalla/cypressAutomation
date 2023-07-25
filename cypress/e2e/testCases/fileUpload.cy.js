import "cypress-file-upload";

describe("File Uploading the different options", () => {
  it.skip("Uploading the simple file upload ", () => {
    cy.visit("https://the-internet.herokuapp.com/upload");
    cy.get("[id='file-upload']").attachFile("test1.pdf");
    cy.get("#file-submit").click();
    cy.get("#uploaded-files").should("have.contain", "test1.pdf");
  });
  it.skip("Uploading the simple file upload by rename ", () => {
    cy.visit("https://the-internet.herokuapp.com/upload");
    cy.get("[id='file-upload']").attachFile({
      filePath: "test1.pdf",
      fileName: "SampleContent.pdf",
    });
    cy.get("#file-submit").click();
    cy.get("#uploaded-files").should("have.contain", "SampleContent.pdf");
  });

  it.skip("Uploading By drag and drop of files upload ", () => {
    cy.visit("https://the-internet.herokuapp.com/upload");
    cy.get("#drag-drop-upload").attachFile("test1.pdf", {
      subjectType: "drag-n-drop",
    });
    cy.get("[class='dz-filename']").should("have.contain", "test1.pdf");
  });
  it.skip("uploading the mutiple files", () => {
    cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");
    cy.get("#filesToUpload").attachFile(["test1.pdf", "test2.pdf"]);
    cy.get("#fileList").should("have.length", 1);
    cy.get("#fileList")
      .should("have.contain", "test1.pdf")
      .should("have.contain", "test2.pdf");
  });

  it("shadow dom", () => {
    cy.visit(
      "https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm"
    );
    cy.get(".smart-browse-input", { includeShadowDom: true }).attachFile(
      "test1.pdf"
    );
    cy.get(".smart-item-name", { includeShadowDom: true }).should(
      "have.contain",
      "test1.pdf"
    );
  });
});
