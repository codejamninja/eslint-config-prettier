module.exports = {
  extends: ["google", "plugin:react/all", "./index.js", "./rules/react.js"],
  plugins: ["react", "prettier"],
  env: { es6: true, node: true },
  rules: { "require-jsdoc": "off", "prettier/prettier": "error" }
};
