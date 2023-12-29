module.exports = {
  root: true,
  plugins: ["@custom-html-eslint"],
  parserOptions: { ecmaVersion: 2020, sourceType: "module" },
  overrides: [
    {
      files: ["**/*.html"],
      parser: "@custom-html-eslint/parser",
      extends: ["plugin:@custom-html-eslint/recommended"],
      rules: {
        "@custom-html-eslint/require-doctype": "off",
        "@custom-html-eslint/no-target-blank": "error",
        "@custom-html-eslint/require-button-type": "error",
        "@custom-html-eslint/require-meta-charset": "error",
        "@custom-html-eslint/require-meta-description": "error",
        "@custom-html-eslint/no-abstract-roles": "error",
        "@custom-html-eslint/no-aria-hidden-body": "error",
        "@custom-html-eslint/no-positive-tabindex": "error",
        "@custom-html-eslint/require-frame-title": "error",
        "@custom-html-eslint/id-naming-convention": ["error", "kebab-case"],
        "@custom-html-eslint/no-multiple-empty-lines": "error",
        "@custom-html-eslint/no-trailing-spaces": "error",
      },
    },
  ],
};
