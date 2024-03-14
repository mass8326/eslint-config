import sveltePlugin from "eslint-plugin-svelte";
import svelteParser from "svelte-eslint-parser";
import tseslint from "typescript-eslint";

/** @type {import("eslint").Linter.FlatConfig} */
const config = {
  files: ["**/*.svelte"],
  languageOptions: {
    parser: svelteParser,
    parserOptions: {
      parser: tseslint.parser,
      project: true,
      extraFileExtensions: [".svelte"],
    },
  },
  plugins: { svelte: sveltePlugin },
  rules: {
    ...sveltePlugin.configs.recommended.rules,
    // Declarations in <script> are parsed as inner declarations
    "no-inner-declarations": "off",
    "svelte/no-at-html-tags": "off",
    "svelte/valid-compile": "off",
  },
};

export default config;
