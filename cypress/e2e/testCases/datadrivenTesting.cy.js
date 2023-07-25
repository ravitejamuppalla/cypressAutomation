// import promisify from "cypress-promise";
// describe("Fixtures Values to get the data ", async () => {
//   it("login to organge HRM by using fixtures ", async () => {
//     let data = await promisify(cy.fixture("orangehrm2.json"));

//     data.forEach((finalData) => {
//       cy.visit(
//         "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
//       );
//       cy.log(finalData.username);
//       cy.get("[name='username']").type(finalData.username);
//       cy.get("[name='password']").type(finalData.password);
//       cy.get("[type='submit']").click();

//       if (finalData.username == "Admin") {
//         cy.get(".oxd-topbar-header-breadcrumb").contains(
//           finalData.dashboardHeading
//         );
//         cy.get(
//           "[class='oxd-icon bi-caret-down-fill oxd-userdropdown-icon']"
//         ).click();
//         cy.get("[class='oxd-userdropdown-link']").last().click();
//       } else {
//         cy.get(
//           "[class='oxd-text oxd-text--p oxd-alert-content-text']"
//         ).contains("Invalid credentials");
//       }
//     });
//   });
// });
