import loginApplication from "../../pageObject/loginApplication";
import basePage from "../../pageObject/basePage";
import admin from "../../pageObject/admin";
describe("login to Orange HRM Login", () => {
  before(() => {
    loginApplication.loginApplications();
  });

  it("login to HRM Application Navigate to Admin and add the Users", () => {
    basePage.isNaviagtion("Admin");
    admin.addEmployee("Ravi ", "Teja", "Muppalla");
  });
});
