/** @type {import("eslint").Linter.Config} */
module.exports = {
  plugins: ["svelte"],
  extends: ["./index.js"],
  overrides: [
    {
      files: ["*.svelte"],
      parser: "svelte-eslint-parser",
      parserOptions: { parser: "@typescript-eslint/parser" },
    },
  ],
};
