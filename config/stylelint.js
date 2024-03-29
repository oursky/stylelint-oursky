module.exports = {
  rules: {
    // NOTE(SCSS): sass does not compile percentage into number.
    "alpha-value-notation": "number",
    "annotation-no-unknown": true,
    "at-rule-allowed-list": null,
    "at-rule-disallowed-list": null,
    "at-rule-empty-line-before": null,
    "at-rule-name-case": "lower",
    "at-rule-name-newline-after": null,
    "at-rule-name-space-after": null,
    "at-rule-no-unknown": true,
    "at-rule-no-vendor-prefix": true,
    "at-rule-property-required-list": null,
    "at-rule-semicolon-newline-after": null,
    "at-rule-semicolon-space-before": null,
    "block-closing-brace-empty-line-before": null,
    "block-closing-brace-newline-after": null,
    "block-closing-brace-newline-before": null,
    "block-closing-brace-space-after": null,
    "block-closing-brace-space-before": null,
    "block-no-empty": null,
    "block-opening-brace-newline-after": null,
    "block-opening-brace-newline-before": null,
    "block-opening-brace-space-after": null,
    "block-opening-brace-space-before": null,
    // NOTE(SCSS): sass compiles color function into hex.
    "color-function-notation": "legacy",
    "color-hex-alpha": null,
    "color-hex-case": null,
    "color-hex-length": null,
    "color-named": null,
    "color-no-hex": null,
    "color-no-invalid-hex": true,
    "comment-empty-line-before": null,
    "comment-no-empty": null,
    "comment-pattern": null,
    "comment-whitespace-inside": null,
    "comment-word-disallowed-list": null,
    "custom-media-pattern": null,
    "custom-property-empty-line-before": null,
    "custom-property-pattern": null,
    "custom-property-no-missing-var-function": true,
    "declaration-bang-space-after": null,
    "declaration-bang-space-before": null,

    "declaration-block-no-duplicate-properties": [
      true,
      {
        ignore: ["consecutive-duplicates-with-different-values"],
      },
    ],
    "declaration-block-no-duplicate-custom-properties": true,

    "declaration-block-no-redundant-longhand-properties": [
      true,
      {
        ignoreShorthands: ["/flex/"],
      },
    ],

    "declaration-block-no-shorthand-property-overrides": true,
    "declaration-block-semicolon-newline-after": null,
    "declaration-block-semicolon-newline-before": null,
    "declaration-block-semicolon-space-after": null,
    "declaration-block-semicolon-space-before": null,
    "declaration-block-single-line-max-declarations": null,
    "declaration-block-trailing-semicolon": null,
    "declaration-colon-newline-after": null,
    "declaration-colon-space-after": null,
    "declaration-colon-space-before": null,
    "declaration-empty-line-before": null,
    "declaration-no-important": true,
    "declaration-property-max-values": null,
    "declaration-property-unit-allowed-list": null,
    "declaration-property-unit-disallowed-list": null,
    "declaration-property-value-allowed-list": null,
    "declaration-property-value-disallowed-list": null,
    "font-family-name-quotes": "always-unless-keyword",
    "font-family-no-duplicate-names": true,
    "font-family-no-missing-generic-family-keyword": true,

    "font-weight-notation": [
      "numeric",
      {
        ignore: ["relative"],
      },
    ],

    "function-allowed-list": null,
    "function-disallowed-list": null,
    "function-calc-no-unspaced-operator": true,
    "function-comma-newline-after": null,
    "function-comma-newline-before": null,
    "function-comma-space-after": null,
    "function-comma-space-before": null,
    "function-linear-gradient-no-nonstandard-direction": true,
    "function-max-empty-lines": null,
    "function-name-case": "lower",
    "function-no-unknown": true,
    "function-parentheses-newline-inside": null,
    "function-parentheses-space-inside": null,
    "function-url-no-scheme-relative": null,
    "function-url-quotes": "always",
    "function-url-scheme-allowed-list": null,
    "function-url-scheme-disallowed-list": null,
    "function-whitespace-after": null,
    "hue-degree-notation": "angle",
    "import-notation": null,
    indentation: null,
    "keyframe-block-no-duplicate-selectors": true,
    "keyframe-declaration-no-important": true,
    "keyframe-selector-notation": null,
    "keyframes-name-pattern": null,
    "length-zero-no-unit": true,
    linebreaks: null,
    "max-empty-lines": null,
    "max-line-length": null,
    "max-nesting-depth": null,
    "media-feature-colon-space-after": null,
    "media-feature-colon-space-before": null,
    "media-feature-name-allowed-list": null,
    "media-feature-name-disallowed-list": null,
    "media-feature-name-case": "lower",
    "media-feature-name-no-unknown": true,
    "media-feature-name-no-vendor-prefix": true,
    "media-feature-name-value-allowed-list": null,
    "media-feature-parentheses-space-inside": null,
    "media-feature-range-notation": null,
    "media-feature-range-operator-space-after": null,
    "media-feature-range-operator-space-before": null,
    "media-query-list-comma-newline-after": null,
    "media-query-list-comma-newline-before": null,
    "media-query-list-comma-space-after": null,
    "media-query-list-comma-space-before": null,
    "no-descending-specificity": true,
    "no-duplicate-at-import-rules": true,
    "no-duplicate-selectors": true,
    "no-empty-first-line": null,
    "no-empty-source": null,
    "no-eol-whitespace": null,
    "no-extra-semicolons": null,
    // NOTE(SCSS): sass has line comments
    "no-invalid-double-slash-comments": true,
    "no-invalid-position-at-import-rule": true,
    "no-irregular-whitespace": null,
    "no-missing-end-of-source-newline": null,
    "no-unknown-animations": true,
    "named-grid-areas-no-invalid": true,
    "number-leading-zero": "always",
    "number-max-precision": 2,
    "number-no-trailing-zeros": true,
    "property-allowed-list": null,
    "property-disallowed-list": null,
    "property-case": "lower",
    "property-no-unknown": true,
    "property-no-vendor-prefix": true,
    "rule-empty-line-before": null,
    "rule-selector-property-disallowed-list": null,
    "selector-attribute-brackets-space-inside": null,
    "selector-attribute-name-disallowed-list": null,
    "selector-attribute-operator-allowed-list": null,
    "selector-attribute-operator-disallowed-list": null,
    "selector-attribute-operator-space-after": null,
    "selector-attribute-operator-space-before": null,
    "selector-attribute-quotes": "always",
    "selector-class-pattern": null,
    "selector-combinator-allowed-list": null,
    "selector-combinator-disallowed-list": null,
    "selector-combinator-space-after": null,
    "selector-combinator-space-before": null,
    "selector-disallowed-list": null,
    "selector-descendant-combinator-no-non-space": true,
    "selector-id-pattern": null,
    "selector-list-comma-newline-after": null,
    "selector-list-comma-newline-before": null,
    "selector-list-comma-space-after": null,
    "selector-list-comma-space-before": null,
    "selector-max-attribute": null,
    "selector-max-class": null,
    "selector-max-combinators": null,
    "selector-max-compound-selectors": null,
    "selector-max-empty-lines": null,
    "selector-max-id": null,
    "selector-max-pseudo-class": null,
    "selector-max-specificity": null,
    "selector-max-type": null,
    "selector-max-universal": null,
    "selector-nested-pattern": null,
    "selector-no-qualifying-type": null,
    "selector-no-vendor-prefix": true,
    "selector-not-notation": null,
    "selector-pseudo-class-allowed-list": null,
    "selector-pseudo-class-disallowed-list": null,
    "selector-pseudo-class-case": "lower",
    "selector-pseudo-class-no-unknown": true,
    "selector-pseudo-class-parentheses-space-inside": null,
    "selector-pseudo-element-allowed-list": null,
    "selector-pseudo-element-disallowed-list": null,
    "selector-pseudo-element-case": "lower",
    "selector-pseudo-element-colon-notation": "double",
    "selector-pseudo-element-no-unknown": true,
    "selector-type-case": "lower",
    "selector-type-no-unknown": true,
    "shorthand-property-no-redundant-values": true,
    "string-no-newline": true,
    "string-quotes": null,
    "time-min-milliseconds": null,
    "unicode-bom": null,
    "unit-allowed-list": null,
    "unit-disallowed-list": null,
    "unit-case": "lower",
    "unit-no-unknown": true,
    "value-keyword-case": "lower",
    "value-list-comma-newline-after": null,
    "value-list-comma-newline-before": null,
    "value-list-comma-space-after": null,
    "value-list-comma-space-before": null,
    "value-list-max-empty-lines": null,
    "value-no-vendor-prefix": true,
  },
};
