import stylelint from "stylelint";
import postcss from "postcss";

const ruleName = "oursky/flex";

const messages = stylelint.utils.ruleMessages(ruleName, {
  fullShorthand: () =>
    `Expected 3-values form of flex: <flex-grow> <flex-shrink> <flex-basis>;`,
  flexBasisUnit: (value) =>
    `flex-basis: ${value} not allowed. Please include unit.`,
  useShorthand: () =>
    "flex-[grow|shrink|basis] are not supported on IE 10. Use flex.",
});

const ruleFunction = () => {
  return function (postcssRoot, postcssResult) {
    var validOptions = stylelint.utils.validateOptions(
      postcssResult,
      ruleName,
      {}
    );
    if (!validOptions) {
      return;
    }
    postcssRoot.walkDecls(/^flex/, (node) => {
      if (node.prop === "flex") {
        var values = postcss.list.space(node.value);
        if (values.length !== 3) {
          stylelint.utils.report({
            ruleName,
            result: postcssResult,
            message: messages.fullShorthand(),
            node,
          });
        } else {
          var flexBasis = Number(values[2]);
          if (!isNaN(flexBasis)) {
            stylelint.utils.report({
              ruleName,
              result: postcssResult,
              message: messages.flexBasisUnit(values[2]),
              node,
            });
          }
        }
      } else if (
        node.prop === "flex-grow" ||
        node.prop === "flex-shrink" ||
        node.prop === "flex-basis"
      ) {
        stylelint.utils.report({
          ruleName,
          result: postcssResult,
          message: messages.useShorthand(),
          node,
        });
      }
    });
  };
};

ruleFunction.ruleName = ruleName;
ruleFunction.messages = messages;

export default stylelint.createPlugin(ruleName, ruleFunction);
