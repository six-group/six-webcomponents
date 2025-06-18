import { Component, h, Prop } from '@stencil/core';
import { SixBreadcrumbsData } from './types';


@Component({
  tag: 'six-breadcrumbs',
  styleUrl: 'six-breadcrumbs.scss',
  shadow: true,
})
export class SixBreadcrumbs {

  /** Data for the breadcrumbs */
  @Prop() data: SixBreadcrumbsData = [];

  render() {
    return (
      <host class={{ 'six-breadcrumbs': true }}>
        <div part="base">
          <slot />
          {this.data && this.data.map(({ name, disabled, onSixClick }) =>
            <six-breadcrumbs-item name={name} disabled={disabled} onSixClick={onSixClick} />,
          )}
        </div>
      </host>)
      ;
  }

}
