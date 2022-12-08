import { newSpecPage } from '@stencil/core/testing';
import { SetAttributes } from '../set-attributes';

describe('set-attributes', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SetAttributes],
      html: `<set-attributes><slot></slot></set-attributes>`,
    });
    expect(page.root).toEqualHtml(`
      <set-attributes>
        <slot></slot>
      </set-attributes>
    `);
  });
});
