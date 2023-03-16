const groups = [
  "type",
  "builtin",
  "external",
  "internal",
  "parent",
  "sibling",
  "index",
  "object",
];

/** @type {import("eslint").Linter.Config} */
module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "import", "unicorn"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:unicorn/recommended",
  ],
  parserOptions: { sourceType: "module", ecmaVersion: "latest" },
  rules: {
    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/no-unused-vars": "error",
    "import/namespace": "off", // Handled by typescript
    "import/no-unresolved": "off", // Handled by typescript
    "import/order": ["warn", { alphabetize: { order: "asc" }, groups }],
    "sort-imports": ["warn", { ignoreDeclarationSort: true }],
    "unicorn/no-null": "off",
    "unicorn/prevent-abbreviations": "off",
  },
};
