export function submitForm(element: HTMLElement) {
  const form = element.closest('form');
  if (form != null) {
    // Calling form.submit() would bypass the submit event and constraint validation.
    // To prevent this, we inject a native submit button into the form, "click" it,
    // then remove it to simulate a standard form submission.
    const fakeButton = document.createElement('button');
    fakeButton.type = 'submit';
    fakeButton.style.display = 'none';
    form.appendChild(fakeButton);
    fakeButton.click();
    fakeButton.remove();
  }
}
