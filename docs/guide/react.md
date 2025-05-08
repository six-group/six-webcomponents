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

2. In your main.tsx file, import the styles:

   ```ts
   import '@six-group/ui-library/dist/ui-library/ui-library.css';
   ```

## Using the Components

The components can be used just like any other React component.

1. Import the component with an import statement like this

   ```ts
   import { SixMenuItem } from '@six-group/ui-library-react';
   ```

2. Use it in the template

   ```html
   <SixMenuItem value="logout">Logout</SixMenuItem>
   ```

## Router

If you are using `react-router` and want to use `NavLink` attributes on the web components

```ts
import { NavLink } from 'react-router';
```

You can then use `router-link` on any component from the library like this:

```ts
const getLinkClassName = ({ isActive }: { isActive: boolean }) =>
  `${styles[isActive ? 'active-link' : 'link']}`;
```

```html
<NavLink to={'/'} className={getLinkClassName}>
  <SixSidebarItemGroup name="Home" icon="home" />
</NavLink>
```

## Forms

If you want to use the web components in a form, you can check out the example in the React example
app. We are not using any form library, but there are some good form libraries out there. Following
a list of libraries, you can check out and which we recommend as a starting point:

- [react-hook-form](https://react-hook-form.com/)
- [tanstack-form](https://tanstack.com/form/latest/docs/overview)

### Error Message Translations

For proper translation, set the lang attribute on the `html` element. Languages available are `en`,
`de`, `it`, and `fr`.

```

```
