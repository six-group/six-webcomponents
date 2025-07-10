import { Component, Element, Event, EventEmitter, h, Prop } from '@stencil/core';
import { EmptyPayload } from '../../utils/types';

@Component({
  tag: 'six-breadcrumbs-item',
  styleUrl: 'six-breadcrumbs-item.scss',
  shadow: true,
})
export class SixBreadcrumbsItem {
  @Element() el!: HTMLSixBreadcrumbsItemElement;

  /** When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`. */
  @Prop() href?: string;

  /** Tells the browser where to open the link. Only used when `href` is set. */
  @Prop() target?: '_blank' | '_parent' | '_self' | '_top';

  /** The button's size. */
  @Prop({ reflect: true }) size: 'small' | 'medium' | 'large' = 'medium';

  /** Set to true to readonly the breadcrumb item. */
  @Prop({ attribute: 'read-only', reflect: true }) readonly: boolean = false;

  /** Emitted when the breadcrumb item is clicked. */
  @Event({ eventName: 'six-click' }) sixClickEvent!: EventEmitter<EmptyPayload>;

  private handleClick() {
    if (!!this.readonly) {
      this.sixClickEvent.emit();
    }
  }

  render() {
    return (
      <div part="base">
        <six-button
          part="button"
          type="link"
          href={this.readonly ? undefined : this.href}
          target={this.target}
          size={this.size}
          onClick={this.handleClick}
        >
          <slot name="prefix" slot="prefix" />
          <slot />
          <slot name="suffix" slot="suffix" />
        </six-button>
        <span part="separator" aria-hidden="true">
          <slot name="separator" />
        </span>
      </div>
    );
  }
}
