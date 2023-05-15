import { newSpecPage } from '@stencil/core/testing';
import { SixStageIndicator } from '../six-stage-indicator';

describe('six-stage-indicator', () => {
  it('default', async () => {
    const page = await newSpecPage({
      components: [SixStageIndicator],
      html: `<six-stage-indicator></six-stage-indicator>`,
    });
    expect(page.root).toEqualHtml(`
       <six-stage-indicator>
        <mock:shadow-root>
        </mock:shadow-root>
      </six-stage-indicator>
    `);
  });

  it('prod', async () => {
    const page = await newSpecPage({
      components: [SixStageIndicator],
      html: `<six-stage-indicator stage="PROD"></six-stage-indicator>`,
    });
    expect(page.root).toEqualHtml(`
       <six-stage-indicator stage="PROD">
        <mock:shadow-root>
        </mock:shadow-root>
      </six-stage-indicator>
    `);
  });

  it('itu', async () => {
    const page = await newSpecPage({
      components: [SixStageIndicator],
      html: `<six-stage-indicator stage="ITU"></six-stage-indicator>`,
    });
    expect(page.root).toEqualHtml(`
      <six-stage-indicator stage="ITU">
        <mock:shadow-root>
        <div class=indicator--itu>
          <div class='center-content'>
            <six-icon class='align-item' size="small">
              error_outline
            </six-icon>
            <span class='align-item'>
              <slot />
            </span>
          </div>
        </div>
        </mock:shadow-root>
      </six-stage-indicator>
    `);
  });

  it('etu', async () => {
    const page = await newSpecPage({
      components: [SixStageIndicator],
      html: `<six-stage-indicator stage="ETU"></six-stage-indicator>`,
    });
    expect(page.root).toEqualHtml(`
      <six-stage-indicator stage="ETU">
        <mock:shadow-root>
        <div class=indicator--etu>
          <div class='center-content'>
            <six-icon class='align-item' size="small">
              error_outline
            </six-icon>
            <span class='align-item'>
              <slot />
            </span>
          </div>
        </div>
        </mock:shadow-root>
      </six-stage-indicator>
    `);
  });

  it('dev', async () => {
    const page = await newSpecPage({
      components: [SixStageIndicator],
      html: `<six-stage-indicator stage="DEV"></six-stage-indicator>`,
    });
    expect(page.root).toEqualHtml(`
      <six-stage-indicator stage="DEV">
        <mock:shadow-root>
        <div class=indicator--dev>
          <div class='center-content'>
            <six-icon class='align-item' size="small">
              error_outline
            </six-icon>
            <span class='align-item'>
              <slot />
            </span>
          </div>
        </div>
        </mock:shadow-root>
      </six-stage-indicator>
    `);
  });

  it('acceptance', async () => {
    const page = await newSpecPage({
      components: [SixStageIndicator],
      html: `<six-stage-indicator stage="ACCEPTANCE"></six-stage-indicator>`,
    });
    expect(page.root).toEqualHtml(`
      <six-stage-indicator stage="ACCEPTANCE">
        <mock:shadow-root>
        <div class=indicator--acceptance>
          <div class='center-content'>
            <six-icon class='align-item' size="small">
              error_outline
            </six-icon>
            <span class='align-item'>
              <slot />
            </span>
          </div>
        </div>
        </mock:shadow-root>
      </six-stage-indicator>
    `);
  });
});
