module.exports = {
  root: true,
  extends: [ "@react-native" ],
  rules: {
    "semi": [ "error", "always" ],
    "quotes": [ "error", "double" ],
    "array-bracket-spacing": [ "error", "always" ],
    "object-curly-spacing": [ "error", "always" ],
    "indent": [ "error", 2 ],
    "key-spacing": [
      "error",
      {
        beforeColon: false,
        afterColon: true,
        mode: "strict"
      }
    ],
    "comma-dangle": [ "error", "never" ]
  }
};
