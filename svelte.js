/** @type {import("eslint").Linter.Config} */
module.exports = {
  plugins: ["svelte3"],
  extends: ["./index.js"],
  settings: { "svelte3/typescript": require("typescript") },
  overrides: [{ files: ["*.svelte"], processor: "svelte3/svelte3" }],
};
