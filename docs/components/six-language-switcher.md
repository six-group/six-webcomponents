# six-language-switcher


# SIX Language Switcher

The `six-language-switcher` can switch between languages.

The selected language is covered in colour.

<docs-demo-six-language-switcher-169></docs-demo-six-language-switcher-169>

```html
<six-language-switcher></six-language-switcher>
```


## Define Selectable Languages

You can define the languages you want to be able to choose from, by passing your language array via `languages`

<docs-demo-six-language-switcher-170></docs-demo-six-language-switcher-170>

```html
<six-language-switcher id="custom-language-set"></six-language-switcher>
<div style="margin-top: 1rem">
  <span style="font-weight: bold">selected language: </span><span id="selected-language">nothing selected</span>
</div>
<script type="module">
  const languageSwitcher = document.getElementById('custom-language-set');
  const selectedLanguage = document.getElementById('selected-language');
  languageSwitcher.languages = ['FR', 'IT', 'DE'];

  languageSwitcher.addEventListener('six-language-switcher-change', (event) => {
    const { detail } = event;
    selectedLanguage.innerText = detail;
  });
</script>
```


## Setting a selected language

By using the attribute `selected` you can define which language should be selected

<docs-demo-six-language-switcher-171></docs-demo-six-language-switcher-171>

```html
<six-language-switcher selected="DE"></six-language-switcher>
```


## Handling asynchronous setting of languages

In cases where you fetch the languages array e.g. from a backend, there might be a scenario where the `six-language-switcher` is rendered before you can set the languages array.

However, as you can see in this example, the `six-language-switcher` supports setting languages at a later stage.

<docs-demo-six-language-switcher-172></docs-demo-six-language-switcher-172>

```html
<six-language-switcher id="async-six-lang-switcher"></six-language-switcher>
<script type="module">
  const langSwitcher = document.getElementById('async-six-lang-switcher');
  setTimeout(() => (langSwitcher.languages = ['FR', 'IT', 'DE']), 250);
</script>
```


## Custom Output

<docs-demo-six-language-switcher-173></docs-demo-six-language-switcher-173>

```html
<six-language-switcher id="custom-output"></six-language-switcher>
<div style="margin-top: 1rem">
  <span style="font-weight: bold">selected language: </span><span id="selected-language-custom-output">nothing selected</span>
</div>
<script type="module">
  const languageSwitcher = document.getElementById('custom-output');
  const selectedLanguage = document.getElementById('selected-language-custom-output');
  languageSwitcher.languages = [
    { key: 'FR', value: 'French' },
    { key: 'IT', value: 'Italian' },
    { key: 'DE', value: 'German' },
  ];
  languageSwitcher.addEventListener('six-language-switcher-change', (event) => {
    const { detail } = event;
    selectedLanguage.innerText = detail;
  });
</script>
```



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute  | Description                                       | Type                                     | Default             |
| ----------- | ---------- | ------------------------------------------------- | ---------------------------------------- | ------------------- |
| `languages` | --         | The languages which should be selectable options. | `SixLanguageSwitcherInput[] \| string[]` | `DEFAULT_LANGUAGES` |
| `selected`  | `selected` | The language which should be shown as selected    | `string \| undefined`                    | `undefined`         |


## Events

| Event                          | Description                                       | Type                  |
| ------------------------------ | ------------------------------------------------- | --------------------- |
| `six-language-switcher-change` | Emitted when the language switchers value changes | `CustomEvent<string>` |


## Shadow Parts

| Part          | Description |
| ------------- | ----------- |
| `"container"` |             |
| `"label"`     |             |
| `"separator"` |             |


----------------------------------------------

Copyright © 2021-present SIX-Group
