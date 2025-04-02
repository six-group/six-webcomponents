import {
  SixButton,
  SixCheckbox,
  SixDatepicker,
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
} from '@six-group/ui-library-react';
import { useState } from 'react';

import styles from './form.module.css';

export function Form() {
  const [inputValue, setInputValue] = useState('');
  const [textareaValue, setTextareaValue] = useState('');
  const [checkboxValue, setCheckboxValue] = useState(true);
  const [switchValue, setSwitchValue] = useState(true);
  const [rangeValue, setRangeValue] = useState(0);
  const [radioValue, setRadioValue] = useState('Option 3');
  const [selectValue, setSelectValue] = useState('Option 2');
  const [datepickerValue, setDatepickerValue] = useState(new Date());

  const [file, setFile] = useState('');
  const [uploading, setUploading] = useState(false);

  const [isDisabled, setIsDisabled] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);

  const selectValues = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
  const radioValues = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

  const onFileSelected = (selectedFile: File) => {
    setFile(selectedFile.name);
    setUploading(true);
    setTimeout(() => {
      setFile('');
      setUploading(false);
    }, 3000);
  };

  return (
    <div>
      <h2>Form</h2>

      <SixLayoutGrid columns={1} className={styles['layout-grid']}>
        <SixInput
          label="Input"
          disabled={isDisabled}
          invalid={isInvalid}
          errorText={'Input Error'}
          value={inputValue}
          onSixInputInput={(e) => setInputValue(e.target.value)}
        />
        <pre className={styles.pre}>Value: {inputValue}</pre>

        <SixTextarea
          label="Textarea"
          disabled={isDisabled}
          invalid={isInvalid}
          errorText="Textarea Error"
          value={textareaValue}
          onSixTextareaInput={(e) => setTextareaValue(e.target.value)}
        />
        <pre className={styles.pre}>Value: {textareaValue}</pre>

        <SixRange
          label="Range"
          min={0}
          max={100}
          step={1}
          disabled={isDisabled}
          invalid={isInvalid}
          errorText="Range Error"
          value={rangeValue}
          onSixRangeChange={(e) => setRangeValue(Number(e.target.value))}
        />
        <pre className={styles.pre}>Value: {rangeValue}</pre>

        <SixSwitch
          label="Switch"
          disabled={isDisabled}
          invalid={isInvalid}
          errorText="Switch Error"
          checked={switchValue}
          onSixSwitchChange={(e) => setSwitchValue(e.detail)}
        />
        <pre className={styles.pre}>Value: {switchValue.toString()}</pre>

        <SixCheckbox
          label="Checkbox"
          disabled={isDisabled}
          invalid={isInvalid}
          errorText="Checkbox Error"
          checked={checkboxValue}
          onSixCheckboxChange={(e) => setCheckboxValue(e.target.checked)}
        />
        <pre className={styles.pre}>Value: {checkboxValue.toString()}</pre>

        {radioValues.map((value) => (
          <SixRadio
            key={value}
            name="option"
            value={value}
            checked={value === radioValue}
            disabled={isDisabled}
            onSixRadioChange={(e) => setRadioValue(e.target.value)}
          >
            {value}
          </SixRadio>
        ))}
        <pre className={styles.pre}>Value: {radioValue}</pre>

        <SixSelect
          label="Select"
          placeholder="Select one"
          disabled={isDisabled}
          invalid={isInvalid}
          errorText="Select Error"
          value={selectValue}
          multiple={false}
          onSixSelectChange={(e) => setSelectValue(e.detail.value as string)}
        >
          {selectValues.map((value) => (
            <SixMenuItem key={value} value={value}>
              {value}
            </SixMenuItem>
          ))}
        </SixSelect>
        <pre className={styles.pre}>Value: {selectValue}</pre>

        <SixDatepicker
          disabled={isDisabled}
          invalid={isInvalid}
          errorText="Datepicker Error"
          value={datepickerValue}
          onSixDatepickerSelect={(e) => setDatepickerValue(e.target.value ?? new Date())}
        />
        <pre className={styles.pre}>Value: {datepickerValue.toString()}</pre>

        <SixGroupLabel label="File Upload">
          <SixFileUpload
            multiple={false}
            uploading={uploading}
            onSixFileUploadSuccess={(e) => 'file' in e.detail && onFileSelected(e.detail.file)}
          />
          <pre className={styles.pre}>Selected file: {file}</pre>
        </SixGroupLabel>

        <div className={styles['button-container']}>
          <SixButton onClick={() => setIsInvalid((oldVal) => !oldVal)}>
            {isInvalid ? 'Hide Errors' : 'Show Errors'}
          </SixButton>
          <SixButton onClick={() => setIsDisabled((oldVal) => !oldVal)}>{isDisabled ? 'Enable' : 'Disable'}</SixButton>
        </div>
      </SixLayoutGrid>
    </div>
  );
}
