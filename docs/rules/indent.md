# indent

This rule enforces consistent indentation.

## How to use

```js,.eslintrc.js
module.exports = {
  rules: {
    "@thuutri2710/indent": "error",
  },
};
```

## Rule Details

### Options

```ts
//...
"@thuutri2710/indent": ["error", "tab" | number]
```

This rule has two options.

- `number(0, 1, ..)` (default 4): requires the use of indentation with specified number of spaces.

- `"tab"`: requires the use of indentation with tab (`\t`).

Examples of **incorrect** code for this rule:

```html,incorrect
<html>
  <body></body>
</html>
```

Examples of **correct** code for this rule:

```html,correct
<html>
  <body></body>
</html>
```

#### number (default: 4)

If the option is number it means the number of spaces for indentation.

```json
{
  "@thuutri2710/indent": ["error", 2]
}
```

Examples of **incorrect** code for this rule with the `"2"` option:

<!-- prettier-ignore -->
```html,incorrect
<html>
      <body></body>
</html>
```

Examples of **correct** code for this rule with the `"2"` option:

```html,correct
<html>
  <body></body>
</html>
```

#### tab

If the option is `"tab"` it means using `tab` for indentation.

```json
{
  "@thuutri2710/indent": ["error", "tab"]
}
```

Examples of **incorrect** code for this rule:

<!-- prettier-ignore -->
```html,incorrect
<html>
          <body></body>
</html>
```

Examples of **correct** code for this rule:

```html,correct
<html>
  <body></body>
</html>
```
