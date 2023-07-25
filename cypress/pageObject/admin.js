import ApplicationUtils from "../common/ApplicationUtils";

const { default: basepage } = require("./basepage");

class admin {
  get addEmpButton() {
    return "[class='oxd-button oxd-button--medium oxd-button--secondary']";
  }
  get firstName() {
    return "[name='firstName']";
  }
  get middleName() {
    return "[name='middleName']";
  }

  get lastName() {
    return "[name='lastName']";
  }
  get saveButton() {
    return "[class='oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space']";
  }

  addEmployee(firstName, lastName, middleName) {
    ApplicationUtils.click("Add button", this.addEmpButton);
    ApplicationUtils.sendKeys("First Name", this.firstName, firstName);
    ApplicationUtils.sendKeys("Last Name", this.lastName, lastName);
    ApplicationUtils.sendKeys("Middle Name", this.middleName, middleName);
    ApplicationUtils.click("Add Button", this.saveButton);
  }
}

export default new admin();
