import utility from "../support/utility";
import promisify from "cypress-promise";
import ApplicationUtils from "../common/ApplicationUtils";
import basePage from "./basePage";

class loginApplication {
  get userName() {
    return "[name='username']";
  }
  get password() {
    return "[name='password']";
  }
  get loginButton() {
    return "[type='submit']";
  }

  async loginApplications() {
    try {
      const envDetails = await utility.baseURL();
      console.log(envDetails);
      const userDetails = await promisify(cy.fixture("enviroment.json"));
      console.log(userDetails);
      userDetails.forEach(async (details, index, arraylist) => {
        if (envDetails.Env === details.Env) {
          cy.visit(await envDetails.url);
          ApplicationUtils.sendKeys(
            "UserName",
            await this.userName,
            await details.UserName
          );
          ApplicationUtils.sendKeys(
            "Password",
            await this.password,
            await details.Password
          );
          ApplicationUtils.click("Submit Button", this.loginButton);
          cy.xpath(basePage.dashboardHeading).contains("Dashboard");
          return true;
        }
      });
    } catch (error) {
      cy.log(error);
      return false;
    }
  }
}

export default new loginApplication();
