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
        "no-self-assign": "off", // May be needed to trigger reactivity
        "unicorn/no-useless-undefined": "off", // May be needed to make a prop optional
      },
    },
  ],
};
