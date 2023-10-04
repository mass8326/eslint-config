/** @type {import("eslint").Linter.Config} */
module.exports = {
  plugins: ["svelte"],
  extends: ["./index.js"],
  overrides: [
    {
      files: ["*.svelte"],
      parser: "svelte-eslint-parser",
      parserOptions: { parser: "@typescript-eslint/parser" },
      rules: {
        // Declarations in <script> are parsed as inner declarations
        "no-inner-declarations": "off",
        // May be needed to trigger reactivity
        "no-self-assign": "off",
        // May be needed to make a component prop optional
        "unicorn/no-useless-undefined": "off",
      },
    },
  ],
};
