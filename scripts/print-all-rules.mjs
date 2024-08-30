import fs from "fs";

import stylelint from "stylelint";

const ruleNames = Object.keys(stylelint.rules);
ruleNames.sort((a, b) => a.localeCompare(b));
const content = ruleNames.join("\n") + "\n";
fs.writeFileSync("rules/stylelint", content, { encoding: "utf8" });
