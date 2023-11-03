# Introduction

The Web Components Library is an **in-house open source** project for developing modern web
applications that follow the SIX corporate styling guidelines.

The technology stack is based on web standards and best practices. Moreover, we try to keep it as
simple as possible for our developers. For those reasons we decided to use
[Web Components](https://en.wikipedia.org/wiki/Web_Components), which are supported by all modern
browsers. The project fully supports [TypeScript](https://www.typescriptlang.org).

## Add the Components to your Project

```bash
npm install @six-group/ui-library
```

::: info

If you want to try the latest version of the software, you can install the insider releases by
specifying the _insider_ tag. For instance `npm install @six-group/ui-library@insider`

:::

For detailed instructions tailored to specific frameworks, consult the respective guides:

- [Angular](angular.md)
- [React](react.md)

## Contribute

If you come across a bug or if something isn't functioning as expected, feel free to raise a
[Github Issue](https://github.com/six-group/six-webcomponents/issues)

### Get the Sources

```bash
git clone https://github.com/six-group/six-webcomponents.git
cd six-webcomponents
```

### Preview Changes

Run the following in the cloned git repository:

```bash
npm install
npm start
```

The last command will open a browser window at http://localhost:3333/ with a preview of all
components.

### Preview Angular Demo

Run the following in the root of the cloned git repository:

```bash
npm install
npm run watch:lib
# wait until the build finished
# [35:11.5]  build finished, watching for changes... in 17.39 s
npm run watch:angular
# wait until compilation is complete
# Compilation complete. Watching for file changes...
npm run demo:angular
```

The demo app at http://localhost:4200 automatically update whenever changes are made to the
ui-library, the Angular library, or the demo code.
