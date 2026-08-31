# JavaScript Library Starter

[![Buy me a coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-048754?logo=buymeacoffee)](https://www.lujiahao.com/sponsor)
[![Test](https://img.shields.io/github/actions/workflow/status/ajiho/javascript-library-starter/tests.yml?label=Test&logo=github&style=flat-square&branch=main)](https://github.com/ajiho/javascript-library-starter/actions/workflows/tests.yml)
[![codecov](https://codecov.io/github/ajiho/javascript-library-starter/graph/badge.svg?token=YR846BMB6Y)](https://codecov.io/github/ajiho/javascript-library-starter)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/ajiho/javascript-library-starter/blob/main/LICENSE)

---

English | [简体中文](./README.md)

A modern starter template for JavaScript library development.

Provides a complete toolchain from development, testing, building to publishing out of the box, allowing you to focus on writing high-quality JavaScript libraries without repeatedly setting up basic engineering configurations.

## Integrations

- ⚡ **[Rolldown](https://rolldown.rs/)** — High-performance JavaScript bundler
- 🔍 **[Oxlint](https://oxc.rs/docs/guide/usage/linter.html)** — Blazingly fast linter
- ✨ **[Oxfmt](https://oxc.rs/docs/guide/usage/formatter.html)** — Blazingly fast formatter
- 🧪 **[Vitest](https://vitest.dev/)** — Unit testing & code coverage
- 📊 **[Codecov](https://about.codecov.io/)** — Code coverage reporting & CI analysis platform
- 📦 **[Size Limit](https://github.com/ai/size-limit)** — Bundle size checker
- 🪝 **[Simple Git Hooks](https://github.com/toplenboren/simple-git-hooks)** — Lightweight Git hooks
- 🚀 **[Release Please](https://github.com/googleapis/release-please)** — Automated versioning and publishing
- 📦 **[pnpm](https://pnpm.io/)** — Fast, disk-space efficient package manager
- 🤖 **[Renovate](https://docs.renovatebot.com/)** — Automated dependency updates
- 📖 **[Publint](https://publint.dev/docs/)** — npm package config & publish artifact checking

## Usage

### Use GitHub Template

It is recommended to click the **Use this template** button at the top right → **Create a new repository** to generate your own JavaScript library.

After creation, clone your new repository and install dependencies:

```bash
git clone https://github.com/YOUR_USERNAME/your-library.git

cd your-library

pnpm install
```

### Manual Clone

You can also clone this template directly:

```bash
git clone https://github.com/ajiho/javascript-library-starter.git your-library

cd your-library

pnpm install
```

Then modify `package.json`, the entry file, and source code to start developing.

## Scripts

| Script          | Description                                                     |
| --------------- | --------------------------------------------------------------- |
| `pnpm fmt`      | Format code using Oxfmt                                         |
| `pnpm lint`     | Lint code using Oxlint                                          |
| `pnpm lint:fix` | Automatically fix code issues                                   |
| `pnpm test`     | Run tests with Vitest and launch UI                             |
| `pnpm coverage` | Run tests and generate coverage report                          |
| `pnpm build`    | Clean, build and check bundle size                              |
| `pnpm size`     | Check bundle size                                               |
| `pnpm clean`    | Remove `dist` directory                                         |
| `pnpm prepare`  | Initialize Simple Git Hooks                                     |
| `pnpm publint`  | Check npm package configuration and publish artifacts           |
| `pnpm check`    | Run full checks: lint, test coverage, build & npm package check |

### Build Process

`pnpm build` runs the following steps in order:

```text
clean → build:base → build:min → size
```

Where:

- `build:base` — Build using Rolldown
- `build:min` — Build the minified production version
- `size` — Check the bundle size

## Credits

This template is inspired by [typescript-library-starter](https://github.com/alexjoverm/typescript-library-starter).
