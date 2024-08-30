import stylelint from "stylelint";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function lint(code) {
  const result = await stylelint.lint({
    code,
    formatter: "json",
    config: {
      plugins: [join(__dirname, "./index.mjs")],
      rules: {
        "oursky/flex": "error",
      },
    },
  });

  const report = JSON.parse(result.report);
  const reportWithoutSource = report.map((a) => {
    return {
      ...a,
      source: undefined,
    };
  });
  return JSON.stringify(reportWithoutSource);
}

async function check(code) {
  const output = await lint(code);
  expect(output).toMatchSnapshot();
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

it("warns flex-grow", async () => {
  return check("a{flex-grow: 1;}");
});

it("warns flex-shrink", async () => {
  return check("a{flex-shrink: 1;}");
});

it("warns flex-basis", async () => {
  return check("a{flex-basis: 1;}");
});

it("does not warn any other flex-*", async () => {
  return check("a{flex-direction: row;}");
});
