import js from "@eslint/js";
import globals from "globals";
import prettier from "eslint-config-prettiernpm ";

/** @type{import('eslint').Linter.Congif[]} */
export default [
  js.configs.recommended,
  {
    files: ["**/*.js", "**/*.jsx"],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parserOptions: {
        ecamFeatures: {
          jsx: true,
        },
      },
    },
  },
  prettier,
];
