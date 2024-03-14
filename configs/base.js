import unicorn from "eslint-plugin-unicorn";

/** @type {import("eslint").Linter.FlatConfig[]} */
const config = [
  {
    plugins: { unicorn },
    rules: {
      // Handled by typescript
      "no-undef": "off",
      // Personal opinion
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/no-unused-vars": "error",
      "no-console": ["error", { allow: ["debug", "info", "warn", "error"] }],
      "unicorn/catch-error-name": "off",
      "unicorn/no-null": "off",
      "unicorn/prevent-abbreviations": "off",
      "unicorn/switch-case-braces": ["error", "avoid"],
    },
  },
  {
    files: ["**/*.{cjs,cts}"],
    rules: { "@typescript-eslint/no-var-requires": "off" },
  },
  {
    files: ["*.d.ts"],
    rules: { "@typescript-eslint/consistent-type-imports": "off" },
  },
];

export default config;
