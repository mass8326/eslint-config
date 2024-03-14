import eslint from "@eslint/js";
import prettier from "eslint-plugin-prettier/recommended";
import tseslint from "typescript-eslint";
import astro from "./configs/astro.js";
import base from "./configs/base.js";
import imports from "./configs/imports.js";
import svelte from "./configs/svelte.js";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...base,
  imports,
  astro,
  svelte,
  prettier,
);
