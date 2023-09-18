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
  parserOptions: { sourceType: "module", ecmaVersion: "latest" },
  plugins: ["@typescript-eslint", "import", "prettier", "unicorn"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript",
    "plugin:unicorn/recommended",
    "plugin:prettier/recommended",
  ],
  overrides: [
    {
      // Dynamic import() may be needed for ambient declarations
      files: ["*.d.ts"],
      rules: { "@typescript-eslint/consistent-type-imports": "off" },
    },
    {
      // Many config files still require CommonJS to be used
      files: ["*.cjs"],
      rules: { "@typescript-eslint/no-var-requires": "off" },
    },
  ],
  rules: {
    // Import consistency
    "import/order": ["warn", { alphabetize: { order: "asc" }, groups }],
    "sort-imports": ["warn", { ignoreDeclarationSort: true }],
    // Personal opinion
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/no-unused-vars": "error",
    "unicorn/no-null": "off",
    "unicorn/prevent-abbreviations": "off",
    "no-undef": "off", // Handled by typescript
  },
};
