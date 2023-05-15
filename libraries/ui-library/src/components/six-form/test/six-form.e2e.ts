import { newE2EPage } from '@stencil/core/testing';

const testForm = `
  <six-form class="form-overview">
    <six-input name="name" type="text" label="Name" value="Mr. Meow"></six-input>
    <br>
    <six-select name="favorite" label="Select your favorite" value="cats">
      <six-menu-item value="birds">Birds</six-menu-item>
      <six-menu-item value="cats">Cats</six-menu-item>
      <six-menu-item value="dogs">Dogs</six-menu-item>
    </six-select>
    <br>
    <six-checkbox name="agree" value="yes" checked>
      I agree
    </six-checkbox>
    <br>
    <six-textarea name="comment" label="Comment" value="myComment"></six-textarea>
    <br>
    <six-datepicker name="birthday" label="Birthday" value="2020-01-01"></six-datepicker>
    <br><br>
    <six-button submit>Submit</six-button>
  </six-form>
`;

const testFormWithValidations = `
  <six-form class="form-overview">
    <six-input name="name" type="text" label="Name" required></six-input>
    <br>
    <six-select name="favorite" label="Select your favorite" required>
      <six-menu-item value="birds">Birds</six-menu-item>
      <six-menu-item value="cats">Cats</six-menu-item>
      <six-menu-item value="dogs">Dogs</six-menu-item>
    </six-select>
    <br>
    <six-checkbox name="agree" value="yes" required>
      I agree
    </six-checkbox>
    <br>
    <six-textarea name="comment" label="Comment" required></six-textarea>
    <br>
    <six-datepicker name="birthday" label="Birthday" debounce=0 required></six-datepicker>
    <br><br>
    <six-button submit>Submit</six-button>
  </six-form>
`;

