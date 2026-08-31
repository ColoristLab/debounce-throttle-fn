# JavaScript Library Starter

[![Buy me a coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-048754?logo=buymeacoffee)](https://www.lujiahao.com/sponsor)
[![Test](https://img.shields.io/github/actions/workflow/status/ajiho/javascript-library-starter/tests.yml?label=Test&logo=github&style=flat-square&branch=main)](https://github.com/ajiho/javascript-library-starter/actions/workflows/tests.yml)
[![codecov](https://codecov.io/github/ajiho/javascript-library-starter/graph/badge.svg?token=YR846BMB6Y)](https://codecov.io/github/ajiho/javascript-library-starter)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/ajiho/javascript-library-starter/blob/main/LICENSE)
---

简体中文 | [English](./README.en.md)

一个现代化的 JavaScript 库开发起始模板。

开箱即用地提供从开发、测试、构建到发布的完整工具链，让你专注于编写高质量的 JavaScript 库，而无需重复搭建基础工程配置。

## 集成

- ⚡ **[Rolldown](https://rolldown.rs/)** — 高性能 JavaScript 打包
- 🔍 **[Oxlint](https://oxc.rs/docs/guide/usage/linter.html)** — 极速代码检查
- ✨ **[Oxfmt](https://oxc.rs/docs/guide/usage/formatter.html)** — 极速代码格式化
- 🧪 **[Vitest](https://vitest.dev/)** — 单元测试与覆盖率
- 📊 **[Codecov](https://about.codecov.io/)** — 覆盖率报告上传与持续集成分析平台
- 📦 **[Size Limit](https://github.com/ai/size-limit)** — 构建产物体积检测
- 🪝 **[Simple Git Hooks](https://github.com/toplenboren/simple-git-hooks)** — 轻量 Git Hooks
- 🚀 **[Release Please](https://github.com/googleapis/release-please)** — 自动化版本管理与发布
- 📦 **[pnpm](https://pnpm.io/)** — 快速、节省磁盘空间的包管理器
- 🤖 **[Renovate](https://docs.renovatebot.com/)** — 自动更新依赖版本
- 📖 **[Publint](https://publint.dev/docs/)** — npm 包配置与发布产物检查

## 使用

### 使用 GitHub Template

推荐直接点击仓库右上角的 **Use this template** → **Create a new repository**，创建属于你的 JavaScript 库。

创建完成后克隆你的新仓库并安装依赖：

```bash
git clone https://github.com/YOUR_USERNAME/your-library.git

cd your-library

pnpm install
```

### 手动克隆

也可以直接克隆此模板：

```bash
git clone https://github.com/ajiho/javascript-library-starter.git your-library

cd your-library

pnpm install
```

然后修改 `package.json`、入口文件和源码，即可开始开发。

## 脚本

| 脚本            | 说明                                                      |
| --------------- | --------------------------------------------------------- |
| `pnpm fmt`      | 使用 Oxfmt 格式化代码                                     |
| `pnpm lint`     | 使用 Oxlint 检查代码                                      |
| `pnpm lint:fix` | 自动修复代码问题                                          |
| `pnpm test`     | 使用 Vitest 运行测试并启动 UI                             |
| `pnpm coverage` | 运行测试并生成覆盖率                                      |
| `pnpm build`    | 清理、构建并检查产物体积                                  |
| `pnpm size`     | 检查构建产物体积                                          |
| `pnpm clean`    | 清理 `dist` 目录                                          |
| `pnpm prepare`  | 初始化 Simple Git Hooks                                   |
| `pnpm publint`  | 检查 npm 包配置和发布产物                                 |
| `pnpm check`    | 运行完整检查，包括代码检查、测试覆盖率、构建和 npm 包检查 |

### 构建流程

`pnpm build` 会依次执行：

```text
clean → build:base → build:min → size
```

其中：

- `build:base` — 使用 Rolldown 构建
- `build:min` — 构建生产版本
- `size` — 检查构建产物体积

## 鸣谢

该模板的灵感来自 [typescript-library-starter](https://github.com/alexjoverm/typescript-library-starter)。
