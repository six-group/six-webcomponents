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
  SixRating,
} from '@six-group/ui-library-react';
import { useState } from 'react';

import styles from './form.module.css';
import { SixFileUploadSuccessPayload } from '@six-group/ui-library';

export function Form() {
  const [inputValue, setInputValue] = useState('');
  const [textareaValue, setTextareaValue] = useState('');
  const [checkboxValue, setCheckboxValue] = useState(true);
  const [switchValue, setSwitchValue] = useState(true);
  const [rangeValue, setRangeValue] = useState(0);
  const [ratingValue, setRatingValue] = useState(0);
  const [radioValue, setRadioValue] = useState('Option 3');
  const [selectValue, setSelectValue] = useState('Option 2');
  const [dateValue, setDateValue] = useState('2025-01-01');

  const [file, setFile] = useState('');
  const [uploading, setUploading] = useState(false);

  const [isDisabled, setIsDisabled] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);

  const selectValues = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
  const radioValues = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

  const onFileSelected = (files: FileList) => {
    const selectedFile = files[0];
    setFile(selectedFile.name);
    setUploading(true);
    setTimeout(() => {
      setFile('');
      setUploading(false);
    }, 3000);
  };

  return (
    <>
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

        <SixRating
          label="Rating"
          disabled={isDisabled}
          invalid={isInvalid}
          errorText="Rating Error"
          value={ratingValue}
          onSixRatingChange={(e) => setRatingValue(Number(e.detail))}
        />
        <pre className={styles.pre}>Value: {ratingValue}</pre>

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

        <SixDate
          disabled={isDisabled}
          invalid={isInvalid}
          errorText="Datepicker Error"
          value={dateValue}
          onSixChange={(e) => setDateValue(e.detail)}
        />
        <pre className={styles.pre}>Value: {dateValue.toString()}</pre>

        <SixGroupLabel label="File Upload">
          <SixFileUpload
            multiple={false}
            uploading={uploading}
            onSixFileUploadSuccess={(e) =>
              'files' in e.detail && onFileSelected((e.detail as SixFileUploadSuccessPayload).files)
            }
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
    </>
  );
}
