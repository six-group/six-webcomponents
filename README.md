# SIX UI Library

SIX UI Library is an open source project providing Web Components for SIX web applications. The library can however also
be used for other projects (simply override the css variables).

Please find the deployed documentation listing all components [here](https://six-group.github.io/six-webcomponents/).

Please find the changelog for the webcomponents [here](packages/ui-library/CHANGELOG.md).

## Links

- [Documentation](https://six-group.github.io/six-webcomponents/)

## Issues

Please make sure to respect issue requirements when opening an issue. Issues not conforming to the guidelines may be closed immediately.

## Contribution

Please make sure to read the [Contributing Guide](https://github.com/six-group/six-webcomponents/blob/main/.github/contributing.md) before making a pull request.

Thank you to all the people who already contributed to the Six-Webcomponents!

<a href="https://github.com/six-group/six-webcomponents/graphs/contributors"><img src="https://contrib.rocks/image?repo=six-group/six-webcomponents" /></a>

## Build

Run in root directory:

```bash
npm install
npm run build
```

## API Documentation

Start documentation server (first build the lib):

```bash
cd docs
npm install
npm start
```

or everything combined:

```bash
npm i && npm run build && cd docs && npm i && npm start
```

## Examples

There are example apps for Angular, React, Vue and pure JavaScript. You can find them at `packages/demo-app-*`.

## Structure

| Module                      | Description                                                          |
| --------------------------- | -------------------------------------------------------------------- |
| `packages/ui-library`       | Core UI component library build with Stencil                         |
| `packages/ui-library-react` | React component module based on the the core library                 |
| `packages/ui-library-vue`   | Vue component module based on the the core library                   |
| `packages/demo-app-angular` | Angular demo app showing some components and features of ui-library  |
| `packages/demo-app-react`   | React demo app showing some components and features of ui-library    |
| `packages/demo-app-vue`     | Vue.js demo app showing some components and features of ui-library   |
| `packages/demo-app-js`      | Plain JS demo app showing some components and features of ui-library |
| `docs`                      | API documentation built with VuePress                                |

## Credits

Credit where credit is due. The SIX webcomponents started as clone of the shoelace project and were inspired by the baloise
design-system. Some parts of six-datepicker were copied from the bal-datepicker.
The third party licenses are listed [here](packages/ui-library/third-party-licenses).
