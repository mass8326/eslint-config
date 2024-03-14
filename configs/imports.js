import plugin from "eslint-plugin-import";

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

/** @type {import("eslint").Linter.FlatConfig} */
const config = {
  plugins: { import: plugin },
  settings: {
    "import/parsers": { "@typescript-eslint/parser": [".ts", ".tsx"] },
  },
  rules: {
    "import/order": ["warn", { alphabetize: { order: "asc" }, groups }],
    "sort-imports": ["warn", { ignoreDeclarationSort: true }],
  },
};

export default config;
