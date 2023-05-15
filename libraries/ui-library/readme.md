![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

# Six UI Components

This is the actual UI components library.

The Webcomponents in this library are built with Stencil.

## Stencil

Stencil is a compiler for building fast web apps using Web Components.

Stencil combines the best concepts of the most popular frontend frameworks into a compile-time rather than run-time tool. Stencil takes TypeScript, JSX, a tiny virtual DOM layer, efficient one-way data binding, an asynchronous rendering pipeline (similar to React Fiber), and lazy-loading out of the box, and generates 100% standards-based Web Components that run in any browser supporting the Custom Elements v1 spec.

Stencil components are just Web Components, so they work in any major framework or with no framework at all.

## Getting Started

To start building a new webcomponent using Stencil:

```bash
npm run generate six-name-of-new-component
```

This will create a new folder containing everything necessary for you to develop a new component

To run the unit tests for the components, run:

```bash
npm test
```

Need help? Check out our docs [here](https://stenciljs.com/docs/my-first-component).

## Testing

To run all unit and e2e tests simply execute

```bash
npm run teste2e
```

If you want to run a specific file, simply add the filename ad the end to the command above:

```bash
npm run test:2e components/six-button/test/six-button.e2e.ts
```

For debugging stencil provides the `--devtools` flag. This will slow down chrome and open the devtools automatically.

Simply add a `debugger;` statement in the code where you want the test to stop and run:

```bash
npm run test:debug components/six-button/test/six-button.e2e.ts
```

If you need evaluation at a certain breakpoint the easiest is to open the `ui-library` folder in vscode. The provided
`launch.json` automatically adds the correct runconfigurations to debug tests in vscode

If you want to do some more advanced debugging you can also use `page.evaluate`. Add the following in your code:

```javascript
await page.evaluate(() => {
  console.log('this is some evaluation');
  debugger;
});
```

and run the same command as above:

```bash
npm run test:debug components/six-button/test/six-button.e2e.ts
```

FYI: There seems to be some weird bug when using `page.evaluate` where the browser first stops in a ghost breakpoint and
you have to reload the browser (Ctrl + R) to get to your evaluation endpoint.

### Visual Diff Testing

The flag `--screenshot` allows to run visual diff e2e tests. When we run these tests we will make a screenshot of the
component and compare it with previous screenshots. You can find the screenshots in [this image folder](./screenshot/images).

When a screenshot test fails you can open the [compare.html](./screenshot/compare.html) which will present you what changed.

When you actually redesigned the component and expect the changes simply delete the old images.

The screenshot tests are not run in the build because the tests seem to always fail in the build and it's very hard to
figure out what exactly differs there. So if you want to validate the components are still working properly run it locally:

`npm run test:inclScrnsht`

## Adding documentation

To see the documentation for your component you need to do the following:

- add an `index.html` to your component folder
- the `index.html` should have the following structure, where a div with the `container` class surrounds all your examples.
  And the code examples are wrapped in `<div class="container"></div>`:
  `html
    <!DOCTYPE html>
    <html dir="ltr" lang="en">
    <head>
      <meta charset="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0"/>
      <script type="module" src="/build/ui-library.esm.js"></script>
      <script nomodule src="/build/ui-library.js"></script>
      <link rel="stylesheet" href="/build/ui-library.css">
      <title>MyComponent</title>
    </head>
    <body>
    <div class="container">
      <h1>MyComponent</h1>
      <p>MyComponent is used for blablabla</p>
      <section class="demo">
        <my-component></my-component>
      </section>
    </div>
    </body>
    </html>
    `
- additionally you need to have an `EXAMPLES` comment in your readme.md:

  ```
  <!-- EXAMPLES -->

  <!-- Auto Generated Below -->
  ```

### Prepare

Before creating a new version make sure that:

- you built the projects to be publish (dist folder should be updated)
- you updated [CHANGELOG.md](CHANGELOG.md)
- you know which version to update to
  - our library follows [Semantic Versioning](https://semver.org/) so follow this guide to decide what kind of version update you will bring:
    - <b>MAJOR</b> version when you make incompatible API changes
      - <b>=></b> Users of the SIX Web Components Library must adapt their code to use the new version.
    - <b>MINOR</b> version when you add functionality in a backwards compatible manner, and
      - <b>=></b> Users of the SIX Web Component Library can use new features but must not adapt their existing code.
    - <b>PATCH</b> version when you make backwards compatible bug fixes.
      - <b>=></b> Users of the SIX Web Component Library get a bug fixed but must not adapt their existing code.

There are different ways how to create a new version:

- manually increase the version in the `package.json` and `package-lock.json`
- use `npm version [<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease [--preid=<prerelease-id>] | from-git]`
  - [see here for more details](https://docs.npmjs.com/updating-your-published-package-version-number)
- [use lerna publish](https://lerna.js.org/)

No matter what kind of method you use to bump the version make sure that the different packages are in sync - always publish these together:

- ui-library

* ui-library-react
* ui-library-vue
