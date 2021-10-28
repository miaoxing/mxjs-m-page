# [0.2.0](https://github.com/miaoxing/mxjs-m-page/compare/v0.1.0...v0.2.0) (2021-10-28)


### Bug Fixes

* **m-page:** h5 不调用不支持的 `Taro.setBackgroundColor` 方法 ([6bbc4ff](https://github.com/miaoxing/mxjs-m-page/commit/6bbc4ffa40246eb2402867d9b0db1393af47cf04))
* 指定 node >=12.10.0 ([2ee253d](https://github.com/miaoxing/mxjs-m-page/commit/2ee253ded5ed9c35cf356368755b89503cfa6261))


### Features

* **m-page:** 增加 `ret` 属性，允许页面直接展示结果，而不用引入 `Ret` 组件 ([c718173](https://github.com/miaoxing/mxjs-m-page/commit/c718173da54fc07b1e50b273c403bb4c96d933c5))
* `react` 依赖移到 `peerDependencies` 中，开发依赖使用 `react` 17 ([4917c62](https://github.com/miaoxing/mxjs-m-page/commit/4917c62873f983240ac6c381dfd3fcc166be3163))
* **m-page:** 增加 `--mx-space-*` 和 `--mx-fontSizes-*` CSS 变量 ([b613d7a](https://github.com/miaoxing/mxjs-m-page/commit/b613d7adf172fa5b9b6dc4c01f03313d5368bfbc))
* **m-page:** 增加 `Page` 组件 ([04eacf0](https://github.com/miaoxing/mxjs-m-page/commit/04eacf0b9a58778fd643ead7d2513227339c15bd))
* **m-page:** 增加 `PageContext`，允许其他组件通过 Context 设置页面 CSS ([43dc5bf](https://github.com/miaoxing/mxjs-m-page/commit/43dc5bf7396cef608c5b1c25158dff1754b476d1))
* **m-page:** 增加 `success`, `danger` 和 `warning` 颜色变量 ([dd6256c](https://github.com/miaoxing/mxjs-m-page/commit/dd6256c5b012707e1665ce03e52b4a5ae9e3ec03))


### BREAKING CHANGES

* `react` 依赖移到 `peerDependencies` 中，开发依赖使用 `react` 17





### Dependencies

* **@mxjs/m-ret:** upgrade from `0.1.0` to `0.1.1`
* **@miaoxing/dev:** upgrade from `7.0.1` to `8.0.0`
* **miaoxing:** upgrade from `0.2.5` to `0.3.0`

# 0.1.0 (2021-06-21)


### Features

* **m-page:** 初始化 `@mxjs/m-page` ([8ae7e75](https://github.com/miaoxing/mxjs-m-page/commit/8ae7e75356e5849badb8ba751dbf3c71128aedca))
