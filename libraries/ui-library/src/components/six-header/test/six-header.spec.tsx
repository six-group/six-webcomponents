import { newSpecPage } from '@stencil/core/testing';
import { SixHeader } from '../six-header';

describe('six-header', () => {
  it('renders', async () => {
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
             <svg height="20" viewBox="0 0 90 26" xmlns="http://www.w3.org/2000/svg">
               <title>
                 SIX
               </title>
               <g fill="#DE3919" fill-rule="nonzero">
                 <path d="m22.798 3.869c1.82-2.168 4.549-3.545 7.6-3.545h6.807v4.961h-6.807c-1.526 0-2.89.689-3.8 1.771l-12.19 14.526c-1.82 2.166-4.549 3.545-7.6 3.545h-6.808v-4.961h6.808c1.525 0 2.889-.689 3.799-1.773l12.191-14.525"></path>
                 <path d="m42.16.324h5.21v24.806h-5.21z"></path>
                 <path d="m66.743 3.869l4.195 4.999 4.195-4.999c1.819-2.168 4.549-3.545 7.6-3.545h6.806v4.961h-6.806c-1.526 0-2.89.689-3.8 1.771l-4.758 5.669 4.758 5.669c.91 1.084 2.274 1.773 3.8 1.773h6.806v4.961h-6.806c-3.051 0-5.781-1.379-7.6-3.545l-4.195-4.999-4.195 4.999c-1.82 2.166-4.55 3.545-7.6 3.545h-6.807v-4.961h6.807c1.525 0 2.889-.689 3.799-1.773l4.758-5.669-4.758-5.669c-.91-1.083-2.274-1.771-3.799-1.771h-6.807v-4.961h6.807c3.05 0 5.78 1.378 7.6 3.545"></path>
               </g>
             </svg>

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

  it('should render app switcher', async () => {
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
             <svg height="20" viewBox="0 0 90 26" xmlns="http://www.w3.org/2000/svg">
               <title>
                 SIX
               </title>
               <g fill="#DE3919" fill-rule="nonzero">
                 <path d="m22.798 3.869c1.82-2.168 4.549-3.545 7.6-3.545h6.807v4.961h-6.807c-1.526 0-2.89.689-3.8 1.771l-12.19 14.526c-1.82 2.166-4.549 3.545-7.6 3.545h-6.808v-4.961h6.808c1.525 0 2.889-.689 3.799-1.773l12.191-14.525"></path>
                 <path d="m42.16.324h5.21v24.806h-5.21z"></path>
                 <path d="m66.743 3.869l4.195 4.999 4.195-4.999c1.819-2.168 4.549-3.545 7.6-3.545h6.806v4.961h-6.806c-1.526 0-2.89.689-3.8 1.771l-4.758 5.669 4.758 5.669c.91 1.084 2.274 1.773 3.8 1.773h6.806v4.961h-6.806c-3.051 0-5.781-1.379-7.6-3.545l-4.195-4.999-4.195 4.999c-1.82 2.166-4.55 3.545-7.6 3.545h-6.807v-4.961h6.807c1.525 0 2.889-.689 3.799-1.773l4.758-5.669-4.758-5.669c-.91-1.083-2.274-1.771-3.799-1.771h-6.807v-4.961h6.807c3.05 0 5.78 1.378 7.6 3.545"></path>
               </g>
             </svg>

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
