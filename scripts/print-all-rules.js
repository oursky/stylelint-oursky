const fs = require("fs");

const stylelint = require("stylelint");

const ruleNames = Object.keys(stylelint.rules);
ruleNames.sort((a, b) => a.localeCompare(b));
const content = ruleNames.join("\n") + "\n";
fs.writeFileSync("rules/stylelint", content, { encoding: "utf8" });
