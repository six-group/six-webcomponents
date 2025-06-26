# React

We offer a
[dedicated npm package for React](https://www.npmjs.com/package/@six-group/ui-library-react) to
simplify the use of our web components. Find detailed steps in this guide to learn how to use it.

For more detailed usage examples, check the
[React demo](https://six-group.github.io/six-webcomponents/demo/react) and its
[source code](https://github.com/six-group/six-webcomponents/tree/main/examples/react).

## Setup

1. Install both the web components and React library:

   ```bash
   npm install @six-group/ui-library
   npm install @six-group/ui-library-react
   ```

2. In your main.ts file, add the `UiLibraryReact` plugin to your React application and import the
   styles:

   ```ts
   import { createApp } from 'react';
   import { UiLibraryReact } from '@six-group/ui-library-react';
   import '@six-group/ui-library/dist/ui-library/ui-library.css';

   const app = createApp(App);
   app.use(UiLibraryReact);
   ```

## Using the Components

The components can be used just like any other React component.

1. Import the component in `<script setup>`

   ```ts
   import { SixButton } from '@six-group/ui-library-react';
   ```

2. Use it in the template

   ```html
   <six-button type="primary" @click="doIt()">Click Me</six-button>
   ```

## Router

If you are using `react-router` and want to use `router-link` attributes on the web components, you
have to pass the router as part of the configuration to the `UiLibraryReact` plugin:

```ts
app.use(UiLibraryReact, { router });
```

You can then use `router-link` on any component from the library like this:

```html
<six-sidebar-item-group router-link="/the-link" name="Link Demo" />
```

## Forms

Form components like `six-input`, `six-checkbox` or `six-select` integrate smoothly with React’s
`v-model` bindings.

### Error Message Translations

For proper translation, set the lang attribute on the `html` element. Languages available are `en`,
`de`, `it`, and `fr`.

## Polyfills

By default, polyfills are not included when registering the React plugin in your app.

For non-browser environments, like unit tests, enable them as follows:

```ts
app.use(UiLibraryReact, { applyPolyfills: true });
```
