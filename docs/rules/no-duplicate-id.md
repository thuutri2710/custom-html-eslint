# no-duplicate-id

This rule disallows duplicate `id` attributes.

## How to use

```js,.eslintrc.js
module.exports = {
  rules: {
    "@thuutri2710/no-duplicate-id": "error",
  },
};
```

## Rule Details

Examples of **incorrect** code for this rule:

```html,incorrect
<div id="foo"></div>
<div id="foo"></div>
```

Examples of **correct** code for this rule:

```html,correct
<div id="foo"></div>
<div id="bar"></div>
```

## Further Reading

- [MDN: id](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id)
