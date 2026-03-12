---
paths:
  - "libraries/ui-library/src/components/**/*"
---

# Stencil Component Development

## Component Pattern

Components use Stencil decorators with shadow DOM and SCSS:

```tsx
@Component({
  tag: 'six-{name}',
  styleUrl: 'six-{name}.scss',
  shadow: true,
})
export class Six{Name} {
  @Element() host!: HTMLSix{Name}Element;

  @Prop({ reflect: true }) propName: string;
  @State() internalState = false;
  @Event() sixComponentEvent!: EventEmitter<DetailType>;
  @Method() async methodName() { }
}
```

## Conventions

- Tag names always start with `six-` prefix
- Class names use PascalCase: `SixButton`, `SixDatepicker`
- Events are prefixed: `six-button-focus`, `six-dropdown-change`
- Use `@Prop({ reflect: true })` for props that should appear as HTML attributes
- Use `hasSlot()` from `../../utils/slot` to check slot content
- Use `submitForm()` from `../../utils/form` for form-participating components
- Expose CSS parts with `part="base"`, `part="label"`, etc. for external styling
- Use JSDoc comments with `@since`, `@status`, `@slot`, `@part` annotations

## Styling

- SCSS files use variables from `src/global/` (e.g., `--six-spacing-medium`, `--six-color-*`)
- Use `:host` for component-level styles
- Use `::slotted()` for slotted content styles
- Expose `--six-*` CSS custom properties for theming

## Adding a New Component

1. Run `npm run generate` from `libraries/ui-library` to scaffold
2. Implement component in `.tsx` with SCSS styles
3. Add `index.html` demo page
4. Write E2E tests (see `.claude/skills/playwright-tests/`)
5. Build (`npm run build:lib`) to generate wrapper code
6. Update changelog
