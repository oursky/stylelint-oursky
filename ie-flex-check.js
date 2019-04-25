const stylelint = require("stylelint");

const ruleName = "plugin/ie-flex";
const messages = stylelint.utils.ruleMessages(ruleName, {
  mustIncludeAllValue: () => `Expected flex: flex-grow flex-shrink flex-basis;`,
  flexBasisValueNotAllowed: value =>
    `flex-basis value: ${value} not allowed, please include unit`
});

function recursiveLoop(node, fn) {
  fn(node);
  if (node.nodes) {
    node.nodes.forEach(n => {
      recursiveLoop(n, fn);
    });
  }
}

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
    recursiveLoop(postcssRoot, node => {
      if (node.prop === "flex") {
        const values = node.value.split(" ");
        if (values.length !== 3) {
          if (values.length === 1 && values[0] === "none") {
            return;
          }
          stylelint.utils.report({
            ruleName,
            result: postcssResult,
            message: messages.mustIncludeAllValue(),
            node
          });
        } else {
          if (Number(values[2]) === 0) {
            stylelint.utils.report({
              ruleName,
              result: postcssResult,
              message: messages.flexBasisValueNotAllowed(values[2]),
              node
            });
          }
        }
      }
    });
  };
});

module.exports.ruleName = ruleName;
module.exports.messages = messages;
