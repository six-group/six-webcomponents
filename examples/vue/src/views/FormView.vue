<script setup lang="ts">
import {
  SixButton,
  SixCheckbox,
  SixInput,
  SixLayoutGrid,
  SixRange,
  SixSwitch,
  SixTextarea,
  SixRadio,
} from '@six-group/ui-library-vue';
import { ref } from 'vue';

const inputValue = ref('');
const textareaValue = ref('');
const checkboxValue = ref(true);
const switchValue = ref(true);
const rangeValue = ref(0);
const radioValues = ref(['Option 1', 'Option 2', 'Option 3', 'Option 4']);
const radioValue = ref<string | undefined>('Option 3');

const invalid = ref(false);
const disabled = ref(false);
</script>

<template>
  <h2>Form</h2>

  <six-layout-grid :columns="1">
    <six-input
      v-model="inputValue"
      label="Input"
      :disabled="disabled"
      :invalid="invalid"
      error-text="Input Error"
    ></six-input>
    <pre>Value: {{ inputValue }}</pre>

    <six-textarea
      v-model="textareaValue"
      label="Textarea"
      :disabled="disabled"
      :invalid="invalid"
      error-text="Textarea Error"
    ></six-textarea>
    <pre>Value: {{ textareaValue }}</pre>

    <six-range
      v-model="rangeValue"
      label="Range"
      :min="0"
      :max="100"
      :step="1"
      :disabled="disabled"
      :invalid="invalid"
      error-text="Range Error"
    ></six-range>
    <pre>Value: {{ rangeValue }}</pre>

    <!-- TODO: Add support for v-model on six-switch -->
    <six-switch
      :checked="switchValue"
      @six-switch-change="switchValue = $event.target.checked"
      label="Switch"
      :disabled="disabled"
      :invalid="invalid"
      error-text="Switch Error"
    ></six-switch>
    <pre>Value: {{ switchValue }}</pre>

    <!-- TODO: Add support for  v-model on six-checkbox -->
    <six-checkbox
      :checked="checkboxValue"
      @six-checkbox-change="checkboxValue = $event.target.checked"
      label="Checkbox"
      :disabled="disabled"
      :invalid="invalid"
      error-text="Checkbox Error"
    ></six-checkbox>
    <pre>Value: {{ checkboxValue }}</pre>

    <!-- TODO: Add support for v-model on six-radio -->
    <six-radio
      name="option"
      v-for="value of radioValues"
      :key="value"
      :value="value"
      :checked="value === radioValue"
      @six-radio-change="radioValue = $event.target.value"
      :disabled="disabled"
      >{{ value }}</six-radio
    >
    <pre>Value: {{ radioValue }}</pre>

    <div class="buttons">
      <six-button @click="invalid = !invalid">{{ invalid ? 'Hide Errors' : 'Show Errors' }}</six-button>
      <six-button @click="disabled = !disabled">{{ disabled ? 'Enable' : 'Disable' }}</six-button>
    </div>
  </six-layout-grid>
</template>

<style scoped>
h2 {
  margin-top: 0;
}

six-layout-grid {
  row-gap: var(--six-spacing-x-small);
  max-width: 640px;
}

.buttons {
  display: flex;
  gap: var(--six-spacing-x-small);
}
</style>
