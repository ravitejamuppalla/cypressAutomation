export default new (class utility {
  baseURL() {
    try {
      let envCommand = Cypress.env("ENV");
      if (envCommand == undefined) envCommand = "production";
      if (envCommand == "production")
        return {
          url: "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
          Env: "production",
        };
      else if (envCommand == "staging")
        return {
          url: "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
          Env: "staging",
        };
      else if (envi == "qa")
        return {
          url: "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
          Env: "qa",
        };
      else
        return {
          url: "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
          Env: "sample",
        };
    } catch (error) {
      cy.log("Failed to get the Enviroment Details " + error);
    }
  }
})();
