import { newSpecPage } from '@stencil/core/testing';
import { SixDivider } from '../six-divider';

describe('six-divider', () => {
  it('renders default six-divider with small spacing', async () => {
    const page = await newSpecPage({
      components: [SixDivider],
      html: `<six-divider></six-divider>`,
    });
    expect(page.root).toEqualHtml(`
      <six-divider>
        <mock:shadow-root>
          <hr class="divider divider--spacing-small" part="divider" style="margin-top: 24px; margin-bottom: 24px;">
        </mock:shadow-root>
      </six-divider>
    `);
  });

  it('renders six-divider with medium spacing', async () => {
    const page = await newSpecPage({
      components: [SixDivider],
      html: `<six-divider spacing="medium"></six-divider>`,
    });
    expect(page.root).toEqualHtml(`
      <six-divider spacing="medium">
        <mock:shadow-root>
          <hr class="divider divider--spacing-medium" part="divider" style="margin-top: 28px; margin-bottom: 28px;">
        </mock:shadow-root>
      </six-divider>
    `);
  });

  it('renders six-divider with large spacing', async () => {
    const page = await newSpecPage({
      components: [SixDivider],
      html: `<six-divider spacing="large"></six-divider>`,
    });
    expect(page.root).toEqualHtml(`
      <six-divider spacing="large">
        <mock:shadow-root>
          <hr class="divider divider--spacing-large" part="divider" style="margin-top: 36px; margin-bottom: 36px;">
        </mock:shadow-root>
      </six-divider>
    `);
  });

  it('applies correct CSS class for small spacing', async () => {
    const page = await newSpecPage({
      components: [SixDivider],
      html: `<six-divider spacing="small"></six-divider>`,
    });

    const hr = page.root?.shadowRoot?.querySelector('hr');
    expect(hr?.classList.contains('divider--spacing-small')).toBe(true);
  });

  it('applies correct CSS class for medium spacing', async () => {
    const page = await newSpecPage({
      components: [SixDivider],
      html: `<six-divider spacing="medium"></six-divider>`,
    });

    const hr = page.root?.shadowRoot?.querySelector('hr');
    expect(hr?.classList.contains('divider--spacing-medium')).toBe(true);
  });

  it('applies correct CSS class for large spacing', async () => {
    const page = await newSpecPage({
      components: [SixDivider],
      html: `<six-divider spacing="large"></six-divider>`,
    });

    const hr = page.root?.shadowRoot?.querySelector('hr');
    expect(hr?.classList.contains('divider--spacing-large')).toBe(true);
  });

  it('calculates correct spacing values for small', async () => {
    const page = await newSpecPage({
      components: [SixDivider],
      html: `<six-divider spacing="small"></six-divider>`,
    });

    const hr = page.root?.shadowRoot?.querySelector('hr');
    expect(hr?.style.marginTop).toBe('24px');
    expect(hr?.style.marginBottom).toBe('24px');
  });

  it('calculates correct spacing values for medium', async () => {
    const page = await newSpecPage({
      components: [SixDivider],
      html: `<six-divider spacing="medium"></six-divider>`,
    });

    const hr = page.root?.shadowRoot?.querySelector('hr');
    expect(hr?.style.marginTop).toBe('28px');
    expect(hr?.style.marginBottom).toBe('28px');
  });

  it('calculates correct spacing values for large', async () => {
    const page = await newSpecPage({
      components: [SixDivider],
      html: `<six-divider spacing="large"></six-divider>`,
    });

    const hr = page.root?.shadowRoot?.querySelector('hr');
    expect(hr?.style.marginTop).toBe('36px');
    expect(hr?.style.marginBottom).toBe('36px');
  });

  it('has correct part attribute for styling', async () => {
    const page = await newSpecPage({
      components: [SixDivider],
      html: `<six-divider></six-divider>`,
    });

    const hr = page.root?.shadowRoot?.querySelector('hr');
    expect(hr?.getAttribute('part')).toBe('divider');
  });
});
