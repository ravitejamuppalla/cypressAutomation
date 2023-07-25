/// <reference types="Cypress"></reference>;
import promisify from "cypress-promise";
describe("Running the get call", () => {
  it("Making the get call Normal Get Call", () => {
    cy.request({
      method: "GET",
      url: "https://gorest.co.in/public/v2/users",
      headers: {
        Authorization:
          "Bearer 23a5d7b420573dd26e460d7154cb72bc6b2b537f821cb717bff4eed6183d2dcc",
      },
    }).then((respone) => {
      console.log(respone.status);
      expect(respone.status).to.be.equal(200);
    });
  });

  it("Making the get call with parameter", () => {
    cy.request({
      method: "GET",
      url: "https://gorest.co.in/public/v2/users/3614610",
      headers: {
        Authorization:
          "Bearer 23a5d7b420573dd26e460d7154cb72bc6b2b537f821cb717bff4eed6183d2dcc",
      },
    }).then((ResponseData) => {
      expect(ResponseData.body.id).to.be.equal(3614610);
      expect(ResponseData.body.email).to.eq("pothuvaal_mohana@feeney.test");
      expect(ResponseData.body.gender).to.eq("male");
      expect(ResponseData.body.name).to.eq("Mohana Pothuvaal");
      expect(ResponseData.body.status).to.eq("inactive");
    });
  });

  it("Sending the post call method", () => {
    cy.request({
      method: "POST",
      url: "https://gorest.co.in/public/v2/users",
      headers: {
        Authorization:
          "Bearer 23a5d7b420573dd26e460d7154cb72bc6b2b537f821cb717bff4eed6183d2dcc",
      },
      body: {
        name: "Ravi Teja",
        email: "agarwal_bala@gorcny.example",
        gender: "male",
        status: "active",
      },
    }).then((responseBody) => {
      console.log(responseBody);
    });
  });
});
