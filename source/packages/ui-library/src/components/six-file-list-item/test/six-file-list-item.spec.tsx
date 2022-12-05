import { SixFileListItem } from '../six-file-list-item';
import { newSpecPage } from '@stencil/core/testing';

describe('six-file-list-item', () => {
  it('should create a component instance', () => {
    expect(new SixFileListItem()).toBeInstanceOf(SixFileListItem);
  });

  it('renders minimal six-file-list-item', async () => {
    const page = await newSpecPage({
      components: [SixFileListItem],
      html: `<six-file-list-item></six-file-list-item>`,
    });

    expect(page.root).toEqualHtml(`
      <six-file-list-item date="" identifier="">
        <mock:shadow-root>
          <div class="six-files-list-item">
            <span class="six-files-list-item__name"></span>
            <span class="six-files-list-item__date"></span>
            <six-icon class="six-files-list-item__icon" size="small">
              delete
            </six-icon>
          </div>
        </mock:shadow-root>
      </six-file-list-item>
    `);
  });

  it('renders six-file-list-item with name correctly', async () => {
    const page = await newSpecPage({
      components: [SixFileListItem],
      html: `<six-file-list-item identifier="id1" name="file_1.pdf"></six-file-list-item>`,
    });

    expect(page.root).toEqualHtml(`
      <six-file-list-item date="" identifier="id1" name="file_1.pdf">
        <mock:shadow-root>
          <div class="six-files-list-item">
            <span class="six-files-list-item__name">
                file_1.pdf
            </span>
            <span class="six-files-list-item__date"></span>
            <six-icon class="six-files-list-item__icon" size="small">
              delete
            </six-icon>
          </div>
        </mock:shadow-root>
      </six-file-list-item>
    `);
  });

  it('renders six-file-list-item with date correctly', async () => {
    const page = await newSpecPage({
      components: [SixFileListItem],
      html: `<six-file-list-item identifier="id_2" name="file_2.pdf" date="23.09.2021, 09:12"></six-file-list-item>`,
    });

    expect(page.root).toEqualHtml(`
      <six-file-list-item date="23.09.2021, 09:12" identifier="id_2" name="file_2.pdf">
        <mock:shadow-root>
          <div class="six-files-list-item">
            <span class="six-files-list-item__name">
                file_2.pdf
            </span>
            <span class="six-files-list-item__date">
                23.09.2021, 09:12
            </span>
            <six-icon class="six-files-list-item__icon" size="small">
              delete
            </six-icon>
          </div>
        </mock:shadow-root>
      </six-file-list-item>
    `);
  });

  it('renders six-file-list-item with size correctly', async () => {
    const page = await newSpecPage({
      components: [SixFileListItem],
      html: `
      <six-file-list-item
          identifier="id_3"
          name="file_3.pdf"
          date="03.12.2021, 10:22"
          size="75680"
        ></six-file-list-item>`,
    });

    expect(page.root).toEqualHtml(`
      <six-file-list-item date="03.12.2021, 10:22" identifier="id_3" name="file_3.pdf" size="75680">
        <mock:shadow-root>
          <div class="six-files-list-item">
            <span class="six-files-list-item__name">
              file_3.pdf
            </span>
            <span class="six-files-list-item__date">
              03.12.2021, 10:22
            </span>
            <span class="six-files-list-item__size">
              74 KB
            </span>
            <six-icon class="six-files-list-item__icon" size="small">
              delete
            </six-icon>
          </div>
        </mock:shadow-root>
      </six-file-list-item>
    `);
  });

  it('renders six-file-list-item with download disabled', async () => {
    const page = await newSpecPage({
      components: [SixFileListItem],
      html: `
      <six-file-list-item
          identifier="id_4"
          name="file_4.pdf"
          date="02.10.2021, 12:25"
          size="77590"
          nodownload
        ></six-file-list-item>`,
    });

    expect(page.root).toEqualHtml(`
      <six-file-list-item date="02.10.2021, 12:25" identifier="id_4" name="file_4.pdf" nodownload="" size="77590">
        <mock:shadow-root>
          <div class="six-files-list-item">
            <span class="six-files-list-item__name six-files-list-item__name--disabled">
              file_4.pdf
            </span>
            <span class="six-files-list-item__date">
              02.10.2021, 12:25
            </span>
            <span class="six-files-list-item__size">
              76 KB
            </span>
            <six-icon class="six-files-list-item__icon" size="small">
              delete
            </six-icon>
          </div>
        </mock:shadow-root>
      </six-file-list-item>
    `);
  });

  it('renders six-file-list-item with deletion disabled', async () => {
    const page = await newSpecPage({
      components: [SixFileListItem],
      html: `
      <six-file-list-item
          identifier="id_5"
          name="file_5.pdf"
          date="11.07.2021, 10:32"
          size="72040"
          nodelete
        ></six-file-list-item>`,
    });

    expect(page.root).toEqualHtml(`
      <six-file-list-item date="11.07.2021, 10:32" identifier="id_5" name="file_5.pdf" nodelete="" size="72040">
        <mock:shadow-root>
          <div class="six-files-list-item">
            <span class="six-files-list-item__name">
              file_5.pdf
            </span>
            <span class="six-files-list-item__date">
              11.07.2021, 10:32
            </span>
            <span class="six-files-list-item__size">
              70 KB
            </span>
            <six-icon class="six-files-list-item__icon six-files-list-item__icon--disabled" size="small">
              delete
            </six-icon>
          </div>
        </mock:shadow-root>
      </six-file-list-item>
    `);
  });
});
