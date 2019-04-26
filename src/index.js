var stylelint = require("stylelint");
var postcss = require("postcss");

var ruleName = "oursky/flex";
var messages = stylelint.utils.ruleMessages(ruleName, {
  flexBasisUnit: value =>
    `flex-basis: ${value} not allowed. Please include unit.`,
  noShorthand: () => "flex shorthand is not allowed. Write flex-[grow|shrink|basis] individually.",
});

module.exports = stylelint.createPlugin(ruleName, function() {
  return function(postcssRoot, postcssResult) {
    var validOptions = stylelint.utils.validateOptions(
      postcssResult,
      ruleName,
      {}
    );
    if (!validOptions) {
      return;
    }
    postcssRoot.walkDecls(/^flex/, node => {
      if (node.prop === "flex") {
        stylelint.utils.report({
          ruleName,
          result: postcssResult,
          message: messages.noShorthand(),
          node,
        });
      } else if (node.prop === "flex-basis") {
        var flexBasis = Number(node.value);
        if (!isNaN(flexBasis)) {
          stylelint.utils.report({
            ruleName,
            result: postcssResult,
            message: messages.flexBasisUnit(node.value),
            node
          });
        }
      }
    });
  };
});

module.exports.ruleName = ruleName;
module.exports.messages = messages;
