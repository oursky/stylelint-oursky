# stylelint-oursky

## Installation

```sh
npm install --save --save-exact --save-dev @oursky/stylelint-oursky stylelint@^16 caniuse-lite@^1
```

## Usage

In your `.stylelintrc`

```json
{
  "extends": ["./node_modules/@oursky/stylelint-oursky/config/oursky.mjs"]
}
```

Add `.browserslistrc` to your project.

Add `.browserslistrc` to your project.

Add `.browserslistrc` to your project.

## Rules

### oursky/flex

This rule ensures `flex: ` is correct on IE 10.

Make sure you are not using [postcss-flexbugs-fixes](https://github.com/luisrudge/postcss-flexbugs-fixes).
Otherwise `flex: ` is transformed by that plugin into an incorrect form.
