# Disabling Rules

## Disable rules with inline comments.

To disable rule in a file, use HTML comments (`<!-- ... -->`) in the following format:

Disable all rules in an entire file:

```html
<!-- eslint-disable -->
<div foo="foo" foo="foo"></div>
```

Disable or enable specific rules in an entire file:

```html
<!-- eslint-disable @custom-html-eslint/no-duplicate-attrs -->
<div foo="foo" foo="foo"></div>

<!-- eslint-enable @custom-html-eslint/no-duplicate-attrs  -->
<div foo="foo" foo="foo"></div>
```

Disable all rules on a specific line:

```html
<!-- eslint-disable-next-line -->
<div foo="foo" foo="foo"></div>
```

Disable a specific rule on a specific line:

```html
<!-- eslint-disable-next-line @custom-html-eslint/no-duplicate-attrs -->
<div foo="foo" foo="foo"></div>
```