describe('<six-form>', () => {
  it('should emit six-form-submit when submit button clicked', async () => {
    const page = await newE2EPage({
      html: testForm,
    });
    const form = await page.find('six-form');
    const button = await page.find('six-button');
    const sixSubmit = await form.spyOnEvent('six-form-submit');

    await button.click();

    expect(sixSubmit).toHaveReceivedEventTimes(1);
  });

  it('should emit six-form-submit when submit method called', async () => {
    const page = await newE2EPage({
      html: testForm,
    });
    const form = await page.find('six-form');
    const sixSubmit = await form.spyOnEvent('six-form-submit');

    await form.callMethod('submit');

    expect(sixSubmit).toHaveReceivedEventTimes(1);
  });

  it('should emit six-form-submit when enter pressed inside an input', async () => {
    const page = await newE2EPage({
      html: testForm,
    });
    const form = await page.find('six-form');
    const inputControl = await page.find('six-input >>> .input__control');
    const sixSubmit = await form.spyOnEvent('six-form-submit');

    await inputControl.press('Enter');

    expect(sixSubmit).toHaveReceivedEventTimes(1);
  });

  it('should return array of form elements when getFormControls() is called', async () => {
    const page = await newE2EPage({
      html: testForm,
    });
    const form = await page.find('six-form');
    const inputEl = await page.$eval('six-input', (el) => el);
    const selectEl = await page.$eval('six-select', (el) => el);
    const checkboxEl = await page.$eval('six-checkbox', (el) => el);
    const textareaEl = await page.$eval('six-textarea', (el) => el);
    const datepickerEl = await page.$eval('six-datepicker', (el) => el);
    const buttonEl = await page.$eval('six-button', (el) => el);
    const formControls = await form.callMethod('getFormControls');

    expect(formControls).toEqual([inputEl, selectEl, checkboxEl, textareaEl, datepickerEl, buttonEl]);
  });

  it('should return FormData object when getFormData() is called', async () => {
    const page = await newE2EPage({
      html: testForm,
    });
    const formData = await page.$eval('six-form', async (el: HTMLSixFormElement) => [
      ...(await el.getFormData()).entries(),
    ]);

    expect(formData).toEqual([
      ['name', 'Mr. Meow'],
      ['favorite', 'cats'],
      ['agree', 'yes'],
      ['comment', 'myComment'],
      ['birthday', '2020-01-01'],
    ]);
  });

  it('checks that not six-form-submit event is submitted when form is not valid', async () => {
    const page = await newE2EPage({
      html: testFormWithValidations,
    });
    const form = await page.find('six-form');
    const sixSubmitBefore = await form.spyOnEvent('six-form-submit');
    await form.callMethod('submit');
    expect(sixSubmitBefore).toHaveReceivedEventTimes(0);

    const inputField = await page.find('six-input');
    inputField.setProperty('value', 'Mr. Test');
    const selectField = await page.find('six-select');
    selectField.setProperty('value', 'Birds');
    const checkField = await page.find('six-checkbox');
    checkField.setProperty('checked', true);
    const textareaField = await page.find('six-textarea');
    textareaField.setProperty('value', 'myComment');
    const datepicker = await page.find('six-datepicker');
    await datepicker.click();
    await page.keyboard.type('15.5.2021');
    await page.keyboard.press('Enter');
    await page.waitForChanges();

    const sixSubmitAfter = await form.spyOnEvent('six-form-submit');
    await form.callMethod('submit');
    expect(sixSubmitAfter).toHaveReceivedEventTimes(1);

    const formData = await page.$eval('six-form', async (el: HTMLSixFormElement) => [
      ...(await el.getFormData()).entries(),
    ]);

    expect(formData).toEqual([
      ['name', 'Mr. Test'],
      ['favorite', 'Birds'],
      ['agree', 'yes'],
      ['comment', 'myComment'],
      ['birthday', '2021-05-15'],
    ]);
  });

  it('checks that custom validations are triggered', async () => {
    const page = await newE2EPage({
      html: '<six-form class="form-overview"><six-input name="name" type="text" label="Name"></six-input>',
    });
    const form = await page.find('six-form');
    const sixSubmitBefore = await form.spyOnEvent('six-form-submit');
    await form.callMethod('submit');
    expect(sixSubmitBefore).toHaveReceivedEventTimes(1);

    const inputField = await page.find('six-input');
    await inputField.callMethod('setCustomValidity', 'my Custom Error');

    const sixSubmitBetween = await form.spyOnEvent('six-form-submit');
    await form.callMethod('submit');
    expect(sixSubmitBetween).toHaveReceivedEventTimes(0);

    await inputField.callMethod('setCustomValidity', '');

    const sixSubmitAfter = await form.spyOnEvent('six-form-submit');
    await form.callMethod('submit');
    expect(sixSubmitAfter).toHaveReceivedEventTimes(1);
  });

  it('checks that novalidate skips validation', async () => {
    const page = await newE2EPage({
      html: '<six-form class="form-overview" novalidate><six-input name="name" type="text" label="Name" required></six-input>',
    });
    const form = await page.find('six-form');
    const sixSubmitBefore = await form.spyOnEvent('six-form-submit');
    await form.callMethod('submit');
    expect(sixSubmitBefore).toHaveReceivedEventTimes(1);
  });

  it('should render error messages when submit method called', async () => {
    const page = await newE2EPage({
      html: testFormWithValidations,
    });
    const form = await page.find('six-form');
    await form.spyOnEvent('six-form-submit');

    await form.callMethod('submit');

    await page.setViewport({ width: 520, height: 500 });

    // when
    const results = await page.compareScreenshot('SIX Form (help text)', { fullPage: false });

    // then test against hard pixels
    expect(results).toMatchScreenshot({ allowableMismatchedPixels: 100 });
  });

  it('checks check validity of form', async () => {
    const page = await newE2EPage({
      html: testFormWithValidations,
    });
    const form = await page.find('six-form');
    let valid = await form.callMethod('checkValidity');
    expect(valid).toBeFalsy();

    const inputField = await page.find('six-input');
    inputField.setProperty('value', 'Mr. Test');
    const selectField = await page.find('six-select');
    selectField.setProperty('value', 'Birds');
    const checkField = await page.find('six-checkbox');
    checkField.setProperty('checked', true);
    const textareaField = await page.find('six-textarea');
    textareaField.setProperty('value', 'myComment');
    await page.waitForChanges();
    const datepicker = await page.find('six-datepicker');
    await datepicker.click();
    await page.keyboard.type('15.5.2021');
    await page.keyboard.press('Enter');
    await page.waitForChanges();

    valid = await form.callMethod('checkValidity');
    expect(valid).toBeTruthy();
  });

  it('checks change event of form', async () => {
    const page = await newE2EPage({
      html: testFormWithValidations,
    });
    const form = await page.find('six-form');
    let valid = await form.callMethod('checkValidity');
    expect(valid).toBeFalsy();

    const inputField = await page.find('six-input');
    const inputControl = await page.find('six-input >>> .input__control');
    const changeAfterInputField = await form.spyOnEvent('six-form-change');
    await inputControl.press('A');
    await inputField.callMethod('removeFocus');
    expect(changeAfterInputField).toHaveReceivedEventTimes(1);
    expect(changeAfterInputField.lastEvent.detail.valid).toBe(false);

    const changeAfterSelectField = await form.spyOnEvent('six-form-change');
    const selectField = await page.find('six-select');
    selectField.setProperty('value', 'Birds');
    await page.waitForChanges();
    expect(changeAfterSelectField).toHaveReceivedEventTimes(1);
    expect(changeAfterSelectField.lastEvent.detail.valid).toBe(false);

    const changeAfterCheckboxField = await form.spyOnEvent('six-form-change');
    const checkField = await page.find('six-checkbox');
    checkField.setProperty('checked', true);
    await page.waitForChanges();
    expect(changeAfterCheckboxField).toHaveReceivedEventTimes(1);
    expect(changeAfterCheckboxField.lastEvent.detail.valid).toBe(false);

    const changeAfterTextareaField = await form.spyOnEvent('six-form-change');
    const textareaField = await page.find('six-textarea');
    const textareaControl = await page.find('six-textarea >>> .textarea__control');
    await textareaControl.press('A');
    await textareaField.callMethod('removeFocus');
    expect(changeAfterTextareaField).toHaveReceivedEventTimes(1);
    expect(changeAfterTextareaField.lastEvent.detail.valid).toBe(false);

    const changeAfterDateField = await form.spyOnEvent('six-form-change');
    const datepicker = await page.find('six-datepicker');
    await datepicker.click();
    await page.keyboard.type('15.5.2021');
    await page.waitForChanges();
    expect(changeAfterDateField).toHaveReceivedEvent();
    expect(changeAfterDateField.lastEvent.detail.valid).toBe(true);
    valid = await form.callMethod('checkValidity');
    expect(valid).toBeTruthy();
  });
});
