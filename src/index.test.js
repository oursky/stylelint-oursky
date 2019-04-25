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

it("handles spaces", async () => {
  return check("a{flex: 1   0    ;}");
});

it("warns unitless flex-basis", async () => {
  return check("a{flex: 1   0  0  ;}");
});

it("warns unitless flex-basis of any number", async () => {
  return check("a{flex: 1   0  1  ;}");
});

it("passes well-formed flex", async () => {
  return check("a{flex: 1   0  0px  ;}");
});
