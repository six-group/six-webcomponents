import { Component, Element, Event, EventEmitter, h, Prop, State, Watch } from '@stencil/core';
import { StageType } from '../six-stage-indicator/six-stage-indicator';

export interface SixRootCollapsedPayload {
  collapsed: boolean;
}

/**
 * @since 1.0
 * @status stable
 *
 * @slot header - Used to define the header component.
 * @slot main - Used to define the components in the main area.
 * @slot left-sidebar - Used to define the side bar on the left side.
 * @slot right-sidebar - Used to define the side bar on the right side.
 * @slot footer - Used to define the footer component.
 */

@Component({
  tag: 'six-root',
  styleUrl: 'six-root.scss',
  shadow: true,
})
export class SixRoot {
  @Element() host: HTMLSixRootElement;

  /** Breakpoint for smaller screens when the right sidebar is collapsed by default. */
  @Prop() breakpoint = 1024;

  /** Defines whether the content section should be padded */
  @Prop() padded = true;

  /** Defines the stage of the application*/
  @Prop() stage: StageType = null;

  /** Defines the version of the application*/
  @Prop() version = '';

  /** Emitted when display size is updated. */
  @Event({ eventName: 'six-root-collapsed' }) collapsedEvent: EventEmitter<SixRootCollapsedPayload>;

  @State() collapse: boolean;

  resizeObserver = new ResizeObserver(([host]) => {
    const { width } = host.contentRect;
    this.collapse = width < this.breakpoint;
  });

  @Watch('collapse')
  handleCollapsed(collapsed: boolean) {
    this.collapsedEvent.emit({ collapsed });
  }

  componentWillLoad() {
    this.resizeObserver.observe(this.host);
  }

  disconnectedCallback() {
    this.resizeObserver.disconnect();
  }

  render() {
    return (
      <host class="six-root">
        <header part="header">
          {this.stage && <six-stage-indicator stage={this.stage}>{this.version}</six-stage-indicator>}
          <slot name="header" />
        </header>
        <nav class="six-root__left-sidebar" part="left-sidebar">
          <set-attributes value={{ open: !this.collapse }}>
            <slot name="left-sidebar" />
          </set-attributes>
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
