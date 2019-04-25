var stylelint = require("stylelint");

stylelint.lint({
  code: "a{flex: 1;}",
  config: {
    plugins: ["./index.js"],
    rules: {
      "oursky/flex": "error",
    },
  },
}).then((...args) => {
  console.log(...args);
});
