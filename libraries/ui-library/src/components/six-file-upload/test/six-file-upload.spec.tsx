import { SixFileUpload } from '../six-file-upload';
import { newSpecPage } from '@stencil/core/testing';

describe('six-file-upload', () => {
  it('should create a component instance', () => {
    expect(new SixFileUpload()).toBeInstanceOf(SixFileUpload);
  });

  it('renders minimal six-file-upload', async () => {
    const page = await newSpecPage({
      components: [SixFileUpload],
      html: `<six-file-upload></six-file-upload>`,
    });

    expect(page.root).toEqualHtml(`
        <six-file-upload>
          <div class="six-file-upload">
            <six-card aria-invalid="false" class="six-file-upload__container--full">
              <div class="six-file-upload__drop-zone">
                <div>
                  <span>
                    <span>
                      Drop files to upload, or
                      <span class="six-file-upload__label--highlighted">
                        browse
                      </span>
                    </span>
                  </span>
                  <input class="six-file-upload__input" name="resume" type="file">
                </div>
              </div>
            </six-card>
            <div aria-hidden="true"></div>
          </div>
        </six-file-upload>
    `);
  });

  it('renders custom label', async () => {
    const page = await newSpecPage({
      components: [SixFileUpload],
      html: `<six-file-upload label="some custom label"></six-file-upload>`,
    });

    expect(page.root).toEqualHtml(`
        <six-file-upload label="some custom label">
          <div class="six-file-upload">
            <six-card aria-invalid="false" class="six-file-upload__container--full">
              <div class="six-file-upload__drop-zone">
                <div>
                  <span>
                    some custom label
                  </span>
                  <input class="six-file-upload__input" name="resume" type="file">
                </div>
              </div>
            </six-card>
            <div aria-hidden="true"></div>
          </div>
        </six-file-upload>
    `);
  });

  it('renders disabled', async () => {
    const page = await newSpecPage({
      components: [SixFileUpload],
      html: `<six-file-upload disabled></six-file-upload>`,
    });

    expect(page.root).toEqualHtml(`
        <six-file-upload disabled="">
          <div class="six-file-upload six-file-upload--disabled">
            <six-card aria-invalid="false" class="six-file-upload__container--full" disabled="">
              <div class="six-file-upload__drop-zone">
                <div>
                  <span>
                    <span>
                      Drop files to upload, or
                      <span class="six-file-upload__label--highlighted">
                        browse
                      </span>
                    </span>
                  </span>
                  <input class="six-file-upload__input" disabled="" name="resume" type="file">
                </div>
              </div>
            </six-card>
            <div aria-hidden="true"></div>
          </div>
        </six-file-upload>
    `);
  });

  it('renders compact', async () => {
    const page = await newSpecPage({
      components: [SixFileUpload],
      html: `<six-file-upload compact></six-file-upload>`,
    });

    expect(page.root).toEqualHtml(`
        <six-file-upload compact="">
          <div class="six-file-upload">
            <six-button aria-invalid="false" class="six-file-upload__container--compact">
             <six-icon slot="prefix">
                  arrow_circle_up
                </six-icon>
              <div class="six-file-upload__drop-zone six-file-upload__drop-zone--compact">
                <div>
                  <span>
                    Upload
                  </span>
                  <input class="six-file-upload__input" name="resume" type="file">
                </div>
              </div>
            </six-button>
            <div aria-hidden="true"></div>
          </div>
        </six-file-upload>
    `);
  });

  it('renders compact and disabled', async () => {
    const page = await newSpecPage({
      components: [SixFileUpload],
      html: `<six-file-upload compact disabled></six-file-upload>`,
    });

    expect(page.root).toEqualHtml(`
        <six-file-upload compact="" disabled="">
          <div class="six-file-upload six-file-upload--disabled">
            <six-button aria-invalid="false" class="six-file-upload__container--compact" disabled="">
              <six-icon slot="prefix">
                  arrow_circle_up
                </six-icon>
              <div class="six-file-upload__drop-zone six-file-upload__drop-zone--compact">
                <div>
                  <span>
                    Upload
                  </span>
                  <input class="six-file-upload__input" disabled="" name="resume" type="file">
                </div>
              </div>
            </six-button>
            <div aria-hidden="true"></div>
          </div>
        </six-file-upload>
    `);
  });

  it('renders uploading', async () => {
    const page = await newSpecPage({
      components: [SixFileUpload],
      html: `<six-file-upload uploading></six-file-upload>`,
    });

    expect(page.root).toEqualHtml(`
        <six-file-upload uploading="">
          <div class="six-file-upload six-file-upload--disabled">
            <six-card aria-invalid="false" class="six-file-upload__container--full" disabled="">
              <div class="six-file-upload__drop-zone">
                <span class="six-file-upload__drop-zone__spinner-container">
                  <six-spinner></six-spinner>
                  Uploading...
                </span>
              </div>
            </six-card>
            <div aria-hidden="true"></div>
          </div>
          </six-file-upload>
    `);
  });

  it('renders invalid', async () => {
    const page = await newSpecPage({
      components: [SixFileUpload],
      html: `<six-file-upload invalid error-text="error message"></six-file-upload>`,
    });

    expect(page.root).toEqualHtml(`
        <six-file-upload invalid error-text="error message">
          <div class="six-file-upload">
            <six-card aria-invalid="true" class="six-file-upload__container--full">
              <div class="six-file-upload__drop-zone">
                <div>
                  <span>
                    <span>
                      Drop files to upload, or
                      <span class="six-file-upload__label--highlighted">
                        browse
                      </span>
                    </span>
                  </span>
                  <input class="six-file-upload__input" name="resume" type="file">
                </div>
              </div>
            </six-card>
            <div aria-hidden="false">
            <slot-fb name="error-text">
              <six-error>
                <div class="six-file-upload__error-text">error message</div>
              </six-error>
            </slot-fb>
            </div>
          </div>
        </six-file-upload>
    `);
  });

  it('does not render error message if not invalid', async () => {
    const page = await newSpecPage({
      components: [SixFileUpload],
      html: `<six-file-upload error-text="error message"></six-file-upload>`,
    });

    expect(page.root).toEqualHtml(`
        <six-file-upload error-text="error message">
          <div class="six-file-upload">
            <six-card aria-invalid="false" class="six-file-upload__container--full">
              <div class="six-file-upload__drop-zone">
                <div>
                  <span>
                    <span>
                      Drop files to upload, or
                      <span class="six-file-upload__label--highlighted">
                        browse
                      </span>
                    </span>
                  </span>
                  <input class="six-file-upload__input" name="resume" type="file">
                </div>
              </div>
            </six-card>
            <div aria-hidden="true">
              <slot-fb name="error-text">
                <six-error>
                  <div class="six-file-upload__error-text">error message</div>
                </six-error>
              </slot-fb>
            </div>
          </div>
        </six-file-upload>
    `);
  });

  it('render error slot when invalid', async () => {
    const page = await newSpecPage({
      components: [SixFileUpload],
      html: `<six-file-upload invalid><slot name="error-text"><b>bold error</b></six-file-upload>`,
    });

    expect(page.root).toEqualHtml(`
        <six-file-upload invalid>
          <slot hidden="" name="error-text">
            <b>
              bold error
            </b>
          </slot>
          <div class="six-file-upload">
            <six-card aria-invalid="true" class="six-file-upload__container--full">
              <div class="six-file-upload__drop-zone">
                <div>
                  <span>
                    <span>
                      Drop files to upload, or
                      <span class="six-file-upload__label--highlighted">
                        browse
                      </span>
                    </span>
                  </span>
                  <input class="six-file-upload__input" name="resume" type="file">
                </div>
              </div>
            </six-card>
            <div aria-hidden="false">
            </div>
          </div>
        </six-file-upload>
    `);
  });
});
