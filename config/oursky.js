module.exports = {
  extends: ["./stylelint.js"],
  plugins: ["../src/index.js", "stylelint-no-unsupported-browser-features"],
  rules: {
    "oursky/flex": true,
    "plugin/no-unsupported-browser-features": true,
  },
  defaultSeverity: "error",
};
