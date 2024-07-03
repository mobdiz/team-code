module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "airbnb/base",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
    "import/prefer-default-export": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "padding-line-between-statements": [
      "error",
      {
        blankLine: "always",
        prev: "*",
        next: [
          "do",
          "if",
          "for",
          "let",
          "try",
          "iife",
          "const",
          "class",
          "block",
          "throw",
          "while",
          "return",
          "switch",
          "export",
          "block-like",
          "expression",
        ],
      },
    ],
  },
  overrides: [
    {
      files: ["*.spec.ts", "*.test.ts"],
      rules: {
        "import/no-extraneous-dependencies": [
          "error",
          { devDependencies: true },
        ],
      },
    },
  ],
};
