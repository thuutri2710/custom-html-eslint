---
id: cli
title: CLI
---

# CLI

## Installation

```
$ npm install -g @thuutri2710/cli
```

## Configuration

- `.htmleslintrc.js`

```javascript
module.exports = {
  rules: {
    "@thuutri2710/require-lang": "error",
    "@thuutri2710/require-img-alt": "error",
    "@thuutri2710/require-doctype": "error",
    "@thuutri2710/require-title": "error",
    "@thuutri2710/no-multiple-h1": "error",
    // ...
  },
};
```

## Run

```
$ html-eslint https://www.example.com
```

## Options

- `--config` (`-c`)

  Specify configuration file to use.

  ```
  $ html-eslint https://www.example.com --config path/of/configuration
  # or
  $ html-eslint https://www.example.com -c path/of/configuration
  ```

- `--check-style`

  Enable `Style` rules in configuration. By default, All rules with the category `Style` are ignored.

  ```
  $ html-eslint https://www.example.com --check-style
  ```
