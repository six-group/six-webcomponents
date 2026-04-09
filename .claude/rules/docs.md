---
paths:
  - 'docs/**/*'
---

# Documentation (VitePress)

## Setup

- Documentation is built with VitePress and lives in `docs/`
- Component API docs are auto-generated from Stencil JSDoc annotations
- Start docs dev server: `npm run start:doc` (from root)
- Build docs: `npm run build:doc`
- Fresh start with rebuilt library: `npm run start:doc:fresh:full`

## Changelog

- Located at `docs/changelog.md`
- Follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) format
- All user-facing changes MUST be added under the "Upcoming" section
- Categories: Added, Changed, Fixed, Removed
- Prefix breaking changes with **⚠️Breaking**

## Docs base path

The docs site is deployed to `/six-webcomponents/v5/` — this is configured in
`docs/.vitepress/config.mts` and must match the `target-folder` in the release workflow.
