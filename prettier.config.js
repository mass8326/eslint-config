/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro", "prettier-plugin-svelte"],
  tabWidth: 2,
  trailingComma: "all",
  overrides: [{ files: "*.json", options: { trailingComma: "none" } }],
};
