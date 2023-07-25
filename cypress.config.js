const { defineConfig } = require("cypress");
module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  // env: {
  //   foo: "bar",
  //   baz: "quux",
  // },
  e2e: {
    execTimeout: 10000,
    video: false,

    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      // on("task", {
      //   log(message) {
      //     console.log(message);
      //     return null;
      //   },

      //   hello({ greetings, name }) {
      //     console.log(greetings, name + "THe input fucntion value is ");
      //     return "SucessFully initialized";
      //   },
      // });

      on("before:browser:launch", (browser, launchOptions) => {
        console.log(launchOptions);
      });
    },
  },
});
