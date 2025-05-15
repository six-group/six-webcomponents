<script setup lang="ts">
import type { SixFileUploadSuccessPayload } from '@six-group/ui-library';
import {
  SixButton,
  SixCheckbox,
  SixDate,
  SixFileUpload,
  SixInput,
  SixLayoutGrid,
  SixMenuItem,
  SixRadio,
  SixRange,
  SixSelect,
  SixSwitch,
  SixTextarea,
  SixGroupLabel,
} from '@six-group/ui-library-vue';
import { ref } from 'vue';

const inputValue = ref('');
const textareaValue = ref('');
const checkboxValue = ref(true);
const switchValue = ref(true);
const rangeValue = ref(0);
const radioValues = ref(['Option 1', 'Option 2', 'Option 3', 'Option 4']);
const radioValue = ref<string | undefined>('Option 3');
const selectValues = ref(['Option 1', 'Option 2', 'Option 3', 'Option 4']);
const selectValue = ref<string | undefined>('Option 2');
const dateValue = ref<string>('2025-01-01');
const file = ref('');
const uploading = ref(false);

const invalid = ref(false);
const disabled = ref(false);

const onFileSelected = async (event: CustomEvent<SixFileUploadSuccessPayload>) => {
  const selectedfile = (event.detail as { file: File }).file;
  file.value = selectedfile.name;
  uploading.value = true;
  // simulate the uploading operation
  setTimeout(() => {
    file.value = '';
    uploading.value = false;
  }, 3000);
};
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

    <six-switch
      v-model="switchValue"
      label="Switch"
      :disabled="disabled"
      :invalid="invalid"
      error-text="Switch Error"
    ></six-switch>
    <pre>Value: {{ switchValue }}</pre>

    <six-checkbox
      v-model="checkboxValue"
      label="Checkbox"
      :disabled="disabled"
      :invalid="invalid"
      error-text="Checkbox Error"
    ></six-checkbox>
    <pre>Value: {{ checkboxValue }}</pre>

    <six-radio
      name="option"
      v-for="value of radioValues"
      :key="value"
      :value="value"
      :checked="value === radioValue"
      @change="radioValue = $event.target.value"
      :disabled="disabled"
      >{{ value }}</six-radio
    >
    <pre>Value: {{ radioValue }}</pre>

    <six-select
      v-model="selectValue"
      label="Select"
      placeholder="Select one"
      :disabled="disabled"
      :invalid="invalid"
      :filter="true"
      error-text="Select Error"
    >
      <six-menu-item v-for="value of selectValues" :key="value" :value="value">{{ value }}</six-menu-item>
    </six-select>
    <pre>Value: {{ selectValue }}</pre>

    <six-date v-model="dateValue" :disabled="disabled" :invalid="invalid" error-text="Datepicker Error"></six-date>
    <pre>Value: {{ dateValue }}</pre>

    <six-group-label label="File Upload">
      <six-file-upload :uploading="uploading" @six-file-upload-success="onFileSelected"></six-file-upload>
      <pre>Selected file: {{ file }}</pre>
    </six-group-label>

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
