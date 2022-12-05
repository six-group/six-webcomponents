import {newSpecPage} from '@stencil/core/testing';
import {SixErrorPage} from '../six-error-page';

describe('six-error-page', () => {
  it('should render right page for error code 403 in english', async () => {
    // given
    const config = {
      components: [SixErrorPage],
      html: `<six-error-page error-code="403" language="en"></six-error-page>`,
    };

    // when
    const page = await newSpecPage(config);

    // then
    expect(page.root).toEqualHtml(`
    <six-error-page error-code="403" language="en">
      <mock:shadow-root>
        <div part="container">
          <div class="six-error-page__icon-container" part="icon-container">
            <six-picto class="six-error-page__icon" part="icon" size="4xl">
              lock
            </six-picto>
          </div>
          <div class="six-error-page__title" part="title">
            Access Denied
          </div>
          <div class="six-error-page__description" part="description">
            <div>
              You don’t have permission to access this page.
            </div>
            <div>
              Please contact an administrator or click the SIX logo on top left.
            </div>
          </div>
        </div>
      </mock:shadow-root>
    </six-error-page>
   `);
  });

  it('should render right page for error code 403 in german', async () => {
    // given
    const config = {
      components: [SixErrorPage],
      html: `<six-error-page error-code="403" language="de"></six-error-page>`,
    };

    // when
    const page = await newSpecPage(config);

    // then
    expect(page.root).toEqualHtml(`
        <six-error-page error-code="403" language="de">
      <mock:shadow-root>
        <div part="container">
          <div class="six-error-page__icon-container" part="icon-container">
            <six-picto class="six-error-page__icon" part="icon" size="4xl">
              lock
            </six-picto>
          </div>
          <div class="six-error-page__title" part="title">
            Kein Zugriff
          </div>
          <div class="six-error-page__description" part="description">
            <div>
              Sie haben keine Zugriffsberechtigung auf diese Seite.
            </div>
            <div>
              Bitte wenden Sie sich an einen Administrator oder klicken Sie auf das SIX-Logo oben links.
            </div>
          </div>
        </div>
      </mock:shadow-root>
    </six-error-page>
   `);
  });

  it('should render right page for error code 404 in english', async () => {
    // given
    const config = {
      components: [SixErrorPage],
      html: `<six-error-page error-code="404" language="en"></six-error-page>`,
    };

    // when
    const page = await newSpecPage(config);

    // then
    expect(page.root).toEqualHtml(`
    <six-error-page error-code="404" language="en">
      <mock:shadow-root>
        <div part="container">
          <div class="six-error-page__icon-container" part="icon-container">
            <six-picto class="six-error-page__icon" part="icon" size="4xl">
              find-in-page
            </six-picto>
          </div>
          <div class="six-error-page__title" part="title">
            Not Found
          </div>
          <div class="six-error-page__description" part="description">
            <div>
              We have not found the page you requested.
            </div>
            <div>
              Please click the SIX logo on top left.
            </div>
          </div>
        </div>
      </mock:shadow-root>
    </six-error-page>
   `);
  });

  it('should render right page for error code 404 in german', async () => {
    // given
    const config = {
      components: [SixErrorPage],
      html: `<six-error-page error-code="404" language="de"></six-error-page>`,
    };

    // when
    const page = await newSpecPage(config);

    // then
    expect(page.root).toEqualHtml(`
    <six-error-page error-code="404" language="de">
      <mock:shadow-root>
        <div part="container">
          <div class="six-error-page__icon-container" part="icon-container">
            <six-picto class="six-error-page__icon" part="icon" size="4xl">
              find-in-page
            </six-picto>
          </div>
          <div class="six-error-page__title" part="title">
            Seite nicht gefunden
          </div>
          <div class="six-error-page__description" part="description">
            <div>
              Wir haben die angeforderte Seite nicht gefunden.
            </div>
            <div>
              Bitte klicken Sie auf das SIX-Logo oben links.
            </div>
          </div>
        </div>
      </mock:shadow-root>
    </six-error-page>
   `);
  });

  it('should render right page for error code 500 in english', async () => {
    // given
    const config = {
      components: [SixErrorPage],
      html: `<six-error-page error-code="500" language="en"></six-error-page>`,
    };

    // when
    const page = await newSpecPage(config);

    // then
    expect(page.root).toEqualHtml(`
    <six-error-page error-code="500" language="en">
      <mock:shadow-root>
        <div part="container">
          <div class="six-error-page__icon-container" part="icon-container">
            <six-picto class="six-error-page__icon" part="icon" size="4xl">
              sentiment-dissatisfied
            </six-picto>
          </div>
          <div class="six-error-page__title" part="title">
            Ooops!
          </div>
          <div class="six-error-page__description" part="description">
            <div>
              Sorry, we messed up! We try to fix this.
            </div>
            <div>
              Please click the SIX logo on top left.
            </div>
          </div>
        </div>
      </mock:shadow-root>
    </six-error-page>
   `);
  });

  it('should render right page for error code 500 in german', async () => {
    // given
    const config = {
      components: [SixErrorPage],
      html: `<six-error-page error-code="500" language="de"></six-error-page>`,
    };

    // when
    const page = await newSpecPage(config);

    // then
    expect(page.root).toEqualHtml(`
    <six-error-page error-code="500" language="de">
      <mock:shadow-root>
        <div part="container">
          <div class="six-error-page__icon-container" part="icon-container">
            <six-picto class="six-error-page__icon" part="icon" size="4xl">
              sentiment-dissatisfied
            </six-picto>
          </div>
          <div class="six-error-page__title" part="title">
            Ups!
          </div>
          <div class="six-error-page__description" part="description">
            <div>
              Sorry, das war unser Fehler! Wir versuchen das zu beheben.
            </div>
            <div>
              Bitte klicken Sie auf das SIX-Logo oben links.
            </div>
          </div>
        </div>
      </mock:shadow-root>
    </six-error-page>
   `);
  });

  it('should render right page for custom error', async () => {
    // given
    const config = {
      components: [SixErrorPage],
      html: `<six-error-page custom-title="my title" id="custom-error-message" custom-icon="home"></six-error-page>
        <script type="module">
          const sixErrorPage = document.getElementById('custom-error-message');
          sixErrorPage.customDescription = ['My', 'Description'];
        </script>`,
    };

    // when
    const page = await newSpecPage(config);

    // then
    expect(page.root).toEqualHtml(`
    <six-error-page custom-icon="home" custom-title="my title" id="custom-error-message">
      <mock:shadow-root>
        <div part="container">
          <div class="six-error-page__icon-container" part="icon-container">
            <six-picto class="six-error-page__icon" part="icon" size="4xl">
              home
            </six-picto>
          </div>
          <div class="six-error-page__title" part="title">
            my title
          </div>
          <div class="six-error-page__description" part="description"></div>
        </div>
      </mock:shadow-root>
    </six-error-page>
   `);
  });
});
