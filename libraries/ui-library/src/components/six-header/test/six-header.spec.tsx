import { newSpecPage } from '@stencil/core/testing';
import { SixHeader } from '../six-header';

describe('six-header', () => {
  xit('renders', async () => {
    const page = await newSpecPage({
      components: [SixHeader],
      html: `<six-header></six-header>`,
    });
    expect(page.root).toEqualHtml(`
      <six-header>
        <mock:shadow-root>
          <header class="six-header">
            <section class="six-header__menu">
              <six-icon-button name="menu"></six-icon-button>
            </section>
            <section class="six-header__logo">
              <img alt="SIX" height="20" src="/assets/six-logo.svg">
            </section>
            <section class="six-header__placeholder"></section>
            <section class="six-header__custom">
              <slot></slot>
            </section>
          </header>
          <div class="six-header__search-field">
            <slot name="search-field"></slot>
          </div>
        </mock:shadow-root>
      </six-header>
    `);
  });

  it('should render custom logo ', async () => {
    // given
    const html = `<six-header><div slot="logo">custom logo</div></six-header>`;

    // when
    const page = await newSpecPage({
      components: [SixHeader],
      html: html,
    });

    // then
    expect(page.root).toEqualHtml(`
      <six-header>
        <mock:shadow-root>
          <header class="six-header">
            <section class="six-header__menu">
              <six-icon-button name="menu"></six-icon-button>
            </section>
            <section>
               <slot name="logo"></slot>
            </section>
            <section class="six-header__placeholder"></section>
            <section class="six-header__custom">
              <slot></slot>
            </section>
          </header>
          <div class="six-header__search-field">
            <slot name="search-field"></slot>
          </div>
        </mock:shadow-root>
          <div slot="logo">
            custom logo
          </div>
      </six-header>
    `);
  });

  xit('should render app switcher', async () => {
    // given
    const html = `<six-header>
                    <six-menu slot="app-switcher-menu">
                      <six-menu-item checked="checked">Custody</six-menu-item>
                      <six-menu-item>Swiss Interbank Clearing</six-menu-item>
                    </six-menu>
                  </six-header>`;

    // when
    const page = await newSpecPage({
      components: [SixHeader],
      html: html,
    });

    // then
    expect(page.root).toEqualHtml(`
      <six-header>
        <mock:shadow-root>
          <header class="six-header">
            <section class="six-header__menu">
              <six-icon-button name="menu"></six-icon-button>
            </section>
            <section class="six-header__logo">
                <img alt="SIX" height="20" src="/assets/six-logo.svg">
            </section>
            <section class="six-header__placeholder"></section>
            <section class="six-header__custom">
              <slot></slot>
            </section>
            <section class="six-header__app-switcher">
                <a class="six-header__selected-app">Custody</a>
                <six-dropdown distance="13" placement="bottom-end" skidding="20">
                  <six-icon-button name="apps" slot="trigger"></six-icon-button>
                  <slot name="app-switcher-menu"></slot>
               </six-dropdown>
           </section>
          </header>
          <div class="six-header__search-field">
            <slot name="search-field"></slot>
          </div>
        </mock:shadow-root>
        <six-menu slot="app-switcher-menu">
            <six-menu-item checked="checked">Custody</six-menu-item>
            <six-menu-item>Swiss Interbank Clearing</six-menu-item>
        </six-menu>
      </six-header>
    `);
  });
});
