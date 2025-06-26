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

  /** Set to true to disable the breadcrumb item. */
  @Prop() disabled: boolean = false;

  /** Emitted when the breadcrumb item is clicked. */
  @Event({ eventName: 'six-click' }) sixClickEvent!: EventEmitter<EmptyPayload>;

  render() {
    return (
      <div part="base" class={{ 'six-breadcrumbs-item': true }}>
        <six-button
          part="button"
          disabled={this.disabled}
          type="link"
          href={this.href}
          target={this.target}
          size={this.size}
          class="six-breadcrumbs-item__item six-breadcrumbs-item__item--button"
        >
          <slot name="prefix" slot="prefix" />
          <slot />
          <slot name="suffix" slot="suffix" />
        </six-button>

        <span part="separator" class="six-breadcrumbs-item__separator" aria-hidden="true">
          <slot name="separator" />
        </span>
      </div>
    );
  }
}
