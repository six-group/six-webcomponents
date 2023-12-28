# Vue

We offer a [dedicated npm package for Vue](https://www.npmjs.com/package/@six-group/ui-library-vue)
to simplify the use of our web components. Find detailed steps in this guide to learn how to use it.

For more detailed usage examples, check the
[Vue demo](https://six-group.github.io/six-webcomponents/demo/vue) and its
[source code](https://github.com/six-group/six-webcomponents/tree/main/examples/vue).

## Setup

1. Install both the web components and Vue library:

   ```bash
   npm install @six-group/ui-library
   npm install @six-group/ui-library-vue
   ```

2. Add the `UiLibraryVue` plugin to your Vue application and import the styles:

   ```ts
   import { createApp } from 'vue';
   import { UiLibraryVue } from '@six-group/ui-library-vue';
   import '@six-group/ui-library/dist/ui-library/ui-library.css';

   const app = createApp(App);
   app.use(UiLibraryVue);
   ```

## Using the Components

The components can be used just like any other Vue component.

1. Import the component in `<script setup>`

   ```ts
   import { SixButton } from '@six-group/ui-library-vue';
   ```

2. Use it in the template

   ```html
   <six-button type="primary" @click="doIt()">Click Me</six-button>
   ```

## Router

If you are using `vue-router` and want to use `router-link` attributes on the web components, you
have to pass the router as part of the configuration to the `UiLibraryVue` plugin:

```ts
app.use(UiLibraryVue, { router });
```

You can then use `router-link` on any component from the library like this:

```html
<six-sidebar-item-group router-link="/the-link" name="Link Demo" />
```

## Forms

Form components like `six-input`, `six-checkbox` or `six-select` integrate smoothly with Vue’s
`v-model` bindings.

### Error Message Translations

For proper translation, set the lang attribute on the `html` element. Languages available are `en`,
`de`, `it`, and `fr`.

## Polyfills

By default, polyfills are not included when registering the Vue plugin in your app.

For non-browser environments, like unit tests, enable them as follows:

```ts
app.use(UiLibraryVue, { applyPolyfills: true });
```
