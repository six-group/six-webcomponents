import { Component, Element, h, Prop } from '@stencil/core';

/**
 * Breadcrumb items are used inside breadcrumbs to represent different links.
 *
 * @since 5.0
 * @status beta
 *
 * @slot - The breadcrumb item’s label.
 * @slot prefix - An optional prefix, usually an icon or icon button.
 * @slot suffix - An optional suffix, usually an icon or icon button.
 * @slot separator - The separator to use for the breadcrumb item. This will only change the separator for this item. If you want to change it for all items in the group, set the separator on six-breadcrumbs instead.
 *
 * @part base - The component's base wrapper.
 * @part button - The button that renders the item
 * @part separator - The separator
 */
@Component({
  tag: 'six-breadcrumbs-item',
  styleUrl: 'six-breadcrumbs-item.scss',
  shadow: true,
})
export class SixBreadcrumbsItem {
  @Element() host!: HTMLSixBreadcrumbsItemElement;

  /** When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`. */
  @Prop() href?: string;

  /** Tells the browser where to open the link. Only used when `href` is set. */
  @Prop() target?: '_blank' | '_parent' | '_self' | '_top';

  /** The breadcrumbs item size. */
  @Prop({ reflect: true }) size: 'small' | 'medium' | 'large' = 'medium';

  /** Set to true to readonly the breadcrumb item. */
  @Prop({ attribute: 'read-only', reflect: true }) readonly: boolean = false;

  render() {
    return (
      <div part="base">
        <six-button
          part="button"
          type="link"
          class={{ 'breadcrumb-item-readonly': this.readonly }}
          href={this.readonly ? undefined : this.href}
          tabindex={this.readonly ? -1 : undefined}
          target={this.target}
          size={this.size}>
          <slot name="prefix" slot="prefix" />
          <slot />
          <slot name="suffix" slot="suffix" />
        </six-button>
        <span part="separator" class="breadcrumb-item__separator" aria-hidden="true">
          <slot name="separator" />
        </span>
      </div>
    );
  }
}
