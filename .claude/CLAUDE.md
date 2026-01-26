# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this
repository.

## Project Overview

SIX UI Library is a Stencil-based web component library with framework wrappers for Angular, React,
and Vue. The monorepo uses npm workspaces.

## Common Commands

```bash
# Install dependencies (from root)
npm install

# Start dev server with hot reload (serves component demos at localhost:3333)
npm start

# Build all packages
npm run build

# Build only the core library and framework wrappers
npm run build:lib

# Run unit tests
npm run test

# Run E2E tests (Playwright)
npm run test:e2e

# Run specific E2E test (from libraries/ui-library)
cd libraries/ui-library && npx playwright test six-button

# Run E2E tests with UI
cd libraries/ui-library && npx playwright test --ui

# Lint
npm run lint:lib

# Format
Always run prettier before committing changes.
npm run prettier:write
```

## Architecture

**Monorepo structure:**

- `libraries/ui-library` - Core Stencil components (source of truth)
- `libraries/ui-library-angular` - Angular wrappers (auto-generated)
- `libraries/ui-library-react` - React wrappers (auto-generated)
- `libraries/ui-library-vue` - Vue wrappers (auto-generated)
- `examples/` - Demo apps (Angular, React, Vue, Nuxt, vanilla JS)
- `docs/` - VitePress documentation site

**Component structure** (in `libraries/ui-library/src/components/{name}/`):

- `{name}.tsx` - Stencil component
- `{name}.scss` - Styles
- `{name}.e2e.ts` - E2E tests (Playwright)
- `index.html` - Demo page
- `test/{name}.spec.tsx` - Unit tests (Jest)

**Build outputs:** Stencil generates framework wrappers via output targets in `stencil.config.ts`.
Building ui-library automatically updates the wrapper libraries.

## Code Formatting

Use Prettier to format code: `npm run prettier:write`

## Commit Convention

Format: `type(scope): subject`

Types: `feat`, `fix`, `docs`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`

Scope: component name (e.g., `six-button`) or area (e.g., `core`, `docs`)

Example: `fix(six-dropdown): handle events on blur`

Do not add `Co-Authored-By` lines to commits.
