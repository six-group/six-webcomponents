import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';
import { EmptyPayload } from '../../utils/types';


@Component({
  tag: 'six-breadcrumb-item',
  styleUrl: 'six-breadcrumb-item.scss',
  shadow: true,
})
export class SixBreadcrumbItem {

  /** Name or label of the breadcrumb */
  @Prop() name: string = '';

  /** If the breadcrumb is disabled */
  @Prop() disabled: boolean = false;

  /** Emitted on click. */
  @Event({ eventName: 'sixClick' }) sixClickEvent!: EventEmitter<EmptyPayload>;

  render() {
    return (
      <host>
        <slot />
        {!this.disabled ? (<a onClick={() => this.sixClickEvent.emit()}>{this.name}</a>) : this.name}
      </host>
    );

  }

}
