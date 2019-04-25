const stylelint = require("stylelint");

const ruleName = "oursky/flex";
const messages = stylelint.utils.ruleMessages(ruleName, {
  fullShorthand: () => `Expected flex: <flex-grow> <flex-shrink> <flex-basis>;`,
  flexBasisUnit: value =>
    `flex-basis value: ${value} not allowed, please include unit`
});

module.exports = stylelint.createPlugin(ruleName, function() {
  return function(postcssRoot, postcssResult) {
    const validOptions = stylelint.utils.validateOptions(
      postcssResult,
      ruleName,
      {}
    );
    if (!validOptions) {
      return;
    }
    postcssRoot.walkDecls("flex", node => {
      const values = node.value.split(" ");
      if (values.length !== 3) {
        if (values.length === 1 && values[0] === "none") {
          return;
        }
        stylelint.utils.report({
          ruleName,
          result: postcssResult,
          message: messages.fullShorthand(),
          node
        });
      } else {
        if (Number(values[2]) === 0) {
          stylelint.utils.report({
            ruleName,
            result: postcssResult,
            message: messages.flexBasisUnit(values[2]),
            node
          });
        }
      }
    });
  };
});

module.exports.ruleName = ruleName;
module.exports.messages = messages;
