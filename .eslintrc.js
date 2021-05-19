module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module",
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
    "plugin:jsx-a11y/strict",
  ],
  plugins: ["react", "jsx-a11y"],
  rules: {
    "react-hooks/exhaustive-deps": "error",
    "no-var": "error",
    "no-unused-vars": "warn",
    "jsx-a11y/click-events-have-key-events": "warn",
    "jsx-a11y/no-static-element-interactions": "warn",
    "jsx-a11y/click-events-have-key-events": "warn",
    "jsx-a11y/anchor-is-valid": "warn",
    "jsx-a11y/no-noninteractive-element-interactions": "warn",
    "react-hooks/exhaustive-deps": "warn",
    "brace-style": "error",
    "prefer-template": "error",
    radix: "error",
    "space-before-blocks": "error",
    "import/prefer-default-export": "off",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
  overrides: [
    {
      files: [
        "**/*.test.js",
        "**/*.test.jsx",
        "**/*.test.tsx",
        "**/*.spec.js",
        "**/*.spec.jsx",
        "**/*.spec.tsx",
      ],
      env: {
        jest: true,
      },
    },
  ],
};
