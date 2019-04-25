var stylelint = require("stylelint");
var postcss = require("postcss");

var ruleName = "oursky/flex";
var messages = stylelint.utils.ruleMessages(ruleName, {
  fullShorthand: () => `Expected 3-values form of flex: <flex-grow> <flex-shrink> <flex-basis>;`,
  flexBasisUnit: value =>
    `flex-basis: ${value} not allowed. Please include unit.`,
  useShorthand: () => "Individual flex-[grow|shrink|basis] is not allowed. Use flex."
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
        var values = postcss.list.space(node.value);
        if (values.length !== 3) {
          stylelint.utils.report({
            ruleName,
            result: postcssResult,
            message: messages.fullShorthand(),
            node
          });
        } else {
          var flexBasis = Number(values[2]);
          if (!isNaN(flexBasis)) {
            stylelint.utils.report({
              ruleName,
              result: postcssResult,
              message: messages.flexBasisUnit(values[2]),
              node
            });
          }
        }
      } else if (node.prop === "flex-grow" || node.prop === "flex-shrink" || node.prop === "flex-basis") {
        stylelint.utils.report({
          ruleName,
          result: postcssResult,
          message: messages.useShorthand(),
          node
        });
      }
    });
  };
});

module.exports.ruleName = ruleName;
module.exports.messages = messages;
