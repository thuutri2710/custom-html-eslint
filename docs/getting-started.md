# Getting Started

## Prerequisite

- Node.js: `^12.22.0 || ^14.17.0 || >=16.0.0`.
- ESLint: `>=6`.

## Installation

- npm

```console,Terminal
npm install --save-dev eslint @thuutri2710/parser @thuutri2710/eslint-plugin
```

- yarn

```console,Terminal
yarn add -D eslint @thuutri2710/parser @thuutri2710/eslint-plugin
```

## Configuration

Populate it with the following on your `.eslintrc.js`. If it does not exist create a `.eslintrc.js` config file in the root of your project.
We can apply [HTML-ESLint plugin rules](rules) to only HTML files(`*.html`) by using `overrides` in `.eslintrc.js`. (see [ESLint Configuration](https://eslint.org/docs/user-guide/configuring#configuration-based-on-glob-patterns))

```js,.eslintrc.js
module.exports = {
  //...
  plugins: ["@thuutri2710"],
  overrides: [
    {
      files: ["*.html"],
      parser: "@thuutri2710/parser",
      extends: ["plugin:@thuutri2710/recommended"],
    },
  ],
};
```

## Editor Configuration

### VSCode

To get [vscode-eslint](https://github.com/microsoft/vscode-eslint) support, we need to add the following in vscode settings.

```json,.vscode/settings.json
{
  "eslint.enable": true,
  "eslint.validate": [
    "javascript", // ...
    "html" // Add "html" to enable linting `.html` files.
  ]
}
```
