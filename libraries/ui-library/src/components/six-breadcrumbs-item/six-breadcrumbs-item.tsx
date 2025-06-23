import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';
import { EmptyPayload } from '../../utils/types';

@Component({
  tag: 'six-breadcrumbs-item',
  styleUrl: 'six-breadcrumbs-item.scss',
  shadow: true,
})
export class SixBreadcrumbsItem {
  /** Name or label of the breadcrumb */
  @Prop() name: string = '';

  /** Set to true to disable the breadcrumb item. */
  @Prop() disabled: boolean = false;

  /** Emitted on click. */
  @Event({ eventName: 'sixClick' }) sixClickEvent!: EventEmitter<EmptyPayload>;

  render() {
    return (
      <host>
        <slot />
        {!this.disabled ? <a onClick={() => this.sixClickEvent.emit()}>{this.name}</a> : this.name}
      </host>
    );
  }
}
