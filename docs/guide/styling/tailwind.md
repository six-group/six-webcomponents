# TailwindCSS

The SIX Web Components can be easily used alongside TailwindCSS.

TailwindCSS is a utility-first CSS framework, which is packed with classes, that can be composed to
build any design, directly in your markup.

## Example configuration

Following we provide an example configuration for the usage inside SIX Group, so you can reference
of all the different css variables, which should be used according to the SIX Group styling
guidelines.

Couple things to notice:

- We explicitly set `preflight` to `false` in order to prevent TailwindCSS from removing any alread
  applied stylings like margins and paddings. For more information on
  [preflight](https://tailwindcss.com/docs/preflight)
- We extend the existing TailwindCSS styling capabilities, since we are not limiting nor do we have
  a complete set of classes for every possible use case defined. If in the future this becomes
  narrower those styles can be defined, overridden or limited within the tailwind configuration.

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        red: {
          300: 'var(--six-color-danger-light-to-be-defined)',
          900: 'var(--six-color-red)',
        },
        black: 'var(--six-color-black)',
        white: 'var(--six-color-white)',
        action: {
          500: 'var(--six-color-action-500)',
          600: 'var(--six-color-action-600)',
        },
        rock: {
          50: 'var(--six-color-web-rock-50)',
          100: 'var(--six-color-web-rock-100)',
          200: 'var(--six-color-web-rock-200)',
          300: 'var(--six-color-web-rock-300)',
          400: 'var(--six-color-web-rock-400)',
          500: 'var(--six-color-web-rock-500)',
          600: 'var(--six-color-web-rock-600)',
          700: 'var(--six-color-web-rock-700)',
          800: 'var(--six-color-web-rock-800)',
          900: 'var(--six-color-web-rock-900)',
        },
        clay: {
          50: 'var(--six-color-clay-50)',
          200: 'var(--six-color-clay-200)',
        },
        danger: {
          800: 'var(--six-color-danger-800)',
          900: 'var(--six-color-danger-900)',
        },
        warning: {
          700: 'var(--six-color-warning-700)',
          800: 'var(--six-color-warning-800)',
        },
        success: {
          500: 'var(--six-color-success-500)',
          600: 'var(--six-color-success-600)',
        },
        link: {
          500: '#2196F3',
        },
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
```
