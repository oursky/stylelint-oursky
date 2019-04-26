var stylelint = require("stylelint");
var path = require("path");

function lint(code) {
  return stylelint.lint({
    code,
    formatter: "json",
    config: {
      plugins: [path.join(__dirname, "./index.js")],
      rules: {
        "oursky/flex": "error",
      },
    },
  }).then((result) => {
    return result.output;
  });
}

function check(code) {
  return lint(code).then(output => expect(output).toMatchSnapshot());
}

it("warns 1-value forms", async () => {
  return check("a{flex: 1;}");
});

it("warns 2-value forms", async () => {
  return check("a{flex: 1 0;}");
});

it("warns 3-value forms", async () => {
  return check("a{flex: 1 0 0px;}");
});

it("warns flex-basis without unit", async () => {
  return check("a{flex-basis: 1;}");
});

it("allows flex-basis with unit", async () => {
  return check("a{flex-basis: 1px;}");
});

it("does not warn any other flex-*", async () => {
  return check("a{flex-direction: row;}");
});
