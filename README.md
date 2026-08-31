# debounce-throttle-fn

[![Buy me a coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-048754?logo=buymeacoffee)](https://www.lujiahao.com/sponsor)
[![Test](https://img.shields.io/github/actions/workflow/status/ColorlabHQ/debounce-throttle-fn/tests.yml?label=Test&logo=github&style=flat-square&branch=main)](https://github.com/ColorlabHQ/debounce-throttle-fn/actions/workflows/tests.yml)
[![codecov](https://codecov.io/github/ColorlabHQ/debounce-throttle-fn/graph/badge.svg?token=YR846BMB6Y)](https://codecov.io/github/ColorlabHQ/debounce-throttle-fn)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/ColorlabHQ/debounce-throttle-fn/blob/main/LICENSE)
---

简体中文 | [English](./README.en.md)

防抖和节流函数

## 特性

- 🚀 零依赖
- 📦 极小体积（minified + brotli ≤ 500B）
- ⏱️ 延迟执行
- ⚡ 首次立即执行
- 🔄 尾部执行
- ⏳ 最大等待时间
- 🛑 手动取消
- 🔥 立即执行
- 🎯 保留调用参数与上下文
- ↩️ 返回最近执行结果
- 🔁 防抖与节流支持

## 安装

### npm

```bash
npm install debounce-throttle-fn
```

### CDN

如果不使用构建工具，也可以直接通过 `<script>` 引入 IIFE 构建：

```html
<script src="https://unpkg.com/debounce-throttle-fn@latest/dist/debounce-throttle-fn.min.js"></script>
```

引入后通过 `Debounce` 命名空间访问：

```js
const fn = Debounce.debounce(() => {
  console.log("called");
}, 300);

const throttled = Debounce.throttle(() => {
  console.log("throttled");
}, 100);
```

## 基本使用

### Debounce

使用 `debounce` 延迟执行函数。

```js
import { debounce } from "debounce-throttle-fn";

const handleSearch = debounce((value) => {
  console.log("search:", value);
}, 300);

input.addEventListener("input", (event) => {
  handleSearch(event.target.value);
});
```

连续调用 `handleSearch()` 时，函数不会立即执行，只有停止调用超过 `300ms` 后才会执行最后一次调用。

### Throttle

使用 `throttle` 限制函数执行频率。

```js
import { throttle } from "debounce-throttle-fn";

const handleScroll = throttle(() => {
  console.log("scroll");
}, 100);

window.addEventListener("scroll", handleScroll);
```

无论事件触发多么频繁，函数都会按照指定的时间间隔执行。

### 配置选项

`debounce` 支持以下配置：

```js
const fn = debounce(callback, 300, {
  leading: true,
  trailing: true,
  maxWait: 1000,
});
```

| Option     | Type      | Default     | Description                      |
| ---------- | --------- | ----------- | -------------------------------- |
| `leading`  | `boolean` | `false`     | 是否在首次调用时立即执行         |
| `trailing` | `boolean` | `true`      | 是否在等待结束后执行最后一次调用 |
| `maxWait`  | `number`  | `undefined` | 最大等待时间                     |

#### Leading

设置 `leading: true`，首次调用时立即执行：

```js
const fn = debounce(
  () => {
    console.log("called");
  },
  300,
  {
    leading: true,
  },
);
```

#### Trailing

默认启用 `trailing`，在连续调用结束后执行最后一次调用：

```js
const fn = debounce(() => {
  console.log("called");
}, 300);
```

也可以手动关闭：

```js
const fn = debounce(
  () => {
    console.log("called");
  },
  300,
  {
    trailing: false,
  },
);
```

#### Max Wait

使用 `maxWait` 可以限制函数最长等待时间。

即使函数持续被调用，也会在达到 `maxWait` 后执行一次：

```js
const fn = debounce(
  () => {
    console.log("called");
  },
  300,
  {
    maxWait: 1000,
  },
);
```

### Cancel

通过 `cancel()` 取消当前等待中的调用：

```js
const fn = debounce(() => {
  console.log("called");
}, 300);

fn();

fn.cancel();
```

调用 `cancel()` 后，当前等待中的函数不会再执行。

### Flush

通过 `flush()` 立即执行当前等待中的调用：

```js
const fn = debounce(() => {
  console.log("called");
}, 300);

fn();

fn.flush();
```

如果当前没有等待中的调用，`flush()` 会直接返回最近一次执行结果。

### Throttle 配置

`throttle` 默认使用 `leading: true` 和 `trailing: true`：

```js
const fn = throttle(callback, 100);
```

也可以自定义执行策略：

```js
const fn = throttle(callback, 100, {
  leading: false,
  trailing: true,
});
```

| Option     | Type      | Default | Description                      |
| ---------- | --------- | ------- | -------------------------------- |
| `leading`  | `boolean` | `true`  | 是否在首次调用时立即执行         |
| `trailing` | `boolean` | `true`  | 是否在等待结束后执行最后一次调用 |
