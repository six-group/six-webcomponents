import { Component, h } from '@stencil/core';

/**
 * @since 2.0.0
 * @status experimental
 *
 */
@Component({
  tag: 'six-file-list',
  styleUrl: 'six-file-list.scss',
  shadow: true,
})
export class SixFileList {
  render() {
    return (
      <div class="six-files-list__container">
        <slot />
      </div>
    );
  }
}
