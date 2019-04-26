# stylelint-oursky

## Flexbox

This stylelint plugin includes a rule to help you write
correct flexbox declarations.

First you must include the following reset

```css
*, *::before, *::after {
  flex-shrink: 1;
}
```

to work around [this bug](https://github.com/philipwalton/flexbugs#flexbug-6) on IE 10.

Second you have to ban the `flex` shorthand entirely. If you write `flex: auto`,
on IE 10 it means `flex: 1 0 auto` while it means `flex: 1 1 auto` on other browsers.
