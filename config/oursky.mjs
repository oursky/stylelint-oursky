export default {
  extends: ["./stylelint.mjs"],
  plugins: ["../src/index.mjs", "stylelint-no-unsupported-browser-features"],
  rules: {
    "oursky/flex": true,
    "plugin/no-unsupported-browser-features": true,
  },
  defaultSeverity: "error",
};
