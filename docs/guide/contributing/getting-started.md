# Getting Started

If you come across a bug or if something isn't functioning as expected, feel free to raise a
[Github Issue](https://github.com/six-group/six-webcomponents/issues)

## Get the Sources

```bash
git clone https://github.com/six-group/six-webcomponents.git
cd six-webcomponents
```

## Preview Changes

Run the following in the cloned git repository:

```bash
npm install
npm start
```

The last command will open a browser window at http://localhost:3333/ with a preview of all
components.

## Preview Angular Demo

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

## Playwright Tests

Install Playwright browsers:

```bash
npm run test:e2e-install
```

Run tests:

```bash
npm run test:e2e                       # run all tests
npm run test:e2e-update-screenshots    # update screenshots
```

For more details, see the [Testing Guide](testing.md).
