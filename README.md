# SIX UI Library

SIX UI Library is an open source project providing Web Components for SIX web applications. The library can however also
be used for other projects (simply override the css variables).

Please find the deployed documentation listing all components [here](https://six-group.github.io/six-webcomponents/).

Please find the changelog for the webcomponents [here](docs/changelog.md).

## Links

- [Documentation](https://six-group.github.io/six-webcomponents/)

## Issues

Please make sure to respect issue requirements when opening an issue. Issues not conforming to the guidelines may be closed immediately.

## Contribution

Please make sure to read the [Contributing Guide](https://github.com/six-group/six-webcomponents/blob/main/.github/contributing.md) before making a pull request.

Thank you to all the people who already contributed to the Six-Webcomponents!

<a href="https://github.com/six-group/six-webcomponents/graphs/contributors"><img src="https://contrib.rocks/image?repo=six-group/six-webcomponents" /></a>

## Examples

There are example apps for Angular and React. You can find them in the `examples` directory.

## Structure

| Module                         | Description                                                          |
| ------------------------------ | -------------------------------------------------------------------- |
| `libraries/ui-library`         | Core UI component library build with Stencil                         |
| `libraries/ui-library-angular` | Angular wrappers and utilities                                       |
| `libraries/ui-library-react`   | React wrappers                                                       |
| `examples/angular`             | Angular demo app showing some components and features of ui-library  |
| `examples/js`                  | Plain JS demo app showing some components and features of ui-library |
| `docs`                         | API documentation built with VitePress                               |

## Credits

Credit where credit is due. The SIX webcomponents started as clone of the [shoelace project](https://shoelace.style/) and were inspired by the baloise
design-system. Some parts of six-datepicker were copied from the bal-datepicker.
The third party licenses are listed [here](libraries/ui-library/third-party-licenses).
