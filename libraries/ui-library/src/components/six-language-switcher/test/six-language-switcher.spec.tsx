import { newSpecPage } from '@stencil/core/testing';
import { SixLanguageSwitcher } from '../six-language-switcher';

describe('SIX Language Switcher', () => {
  it('should properly render with default settings', async () => {
    // given
    const config = {
      components: [SixLanguageSwitcher],
      html: `<six-language-switcher></six-language-switcher>`,
    };

    // when
    const page = await newSpecPage(config);

    // then
    expect(page?.root?.selected).toEqual('EN');
    expect(page.root).toEqualHtml(`
    <six-language-switcher selected="EN">
      <mock:shadow-root>
        <div class="language-switcher__container" part="container">
          <div tabindex="0">
            <span class="language-switcher__label language-switcher__label--selected" part="label">
              EN
            </span>
            <span class="language-switcher__separator" part="separator">
              /
            </span>
          </div>
          <div tabindex="0">
            <span class="language-switcher__label" part="label">
              DE
            </span>
            <span class="language-switcher__separator" part="separator">
              /
            </span>
          </div>
          <div tabindex="0">
            <span class="language-switcher__label" part="label">
              ES
            </span>
          </div>
        </div>
      </mock:shadow-root>
    </six-language-switcher>
    `);
  });

  it('should allow to set custom languages', async () => {
    // given
    const config = {
      components: [SixLanguageSwitcher],
      html: `<six-language-switcher></six-language-switcher>`,
    };

    // when
    const page = await newSpecPage(config);
    if (page?.root != null) {
      page.root.languages = ['IT', 'AR', 'BG'];
    }
    await page.waitForChanges();

    // then
    expect(page?.root?.selected).toEqual('IT');
    expect(page.root).toEqualHtml(`
    <six-language-switcher selected="IT">
      <mock:shadow-root>
        <div class="language-switcher__container" part="container">
          <div tabindex="0">
            <span class="language-switcher__label language-switcher__label--selected" part="label">
              IT
            </span>
            <span class="language-switcher__separator" part="separator">
              /
            </span>
          </div>
          <div tabindex="0">
            <span class="language-switcher__label" part="label">
              AR
            </span>
            <span class="language-switcher__separator" part="separator">
              /
            </span>
          </div>
          <div tabindex="0">
            <span class="language-switcher__label" part="label">
              BG
            </span>
          </div>
        </div>
      </mock:shadow-root>
    </six-language-switcher>
    `);
  });

  it('should properly set selected language', async () => {
    // given
    const config = {
      components: [SixLanguageSwitcher],
      html: `<six-language-switcher selected="DE"></six-language-switcher>`,
    };

    // when
    const page = await newSpecPage(config);

    // then
    expect(page?.root?.selected).toEqual('DE');
    expect(page.root).toEqualHtml(`
    <six-language-switcher selected="DE">
      <mock:shadow-root>
        <div class="language-switcher__container" part="container">
          <div tabindex="0">
            <span class="language-switcher__label" part="label">
              EN
            </span>
            <span class="language-switcher__separator" part="separator">
              /
            </span>
          </div>
          <div tabindex="0">
            <span class="language-switcher__label language-switcher__label--selected" part="label">
              DE
            </span>
            <span class="language-switcher__separator" part="separator">
              /
            </span>
          </div>
          <div tabindex="0">
            <span class="language-switcher__label" part="label">
              ES
            </span>
          </div>
        </div>
      </mock:shadow-root>
    </six-language-switcher>
    `);
  });

  it('should properly set language after having been rendered', async () => {
    // given
    const config = {
      components: [SixLanguageSwitcher],
      html: `<six-language-switcher></six-language-switcher>`,
    };

    // when
    const page = await newSpecPage(config);
    if (page.root != null) {
      page.root.selected = 'DE';
    }
    await page.waitForChanges();

    // then
    expect(page?.root?.selected).toEqual('DE');
    expect(page.root).toEqualHtml(`
    <six-language-switcher selected="DE">
      <mock:shadow-root>
        <div class="language-switcher__container" part="container">
          <div tabindex="0">
            <span class="language-switcher__label" part="label">
              EN
            </span>
            <span class="language-switcher__separator" part="separator">
              /
            </span>
          </div>
          <div tabindex="0">
            <span class="language-switcher__label language-switcher__label--selected" part="label">
              DE
            </span>
            <span class="language-switcher__separator" part="separator">
              /
            </span>
          </div>
          <div tabindex="0">
            <span class="language-switcher__label" part="label">
              ES
            </span>
          </div>
        </div>
      </mock:shadow-root>
    </six-language-switcher>
    `);
  });

  it('should properly update selected language after languages have been changed', async () => {
    // given
    const config = {
      components: [SixLanguageSwitcher],
      html: `<six-language-switcher></six-language-switcher>`,
    };
    // when
    const page = await newSpecPage(config);
    if (page.root != null) {
      page.root.languages = ['IT', 'AR', 'BG'];
    }
    await page.waitForChanges();
    if (page.root != null) {
      page.root.selected = 'BG';
    }

    // then
    expect(page?.root?.selected).toEqual('BG');
  });
});
