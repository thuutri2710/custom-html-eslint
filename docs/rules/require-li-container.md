# require-li-container

This rule enforces `<li>` to be in `<ul>`, `<ol>` or `<menu>`.

## Why?

The `<li>` tag should be contained in a parent element: `<ol>`, `<ul>` or `<menu>`.

## How to use

```js,.eslintrc.js
module.exports = {
  rules: {
    "@thuutri2710/require-li-container": "error",
  },
};
```

## Rule Details

Examples of **incorrect** code for this rule:

```html,incorrect
<div>
  <li>item 1</li>
  <li>item 2</li>
</div>
```

Examples of **correct** code for this rule:

```html,correct
<ol>
  <li>item 1</li>
  <li>item 2</li>
</ol>

<ul>
  <li>item 1</li>
  <li>item 2</li>
</ul>
```

## Further Reading

- [MDN - li](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li)
