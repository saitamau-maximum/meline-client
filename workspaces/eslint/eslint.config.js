// @ts-check
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import globals from "globals";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import reactRefreshPlugin from "eslint-plugin-react-refresh";
import prettierConfig from "eslint-config-prettier";
import storybookPlugin from "eslint-plugin-storybook";
import tanstackQueryPlugin from "@tanstack/eslint-plugin-query";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...storybookPlugin.configs["flat/recommended"],
  ...tanstackQueryPlugin.configs["flat/recommended"],
  reactRefreshPlugin.configs.recommended,
  prettierConfig,
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: { ...globals.browser },
    },
    plugins: {
      // @ts-expect-error reactHooksPlugin are not support flat config and export looses type
      "react-hooks": reactHooksPlugin,
    },
    // @ts-expect-error reactHooksPlugin are not support flat config and export looses type
    rules: {
      ...reactHooksPlugin.configs.recommended.rules,
    },
  }
);
