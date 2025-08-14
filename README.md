# SIX UI Library

SIX UI Library is an open source project providing Web Components for SIX web applications. The library can however also
be used for other projects (simply override the css variables).

Please find the deployed documentation listing all components [here](https://six-group.github.io/six-webcomponents/).

Please find the changelog for the webcomponents [here](docs/changelog.md).

| Project               | Package                                                                                        | Version                                                                                                                                          | Documentation                                      |
| --------------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------- |
| UI Library            | [`@six-group/ui-library`](https://www.npmjs.com/package/@six-group/ui-library)                 | [![version](https://img.shields.io/npm/v/@six-group/ui-library/latest.svg)](https://www.npmjs.com/package/@six-group/ui-library)                 | [README](./libraries/ui-library/README.md)         |
| React Output Target   | [`@six-group/ui-library-react`](https://www.npmjs.com/package/@six-group/ui-library-react)     | [![version](https://img.shields.io/npm/v/@six-group/ui-library-react/latest.svg)](https://www.npmjs.com/package/@six-group/ui-library-react)     | [README](./libraries/ui-library-react/README.md)   |
| Angular Output Target | [`@six-group/ui-library-angular`](https://www.npmjs.com/package/@six-group/ui-library-angular) | [![version](https://img.shields.io/npm/v/@six-group/ui-library-angular/latest.svg)](https://www.npmjs.com/package/@six-group/ui-library-angular) | [README](./libraries/ui-library-angular/README.md) |
| Vue Output Target     | [`@six-group/ui-library-vue`](https://www.npmjs.com/package/@six-group/ui-library-vue)         | [![version](https://img.shields.io/npm/v/@six-group/ui-library-vue/latest.svg)](https://www.npmjs.com/package/@six-group/ui-library-vue)         | [README](./libraries/ui-library-vue/README.md)     |

## Links

- [Documentation](https://six-group.github.io/six-webcomponents/)

## Issues

Please make sure to respect issue requirements when opening an issue. Issues not conforming to the guidelines may be closed immediately.

## Contribution

Please make sure to read the [Contributing Guide](https://github.com/six-group/six-webcomponents/blob/main/.github/contributing.md) before making a pull request.

Thank you to all the people who already contributed to the Six-Webcomponents!

<a href="https://github.com/six-group/six-webcomponents/graphs/contributors"><img src="https://contrib.rocks/image?repo=six-group/six-webcomponents" /></a>

## Examples

There are example apps for Angular, Plain Javascript, Vue and React. You can find them in the `examples` directory.

## Structure

| Module                         | Description                                                              |
| ------------------------------ | ------------------------------------------------------------------------ |
| `libraries/ui-library`         | Core UI component library build with Stencil                             |
| `libraries/ui-library-angular` | Angular wrappers and utilities                                           |
| `libraries/ui-library-react`   | React wrappers                                                           |
| `libraries/ui-library-vue`     | Vue wrappers                                                             |
| `examples/angular`             | Angular demo app showing some components and features of the ui-library  |
| `examples/js`                  | Plain JS demo app showing some components and features the of ui-library |
| `examples/vue`                 | Vue demo app showing some components and features of the ui-library      |
| `examples/react`               | React demo app showing some components and features of the ui-library    |
| `examples/nuxt`                | Nuxt demo app showing some components and features of the ui-library     |
| `docs`                         | API documentation built with VitePress                                   |

## Credits

Credit where credit is due. The SIX webcomponents started as clone of the [shoelace project](https://shoelace.style/) and were inspired by the baloise
design-system. Some parts of six-datepicker were copied from the bal-datepicker.
The third party licenses are listed [here](libraries/ui-library/third-party-licenses).
