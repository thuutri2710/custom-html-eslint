module.exports = {
  root: true,
  plugins: ["@thuutri2710"],
  parserOptions: { ecmaVersion: 2020, sourceType: "module" },
  overrides: [
    {
      files: ["**/*.html"],
      parser: "@thuutri2710/parser",
      extends: ["plugin:@thuutri2710/recommended"],
      rules: {
        "@thuutri2710/require-doctype": "off",
        "@thuutri2710/no-target-blank": "error",
        "@thuutri2710/require-button-type": "error",
        "@thuutri2710/require-meta-charset": "error",
        "@thuutri2710/require-meta-description": "error",
        "@thuutri2710/no-abstract-roles": "error",
        "@thuutri2710/no-aria-hidden-body": "error",
        "@thuutri2710/no-positive-tabindex": "error",
        "@thuutri2710/require-frame-title": "error",
        "@thuutri2710/id-naming-convention": ["error", "kebab-case"],
        "@thuutri2710/no-multiple-empty-lines": "error",
        "@thuutri2710/no-trailing-spaces": "error",
      },
    },
  ],
};
