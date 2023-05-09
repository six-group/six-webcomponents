import { SixFileList } from '../six-file-list';
import { newSpecPage } from '@stencil/core/testing';

describe('six-file-list', () => {
  it('should create a component instance', () => {
    expect(new SixFileList()).toBeInstanceOf(SixFileList);
  });

  it('renders minimal six-file-list', async () => {
    const page = await newSpecPage({
      components: [SixFileList],
      html: `<six-file-list></six-file-list>`,
    });

    expect(page.root).toEqualHtml(`
        <six-file-list>
          <mock:shadow-root>
            <div class="six-files-list__container">
              <slot></slot>
            </div>
          </mock:shadow-root>
        </six-file-list>
    `);
  });

  it('renders six-file-list with items', async () => {
    const page = await newSpecPage({
      components: [SixFileList],
      html: `
       <six-file-list>
          <six-file-list-item identifier="id_1" name="file_1.pdf"></six-file-list-item>
          <six-file-list-item identifier="id_2" name="file_2.pdf" date="23.09.2021, 09:12"></six-file-list-item>
          <six-file-list-item
            identifier="id_3"
            name="file_3.pdf"
            date="03.12.2021, 10:22"
            size="75680"
          ></six-file-list-item>
          <six-file-list-item
            identifier="id_4"
            name="file_4.pdf"
            date="02.10.2021, 12:25"
            size="77590"
            nodownload
          ></six-file-list-item>
          <six-file-list-item
            identifier="id_5"
            name="file_5.pdf"
            date="11.07.2021, 10:32"
            size="72040"
            nodelete
          ></six-file-list-item>
        </six-file-list>`,
    });

    expect(page.root).toEqualHtml(`
        <six-file-list>
          <mock:shadow-root>
            <div class="six-files-list__container">
              <slot></slot>
            </div>
          </mock:shadow-root>
          <six-file-list-item identifier="id_1" name="file_1.pdf"></six-file-list-item>
          <six-file-list-item date="23.09.2021, 09:12" identifier="id_2" name="file_2.pdf"></six-file-list-item>
          <six-file-list-item date="03.12.2021, 10:22" identifier="id_3" name="file_3.pdf" size="75680"></six-file-list-item>
          <six-file-list-item date="02.10.2021, 12:25" identifier="id_4" name="file_4.pdf" nodownload="" size="77590"></six-file-list-item>
          <six-file-list-item date="11.07.2021, 10:32" identifier="id_5" name="file_5.pdf" nodelete="" size="72040"></six-file-list-item>
        </six-file-list>
    `);
  });
});
