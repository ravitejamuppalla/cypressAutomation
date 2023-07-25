import ApplicationUtils from "../common/ApplicationUtils";

class basePage {
  sideNavbar(input) {
    return (
      '//*[@class="oxd-main-menu-item-wrapper"]//*[text()="' +
      input +
      '"]//parent::a'
    );
  }
  get dashboardHeading() {
    return "//*[contains(@class,'oxd-topbar-header-breadcrumb-module')]";
  }

  isNaviagtion(name) {
    if (name.includes("Admin")) {
      ApplicationUtils.clickByXpath("Admin", this.sideNavbar("Admin"));
      if (!this.ispageNaviagtionSucessfull("Admin")) return false;
    } else if (name.includes("PIM")) {
      ApplicationUtils.clickByXpath("PIM", this.sideNavbar("PIM"));
      if (!this.ispageNaviagtionSucessfull("PIM")) return false;
    } else if (name.includes("Leave")) {
      ApplicationUtils.clickByXpath("Leave", this.sideNavbar("Leave"));
      if (!this.ispageNaviagtionSucessfull("Leave")) return false;
    } else if (name.includes("Time")) {
      ApplicationUtils.clickByXpath("Time", this.sideNavbar("Time"));
      if (!this.ispageNaviagtionSucessfull("Time")) return false;
    } else if (name.includes("Recruitment")) {
      ApplicationUtils.clickByXpath(
        "Recruitment",
        this.sideNavbar("Recruitment")
      );
      if (!this.ispageNaviagtionSucessfull("Recruitment")) return false;
    }
  }

  ispageNaviagtionSucessfull(name) {
    try {
      cy.xpath(this.dashboardHeading).should("have.contain", name);
      return true;
    } catch (error) {
      console.log("Failed to validate the Dashboard Headers request: " + error);
      return false;
    }
  }
}
export default new basePage();
