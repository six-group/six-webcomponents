# Vue

Find the deployed Vue Demo App [here](TODO).

## Initial setup
### Installing the Vue specific module
First you need to install the Vue specific library module.
This is a wrapper around the ui-library which makes the integration of the Web Components very easy.
Additionally, you will be able to use <code>v-model</code> on some components.  
```bash
npm install @six-group/ui-library-vue --save
```

### Import style sheet
You need to import the SIX style into your project.
Just link it in the `<style>` section of your main component: `src/App.vue`
```js
<style>
@import '~@six-group/ui-library/dist/ui-library/ui-library.css';
</style>
```

### Import assets
As the last step you have to include all static assets from the component library.
Please add this lines into your `vue.config.js`.
If this file doesn't exist then you can just create it in the root directory of your project.
```js
...
const CopyWebpackPlugin = require("copy-webpack-plugin")

module.exports = {
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin(
      [
        {
          from: 'node_modules/@six-group/ui-library/dist/ui-library/assets',
          to: 'assets'
        }
      ]
      )
    ]
  }
}
...
```

### Usage
Using the library in your Vue component is very easy.
Just import the Six component you want to use from `@six-group/ui-library-vue` and add it to the `components: {}`
section of your own component. Here is a short example:
```vue
<template>
  <six-form @six-form-submit="doSomething">
    <six-input label="Name" v-model="user.name" required />
    <six-input label="E-mail" type="email" v-model="user.email" required />
    <six-input label="Username" v-model="user.username" />
    <six-select label="Role" v-model="user.role">
      <six-menu-item value="admin">Administrator</six-menu-item>
      <six-menu-item value="user">User</six-menu-item>
    </six-select>
    <six-checkbox v-model="user.important">Important</six-checkbox>
    <br><br>
    <six-button submit>Submit</six-button>
  </six-form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { SixForm, SixInput, SixSelect, SixMenuItem, SixCheckbox, SixButton } from '@six-group/ui-library-vue';

export default defineComponent({
  name: 'AppUserForm',
  components: { SixForm, SixInput, SixSelect, SixMenuItem, SixCheckbox, SixButton },
  props: [ 'user' ],
  methods: {
    doSomething() {
      // method is called on submit
    },
  },
});
</script>

<style scoped lang="scss">
six-input,
six-select,
six-checkbox {
  margin-bottom: 1rem;
}
</style>
```
