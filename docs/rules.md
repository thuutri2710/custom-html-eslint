<!-- This file is generated by 'yarn docs' command. Don't edit this -->

# Rules

- 🔧: Meaning the rule can fix problems automatically by running eslint `--fix` options.
- ⭐: Meaning the rule is recommended.

## Best Practice

| Rule                                                           | Description                                                  |      |
| -------------------------------------------------------------- | ------------------------------------------------------------ | ---- |
| [no-duplicate-attrs](rules/no-duplicate-attrs)                 | Disallow to use duplicate attributes                         | ⭐   |
| [no-duplicate-id](rules/no-duplicate-id)                       | Disallow to use duplicate id                                 | ⭐   |
| [no-inline-styles](rules/no-inline-styles)                     | Disallow using inline style                                  |      |
| [no-obsolete-tags](rules/no-obsolete-tags)                     | Disallow to use obsolete elements in HTML5                   | ⭐   |
| [no-restricted-attr-values](rules/no-restricted-attr-values)   | Disallow specified attributes                                |      |
| [no-restricted-attrs](rules/no-restricted-attrs)               | Disallow specified attributes                                |      |
| [no-script-style-type](rules/no-script-style-type)             | Enforce to omit type attributes for style sheets and scripts | 🔧   |
| [no-target-blank](rules/no-target-blank)                       | Disallow usage of unsafe `target='_blank'`                   |      |
| [require-attrs](rules/require-attrs)                           | Require specified attributes                                 |      |
| [require-button-type](rules/require-button-type)               | Require use of button element with a valid type attribute.   |      |
| [require-closing-tags](rules/require-closing-tags)             | Require closing tags.                                        | ⭐🔧 |
| [require-doctype](rules/require-doctype)                       | Require `<!DOCTYPE HTML>` in html,                           | ⭐🔧 |
| [require-li-container](rules/require-li-container)             | Enforce `<li>` to be in `<ul>`, `<ol>` or `<menu>`.          | ⭐   |
| [require-meta-charset](rules/require-meta-charset)             | Enforce to use `<meta charset="...">` in `<head>`            |      |
| [require-size-attribute-img](rules/require-size-attribute-img) | Require `height` and `width` attribute at `<img>` tag        | ⭐   |

## SEO

| Rule                                                             | Description                                            |     |
| ---------------------------------------------------------------- | ------------------------------------------------------ | --- |
| [no-multiple-h1](rules/no-multiple-h1)                           | Disallow multiple `<h1></h1>`.                         | ⭐  |
| [require-lang](rules/require-lang)                               | Require `lang` attribute at `<html>` tag               | ⭐  |
| [require-meta-description](rules/require-meta-description)       | Require use of `<meta name="description">` in `<head>` |     |
| [require-open-graph-protocol](rules/require-open-graph-protocol) | Enforce to use `<meta name="viewport">` in `<head>`    |     |
| [require-title](rules/require-title)                             | Require `<title><title/>` in the `<head><head/>`       | ⭐  |

## Accessibility

| Rule                                                       | Description                                                     |     |
| ---------------------------------------------------------- | --------------------------------------------------------------- | --- |
| [no-abstract-roles](rules/no-abstract-roles)               | Disallow to use of abstract roles                               |     |
| [no-accesskey-attrs](rules/no-accesskey-attrs)             | Disallow to use of accesskey attribute                          |     |
| [no-aria-hidden-body](rules/no-aria-hidden-body)           | Disallow to use aria-hidden attributes on the `body` element.   |     |
| [no-non-scalable-viewport](rules/no-non-scalable-viewport) | Disallow use of `user-scalable=no` in `<meta name="viewport">`. |     |
| [no-positive-tabindex](rules/no-positive-tabindex)         | Disallow use of positive `tabindex`.                            |     |
| [no-skip-heading-levels](rules/no-skip-heading-levels)     | Disallow skipping heading levels                                |     |
| [require-frame-title](rules/require-frame-title)           | Require `title` in `<frame>`, `<iframe>`                        |     |
| [require-img-alt](rules/require-img-alt)                   | Require `alt` attribute at `<img>` tag                          | ⭐  |
| [require-meta-viewport](rules/require-meta-viewport)       | Enforce to use `<meta name="viewport">` in `<head>`             |     |

## Style

| Rule                                                     | Description                                                       |      |
| -------------------------------------------------------- | ----------------------------------------------------------------- | ---- |
| [element-newline](rules/element-newline)                 | Enforce newline between elements.                                 | ⭐🔧 |
| [id-naming-convention](rules/id-naming-convention)       | Enforce consistent naming id attributes                           |      |
| [indent](rules/indent)                                   | Enforce consistent indentation                                    | ⭐🔧 |
| [lowercase](rules/lowercase)                             | Enforce to use lowercase for tag and attribute names.             | 🔧   |
| [no-extra-spacing-attrs](rules/no-extra-spacing-attrs)   | Disallow an extra spacing around attributes                       | ⭐🔧 |
| [no-multiple-empty-lines](rules/no-multiple-empty-lines) | Disallow multiple empty lines                                     | 🔧   |
| [no-trailing-spaces](rules/no-trailing-spaces)           | Disallow trailing whitespace at the end of lines                  | 🔧   |
| [quotes](rules/quotes)                                   | Enforce consistent quoting attributes with double(") or single(') | ⭐🔧 |
| [sort-attrs](rules/sort-attrs)                           | Enforce attributes alphabetical sorting                           | 🔧   |
