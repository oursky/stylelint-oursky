const fs = require("fs");

function setDifference(a, b) {
  const diffArr = [...a].filter((element) => !b.has(element));
  return new Set(diffArr);
}

(async function main() {
  let missingRules = [];
  let extraneousRules = [];

  const content = fs.readFileSync("rules/stylelint", { encoding: "utf8" });
  const allRules = content.split("\n").filter((line) => line !== "");

  const consideredRules = Object.keys(require("../config/stylelint").rules);

  const allRulesSet = new Set(allRules);
  const consideredRulesSet = new Set(consideredRules);

  const unconsideredRulesSet = setDifference(allRulesSet, consideredRulesSet);
  const extraRulesSet = setDifference(consideredRulesSet, allRulesSet);

  missingRules = missingRules.concat([...unconsideredRulesSet]);
  extraneousRules = extraneousRules.concat([...extraRulesSet]);

  if (missingRules.length > 0) {
    for (const rule of missingRules) {
      console.error(rule);
    }
    process.exitCode = 1;
  }
  if (extraneousRules.length > 0) {
    for (const rule of extraneousRules) {
      console.error(rule);
    }
    process.exitCode = 1;
  }
})().catch((error) => {
  process.exitCode = 1;
  console.error(error);
});
