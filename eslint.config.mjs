import globals from "globals";
import { defineConfig } from "eslint/config";
import prettierRecommended from "eslint-plugin-prettier/recommended";

export default defineConfig([
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "script",
      globals: globals.browser,
    },
  },
  prettierRecommended,
]);