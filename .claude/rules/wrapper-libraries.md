---
paths:
  - "libraries/ui-library-angular/**/*"
  - "libraries/ui-library-react/**/*"
  - "libraries/ui-library-vue/**/*"
---

# Framework Wrapper Libraries

## IMPORTANT: Auto-generated code

The `src/lib/stencil-generated/` directories in each wrapper library are **auto-generated** by Stencil
output targets configured in `libraries/ui-library/stencil.config.ts`. Do NOT edit these files
manually — they are overwritten on every build.

## How wrappers work

- `@stencil/angular-output-target` generates Angular component wrappers
- `@stencil/react-output-target` generates React component wrappers
- `@stencil/vue-output-target` generates Vue component wrappers with v-model support

## Vue v-model bindings

Vue wrappers have component models configured in `stencil.config.ts`:

- `six-checkbox`, `six-switch` → `checked` prop via `change` event
- `six-input`, `six-textarea`, `six-range` → `value` prop via `input` event
- `six-select`, `six-datepicker`, `six-date` → `value` prop via `change` event

## Modifying wrapper behavior

To change wrapper generation, edit the output target config in
`libraries/ui-library/stencil.config.ts`, then run `npm run build:lib`.
