/*
 * @Author: MacLoki
 * @Date: 2022-05-26 22:05:08
 * @LastEditors: MacLoki
 * @LastEditTime: 2022-05-26 22:09:18
 * @FilePath: /vite-scaffolding-template/.eslintrc.js
 */
module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },

  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    // ? prettier 应用
    'prettier',
    'plugin:prettier/recommended',
  ],

  rules: {
    // override/add rules settings here
    'vue/multi-word-component-names': 0,
  },
}
