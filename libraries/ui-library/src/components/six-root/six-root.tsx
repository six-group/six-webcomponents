import { Component, Element, h, Prop } from '@stencil/core';
import { StageType } from '../six-stage-indicator/six-stage-indicator';

/**
 * @since 1.0
 * @status stable
 *
 * @slot header - Used to define the header component.
 * @slot main - Used to define the components in the main area.
 * @slot left-sidebar - Used to define the sidebar on the left side.
 * @slot right-sidebar - Used to define the sidebar on the right side.
 * @slot footer - Used to define the footer component.
 */

@Component({
  tag: 'six-root',
  styleUrl: 'six-root.scss',
  shadow: true,
})
export class SixRoot {
  @Element() host!: HTMLSixRootElement;

  /** Defines whether the content section should be padded */
  // eslint-disable-next-line @stencil-community/ban-default-true
  @Prop() padded = true;

  /** Defines the stage of the application*/
  @Prop() stage: StageType = null;

  /** Defines the version of the application*/
  @Prop() version = '';

  render() {
    return (
      <host class="six-root">
        <header part="header">
          {this.stage && <six-stage-indicator stage={this.stage}>{this.version}</six-stage-indicator>}
          <slot name="header" />
        </header>
        <nav class="six-root__left-sidebar" part="left-sidebar">
          <slot name="left-sidebar" />
        </nav>
        <main part="main">
          <div class={{ 'six-root__container': true, 'six-root__container--padded': this.padded }} part="container">
            <slot name="main" />
          </div>
          <div class="six-root__footer">
            <slot name="footer" />
          </div>
        </main>
        <nav class="six-root__right-sidebar" part="right-sidebar">
          <slot name="right-sidebar" />
        </nav>
      </host>
    );
  }
}
