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
            <six-card class="six-file-upload__container--full">
              <div class="six-file-upload__drop-zone">
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
            </six-card>
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
            <six-card class="six-file-upload__container--full">
              <div class="six-file-upload__drop-zone">
                <span>
                  some custom label
                </span>
                <input class="six-file-upload__input" name="resume" type="file">
              </div>
            </six-card>
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
            <six-card class="six-file-upload__container--full">
              <div class="six-file-upload__drop-zone">
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
            </six-card>
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
            <six-button class="six-file-upload__container--compact">
              <span slot="prefix">
                <six-icon class="six-file-upload__label-icon">
                  arrow_circle_up
                </six-icon>
              </span>
              <div class="six-file-upload__drop-zone six-file-upload__drop-zone--compact">
                <span>
                  Upload
                </span>
                <input class="six-file-upload__input" name="resume" type="file">
              </div>
            </six-button>
          </div>
        </six-file-upload>
    `);
  });
});
