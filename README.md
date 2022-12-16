# SIX UI Library

SIX UI Library is an open source project providing Web Components for SIX web applications. The library can however also
be used for other projects (simply override the css variables).

Please find the deployed documentation listing all components [here](https://six-group.github.io/six-webcomponents/).

Please find the changelog for the webcomponents [here](source/packages/ui-library/CHANGELOG.md).

## Links
* [Documentation](https://six-group.github.io/six-webcomponents/)

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
There are example apps for Angular, React, Vue and pure JavaScript. You can find them in the `source/examples/` directory.
For instructions how to build and run them just follow the [readme.md](./source/examples/readme.md) located in the same folder.

## Structure

| Module                               | Description                                                         |
|--------------------------------------|---------------------------------------------------------------------|
| `source/packages/ui-library`         | Core UI component library build with Stencil                        |
| `source/packages/ui-library-react`   | React component module based on the the core library                |
| `source/packages/ui-library-vue`     | Vue component module based on the the core library                  |
| `source/examples/angular/six-app`    | Angular demo app showing some components and features of ui-library |
| `source/examples/react/six-app`      | React demo app showing some components and features of ui-library   |
| `source/examples/vue/six-app`        | Vue.js demo app showing some components and features of ui-library  |
| `docs`                               | API documentation build with VuePress                               |

## Credits
Credit where credit is due. The SIX webcomponents started as clone of the shoelace project and were inspired by the baloise
design-system. Some parts of six-datepicker were copied from the bal-datepicker.
The third party licenses are listed [here](source/packages/ui-library/third-party-licenses).
