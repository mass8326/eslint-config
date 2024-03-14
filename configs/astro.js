import astroParser from "astro-eslint-parser";
import tseslint from "typescript-eslint";

/** @type {import("eslint").Linter.FlatConfig} */
const config = {
  files: ["**/*.astro"],
  languageOptions: {
    parser: astroParser,
    parserOptions: {
      parser: tseslint.parser,
      project: true,
      extraFileExtensions: [".astro"],
    },
  },
};

export default config;
