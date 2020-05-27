# stylelint-oursky

## Installation

```sh
npm install --save --save-exact --save-dev @oursky/stylelint-oursky stylelint@^13
```

## Usage

In your `.stylelintrc`

```json
{
  "extends": ["@oursky/stylelint-oursky/config/oursky"]
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
